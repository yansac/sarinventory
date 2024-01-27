package com.thesis2.sarinventorybackend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table (name = "items")
public class Item {

    @Id
    @GeneratedValue
    private int id;
    private String itemName;
    private int stock;
    private LocalDate expiryDate;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public LocalDate getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(LocalDate expiryDate) {
        this.expiryDate = expiryDate;
    }

    public Item() {
    }

    public Item(int id, String itemName, int stock, LocalDate expiryDate) {
        this.id = id;
        this.itemName = itemName;
        this.stock = stock;
        this.expiryDate = expiryDate;
    }

    public Item(int id, String itemName, int stock) {
        this.id = id;
        this.itemName = itemName;
        this.stock = stock;
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "Item{" +
                "id=" + id +
                ", itemName='" + itemName + '\'' +
                ", stock=" + stock +
                ", expiryDate=" + expiryDate +
                '}';
    }
}
