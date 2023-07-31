package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.Inventory;

public interface InventoryRepository extends JpaRepository<Inventory, Long>{

}
