package com.example.springapp.serviceImplementation;

import com.example.springapp.exception.EntityNotFoundException;
import com.example.springapp.model.HmsAppointment;
import com.example.springapp.model.HmsPharmacy;
import com.example.springapp.repository.HmsPharmacyRepository;
import com.example.springapp.service.HmsPharmacyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HmsPharmacyServiceImpl implements HmsPharmacyService {

    @Autowired
    private HmsPharmacyRepository pharmacyRepository;

    @Override
    public List<HmsPharmacy> savePharmacy(List<HmsPharmacy> pharmacy) {
        return pharmacyRepository.saveAll(pharmacy);
    }

    @Override
    public List<HmsPharmacy> fetchPharmacyList() {
        return pharmacyRepository.findAll();
    }

    @Override
    public void deletePharmacy(Long pharmacyId) {
//        pharmacyRepository.deleteById(pharmacyId);
        if(!pharmacyRepository.existsById(pharmacyId)) {
            throw new EntityNotFoundException(pharmacyId);
        }

        pharmacyRepository.deleteById(pharmacyId);
    }

//    @Override
//    public HmsPharmacy updatePharmacy(HmsPharmacy pharmacy) {
//        return pharmacyRepository.save(pharmacy);
//    }

    @Override
    public HmsPharmacy updatePharmacy(Long id, HmsPharmacy updatedPharmacy) {
        HmsPharmacy existingPharmacy = pharmacyRepository.findById(id)
                .orElseThrow(()->new EntityNotFoundException(id));

        existingPharmacy.setPatient_id(updatedPharmacy.getPatient_id());
        existingPharmacy.setDoctor_id(updatedPharmacy.getDoctor_id());
        existingPharmacy.setAppointment_id(updatedPharmacy.getAppointment_id());
        existingPharmacy.setMedicine_id(updatedPharmacy.getMedicine_id());
//        existingPharmacy.setMedication_name(updatedPharmacy.getMedication_name());
        existingPharmacy.setPrescribed_days(updatedPharmacy.getPrescribed_days());
//        existingPharmacy.setDosage(updatedPharmacy.getDosage());
//        existingPharmacy.setRefill_date(updatedPharmacy.getRefill_date());
//        existingPharmacy.setPrescription_number(updatedPharmacy.getPrescription_number());
        existingPharmacy.setMorning(updatedPharmacy.getMorning());
        existingPharmacy.setNoon(updatedPharmacy.getNoon());
        existingPharmacy.setNight(updatedPharmacy.getNight());
        existingPharmacy.setCreated_at(updatedPharmacy.getCreated_at());
        existingPharmacy.setUpdated_at(updatedPharmacy.getUpdated_at());
        existingPharmacy.setStatus(updatedPharmacy.getStatus());


        return pharmacyRepository.save(existingPharmacy);

    }

    public HmsPharmacy getPharmacyById(Long id) {
        // TODO Auto-generated method stub
        return pharmacyRepository.findById(id)
                .orElseThrow(()->new EntityNotFoundException(id));

    }
}