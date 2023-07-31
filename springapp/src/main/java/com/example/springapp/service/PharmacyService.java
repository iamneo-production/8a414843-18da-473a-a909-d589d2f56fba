package com.example.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.common.ResourceNotFoundException;
import com.example.springapp.model.Pharmacy;
import com.example.springapp.repository.PharmacyRepository;

@Service
public class PharmacyService {
	
	@Autowired
	private PharmacyRepository pharmacyRepository;
	
	public Pharmacy createPharmacyRecord(Pharmacy pharmacy) {
        return pharmacyRepository.save(pharmacy);
    }

    public Pharmacy updatePharmacyRecord(Pharmacy pharmacy) {
        if (pharmacyRepository.existsById(pharmacy.getId())) {
            pharmacy.setId(pharmacy.getId());
            return pharmacyRepository.save(pharmacy);
        } else {
            throw new ResourceNotFoundException("Pharmacy record not found with ID: " + pharmacy.getId());
        }
    }

    public void deletePharmacyRecord(Long id) {
        if (pharmacyRepository.existsById(id)) {
            pharmacyRepository.deleteById(id);
        } else {
            throw new ResourceNotFoundException("Pharmacy record not found with ID: " + id);
        }
    }

    public List<Pharmacy> getAllPharmacy() {
        return pharmacyRepository.findAll();
    }

    public Pharmacy getPharmacyRecordById(Long id) {
        return pharmacyRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Pharmacy record not found with ID: " + id));
    }

}
