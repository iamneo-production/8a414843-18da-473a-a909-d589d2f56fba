package com.example.springapp.controller;

import com.example.springapp.exception.EntityNotFoundException;
import com.example.springapp.model.HmsAppointment;

import com.example.springapp.serviceImplementation.HmsAppointmentImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HmsAppointmentController {
    @Autowired
    private HmsAppointmentImpl impl;

    @PostMapping("/api/appointment")
    public HmsAppointment saveAppointment(@RequestBody HmsAppointment appointment) {
        impl.saveAppointment(appointment);
        return appointment;
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
    public HmsAppointment updateAppointmentById(@PathVariable Long id, @RequestBody HmsAppointment updatedAppointment) {
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
