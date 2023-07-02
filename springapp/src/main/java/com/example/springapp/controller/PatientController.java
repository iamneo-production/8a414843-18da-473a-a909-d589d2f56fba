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

import com.example.springapp.model.Patient;
import com.example.springapp.service.PatientService;

@Controller
public class PatientController {
	
	@Autowired
	private PatientService patientService;
	
	 // Endpoint to add a new patient
    @PostMapping("/patient")
    public ResponseEntity<Patient> addPatient(@RequestBody Patient patient) {
        Patient newPatient = patientService.addPatient(patient);
        return ResponseEntity.status(HttpStatus.CREATED).body(newPatient);
    }

    // Endpoint to update a patient
    @PutMapping("/patient")
    public ResponseEntity<Patient> updatePatient(@RequestBody Patient patient) {
        Patient updatedPatient = patientService.updatePatient(patient);
        return ResponseEntity.ok(updatedPatient);
    }

    // Endpoint to delete a patient
    @DeleteMapping("/patient/{id}")
    public ResponseEntity<String> deletePatient(@PathVariable int id) {
        patientService.deletePatient(id);
        return ResponseEntity.ok("Deleted Successfully");
    }

    // Endpoint to retrieve all patient records
    @GetMapping("/patient")
    public ResponseEntity<List<Patient>> getAllPatient() {
        List<Patient> patients = patientService.getAllPatient();
        return ResponseEntity.ok(patients);
    }

    // Endpoint to retrieve a patient record by ID
    @GetMapping("/patient/{id}")
    public ResponseEntity<Patient> getPatientById(@PathVariable int id) {
        Patient patient = patientService.getPatientById(id);
        return ResponseEntity.ok(patient);
    }


}
