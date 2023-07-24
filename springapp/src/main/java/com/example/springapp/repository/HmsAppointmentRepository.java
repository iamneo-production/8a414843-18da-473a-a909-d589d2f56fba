package com.example.springapp.repository;

import com.example.springapp.model.HmsAppointment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface HmsAppointmentRepository extends JpaRepository<HmsAppointment, Long> {
    public List<HmsAppointment> findByDoctorIdAndAppointmentStatus(Long doctorId, String appointmentStatus);

    //public List<HmsAppointment> findByDate(LocalDate today);

    //int countByDate(LocalDate today);

}
