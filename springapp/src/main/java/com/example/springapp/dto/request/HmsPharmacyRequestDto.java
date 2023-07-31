package com.example.springapp.dto.request;



public class HmsPharmacyRequestDto {

    private Long id;

    private Long appointmentId;


    private Long medicineId;

    private Long quantity;
    private Long prescribedDays;

    private Boolean morning;
    private Boolean noon;
    private Boolean night;

    private Boolean status;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(Long appointmentId) {
        this.appointmentId = appointmentId;
    }

    public Long getMedicineId() {
        return medicineId;
    }

    public void setMedicineId(Long medicineId) {
        this.medicineId = medicineId;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }

    public Long getPrescribedDays() {
        return prescribedDays;
    }

    public void setPrescribedDays(Long prescribedDays) {
        this.prescribedDays = prescribedDays;
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

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "HmsPharmacyRequestDto{" +

                ", appointmentId=" + appointmentId +
                ", medicineId=" + medicineId +
                ", quantity=" + quantity +
                ", prescribed_days=" + prescribedDays +
                ", morning=" + morning +
                ", noon=" + noon +
                ", night=" + night +
                ", status=" + status +
                '}';
    }
}
