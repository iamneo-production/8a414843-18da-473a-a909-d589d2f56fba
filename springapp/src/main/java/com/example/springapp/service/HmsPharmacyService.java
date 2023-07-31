package com.example.springapp.service;

import com.example.springapp.dto.request.HmsPharmacyRequestDto;
import com.example.springapp.model.HmsPharmacy;

import java.util.List;

public interface HmsPharmacyService {
    public List<HmsPharmacy> savePharmacy(List<HmsPharmacy> pharmacy);

    public List<HmsPharmacy> fetchPharmacyList();


    public void deletePharmacy(Long pharmacyId);

    public List<HmsPharmacy> updatePharmacy(Long id, List<HmsPharmacyRequestDto> updatedPharmacy);

    public HmsPharmacy getPharmacyById(Long id);

    List<HmsPharmacy> getPharmacyByAppointmentId(Long appointmentId);
}