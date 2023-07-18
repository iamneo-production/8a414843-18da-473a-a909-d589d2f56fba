package com.example.springapp.service;

import com.example.springapp.model.HmsPharmacy;

import java.util.List;

public interface HmsPharmacyService {
    public List<HmsPharmacy> savePharmacy(List<HmsPharmacy> pharmacy);

    public List<HmsPharmacy> fetchPharmacyList();

    public void deletePharmacy(Long pharmacyId);

    public HmsPharmacy updatePharmacy(Long id, HmsPharmacy updatedPharmacy);

    public HmsPharmacy getPharmacyById(Long id);
}
