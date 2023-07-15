package com.example.springapp.serviceImplementation;

import com.example.springapp.common.ResourceNotFoundException;
import com.example.springapp.exception.EntityNotFoundException;
import com.example.springapp.model.HmsInventory;
import com.example.springapp.repository.HmsInventoryRepository;
import com.example.springapp.service.HmsInventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
@Service
public class HmsInventoryServiceImpl implements HmsInventoryService {
    private final HmsInventoryRepository inventoryRepository;
@Autowired
    public HmsInventoryServiceImpl(HmsInventoryRepository inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }

    @Override
    public HmsInventory createInventory(HmsInventory inventory) {
        return inventoryRepository.save(inventory);
    }

    @Override
    public HmsInventory getInventoryById(Long id) {
        return inventoryRepository.findById(id).orElseThrow(()->new EntityNotFoundException(id));
    }

    @Override
    public HmsInventory updateInventory(Long id, HmsInventory inventory) {
        HmsInventory existingInventory = inventoryRepository.findById(id).orElseThrow(()->new EntityNotFoundException(id));
        if (existingInventory != null) {

            existingInventory.setQuantity(inventory.getQuantity());
            existingInventory.setPrice(inventory.getPrice());
            existingInventory.setMedicineName(inventory.getMedicineName());
            existingInventory.setUsages(inventory.getUsages());
            existingInventory.setItemNumber(inventory.getItemNumber());
            existingInventory.setCategory(inventory.getCategory());
            existingInventory.setExpiryStatus(inventory.getExpiryStatus());
            existingInventory.setUpdated(inventory.getUpdated());
            existingInventory.setCreated(inventory.getCreated());

            return inventoryRepository.save(existingInventory);
        }
        return null;
    }
    @Override
    public boolean deleteInventory(Long id) {
        if (inventoryRepository.existsById(id)) {
            inventoryRepository.deleteById(id);
            return true;
        }
        else {
            throw new ResourceNotFoundException("Inventory item not found with ID: " + id);
        }

    }
    @Override
    public List<HmsInventory> getAllInventories() {
        return inventoryRepository.findAll();
    }
}
