package com.example.springapp.controller;

import com.example.springapp.model.HmsInventory;
import com.example.springapp.service.HmsInventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/inventory")
public class HmsInventoryController {
    private final HmsInventoryService inventoryService;
@Autowired
    public HmsInventoryController(HmsInventoryService inventoryService) {
        this.inventoryService = inventoryService;
    }

    @PostMapping
    public ResponseEntity<HmsInventory> createInventory(@RequestBody HmsInventory inventory) {
        HmsInventory createdInventory = inventoryService.createInventory(inventory);
        return ResponseEntity.ok(createdInventory);
    }
    @CrossOrigin(origins = "http://localhost:8081")
    @GetMapping("/{id}")
    public ResponseEntity<HmsInventory> getInventoryById(@PathVariable("id") Long id) {
        HmsInventory inventory = inventoryService.getInventoryById(id);
        if (inventory != null) {
            return ResponseEntity.ok(inventory);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<HmsInventory> updateInventory(@PathVariable("id") Long id, @RequestBody HmsInventory inventory) {
        HmsInventory updatedInventory = inventoryService.updateInventory(id, inventory);
        if (updatedInventory != null) {
            return ResponseEntity.ok(updatedInventory);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteInventory(@PathVariable("id") Long id) {
        boolean deleted = inventoryService.deleteInventory(id);
        if (deleted) {
            return ResponseEntity.ok("Deleted Successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @CrossOrigin(origins = "http://localhost:8081")
    @GetMapping
    public ResponseEntity<List<HmsInventory>> getAllInventories() {
        List<HmsInventory> inventories = inventoryService.getAllInventories();
        return ResponseEntity.ok(inventories);
    }
}
