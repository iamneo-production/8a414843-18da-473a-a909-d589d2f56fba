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

    @Lazy
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    UserService userService;

    @PostMapping("/api/auth/register")
    public ResponseEntity<?> registerUser(@RequestBody @Valid User newUser, BindingResult result){
        HashMap<String,String> errMap=new HashMap<>();
        if(userService.checkuserNameExists(newUser.getEmail())) {
            errMap.put(newUser.getEmail(),"User Already Exist");
            return new ResponseEntity<>(errMap, HttpStatus.BAD_REQUEST);
        }
        if(result.hasErrors()){
            for(FieldError error:result.getFieldErrors()){
                errMap.put(error.getField(),error.getDefaultMessage());
                return new ResponseEntity<>(errMap,HttpStatus.BAD_REQUEST);
            }
        }
        if (userService.createUser((newUser))) {

            List<String> prev2 = new ArrayList<>();
            Map<Object, Object> temp = new HashMap<>();
            List<String> prev1 = new ArrayList<>();
            List<String> prev3 = new ArrayList<>();


            return new ResponseEntity<>("User Created Successfully",HttpStatus.ACCEPTED);
        } else {
            return new ResponseEntity<>("Catch Error",HttpStatus.BAD_REQUEST);
        }

    }


    @PostMapping("/api/auth/login")
    public ResponseEntity<?> loginUser(@RequestBody @Valid UserLoginDto loginDetails , BindingResult result) {

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

        if (userService.checkuserNameExists((loginDetails.getEmail()))) {
            if (userService.verifyUser(loginDetails.getEmail(), loginDetails.getPassword())) {
                Optional<User> user = userService.getIndividualUser(loginDetails.getEmail());
                String token = userService.generateToken(loginDetails.getEmail(), loginDetails.getPassword());
                resMap.put("token",token);
                resMap.put("data", user);
                return new ResponseEntity<Object>(resMap, HttpStatus.ACCEPTED);
            }

        }

        return null;
    }

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
    /*@GetMapping("/api/auth/users")
    public ResponseEntity<?> getAllUsers() {
        try {
            List<User> users = userService.getAllUser();
            List<User> userDtos = new ArrayList<>();
            for (User user : users) {
                UserDto userDto = new UserDto(user);
                userDto.setProfileImage(getProfileImage(user.getProfileImage()).getBytes());
                userDtos.add(user);
            }
            return ResponseEntity.ok(new BaseResponseDto("Success", userDtos));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something Went Wrong");
        }
    }*/
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

    /* @GetMapping("/api/auth/users")
    public ResponseEntity<List<UserDto>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        List<UserDto> userDtos = new ArrayList<>();
        for (User user : users) {
            UserDto userDto = new UserDto(user);
            userDtos.add(userDto);
        }
        return ResponseEntity.ok(userDtos);
    } */

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

    /*@PutMapping("/api/auth/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") Long id, @RequestBody User user) {
        User updatedUser = userService.updateUser(id, user);
        if (updatedUser != null) {
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }*/

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

}
