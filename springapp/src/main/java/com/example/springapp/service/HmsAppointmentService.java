package com.example.springapp.service;
import com.example.springapp.dto.request.HmsAppointmentRequestDto;
import com.example.springapp.model.HmsAppointment;

import java.util.List;

public interface HmsAppointmentService {
    public HmsAppointment saveAppointment(HmsAppointment appointment);

//    public HmsAppointment updateAppointment(HmsAppointment appointment);

    HmsAppointment updateAppointmentById(Long id, HmsAppointmentRequestDto updatedAppointment);

    public List<HmsAppointment> findAllAppointment();



    public void deleteAppointment(Long id);

    public List<HmsAppointment> doctorsAppointment(Long doctorId, String appointmentStatus);

    List<HmsAppointment> appointmentAppointmentStatus(String appointmentStatus);

   List<HmsAppointment> appointmentPendingAcceptedPrescribed(Long patientId);
}
