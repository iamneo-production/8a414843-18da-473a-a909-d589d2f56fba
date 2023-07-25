package com.example.springapp.controller;

import com.example.springapp.dto.BaseResponseDto;
import com.example.springapp.dto.request.HmsAppointmentRequestDto;
import com.example.springapp.dto.request.HmsPharmacyRequestDto;
import com.example.springapp.model.HmsAppointment;
import com.example.springapp.model.HmsInventory;
import com.example.springapp.model.HmsPharmacy;
import com.example.springapp.repository.HmsAppointmentRepository;
import com.example.springapp.repository.HmsInventoryRepository;
import com.example.springapp.repository.UserRepository;
import com.example.springapp.service.HmsAppointmentService;
import com.example.springapp.service.HmsPharmacyService;
import com.example.springapp.serviceImplementation.HmsInventoryServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @Autowired
    private HmsAppointmentService appointmentService;

    @PostMapping("/api/pharmacy")
    public ResponseEntity<?> savePharmacy(@RequestBody List<HmsPharmacyRequestDto> pharmacy) {
        try {
            System.out.println(pharmacy);

            List<HmsPharmacy> pharmacyList = new ArrayList<>();

            HmsPharmacyRequestDto firstPharmacy = pharmacy.get(0);
            Long appointmentId = firstPharmacy.getAppointmentId();

            HmsAppointment appointment = appointmentRepository.findById(appointmentId).orElseThrow();

            //APPOINTMENT STATUS UPDATE

            HmsAppointmentRequestDto appointmentRequestDto = new HmsAppointmentRequestDto();
            appointmentRequestDto.setAppointmentStatus("prescribed");
           HmsAppointment updateHmsAppointment= appointmentService.updateAppointmentById(appointmentId, appointmentRequestDto);

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

    @DeleteMapping("/api/pharmacy/{id}")
    public String deletePharmacy(@PathVariable("id") Long pharmacyId) {
        System.out.println("DELL"+pharmacyId);
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

    @GetMapping("/api/pharmacy-appointmentId/{appointmentId}")
    public ResponseEntity<?> getPharmacyByAppointmentId(@PathVariable Long appointmentId) {
        try {
            List<HmsPharmacy> data =  pharmacyService.getPharmacyByAppointmentId(appointmentId);
            return ResponseEntity.ok(new BaseResponseDto("Success", data));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went Wrong");
        }

    }


    @GetMapping("/api/pharmacy/{id}")
    public HmsPharmacy getPharmacyById(@PathVariable Long id) {
        return pharmacyService.getPharmacyById(id);
    }

}