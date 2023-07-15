package com.example.springapp.repository;

import com.example.springapp.model.HmsAppointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HmsAppointmentRepository extends JpaRepository<HmsAppointment, Long> {
}
