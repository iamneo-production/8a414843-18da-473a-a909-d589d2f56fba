package com.example.springapp.serviceImplementation;

import com.example.springapp.model.HmsAppointment;
import com.example.springapp.repository.HmsAppointmentRepository;
import com.example.springapp.service.HmsAppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service

public class HmsAppointmentImpl implements HmsAppointmentService {
    @Autowired
    private HmsAppointmentRepository appointmentRepository;

    @Override
    public HmsAppointment saveAppointment(HmsAppointment appointment) {
        return appointmentRepository.save(appointment);
    }

    @Override
    public HmsAppointment updateAppointment(HmsAppointment appointment) {
        return appointmentRepository.save(appointment);
    }

    @Override
    public List<HmsAppointment> findAllAppointment(){
        return (List<HmsAppointment>) appointmentRepository.findAll();
    }



    @Override
    public void deleteAppointment(Long id) {
        appointmentRepository.deleteById(id);
    }

//

    @Override
    public HmsAppointment updateAppointmentById(Long id, HmsAppointment updatedAppointment) {
        HmsAppointment existingAppointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Appointment not found with id: " + id));

        existingAppointment.setDoctorId(updatedAppointment.getDoctorId());
        existingAppointment.setDate(updatedAppointment.getDate());
        existingAppointment.setTime(updatedAppointment.getTime());
        existingAppointment.setIssue(updatedAppointment.getIssue());
        existingAppointment.setPatientId(updatedAppointment.getPatientId());
        existingAppointment.setStatus(updatedAppointment.getStatus());


        // Set other fields as needed

        return appointmentRepository.save(existingAppointment);
    }

    public HmsAppointment getAppointmentById(Long id) {
        // TODO Auto-generated method stub
        return appointmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Appointment not found with id: " + id));
    }


}
