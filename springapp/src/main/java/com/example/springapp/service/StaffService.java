package com.example.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.common.ResourceNotFoundException;
import com.example.springapp.model.Staff;
import com.example.springapp.repository.StaffRepository;

@Service
public class StaffService {
	
	@Autowired
	private StaffRepository staffRepository;
	
	public Staff createStaff(Staff staff) {
        return staffRepository.save(staff);
    }

    public Staff updateStaff(Staff staff) {
        if (!staffRepository.existsById(staff.getId())) {
            throw new ResourceNotFoundException("Staff member not found with id: " + staff.getId());
        }
        staff.setId(staff.getId());
        return staffRepository.save(staff);
    }

    public void deleteStaff(int id) {
        if (!staffRepository.existsById(id)) {
            throw new ResourceNotFoundException("Staff member not found with id: " + id);
        }
        staffRepository.deleteById(id);
    }

    public List<Staff> getAllStaff() {
        return staffRepository.findAll();
    }

    public Staff getStaffById(int id) {
        return staffRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Staff member not found with id: " + id));
    }

}
