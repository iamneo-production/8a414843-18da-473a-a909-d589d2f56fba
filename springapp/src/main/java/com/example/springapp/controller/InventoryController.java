package com.example.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.springapp.model.Inventory;
import com.example.springapp.service.InventoryService;

@Controller
public class InventoryController {
	
	@Autowired
	private InventoryService inventoryService;

	// Endpoint to create a new inventory item
    @PostMapping("/inventory")
    public ResponseEntity<Inventory> createInventoryItem(@RequestBody Inventory inventory) {
        Inventory newInventoryItem = inventoryService.createInventoryItem(inventory);
        return ResponseEntity.status(HttpStatus.CREATED).body(newInventoryItem);
    }

    // Endpoint to update an existing inventory item
    @PutMapping("/inventory")
    public ResponseEntity<Inventory> updateInventoryItem(@RequestBody Inventory inventory) {
        Inventory updatedInventoryItem = inventoryService.updateInventoryItem(inventory);
        return ResponseEntity.status(201).body(updatedInventoryItem);
    }

    // Endpoint to delete an inventory item
    @DeleteMapping("/inventory/{id}")
    public ResponseEntity<String> deleteInventoryItem(@PathVariable Long id) {
        inventoryService.deleteInventoryItem(id);
        return ResponseEntity.ok("Deleted Successfully");
    }

    // Endpoint to retrieve all inventory items
    @GetMapping("/inventory")
    public ResponseEntity<List<Inventory>> getAllInventoryItems() {
        List<Inventory> inventoryItems = inventoryService.getAllInventoryItems();
        return ResponseEntity.ok(inventoryItems);
    }

    // Endpoint to retrieve an inventory item by ID
    @GetMapping("/inventory/{id}")
    public ResponseEntity<Inventory> getInventoryItemById(@PathVariable Long id) {
        Inventory inventoryItem = inventoryService.getInventoryItemById(id);
        return ResponseEntity.ok(inventoryItem);
    }

}
