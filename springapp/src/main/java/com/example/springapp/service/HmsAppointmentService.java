package com.example.springapp.service;
import com.example.springapp.model.HmsAppointment;

import java.util.List;

public interface HmsAppointmentService {
    public HmsAppointment saveAppointment(HmsAppointment appointment);

//    public HmsAppointment updateAppointment(HmsAppointment appointment);

    HmsAppointment updateAppointmentById(Long id, HmsAppointment updatedAppointment);

    public List<HmsAppointment> findAllAppointment();

    public HmsAppointment getAppointmentById(Long id);

    public void deleteAppointment(Long id);
}