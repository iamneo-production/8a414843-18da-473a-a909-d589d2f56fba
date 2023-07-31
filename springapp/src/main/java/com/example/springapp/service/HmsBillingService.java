package com.example.springapp.service;

import com.example.springapp.model.HmsBilling;
import com.example.springapp.repository.HmsBillingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HmsBillingService {

    @Autowired
    private HmsBillingRepository hmsBillingRepository;

    public HmsBilling createBilling(HmsBilling billing) {
        return hmsBillingRepository.save(billing);
    }

    public List<HmsBilling> getAllBiilling(){
        return hmsBillingRepository.findAll();
    }

}
