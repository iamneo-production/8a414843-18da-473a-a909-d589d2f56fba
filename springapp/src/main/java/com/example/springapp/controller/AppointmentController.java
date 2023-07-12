package com.example.springapp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.List;

@RestController
public class AppointmentController{
    @GetMapping("/appointment")
    public ResponseEntity<List<String>> getAllAccount(){
        List<String> accounts = new ArrayList<>();
        return ResponseEntity.ok(accounts);
    }
}