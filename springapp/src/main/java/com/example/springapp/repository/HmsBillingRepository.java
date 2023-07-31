package com.example.springapp.repository;

import com.example.springapp.model.HmsBilling;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HmsBillingRepository extends JpaRepository<HmsBilling,Long> {
}
