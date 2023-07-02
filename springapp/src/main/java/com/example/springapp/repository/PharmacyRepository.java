package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springapp.hmsapp.model.Pharmacy;

public interface PharmacyRepository extends JpaRepository<Pharmacy, Integer> {

}
