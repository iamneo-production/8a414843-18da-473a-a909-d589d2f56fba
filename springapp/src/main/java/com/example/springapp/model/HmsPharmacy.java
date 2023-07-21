package com.example.springapp.model;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
public class HmsPharmacy {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;

    @ManyToOne
    @JoinColumn(name="appointmentId")
    private HmsAppointment appointment;

    @ManyToOne
    @JoinColumn(name="medicineId")
    private HmsInventory inventory;

    private Long quantity;
    private Long prescribedDays;

    private Boolean morning;
    private Boolean noon;
    private Boolean night;

    @CreationTimestamp
    private Date created_at;

    @UpdateTimestamp
    private Date updated_at;
    private Boolean status=true;


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

    public HmsInventory getInventory() {
        return inventory;
    }

    public void setInventory(HmsInventory inventory) {
        this.inventory = inventory;
    }

    public Long getPrescribedDays() {
        return prescribedDays;
    }

    public void setPrescribedDays(Long prescribedDays) {
        this.prescribedDays = prescribedDays;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }

    public Boolean getMorning() {
        return morning;
    }

    public void setMorning(Boolean morning) {
        this.morning = morning;
    }

    public Boolean getNoon() {
        return noon;
    }

    public void setNoon(Boolean noon) {
        this.noon = noon;
    }

    public Boolean getNight() {
        return night;
    }

    public void setNight(Boolean night) {
        this.night = night;
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


    public HmsPharmacy(  HmsAppointment appointment, HmsInventory inventory, Long quantity, Long prescribed_days,   Boolean morning, Boolean noon, Boolean night) {

        this.appointment= appointment;
        this.inventory = inventory;
        this.quantity=quantity;
        this.prescribedDays = prescribed_days;
        this.morning = morning;
        this.noon = noon;
        this.night = night;
    }

    public HmsPharmacy() {
    }

    @Override
    public String toString() {
        return "HmsPharmacy{" +
                "id=" + id +
                ", appointment=" + appointment +
                ", inventory=" + inventory +
                ", quantity=" + quantity +
                ", prescribedDays=" + prescribedDays +
                ", morning=" + morning +
                ", noon=" + noon +
                ", night=" + night +
                ", created_at=" + created_at +
                ", updated_at=" + updated_at +
                ", status=" + status +
                '}';
    }
}
