package com.example.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
	
	List<Appointment> findByDoctorId(Long doctorId);
    List<Appointment> findByPatientId(Long patientId);

}
