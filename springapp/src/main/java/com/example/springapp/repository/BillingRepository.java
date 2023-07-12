package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.Billing;

public interface BillingRepository extends JpaRepository<Billing, Long>{

}
