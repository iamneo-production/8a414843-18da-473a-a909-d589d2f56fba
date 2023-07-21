package com.example.springapp.model;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;
import java.util.Date;

@Entity
public class HmsPharmacy {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;
    private Long patient_id;
    private Long doctor_id;
    private Long appointment_id;
    private Long medicine_id;
    //    private String medication_name;
    private Long prescribed_days;
    private Long quantity;
    //    private String dosage;
//    private LocalDate refill_date;
//    private String prescription_number;
    private Boolean morning;
    private Boolean noon;
    private Boolean night;

    @CreationTimestamp
    private Date created_at;

    @UpdateTimestamp
    private Date updated_at;
    private Boolean status=true;

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPatient_id() {
        return patient_id;
    }

    public void setPatient_id(Long patient_id) {
        this.patient_id = patient_id;
    }

    public Long getDoctor_id() {
        return doctor_id;
    }

    public void setDoctor_id(Long doctor_id) {
        this.doctor_id = doctor_id;
    }

    public Long getAppointment_id() {
        return appointment_id;
    }

    public void setAppointment_id(Long appointment_id) {
        this.appointment_id = appointment_id;
    }

    public Long getMedicine_id() {
        return medicine_id;
    }

    public void setMedicine_id(Long medicine_id) {
        this.medicine_id = medicine_id;
    }

    //    public String getMedication_name() {
//        return medication_name;
//    }
//
//    public void setMedication_name(String medication_name) {
//        this.medication_name = medication_name;
//    }
//
    public Long getPrescribed_days() {
        return prescribed_days;
    }
    //
    public void setPrescribed_days(Long prescribed_days) {
        this.prescribed_days = prescribed_days;
    }
//
//    public String getDosage() {
//        return dosage;
//    }
//
//    public void setDosage(String dosage) {
//        this.dosage = dosage;
//    }
//
//    public LocalDate getRefill_date() {
//        return refill_date;
//    }
//
//    public void setRefill_date(LocalDate refill_date) {
//        this.refill_date = refill_date;
//    }

//    public String getPrescription_number() {
//        return prescription_number;
//    }
//
//    public void setPrescription_number(String prescription_number) {
//        this.prescription_number = prescription_number;
//    }

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

    public HmsPharmacy(Long quantity) {
        this.quantity = quantity;
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


    public HmsPharmacy(Long id, Long patient_id, Long doctor_id, Long appointment_id, Long medicine_id, String medicine_name, Long prescribed_days, String dosage, LocalDate refill_date, String prescription_number, Boolean morning, Boolean noon, Boolean night, Date created_at, Date updated_at, Boolean status) {
        this.id = id;
        this.patient_id = patient_id;
        this.doctor_id = doctor_id;
        this.appointment_id = appointment_id;
        this.medicine_id = medicine_id;
//        this.medication_name = medicine_name;
        this.prescribed_days = prescribed_days;
//        this.dosage = dosage;
//        this.refill_date = refill_date;
//        this.prescription_number = prescription_number;
        this.morning = morning;
        this.noon = noon;
        this.night = night;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.status = status;
    }

    public HmsPharmacy() {
    }


    @Override
    public String toString() {
        return "HmsPharmacy{" +
                "id=" + id +
                ", patient_id=" + patient_id +
                ", doctor_id=" + doctor_id +
                ", appointment_id=" + appointment_id +
                ", medicine_id=" + medicine_id +
//                ", medicine_name='" + medication_name + '\'' +
                ", prescribed_days=" + prescribed_days +
//                ", dosage='" + dosage + '\'' +
//                ", refill_date=" + refill_date +
//                ", prescription_number='" + prescription_number + '\'' +
                ", morning=" + morning +
                ", noon=" + noon +
                ", night=" + night +
                ", created_at=" + created_at +
                ", updated_at=" + updated_at +
                ", status=" + status +
                '}';

    }
}