package com.example.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.springapp.hmsapp.model.Appointment;
import com.springapp.hmsapp.service.AppointmentService;

@Controller
public class AppointmentController {
	
	@Autowired
	private AppointmentService appointmentService;
	
	@PostMapping("/appointment")
    public ResponseEntity<Appointment> createAppointment(@RequestBody Appointment appointment) {
        Appointment newAppointment = appointmentService.createAppointment(appointment);
        return ResponseEntity.status(HttpStatus.CREATED).body(newAppointment);
    }

    // Endpoint to update an existing appointment
    @PutMapping("/appointment")
    public ResponseEntity<Appointment> updateAppointment(@RequestBody Appointment appointment) {
        Appointment updatedAppointment = appointmentService.updateAppointment(appointment);
        return ResponseEntity.ok(updatedAppointment);
    }

    // Endpoint to delete an appointment
    @DeleteMapping("/appointment/{id}")
    public ResponseEntity<String> deleteAppointment(@PathVariable int id) {
        appointmentService.deleteAppointment(id);
        return ResponseEntity.ok("Deleted Successfully");
    }

    // Endpoint to retrieve all appointments
    @GetMapping("/appointment")
    public ResponseEntity<List<Appointment>> getAllAppointment() {
        List<Appointment> appointments = appointmentService.getAllAppointment();
        return ResponseEntity.ok(appointments);
    }

    // Endpoint to retrieve appointments by doctorId
    @GetMapping("/appointment/{doctorId}")
    public ResponseEntity<List<Appointment>> getAppointmentsByDoctorId(@RequestParam int doctorId) {
        List<Appointment> appointments = appointmentService.getAppointmentsByDoctorId(doctorId);
        return ResponseEntity.ok(appointments);
    }

    // Endpoint to retrieve appointments by patientId
    @GetMapping("/appointment/patientId")
    public ResponseEntity<List<Appointment>> getAppointmentsByPatientId(@RequestParam int patientId) {
        List<Appointment> appointments = appointmentService.getAppointmentsByPatientId(patientId);
        return ResponseEntity.ok(appointments);
    }

}
