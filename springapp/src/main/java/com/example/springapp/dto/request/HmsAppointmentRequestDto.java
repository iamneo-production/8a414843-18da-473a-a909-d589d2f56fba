package com.example.springapp.dto.request;

import com.example.springapp.model.User;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.time.LocalDate;
import java.time.LocalTime;

public class HmsAppointmentRequestDto {
    private Long patientId;
    private Long doctorId;
    private LocalDate date;
    private LocalTime time;
    private String issue;
    private String appointmentStatus;

    public Long getPatientId() {
        return patientId;
    }

    public void setPatientId(Long patientId) {
        this.patientId = patientId;
    }

    public Long getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(Long doctorId) {
        this.doctorId = doctorId;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    public String getIssue() {
        return issue;
    }

    public void setIssue(String issue) {
        this.issue = issue;
    }

    public String getAppointmentStatus() {
        return appointmentStatus;
    }

    public void setAppointmentStatus(String appointmentStatus) {
        this.appointmentStatus = appointmentStatus;
    }

    @Override
    public String toString() {
        return "HmsAppointmentRequestDto{" +
                "patientId=" + patientId +
                ", doctorId=" + doctorId +
                ", date=" + date +
                ", time=" + time +
                ", issue='" + issue + '\'' +
                ", appointmentStatus='" + appointmentStatus + '\'' +
                '}';
    }
}
