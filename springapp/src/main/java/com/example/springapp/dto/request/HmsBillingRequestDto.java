package com.example.springapp.dto.request;

import com.example.springapp.model.Appointment;

public class HmsBillingRequestDto {
    private Long appointmentId;

    private Long patientId;
    private boolean paid;
    private Long amount;

    public Long getPatientId() {
        return patientId;
    }

    public void setPatientId(Long patientId) {
        this.patientId = patientId;
    }

    public Long getAmount() {
        return amount;
    }

    public void setAmount(Long amount) {
        this.amount = amount;
    }

    public Long getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(Long appointmentId) {
        this.appointmentId = appointmentId;
    }

    public boolean isPaid() {
        return paid;
    }

    public void setPaid(boolean paid) {
        this.paid = paid;
    }

    @Override
    public String toString() {
        return "HmsBillingRequestDto{" +
                "appointmentId=" + appointmentId +
                ", patientId=" + patientId +
                ", paid=" + paid +
                '}';
    }
}
