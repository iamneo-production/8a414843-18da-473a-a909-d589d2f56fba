package com.example.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.common.ResourceNotFoundException;
import com.example.springapp.model.Inventory;
import com.example.springapp.repository.InventoryRepository;

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
            return createInventoryItem(inventory);
        }
    }

    public void deleteInventoryItem(Long id) {
        if (inventoryRepository.existsById(id)) {
            inventoryRepository.deleteById(id);
        } else {
            throw new ResourceNotFoundException("Inventory item not found with ID: " + id);
        }
    }

    public List<Inventory> getAllInventoryItems() {
        return inventoryRepository.findAll();
    }

    public Inventory getInventoryItemById(Long id) {
        return inventoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Inventory item not found with ID: " + id));
    }
}
