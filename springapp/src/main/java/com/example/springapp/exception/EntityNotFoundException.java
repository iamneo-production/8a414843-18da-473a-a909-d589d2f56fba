package com.example.springapp.exception;

public class EntityNotFoundException  extends RuntimeException {
    public EntityNotFoundException(Long id) {
        super("Could not find the entity with id " + id);
    }
}
