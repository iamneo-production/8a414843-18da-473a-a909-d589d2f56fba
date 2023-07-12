package com.example.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.common.ResourceNotFoundException;
import com.example.springapp.model.Appointment;
import com.example.springapp.repository.AppointmentRepository;

@Service
public class AppointmentService {
	
	@Autowired
	private AppointmentRepository appointmentRepository;
	
	public Appointment createAppointment(Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    public Appointment updateAppointment(Appointment appointment) {
        if (appointmentRepository.existsById(appointment.getId())) {
            appointment.setId(appointment.getId());
            return appointmentRepository.save(appointment);
        } else {
            throw new ResourceNotFoundException("Appointment not found with ID: " + appointment.getId());
        }
    }

    public void deleteAppointment(Long id) {
        if (appointmentRepository.existsById(id)) {
            appointmentRepository.deleteById(id);
        } else {
            throw new ResourceNotFoundException("Appointment not found with ID: " + id);
        }
    }

    public List<Appointment> getAllAppointment() {
        return appointmentRepository.findAll();
    }

    public List<Appointment> getAppointmentsByDoctorId(Long doctorId) {
        return appointmentRepository.findByDoctorId(doctorId);
    }

    public List<Appointment> getAppointmentsByPatientId(Long patientId) {
        return appointmentRepository.findByPatientId(patientId);
    }

}
