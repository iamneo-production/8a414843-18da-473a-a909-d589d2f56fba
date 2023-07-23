package com.example.springapp.controller;

import com.example.springapp.dto.BaseResponseDto;
import com.example.springapp.dto.request.HmsBillingRequestDto;
import com.example.springapp.model.HmsAppointment;
import com.example.springapp.model.HmsBilling;
import com.example.springapp.repository.HmsAppointmentRepository;
import com.example.springapp.service.HmsBillingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HmsBillingsController {


    @Autowired
    private HmsAppointmentRepository appointmentRepository;

    @Autowired
    private HmsBillingService hmsBillingService;


    @PostMapping("/api/billing")
    public ResponseEntity<?> savePharmacy(@RequestBody HmsBillingRequestDto billing) {
        try {
            Long appointmentId=billing.getAppointmentId();
            HmsAppointment appointment = appointmentRepository.findById(appointmentId).orElseThrow();

            HmsBilling hmsBilling=new HmsBilling(appointment,billing.getPatientId(),billing.isPaid());
            HmsBilling data=  hmsBillingService.createBilling(hmsBilling);

            return ResponseEntity.ok(new BaseResponseDto("Success", data));
        } catch (Exception ignored) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
        }
    }
}
