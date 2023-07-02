package com.example.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {
	
	List<Appointment> findByDoctorId(int doctorId);
    List<Appointment> findByPatientId(int patientId);

}
