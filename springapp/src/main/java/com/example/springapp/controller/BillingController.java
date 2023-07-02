package com.example.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.springapp.hmsapp.model.Billing;
import com.springapp.hmsapp.service.BillingService;

@Controller
public class BillingController {
	
	@Autowired
	private BillingService billingService;
	

    // Endpoint to create a new billing record
    @PostMapping("/billing")
    public ResponseEntity<Billing> createBilling(@RequestBody Billing billing) {
        Billing newBilling = billingService.createBilling(billing);
        return ResponseEntity.status(HttpStatus.CREATED).body(newBilling);
    }

    // Endpoint to update an existing billing record
    @PutMapping("/billing")
    public ResponseEntity<Billing> updateBilling(@RequestBody Billing billing) {
        Billing updatedBilling = billingService.updateBilling(billing);
        return ResponseEntity.ok(updatedBilling);
    }

    // Endpoint to delete a billing record
    @DeleteMapping("/billing/{id}")
    public ResponseEntity<String> deleteBilling(@PathVariable int id) {
        billingService.deleteBilling(id);
        return ResponseEntity.ok("Deleted Successfully");
    }

    // Endpoint to retrieve all billing records
    @GetMapping("/billing")
    public ResponseEntity<List<Billing>> getAllBilling() {
        List<Billing> billingRecords = billingService.getAllBilling();
        return ResponseEntity.ok(billingRecords);
    }

    // Endpoint to retrieve a billing record by ID
    @GetMapping("/billing/{id}")
    public ResponseEntity<Billing> getBillingRecordById(@PathVariable int id) {
        Billing billingRecord = billingService.getBillingRecordById(id);
        return ResponseEntity.ok(billingRecord);
    }

}
