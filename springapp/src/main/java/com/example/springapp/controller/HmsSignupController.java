package com.example.springapp.controller;

import com.example.springapp.model.HmsSignup;
import com.example.springapp.service.HmsSignupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/signup")
public class HmsSignupController {

    private final HmsSignupService hmsSignupService;

@Autowired
    public HmsSignupController(HmsSignupService hmsSignupService) {
        this.hmsSignupService = hmsSignupService;
    }

    @PostMapping
    @CrossOrigin(origins = "http://localhost:8081")
    public ResponseEntity<HmsSignup> createHmsSignup(@Valid @RequestBody HmsSignup hmsSignup){
    HmsSignup createdSignup = hmsSignupService.createHmsSignup(hmsSignup);
        return ResponseEntity.ok(createdSignup);
    }

    @CrossOrigin(origins = "http://localhost:8081")
    @GetMapping
    public List<HmsSignup> getAllSignUps() {
        return hmsSignupService.getAllHmsSignUps();
    }
    @PutMapping("/{id}")
    public ResponseEntity<HmsSignup> updateHmsSignup(@PathVariable("id") Long id, @RequestBody HmsSignup hmsSignup) {
        HmsSignup updatedSignUp = hmsSignupService.updateHmsSignup(id,hmsSignup);
        if (updatedSignUp != null) {
            return ResponseEntity.ok(updatedSignUp);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @CrossOrigin(origins = "http://localhost:8081")
    @GetMapping("/{id}")
    public ResponseEntity<HmsSignup> getHmsSignupById(@PathVariable("id") Long id) {
        HmsSignup signUp = hmsSignupService.getSignUpById(id);
        if (signUp != null) {
            return ResponseEntity.ok(signUp);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
