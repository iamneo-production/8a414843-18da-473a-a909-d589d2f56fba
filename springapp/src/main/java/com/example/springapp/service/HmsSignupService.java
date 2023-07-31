package com.example.springapp.service;

import com.example.springapp.model.HmsSignup;

import java.util.List;

public interface HmsSignupService {
    HmsSignup createHmsSignup(HmsSignup hmsSignup);
    List<HmsSignup> getAllHmsSignUps();
    HmsSignup updateHmsSignup(Long id, HmsSignup hmsSignup);
    HmsSignup getSignUpById(Long id);


}
