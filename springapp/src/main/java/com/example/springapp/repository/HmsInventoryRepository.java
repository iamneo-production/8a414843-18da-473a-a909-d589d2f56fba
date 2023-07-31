package com.example.springapp.repository;

import com.example.springapp.model.HmsInventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HmsInventoryRepository extends JpaRepository<HmsInventory,Long> {
}
