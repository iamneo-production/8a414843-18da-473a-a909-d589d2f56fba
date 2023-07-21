package com.example.springapp.controller;

import com.example.springapp.dto.BaseResponseDto;
import com.example.springapp.dto.request.HmsPharmacyRequestDto;
import com.example.springapp.model.HmsAppointment;
import com.example.springapp.model.HmsInventory;
import com.example.springapp.model.HmsPharmacy;
import com.example.springapp.repository.HmsAppointmentRepository;
import com.example.springapp.repository.HmsInventoryRepository;
import com.example.springapp.repository.UserRepository;
import com.example.springapp.service.HmsPharmacyService;
import com.example.springapp.serviceImplementation.HmsInventoryServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class HmsPharmacyController {

    @Autowired
    private HmsInventoryServiceImpl hmsInventoryService;

    @Autowired
    private HmsPharmacyService pharmacyService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private HmsAppointmentRepository appointmentRepository;

    @Autowired
    private HmsInventoryRepository inventoryRepository;

    @PostMapping("/api/pharmacy")
    public ResponseEntity<?> savePharmacy(@RequestBody List<HmsPharmacyRequestDto> pharmacy) {
        try {
        	System.out.println(pharmacy);

            List<HmsPharmacy> pharmacyList = new ArrayList<>();

            HmsPharmacyRequestDto firstPharmacy = pharmacy.get(0);
            Long appointmentId = firstPharmacy.getAppointmentId();

            HmsAppointment appointment = appointmentRepository.findById(appointmentId).orElseThrow();

            for (HmsPharmacyRequestDto hmsPharmacyRequestDto : pharmacy) {
                HmsInventory inventory = inventoryRepository.findById(hmsPharmacyRequestDto.getMedicineId()).orElseThrow();
                Long inventoryQuantity = inventory.getQuantity();
                Long pharmacyQuantity = hmsPharmacyRequestDto.getQuantity();
                Long resultQuantity = inventoryQuantity - pharmacyQuantity;
                inventory.setQuantity(resultQuantity);
                hmsInventoryService.updateInventory(inventory.getId(), inventory);
                HmsPharmacy hmsPharmacy = new HmsPharmacy(appointment, inventory, hmsPharmacyRequestDto.getQuantity(), hmsPharmacyRequestDto.getPrescribedDays(), hmsPharmacyRequestDto.getMorning(), hmsPharmacyRequestDto.getNoon(), hmsPharmacyRequestDto.getNight());
                pharmacyList.add(hmsPharmacy);
            }
            List<HmsPharmacy> data = pharmacyService.savePharmacy(pharmacyList);
            return ResponseEntity.ok(new BaseResponseDto("Success", data));
        } catch (Exception ignored) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
        }
    }

    @GetMapping("/api/pharmacy")
    public List<HmsPharmacy> fetchPharmacyList() {
        System.out.println("XCFVGBHNJMKNJ");
        return pharmacyService.fetchPharmacyList();
    }

    @DeleteMapping("/api/pharmacy")
    public String deletePharmacy(@RequestParam("id") Long pharmacyId) {
        pharmacyService.deletePharmacy(pharmacyId);
        return "Deleted";
    }

    @PutMapping("/api/pharmacy/{id}")
    public ResponseEntity<?> updatePharmacy(@PathVariable Long id, @RequestBody List<HmsPharmacyRequestDto> updatedPharmacy) {
        try {
            List<HmsPharmacy> data = pharmacyService.updatePharmacy(id, updatedPharmacy);
            return ResponseEntity.ok(new BaseResponseDto("Success", data));
        } catch (Exception ignored) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
        }

    }

    @GetMapping("/api/pharmacy/{id}")
    public HmsPharmacy getPharmacyById(@PathVariable Long id) {
        return pharmacyService.getPharmacyById(id);
    }

}
