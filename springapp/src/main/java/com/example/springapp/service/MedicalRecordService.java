package com.example.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springapp.hmsapp.common.ResourceNotFoundException;
import com.springapp.hmsapp.model.MedicalRecord;
import com.springapp.hmsapp.repository.MedicalRecordRepository;

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

    public void deleteMedicalRecord(int id) {
        if (medicalRecordRepository.existsById(id)) {
            medicalRecordRepository.deleteById(id);
        } else {
            throw new ResourceNotFoundException("Medical record not found with ID: " + id);
        }
    }

    public List<MedicalRecord> getAllMedicalRecords() {
        return medicalRecordRepository.findAll();
    }

    public MedicalRecord getMedicalRecordById(int id) {
        return medicalRecordRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Medical record not found with ID: " + id));
    }

}
