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
    private int id;
    private String medicationName;
    private String dosage;
    private LocalDate refillDate;
    private int prescriptionNumber;
    private int patientId;
    
    public Pharmacy() {
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
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

	public int getPrescriptionNumber() {
		return prescriptionNumber;
	}

	public void setPrescriptionNumber(int prescriptionNumber) {
		this.prescriptionNumber = prescriptionNumber;
	}

	public int getPatientId() {
		return patientId;
	}

	public void setPatientId(int patientId) {
		this.patientId = patientId;
	}
    
    
}
