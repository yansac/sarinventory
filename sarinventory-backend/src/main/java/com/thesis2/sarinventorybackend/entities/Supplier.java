package com.thesis2.sarinventorybackend.entities;

public class Supplier {
    private int id;
    private String supplierName;
    private String contact;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSupplierName() {
        return supplierName;
    }

    public void setSupplierName(String supplierName) {
        this.supplierName = supplierName;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public Supplier() {
    }

    public Supplier(int id, String supplierName, String contact) {
        this.id = id;
        this.supplierName = supplierName;
        this.contact = contact;
    }

    public Supplier(String supplierName, String contact) {
        this.supplierName = supplierName;
        this.contact = contact;
    }
}
