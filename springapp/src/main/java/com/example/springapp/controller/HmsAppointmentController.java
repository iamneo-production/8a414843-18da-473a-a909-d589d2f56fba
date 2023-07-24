package com.example.springapp.controller;

import com.example.springapp.dto.BaseResponseDto;
import com.example.springapp.dto.request.HmsAppointmentRequestDto;
import com.example.springapp.exception.EntityNotFoundException;
import com.example.springapp.model.HmsAppointment;

import com.example.springapp.model.User;
import com.example.springapp.repository.HmsAppointmentRepository;
import com.example.springapp.repository.UserRepository;
import com.example.springapp.serviceImplementation.HmsAppointmentImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
public class HmsAppointmentController {
    @Autowired
    private HmsAppointmentImpl impl;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private HmsAppointmentRepository hmsAppointmentRepository;

    @PostMapping("/api/appointment")
    public HmsAppointment saveAppointment(@RequestBody HmsAppointmentRequestDto appointment) {
        User doctor=userRepository.findById(appointment.getDoctorId()).orElseThrow();
        User patient=userRepository.findById(appointment.getPatientId()).orElseThrow();
        HmsAppointment hmsAppointment=new HmsAppointment(
                patient,
                doctor,
                appointment.getDate(),
                appointment.getTime(),
                appointment.getIssue(),
                appointment.getAppointmentStatus()
        );

        return impl.saveAppointment(hmsAppointment);
    }

    @GetMapping("/api/appointment")
    public List<HmsAppointment> findAllAppointment(){
        return impl.findAllAppointment();
    }

    @GetMapping("/api/appointment/{id}")
    public HmsAppointment getAppointmentById(@PathVariable Long id) {
        return impl.getAppointmentById(id);
    }

//    @PutMapping("/api/appointment")
//    public HmsAppointment updateAppointment(@RequestBody HmsAppointment appointment) {
//        return impl.updateAppointment(appointment);
//    }

    @PutMapping("/api/appointment/{id}")
    public HmsAppointment updateAppointmentById(@PathVariable Long id, @RequestBody HmsAppointmentRequestDto updatedAppointment) {

        return impl.updateAppointmentById(id, updatedAppointment);

    }

    @DeleteMapping("/api/appointment/{id}")
    public String deleteAppointment(@RequestParam Long id) {
        impl.deleteAppointment(id);
        return null;

    }

    @GetMapping("/api/doctor-appointment/{doctorId}")
    public List<HmsAppointment> doctorsAppointment(@PathVariable Long doctorId, @RequestParam (required = false) String appointmentStatus){
        return impl.doctorsAppointment(doctorId, appointmentStatus);
    }



}
