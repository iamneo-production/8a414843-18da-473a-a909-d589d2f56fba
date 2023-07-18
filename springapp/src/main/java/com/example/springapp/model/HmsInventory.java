package com.example.springapp.model;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class HmsInventory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long quantity;
    private Long price;
    private String medicineName;
    private String usages;
    private String itemNumber;
    private String category;
    private String expiryStatus;
    @CreationTimestamp
    private Date created;
    @UpdateTimestamp
    private Date updated;
    private boolean status=true;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public String getMedicineName() {
        return medicineName;
    }

    public void setMedicineName(String medicineName) {
        this.medicineName = medicineName;
    }

    public String getUsages() {
        return usages;
    }

    public void setUsages(String usages) {
        this.usages = usages;
    }

    public String getItemNumber() {
        return itemNumber;
    }

    public void setItemNumber(String itemNumber) {
        this.itemNumber = itemNumber;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getExpiryStatus() {
        return expiryStatus;
    }

    public void setExpiryStatus(String expiryStatus) {
        this.expiryStatus = expiryStatus;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public Date getUpdated() {
        return updated;
    }

    public void setUpdated(Date updated) {
        this.updated = updated;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "HmsInventory{" +
                "id=" + id +
                ", quantity=" + quantity +
                ", price=" + price +
                ", medicineName='" + medicineName + '\'' +
                ", usages='" + usages + '\'' +
                ", itemNumber='" + itemNumber + '\'' +
                ", category='" + category + '\'' +
                ", expiryStatus='" + expiryStatus + '\'' +
                ", created='" + created + '\'' +
                ", updated='" + updated + '\'' +
                ", status=" + status +
                '}';
    }

    public HmsInventory() {
        super();
    }
}
