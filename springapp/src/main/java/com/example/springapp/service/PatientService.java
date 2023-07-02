package com.example.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springapp.hmsapp.common.ResourceNotFoundException;
import com.springapp.hmsapp.model.Patient;
import com.springapp.hmsapp.repository.PatientRepository;

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
