package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springapp.hmsapp.model.Inventory;

public interface InventoryRepository extends JpaRepository<Inventory, Integer>{

}
