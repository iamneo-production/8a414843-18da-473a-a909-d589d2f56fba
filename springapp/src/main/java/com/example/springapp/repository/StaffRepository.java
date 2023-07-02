package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springapp.hmsapp.model.Staff;

public interface StaffRepository extends JpaRepository<Staff, Integer> {

}
