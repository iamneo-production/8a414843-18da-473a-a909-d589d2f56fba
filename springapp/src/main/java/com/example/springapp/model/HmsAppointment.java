package com.example.springapp.model;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

import javax.persistence.*;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
public class HmsAppointment {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="patientId")
    private User patient;

    @ManyToOne
    @JoinColumn(name="doctorId")
    private User doctor;
    private LocalDate date;
    private LocalTime time;
    private String issue;
    private String appointmentStatus;
    @CreationTimestamp
    private Date created;
    @UpdateTimestamp
    private Date updated;

    private String status;


    public HmsAppointment(User patient, User doctor, LocalDate date, LocalTime time, String issue, String appointmentStatus) {
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.time = time;
        this.issue = issue;
        this.appointmentStatus = appointmentStatus;
    }

    public String getAppointmentStatus() {
        return appointmentStatus;
    }


    public void setAppointmentStatus(String appointmentStatus) {
        this.appointmentStatus = appointmentStatus;
    }


    public Date getUpdated() {
        return updated;
    }


    public void setUpdated(Date updated) {
        this.updated = updated;
    }


    public Date getCreated() {
        return created;
    }


    public void setCreated(Date created) {
        this.created = created;
    }


    public User getPatient() {
        return patient;
    }

    public void setPatient(User patient) {
        this.patient = patient;
    }

    public User getDoctor() {
        return doctor;
    }

    public void setDoctor(User doctor) {
        this.doctor = doctor;
    }

    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
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


    public HmsAppointment() {
        super();
    }


    public String getStatus() {
        return status;
    }


    public void setStatus(String status) {
        this.status = status;
    }
}
