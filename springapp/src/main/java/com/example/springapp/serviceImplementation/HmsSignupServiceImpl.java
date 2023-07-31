package com.example.springapp.serviceImplementation;

import com.example.springapp.exception.EntityNotFoundException;
import com.example.springapp.model.HmsSignup;
import com.example.springapp.repository.HmsSignupRepository;
import com.example.springapp.service.HmsSignupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HmsSignupServiceImpl implements HmsSignupService {
    private final HmsSignupRepository hmsSignupRepository;

    @Autowired
    public HmsSignupServiceImpl(HmsSignupRepository hmsSignupRepository) {
        this.hmsSignupRepository = hmsSignupRepository;
    }

    @Override
    public HmsSignup createHmsSignup(HmsSignup hmsSignup) {
        return hmsSignupRepository.save(hmsSignup) ;
    }

    @Override
    public List<HmsSignup> getAllHmsSignUps() {
        return hmsSignupRepository.findAll();
    }

    @Override
    public HmsSignup getSignUpById(Long id) {
        return hmsSignupRepository.findById(id).orElse(null);
    }
    @Override
    public HmsSignup updateHmsSignup(Long id, HmsSignup hmsSignup) {
        HmsSignup existingSignUp = hmsSignupRepository.findById(id).orElseThrow(()->new EntityNotFoundException(id));
        if (existingSignUp != null) {
            // Update the fields of existingSignUp with the values from signUp
            existingSignUp.setFirstName(hmsSignup.getFirstName());
            existingSignUp.setLastName(hmsSignup.getLastName());
            existingSignUp.setEmail(hmsSignup.getEmail());
            existingSignUp.setPassword(hmsSignup.getPassword());
            existingSignUp.setNic(hmsSignup.getNic());
            existingSignUp.setGender(hmsSignup.getGender());
            existingSignUp.setAddress(hmsSignup.getAddress());
            existingSignUp.setMobileNumber(hmsSignup.getMobileNumber());
            existingSignUp.setDateOfBirth(hmsSignup.getDateOfBirth());

            return hmsSignupRepository.save(existingSignUp);
        }
        return null;
    }
}
