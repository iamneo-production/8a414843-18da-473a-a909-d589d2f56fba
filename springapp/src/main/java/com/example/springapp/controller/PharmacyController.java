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

import com.springapp.hmsapp.model.Pharmacy;
import com.springapp.hmsapp.service.PharmacyService;

@Controller
public class PharmacyController {
	
	@Autowired
	private PharmacyService pharmacyService;

    // Endpoint to create a new pharmacy record
    @PostMapping("/pharmacy")
    public ResponseEntity<Pharmacy> createPharmacyRecord(@RequestBody Pharmacy pharmacy) {
        Pharmacy newPharmacyRecord = pharmacyService.createPharmacyRecord(pharmacy);
        return ResponseEntity.status(HttpStatus.CREATED).body(newPharmacyRecord);
    }

    // Endpoint to update an existing pharmacy record
    @PutMapping("/pharmacy")
    public ResponseEntity<Pharmacy> updatePharmacyRecord(@RequestBody Pharmacy pharmacy) {
        Pharmacy updatedPharmacyRecord = pharmacyService.updatePharmacyRecord(pharmacy);
        return ResponseEntity.ok(updatedPharmacyRecord);
    }

    // Endpoint to delete a pharmacy record
    @DeleteMapping("/pharmacy/{id}")
    public ResponseEntity<String> deletePharmacyRecord(@PathVariable int id) {
        pharmacyService.deletePharmacyRecord(id);
        return ResponseEntity.ok("Deleted Successfully");
    }

    // Endpoint to retrieve all pharmacy records
    @GetMapping("/pharmacy")
    public ResponseEntity<List<Pharmacy>> getAllPharmacy() {
        List<Pharmacy> pharmacyRecords = pharmacyService.getAllPharmacy();
        return ResponseEntity.ok(pharmacyRecords);
    }

    // Endpoint to retrieve a pharmacy record by ID
    @GetMapping("/pharmacy/{id}")
    public ResponseEntity<Pharmacy> getPharmacyRecordById(@PathVariable int id) {
        Pharmacy pharmacyRecord = pharmacyService.getPharmacyRecordById(id);
        return ResponseEntity.ok(pharmacyRecord);
    }

}
