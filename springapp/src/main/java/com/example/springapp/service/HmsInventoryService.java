package com.example.springapp.service;

import com.example.springapp.model.HmsInventory;

import java.util.List;

public interface HmsInventoryService {
    HmsInventory createInventory(HmsInventory inventory);
    HmsInventory getInventoryById(Long id);
    HmsInventory updateInventory(Long id, HmsInventory inventory);
    boolean deleteInventory(Long id);
    List<HmsInventory> getAllInventories();
}

