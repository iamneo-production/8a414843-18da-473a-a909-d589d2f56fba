package com.example.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.common.ResourceNotFoundException;
import com.example.springapp.model.Patient;
import com.example.springapp.repository.PatientRepository;

@Service
public class PatientService {
	
	@Autowired
	private PatientRepository patientRepository;
	
	public Patient addPatient(Patient patient) {
        return patientRepository.save(patient);
    }

    public Patient updatePatient(Patient patient) {
        // Check if the patient with the given ID exists
        if (patientRepository.existsById(patient.getId())) {
            patient.setId(patient.getId());
            return patientRepository.save(patient);
        } else {
            throw new ResourceNotFoundException("Patient not found with ID: " + patient.getId());
        }
    }

    public void deletePatient(int id) {
        // Check if the patient with the given ID exists
        if (patientRepository.existsById(id)) {
            patientRepository.deleteById(id);
        } else {
            throw new ResourceNotFoundException("Patient not found with ID: " + id);
        }
    }

    public List<Patient> getAllPatient() {
        return patientRepository.findAll();
    }

    public Patient getPatientById(int id) {
        return patientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Patient not found with ID: " + id));
    }

}
