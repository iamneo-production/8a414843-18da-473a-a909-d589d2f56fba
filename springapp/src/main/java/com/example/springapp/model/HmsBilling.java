package com.example.springapp.model;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
public class HmsBilling {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long patientId;

    @ManyToOne
    @JoinColumn(name="appointmentId")
    private HmsAppointment appointment;

    private boolean paid;

    @CreationTimestamp
    private Date created_at;

    @UpdateTimestamp
    private Date updated_at;
    private Boolean status;


    public HmsBilling(HmsAppointment appointment,Long patientId, boolean paid) {
        this.appointment = appointment;
        this.patientId=patientId;
        this.paid = paid;
    }

    public HmsBilling() {

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

    public HmsAppointment getAppointment() {
        return appointment;
    }

    public void setAppointment(HmsAppointment appointment) {
        this.appointment = appointment;
    }

    public boolean isPaid() {
        return paid;
    }

    public void setPaid(boolean paid) {
        this.paid = paid;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

    public Date getUpdated_at() {
        return updated_at;
    }

    public void setUpdated_at(Date updated_at) {
        this.updated_at = updated_at;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "HmsBilling{" +
                "id=" + id +
                ", appointment=" + appointment +
                ", paid=" + paid +
                ", created_at=" + created_at +
                ", updated_at=" + updated_at +
                ", status=" + status +
                '}';
    }
}
