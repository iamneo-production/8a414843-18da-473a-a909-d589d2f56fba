package com.example.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springapp.hmsapp.common.ResourceNotFoundException;
import com.springapp.hmsapp.model.Appointment;
import com.springapp.hmsapp.repository.AppointmentRepository;

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

    public void deleteAppointment(int id) {
        if (appointmentRepository.existsById(id)) {
            appointmentRepository.deleteById(id);
        } else {
            throw new ResourceNotFoundException("Appointment not found with ID: " + id);
        }
    }

    public List<Appointment> getAllAppointment() {
        return appointmentRepository.findAll();
    }

    public List<Appointment> getAppointmentsByDoctorId(int doctorId) {
        return appointmentRepository.findByDoctorId(doctorId);
    }

    public List<Appointment> getAppointmentsByPatientId(int patientId) {
        return appointmentRepository.findByPatientId(patientId);
    }

}
