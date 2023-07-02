package com.example.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.common.ResourceNotFoundException;
import com.example.springapp.model.Billing;
import com.example.springapp.repository.BillingRepository;

@Service
public class BillingService {
	
	@Autowired
	private BillingRepository billingRepository;
	
	public Billing createBilling(Billing billing) {
        return billingRepository.save(billing);
    }

    public Billing updateBilling(Billing billing) {
        if (billingRepository.existsById(billing.getId())) {
            billing.setId(billing.getId());
            return billingRepository.save(billing);
        } else {
            throw new ResourceNotFoundException("Billing record not found with ID: " + billing.getId());
        }
    }

    public void deleteBilling(int id) {
        if (billingRepository.existsById(id)) {
            billingRepository.deleteById(id);
        } else {
            throw new ResourceNotFoundException("Billing record not found with ID: " + id);
        }
    }

    public List<Billing> getAllBilling() {
        return billingRepository.findAll();
    }

    public Billing getBillingRecordById(int id) {
        return billingRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Billing record not found with ID: " + id));
    }

}
