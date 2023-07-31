package com.example.springapp.serviceImplementation;

import com.example.springapp.dto.request.HmsAppointmentRequestDto;
import com.example.springapp.exception.EntityNotFoundException;
import com.example.springapp.model.HmsAppointment;
import com.example.springapp.model.User;
import com.example.springapp.repository.HmsAppointmentRepository;
import com.example.springapp.repository.UserRepository;
import com.example.springapp.service.HmsAppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.security.PrivateKey;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

@Service

public class HmsAppointmentImpl implements HmsAppointmentService {


    @Autowired
    private JavaMailSender javaMailSender;
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
    public List<HmsAppointment> findAllAppointment() {
        return (List<HmsAppointment>) appointmentRepository.findAll();
    }


    @Override
    public void deleteAppointment(Long id) {
        if (!appointmentRepository.existsById(id)) {
            throw new EntityNotFoundException(id);
        }

        appointmentRepository.deleteById(id);
    }

    @Override
    public List<HmsAppointment> doctorsAppointment(Long doctorId, String appointmentStatus) {
        return appointmentRepository.findByDoctorIdAndAppointmentStatus(doctorId, appointmentStatus);
    }

    @Override
    public List<HmsAppointment> appointmentAppointmentStatus(String appointmentStatus) {
        return appointmentRepository.findByAppointmentStatus(appointmentStatus);
    }



@Override
    public List<HmsAppointment> appointmentPendingAcceptedPrescribed(Long patientId,String appointmentStatus) {
        if(Objects.equals(appointmentStatus, "completed")){
            return appointmentRepository.findByPatientIdAndAppointmentStatus(patientId,appointmentStatus);
        }else {
            List<String> appointmentStatusList = Arrays.asList("pending", "accepted", "prescribed");
            return appointmentRepository.findByPatientIdAndAppointmentStatusIn(patientId, appointmentStatusList);
        }
    }




    @Override
    public HmsAppointment updateAppointmentById(Long id, HmsAppointmentRequestDto updatedAppointment) {

        HmsAppointment hmsAppointment = appointmentRepository.findById(id).orElseThrow();

        if (updatedAppointment.getDoctorId() != null) {
            User doctor = userRepository.findById(updatedAppointment.getDoctorId()).orElseThrow();
            hmsAppointment.setDoctor(doctor);

        }
        if (updatedAppointment.getPatientId() != null) {
            User patient = userRepository.findById(updatedAppointment.getPatientId()).orElseThrow();
            hmsAppointment.setDoctor(patient);
        }
        if (updatedAppointment.getDate() != null) {
            hmsAppointment.setDate(updatedAppointment.getDate());

        }
        if (updatedAppointment.getTime() != null) {
            hmsAppointment.setTime(updatedAppointment.getTime());

        }
        if (updatedAppointment.getIssue() != null) {
            hmsAppointment.setIssue(updatedAppointment.getIssue());

        }
        if (updatedAppointment.getAppointmentStatus() != null) {
            hmsAppointment.setAppointmentStatus(updatedAppointment.getAppointmentStatus());
        }

        return appointmentRepository.save(hmsAppointment);

    }


    public HmsAppointment getAppointmentById(Long id) {
        // TODO Auto-generated method stub
        return appointmentRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(id));

    }


    public void sendEmailToPatient(String email, String subject, String body) {
        try {
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setTo(email);
            helper.setSubject(subject);
            helper.setText(body, false);
            javaMailSender.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
            // Handle the exception if needed
        }
    }
}
