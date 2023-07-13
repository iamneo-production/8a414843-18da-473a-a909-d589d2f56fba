package com.example.springapp.model;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
public class HmsAppointment {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private Long patientId;
    private Long doctorId;
    private LocalDate date;
    private LocalTime time;
    private String issue;
    private String appointmentStatus="pending";
    @CreationTimestamp
    private Date created;
    @UpdateTimestamp
    private Date updated;

    private String status="true";




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


    public Long getPatientId() {
        return patientId;
    }


    public void setPatientId(Long patientId) {
        this.patientId = patientId;
    }


    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
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
