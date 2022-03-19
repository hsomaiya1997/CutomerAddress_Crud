package com.springboot.springbootemployeecrud.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="customer_address")
public class CustomerAddress {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    private String address;
    private String state;
    private String city;
    private int pincode;

    public CustomerAddress
            () {

    }

    @JsonIgnore
    @OneToOne(mappedBy = "customerAddress")
    private Customer customer;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getPincode() {
        return pincode;
    }

    public void setPincode(int pincode) {
        this.pincode = pincode;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public CustomerAddress(String address, String state, String city,int pincode) {
        this.address = address;
        this.state = state;
        this.city = city;
        this.pincode = pincode;
    }
}
