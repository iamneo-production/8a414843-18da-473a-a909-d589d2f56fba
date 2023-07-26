package com.example.springapp.serviceImplementation;

import com.example.springapp.dto.request.HmsPharmacyRequestDto;
import com.example.springapp.exception.EntityNotFoundException;
import com.example.springapp.model.HmsAppointment;
import com.example.springapp.model.HmsInventory;
import com.example.springapp.model.HmsPharmacy;
import com.example.springapp.repository.HmsAppointmentRepository;
import com.example.springapp.repository.HmsInventoryRepository;
import com.example.springapp.repository.HmsPharmacyRepository;
import com.example.springapp.service.HmsInventoryService;
import com.example.springapp.service.HmsPharmacyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class HmsPharmacyServiceImpl implements HmsPharmacyService {

    @Autowired
    private HmsPharmacyRepository pharmacyRepository;

    @Autowired
    private HmsInventoryRepository inventoryRepository;

    @Autowired
    private HmsAppointmentRepository appointmentRepository;

    @Autowired
    private HmsInventoryService inventoryService;

    @Override
    public List<HmsPharmacy> savePharmacy(List<HmsPharmacy> pharmacy) {
        return pharmacyRepository.saveAll(pharmacy);
    }

    @Override
    public List<HmsPharmacy> fetchPharmacyList() {
        return pharmacyRepository.findAllByStatusTrue();
    }

    @Override
    public void deletePharmacy(Long pharmacyId) {
//        pharmacyRepository.deleteById(pharmacyId);
        if (!pharmacyRepository.existsById(pharmacyId)) {
            throw new EntityNotFoundException(pharmacyId);
        }
        HmsPharmacy pharmacy=pharmacyRepository.findById(pharmacyId).orElseThrow();
        pharmacy.setStatus(false);
        pharmacyRepository.save(pharmacy);
    }



    public List<HmsPharmacy> updatePharmacy(Long appointmentId, List<HmsPharmacyRequestDto> updatedPharmacyList) {
        HmsAppointment appointment = appointmentRepository.findById(appointmentId).orElseThrow();
        List<HmsPharmacy> existingPharmacyList = pharmacyRepository.findAllByAppointment(appointment);
        List<HmsPharmacy> updatedPharmacies = new ArrayList<>();

        for (HmsPharmacyRequestDto updatePharmacy : updatedPharmacyList) {
            boolean found = false;
            HmsInventory inventory = inventoryRepository.findById(updatePharmacy.getMedicineId()).orElseThrow();
            for (HmsPharmacy existingPharmacy : existingPharmacyList) {
                if (Objects.equals(updatePharmacy.getId(), existingPharmacy.getId())) {
                    found = true;
                    if (updatePharmacy.getMedicineId() != null) {
                        if (inventory.getId() != null) {
                            System.out.println("Logged......");
                            Long inventoryQuantity=inventory.getQuantity();
                            Long updateQuantity=updatePharmacy.getQuantity();
                            if(!Objects.equals(inventoryQuantity, updateQuantity)){
                                Long resultQuanity=inventoryQuantity-updateQuantity;
                                inventory.setQuantity(resultQuanity);
                                inventoryService.updateInventory(inventory.getId(),inventory);
                            }
                            existingPharmacy.setInventory(inventory);
                        }
                    }
                    if(updatePharmacy.getPrescribedDays() !=null){
                        existingPharmacy.setPrescribedDays(updatePharmacy.getPrescribedDays());
                    }
                    if(updatePharmacy.getQuantity() !=null){
                        existingPharmacy.setQuantity(updatePharmacy.getQuantity());
                    }

                    if (updatePharmacy.getMorning() != null) {
                        existingPharmacy.setMorning(updatePharmacy.getMorning());
                    }
                    if (updatePharmacy.getNoon() != null) {
                        existingPharmacy.setNoon(updatePharmacy.getNoon());
                    }
                    if (updatePharmacy.getNight() != null) {
                        existingPharmacy.setNight(updatePharmacy.getNight());
                    }
                    if (updatePharmacy.getStatus() != null) {
                        existingPharmacy.setStatus(updatePharmacy.getStatus());
                    }

                    // Add the updated existing pharmacy to the updatedPharmacies list
                    updatedPharmacies.add(existingPharmacy);
                    break;
                }
            }

            // If the ID is not found in the existingPharmacyList, create a new pharmacy
            if (!found) {
                Long inventQuantity=inventory.getQuantity();
                Long updateQuantity=updatePharmacy.getQuantity();
                Long resultQuanity=inventQuantity-updateQuantity;
                inventory.setQuantity(resultQuanity);
                inventoryService.updateInventory(inventory.getId(),inventory);
                HmsPharmacy newPharmacy = new HmsPharmacy(appointment,inventory,updatePharmacy.getQuantity(),updatePharmacy.getPrescribedDays(),updatePharmacy.getMorning(),updatePharmacy.getNoon(),updatePharmacy.getNight());
                updatedPharmacies.add(newPharmacy);
            }
        }



        // Save all updated and new pharmacies to the database
        return pharmacyRepository.saveAll(updatedPharmacies);
    }


    public List<HmsPharmacy> getPharmacyByAppointmentId(Long appointmentId) {
        // TODO Auto-generated method stub
        HmsAppointment appointment = appointmentRepository.findById(appointmentId).orElseThrow();

        return pharmacyRepository.findAllByAppointment(appointment);


    }

    public HmsPharmacy getPharmacyById(Long id) {
        // TODO Auto-generated method stub
        return pharmacyRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(id));

    }

}
