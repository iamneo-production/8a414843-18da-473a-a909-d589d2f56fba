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

import com.example.springapp.model.MedicalRecord;
import com.example.springapp.service.MedicalRecordService;

@Controller
public class MedicalRecordController {
	
	@Autowired
	private MedicalRecordService medicalRecordService;
	
	
	// Endpoint to create a new medical record
    @PostMapping("/medical-records")
    public ResponseEntity<MedicalRecord> createMedicalRecord(@RequestBody MedicalRecord medicalRecord) {
        MedicalRecord newMedicalRecord = medicalRecordService.createMedicalRecord(medicalRecord);
        return ResponseEntity.status(HttpStatus.CREATED).body(newMedicalRecord);
    }

    // Endpoint to update an existing medical record
    @PutMapping("/medical-records")
    public ResponseEntity<MedicalRecord> updateMedicalRecord(@RequestBody MedicalRecord medicalRecord) {
        MedicalRecord updatedMedicalRecord = medicalRecordService.updateMedicalRecord(medicalRecord);
        return ResponseEntity.ok(updatedMedicalRecord);
    }

    // Endpoint to delete a medical record
    @DeleteMapping("/medical-records/{id}")
    public ResponseEntity<String> deleteMedicalRecord(@PathVariable int id) {
        medicalRecordService.deleteMedicalRecord(id);
        return ResponseEntity.ok("Deleted Successfully");
    }

    // Endpoint to retrieve all medical records
    @GetMapping("/medical-records")
    public ResponseEntity<List<MedicalRecord>> getAllMedicalRecords() {
        List<MedicalRecord> medicalRecords = medicalRecordService.getAllMedicalRecords();
        return ResponseEntity.ok(medicalRecords);
    }

    // Endpoint to retrieve a medical record by ID
    @GetMapping("/medical-records/{id}")
    public ResponseEntity<MedicalRecord> getMedicalRecordById(@PathVariable int id) {
        MedicalRecord medicalRecord = medicalRecordService.getMedicalRecordById(id);
        return ResponseEntity.ok(medicalRecord);
    }

}
