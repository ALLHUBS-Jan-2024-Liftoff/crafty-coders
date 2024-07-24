package com.CraftyCoders.LaunchCash.models;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.time.LocalDate;


@Entity
public class Transaction {


    @Id
    @GeneratedValue
    private Long id;



    private String sender;

    private String receiver;
    private float amount;

    private LocalDate transactiondate
// add a date or something to track the transactions for each one



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }
    public String getReceiver() {
        return receiver;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }

    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }



}

;