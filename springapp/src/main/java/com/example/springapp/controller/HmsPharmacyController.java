package com.example.springapp.controller;

import com.example.springapp.model.HmsAppointment;
import com.example.springapp.model.HmsInventory;
import com.example.springapp.model.HmsPharmacy;
import com.example.springapp.service.HmsPharmacyService;
import com.example.springapp.serviceImplementation.HmsInventoryServiceImpl;
import com.example.springapp.serviceImplementation.HmsPharmacyServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class HmsPharmacyController {

    @Autowired
    private HmsInventoryServiceImpl hmsInventoryService;

    @Autowired
    private HmsPharmacyService pharmacyService;

    @PostMapping("/api/pharmacy")
    public List<HmsPharmacy> savePharmacy(@RequestBody List<HmsPharmacy> pharmacy){
        for (int i=0;i<pharmacy.size();i++){
            HmsInventory data = hmsInventoryService.getInventoryById(pharmacy.get(i).getMedicine_id());
            Long inventoryQuantity = data.getQuantity();
            Long pharmacyQuantity = pharmacy.get(i).getQuantity();
            Long resultQuantity = inventoryQuantity-pharmacyQuantity;
            System.out.println(resultQuantity);
            data.setQuantity(resultQuantity);
            hmsInventoryService.updateInventory(data.getId(),data);
        }
        return pharmacyService.savePharmacy(pharmacy);
    }

    @GetMapping("/api/pharmacy")
    public List<HmsPharmacy> fetchPharmacyList(){
        return pharmacyService.fetchPharmacyList();
    }

    @DeleteMapping("/api/pharmacy")
    public String deletePharmacy(@RequestParam("id") Long pharmacyId){
        pharmacyService.deletePharmacy(pharmacyId);
        return "Deleted";
    }

    @PutMapping("/api/pharmacy/{id}")
    public HmsPharmacy updatePharmacy(@PathVariable Long id, @RequestBody HmsPharmacy updatedPharmacy){
        return pharmacyService.updatePharmacy(id, updatedPharmacy);
    }

    @GetMapping("/api/pharmacy/{id}")
    public HmsPharmacy getPharmacyById(@PathVariable Long id) {
        return pharmacyService.getPharmacyById(id);
    }

}