package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.Pharmacy;

public interface PharmacyRepository extends JpaRepository<Pharmacy, Integer> {

}
