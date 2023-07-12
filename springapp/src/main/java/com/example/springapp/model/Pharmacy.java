package com.example.springapp.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Pharmacy {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String medicationName;
    private String dosage;
    private LocalDate refillDate;
    private Long prescriptionNumber;
    private Long patientId;
    
    public Pharmacy() {
		// TODO Auto-generated constructor stub
	}

	public Pharmacy(Long id, Long patientId, String medicationName, String dosage, LocalDate refillDate,
			Long prescriptionNumber) {
		super();
		this.id = id;
		this.patientId = patientId;
		this.medicationName = medicationName;
		this.dosage = dosage;
		this.refillDate = refillDate;
		this.prescriptionNumber = prescriptionNumber;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMedicationName() {
		return medicationName;
	}

	public void setMedicationName(String medicationName) {
		this.medicationName = medicationName;
	}

	public String getDosage() {
		return dosage;
	}

	public void setDosage(String dosage) {
		this.dosage = dosage;
	}

	public LocalDate getRefillDate() {
		return refillDate;
	}

	public void setRefillDate(LocalDate refillDate) {
		this.refillDate = refillDate;
	}

	public Long getPrescriptionNumber() {
		return prescriptionNumber;
	}

	public void setPrescriptionNumber(Long prescriptionNumber) {
		this.prescriptionNumber = prescriptionNumber;
	}

	public Long getPatientId() {
		return patientId;
	}

	public void setPatientId(Long patientId) {
		this.patientId = patientId;
	}
    
    
}
