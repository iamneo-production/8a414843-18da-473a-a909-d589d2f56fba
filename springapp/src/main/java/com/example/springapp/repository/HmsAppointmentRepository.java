package com.example.springapp.repository;

import com.example.springapp.model.HmsAppointment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HmsAppointmentRepository extends JpaRepository<HmsAppointment, Long> {
    public List<HmsAppointment> findByDoctorIdAndAppointmentStatus(Long doctorId, String appointmentStatus);

    List<HmsAppointment> findByAppointmentStatus(String appointmentStatus);

    





    List<HmsAppointment> findByPatientIdAndAppointmentStatusIn(Long patientId, List<String> appointmentStatusList);
}
