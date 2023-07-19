package com.example.springapp.controller;

import com.example.springapp.dto.UserDto;
import com.example.springapp.dto.BaseResponseDto;
import com.example.springapp.dto.UserLoginDto;
import com.example.springapp.model.User;
import com.example.springapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.*;

@RestController
public class UserController {

    private Map<String, String> userOtpMap = new HashMap<>();
    @Lazy
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    UserService userService;

    /*@PostMapping("/api/auth/register")
    public ResponseEntity<?> registerUser(@RequestBody @Valid User newUser, BindingResult result) {
        HashMap<String, String> errMap = new HashMap<>();
        if (userService.checkuserNameExists(newUser.getEmail())) {
            errMap.put(newUser.getEmail(), "User Already Exist");
            return new ResponseEntity<>(errMap, HttpStatus.BAD_REQUEST);
        }
        if (result.hasErrors()) {
            for (FieldError error : result.getFieldErrors()) {
                errMap.put(error.getField(), error.getDefaultMessage());
                return new ResponseEntity<>(errMap, HttpStatus.BAD_REQUEST);
            }
        }

        User createdUser = userService.createUser(newUser);

        if (createdUser != null) {
            //Send email with password
            return ResponseEntity.ok(new BaseResponseDto("Success", createdUser));
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error Creating User");
        }
    }*/
    @PostMapping("/api/auth/register")
    public ResponseEntity<?> registerUser(@RequestBody @Valid User newUser, BindingResult result) {
        HashMap<String, String> errMap = new HashMap<>();
        if (userService.checkuserNameExists(newUser.getEmail())) {
            errMap.put(newUser.getEmail(), "User Already Exists");
            return new ResponseEntity<>(errMap, HttpStatus.BAD_REQUEST);
        }
        if (result.hasErrors()) {
            for (FieldError error : result.getFieldErrors()) {
                errMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<>(errMap, HttpStatus.BAD_REQUEST);
        }

        User createdUser;
        if (newUser.getRoles().contains("ROLE_PATIENT")) {
            createdUser = userService.createUser(newUser);

            userService.sendEmailToPatient(createdUser.getEmail());
        } else {

            String randomPassword = userService.generateRandomPassword();
            newUser.setPassword(randomPassword);
            createdUser = userService.createUser(newUser);

            userService.sendEmailWithPassword(createdUser.getEmail(), randomPassword, createdUser.getRoles());
        }

        if (createdUser != null) {
            return ResponseEntity.ok(new BaseResponseDto("Success", createdUser));
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error Creating User");
        }
    }


    @PostMapping("/api/auth/login")
    public ResponseEntity<?> loginUser(@RequestBody @Valid UserLoginDto loginDetails, BindingResult result) {
        HashMap<String, String> errorMap = new HashMap<>();
        HashMap<String, Object> resMap = new HashMap<>();

        if (result.hasErrors()) {
            for (FieldError error : result.getFieldErrors()) {
                var key = error.getField();
                var value = error.getDefaultMessage();
                errorMap.put(key, value);
            }

            return new ResponseEntity<>(errorMap, HttpStatus.BAD_REQUEST);
        }

        if (userService.checkuserNameExists(loginDetails.getEmail())) {
            if (userService.verifyUser(loginDetails.getEmail(), loginDetails.getPassword())) {
                Optional<User> user = userService.getIndividualUser(loginDetails.getEmail());
                String token = userService.generateToken(loginDetails.getEmail(), loginDetails.getPassword());
                resMap.put("token", token);
                resMap.put("data", user);
                return new ResponseEntity<>(resMap, HttpStatus.ACCEPTED);
            }
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials or role mismatch");
    }
    /*@PostMapping("/api/auth/login")
    public ResponseEntity<?> loginUser(@RequestBody @Valid UserLoginDto loginDetails, BindingResult result) {
        HashMap<String, String> errorMap = new HashMap<>();
        HashMap<String, Object> resMap = new HashMap<>();

        if (result.hasErrors()) {
            for (FieldError error : result.getFieldErrors()) {
                var key = error.getField();
                var value = error.getDefaultMessage();
                errorMap.put(key, value);
            }

            return new ResponseEntity<>(errorMap, HttpStatus.BAD_REQUEST);
        }

        if (userService.checkuserNameExists(loginDetails.getEmail())) {
            if (userService.verifyUser(loginDetails.getEmail(), loginDetails.getPassword())) {
                Optional<User> user = userService.getIndividualUser(loginDetails.getEmail());
                String token = userService.generateToken(loginDetails.getEmail(), loginDetails.getPassword());
                resMap.put("token", token);
                resMap.put("data", user);
                return new ResponseEntity<>(resMap, HttpStatus.ACCEPTED);
            }
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials or role mismatch");
    }*/

    @PostMapping("/api/role-list")
    public ResponseEntity<?> getUserByRole(@RequestBody Map<String, String> requestBody){

        try {
            String role = requestBody.get("role");
            List<User> data = userService.getUserByRole(role);
            return ResponseEntity.ok(new BaseResponseDto("Success",data));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new BaseResponseDto("Something went Wrong"));
        }

    }

    @GetMapping("/api/auth/users")
    public ResponseEntity<?>  getAllUsers(){
        try {
            List<User> data = userService.getAllUser();
            return ResponseEntity.ok(new BaseResponseDto("Success",data));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something Went Wrong");
        }
    }
    private String getProfileImage(byte[] imageData) {
        if (imageData != null && imageData.length > 0) {
            String base64Image = Base64.getEncoder().encodeToString(imageData);
            return "data:image/png;base64," + base64Image;
        }
        return null;
    }

    @GetMapping("/api/patient/list")
    public String hospitalLists(){
        return "List of Patients";
    }


    @GetMapping("/api/auth/users/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable("id") Long id) {
        Optional<User> user = userService.getUserById(id);
        if (user.isPresent()) {
            UserDto userDto = new UserDto(user.get());
            return ResponseEntity.ok(userDto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/api/auth/users/{id}")
    public ResponseEntity<String> deleteUserById(@PathVariable("id") Long id) {
        boolean deleted = userService.deleteUserById(id);
        if (deleted) {
            return ResponseEntity.ok("User deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @PutMapping("/api/auth/users/{id}")
    public ResponseEntity<UserDto> updateUser(@PathVariable("id") Long id, @RequestBody UserDto userDto) {
        User updatedUser = userService.updateUser(id, userDto);
        if (updatedUser != null) {
            UserDto updatedUserDto = new UserDto(updatedUser);
            return ResponseEntity.ok(updatedUserDto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/api/auth/profile/{id}")
    public ResponseEntity<String> updateProfileImage(@PathVariable("id") Long id, @RequestParam("profileImage") MultipartFile profileImage) {
        User updatedUser = userService.updateUserProfileImage(id, profileImage);
        if (updatedUser != null) {
            return ResponseEntity.ok("Profile image updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/api/auth/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody @Valid User user, BindingResult result) {
        HashMap<String, String> errMap = new HashMap<>();

        if (result.hasErrors()) {
            for (FieldError error : result.getFieldErrors()) {
                errMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<>(errMap, HttpStatus.BAD_REQUEST);
        }
        // Check if the user exists
        if (userService.checkuserNameExists(user.getEmail())) {
            // the Password matches the user's current password
            if (userService.verifyUser(user.getEmail(), user.getPassword())) {
                // Update the user's password with the new password
                boolean passwordResetSuccessful = userService.resetPassword(user.getEmail(), user.getNewPassword());

                if (passwordResetSuccessful) {

                    userService.sendEmailResetPassword(user.getEmail(), user.getNewPassword());
                    return new  ResponseEntity<>("Password has been Successfully reset",HttpStatus.ACCEPTED);
                } else {
                    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error resetting password");
                }
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid password");
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email");
        }
    }
    @PostMapping("/api/auth/forget-password")
    public ResponseEntity<?> sendForgetPasswordEmail(@RequestBody Map<String, String> requestBody) {
        String email = requestBody.get("email");

        if (userService.checkuserNameExists(email)) {
            String otp = userService.generateRandomOTP();
            userService.sendOTPEmail(email, otp);

            // hash map is used to store the otp
            userOtpMap.put(email, otp);

            return new ResponseEntity<>("OTP sent successfully",HttpStatus.ACCEPTED);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Email not found");
        }
    }
    @PutMapping("/api/auth/reset-password-with-otp")
    public ResponseEntity<?> resetPasswordWithOTP(@RequestBody Map<String, String> requestBody) {
        String email = requestBody.get("email");
        String otp = requestBody.get("OTP");
        String newPassword = requestBody.get("newPassword");


        String storedOTP = userOtpMap.get(email);

        if (storedOTP != null && storedOTP.equals(otp)) {

            boolean passwordResetSuccessful = userService.resetPassword(email, newPassword);

            if (passwordResetSuccessful) {

                userOtpMap.remove(email);
                return new ResponseEntity<>("Password reset successfully",HttpStatus.ACCEPTED);
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error resetting password");
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid OTP");
        }
    }
}
/*if (userService.createUser((newUser))) {
//
//            List<String> prev2 = new ArrayList<>();
//            Map<Object, Object> temp = new HashMap<>();
//            List<String> prev1 = new ArrayList<>();
//            List<String> prev3 = new ArrayList<>();
//
//
//            return new ResponseEntity<>("User Created Successfully",HttpStatus.ACCEPTED);
//        } else {
//            return new ResponseEntity<>("Catch Error",HttpStatus.BAD_REQUEST);
//        }*/