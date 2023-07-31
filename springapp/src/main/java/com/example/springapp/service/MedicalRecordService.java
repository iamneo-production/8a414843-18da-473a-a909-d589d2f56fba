package com.example.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.common.ResourceNotFoundException;
import com.example.springapp.model.MedicalRecord;
import com.example.springapp.repository.MedicalRecordRepository;

@Service
public class MedicalRecordService {
	
	@Autowired
	private MedicalRecordRepository medicalRecordRepository;
	
	public MedicalRecord createMedicalRecord(MedicalRecord medicalRecord) {
        return medicalRecordRepository.save(medicalRecord);
    }

    public MedicalRecord updateMedicalRecord(MedicalRecord medicalRecord) {
        if (medicalRecordRepository.existsById(medicalRecord.getId())) {
            medicalRecord.setId(medicalRecord.getId());
            return medicalRecordRepository.save(medicalRecord);
        } else {
            throw new ResourceNotFoundException("Medical record not found with ID: " + medicalRecord.getId());
        }
    }

    public void deleteMedicalRecord(Long id) {
        if (medicalRecordRepository.existsById(id)) {
            medicalRecordRepository.deleteById(id);
        } else {
            throw new ResourceNotFoundException("Medical record not found with ID: " + id);
        }
    }

    public List<MedicalRecord> getAllMedicalRecords() {
        return medicalRecordRepository.findAll();
    }

    public Optional<MedicalRecord> getMedicalRecordById(Long id) {
        return medicalRecordRepository.findById(id);
               
    }

}
