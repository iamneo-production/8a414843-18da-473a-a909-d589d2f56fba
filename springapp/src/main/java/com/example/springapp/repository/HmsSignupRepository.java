package com.example.springapp.repository;

import com.example.springapp.model.HmsSignup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HmsSignupRepository extends JpaRepository<HmsSignup,Long> {
}
