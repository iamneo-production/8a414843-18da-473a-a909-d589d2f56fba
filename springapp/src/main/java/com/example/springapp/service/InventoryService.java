package com.example.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springapp.hmsapp.common.ResourceNotFoundException;
import com.springapp.hmsapp.model.Inventory;
import com.springapp.hmsapp.repository.InventoryRepository;

@Service
public class InventoryService {
	
	@Autowired
	private InventoryRepository inventoryRepository;
	
	public Inventory createInventoryItem(Inventory inventory) {
        return inventoryRepository.save(inventory);
    }

    public Inventory updateInventoryItem(Inventory inventory) {
        if (inventoryRepository.existsById(inventory.getId())) {
            inventory.setId(inventory.getId());
            return inventoryRepository.save(inventory);
        } else {
            throw new ResourceNotFoundException("Inventory item not found with ID: " + inventory.getId());
        }
    }

    public void deleteInventoryItem(int id) {
        if (inventoryRepository.existsById(id)) {
            inventoryRepository.deleteById(id);
        } else {
            throw new ResourceNotFoundException("Inventory item not found with ID: " + id);
        }
    }

    public List<Inventory> getAllInventoryItems() {
        return inventoryRepository.findAll();
    }

    public Inventory getInventoryItemById(int id) {
        return inventoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Inventory item not found with ID: " + id));
    }
}
