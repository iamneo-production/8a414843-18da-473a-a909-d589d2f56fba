package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springapp.hmsapp.model.Billing;

public interface BillingRepository extends JpaRepository<Billing, Integer>{

}
