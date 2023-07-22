package com.example.springapp.repository;

import com.example.springapp.model.HmsAppointment;
import com.example.springapp.model.HmsPharmacy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface HmsPharmacyRepository extends JpaRepository<HmsPharmacy,Long> {
    List<HmsPharmacy> findAllByAppointment(HmsAppointment appointmentId);

    List<HmsPharmacy> findAllByStatusTrue();
}
