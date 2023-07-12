package com.example.springapp.controller;

import com.example.springapp.dto.UserLoginDto;
import com.example.springapp.model.User;
import com.example.springapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.*;

@RestController
public class UserController {


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

//    @PostMapping("/api/auth/login")
//    public BaseResponseDto loginUser(@RequestBody UserLoginDto loginDetails){
//        if(userService.checkuserNameExists((loginDetails.getEmail()))){
//            if(userService.verifyUser(loginDetails.getEmail(),loginDetails.getPassword())){
//                Optional<User> user= userService.getIndividualUser(loginDetails.getEmail());
//                String token=userService.generateToken(loginDetails.getEmail(),loginDetails.getPassword());
//                Map<Object,Object> temp=new HashMap<>();
//                temp.put("token",token);
//                temp.put("data",user);
//                return new BaseResponseDto("Success",temp);
//            }
//            else{
//                return new BaseResponseDto("Password Invalid");
//            }
//        }
//        else{
//            return new BaseResponseDto("User Not Exists");
//        }
//    }


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


    @GetMapping("/api/patient/list")
    public String hospitalLists(){
        return "List of Patients";
    }
}
