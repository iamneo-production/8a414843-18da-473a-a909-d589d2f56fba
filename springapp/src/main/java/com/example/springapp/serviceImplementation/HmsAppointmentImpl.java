package com.example.springapp.serviceImplementation;

import com.example.springapp.dto.request.HmsAppointmentRequestDto;
import com.example.springapp.exception.EntityNotFoundException;
import com.example.springapp.model.HmsAppointment;
import com.example.springapp.model.User;
import com.example.springapp.repository.HmsAppointmentRepository;
import com.example.springapp.repository.UserRepository;
import com.example.springapp.service.HmsAppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service

public class HmsAppointmentImpl implements HmsAppointmentService {


    @Autowired
    private HmsAppointmentRepository appointmentRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public HmsAppointment saveAppointment(HmsAppointment appointment) {
        return appointmentRepository.save(appointment);
    }

//    @Override
//    public HmsAppointment updateAppointment(HmsAppointment appointment) {
//        return appointmentRepository.save(appointment);
//    }

    @Override
    public List<HmsAppointment> findAllAppointment(){
        return (List<HmsAppointment>) appointmentRepository.findAll();
    }



    @Override
    public void deleteAppointment(Long id) {
        if(!appointmentRepository.existsById(id)) {
            throw new EntityNotFoundException(id);
        }

        appointmentRepository.deleteById(id);
    }

    @Override
    public List<HmsAppointment> doctorsAppointment(Long doctorId, String appointmentStatus) {
        return appointmentRepository.findByDoctorIdAndAppointmentStatus(doctorId, appointmentStatus);
    }


//

    @Override
    public HmsAppointment updateAppointmentById(Long id, HmsAppointmentRequestDto updatedAppointment) {

        HmsAppointment hmsAppointment=appointmentRepository.findById(id).orElseThrow();

        if (updatedAppointment.getDoctorId() != null ) {
            User doctor=userRepository.findById(updatedAppointment.getDoctorId()).orElseThrow();
            hmsAppointment.setDoctor(doctor);

        }
        if (updatedAppointment.getPatientId() != null ) {
            User patient=userRepository.findById(updatedAppointment.getPatientId()).orElseThrow();
            hmsAppointment.setDoctor(patient);
        }
        if (updatedAppointment.getDate() != null ) {
            hmsAppointment.setDate(updatedAppointment.getDate());

        }
        if (updatedAppointment.getTime() != null ) {
            hmsAppointment.setTime(updatedAppointment.getTime());

        }
        if (updatedAppointment.getIssue() != null ) {
            hmsAppointment.setIssue(updatedAppointment.getIssue());

        }
        if (updatedAppointment.getAppointmentStatus() != null ) {
            hmsAppointment.setAppointmentStatus(updatedAppointment.getAppointmentStatus());
        }

        return appointmentRepository.save(hmsAppointment);

    }

    public HmsAppointment getAppointmentById(Long id) {
        // TODO Auto-generated method stub
        return appointmentRepository.findById(id)
                .orElseThrow(()->new EntityNotFoundException(id));

    }


}
