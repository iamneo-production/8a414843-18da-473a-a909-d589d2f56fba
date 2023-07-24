package com.example.springapp.model;


import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class HmsRole {

    @Id
    private Long id;
    private String role_name;

    public HmsRole(Long id, String role_name) {
        this.id = id;
        this.role_name = role_name;
    }

    public HmsRole() {
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getRole_name() {
        return role_name;
    }

    public void setRole_name(String role_name) {
        this.role_name = role_name;
    }
}
