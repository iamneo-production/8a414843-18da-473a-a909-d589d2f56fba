package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springapp.hmsapp.model.MedicalRecord;

public interface MedicalRecordRepository extends JpaRepository<MedicalRecord, Integer> {

}
