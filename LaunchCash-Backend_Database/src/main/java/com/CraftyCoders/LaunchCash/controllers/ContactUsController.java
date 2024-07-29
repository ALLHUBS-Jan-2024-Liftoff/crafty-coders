package com.CraftyCoders.LaunchCash.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.CraftyCoders.LaunchCash.models.ContactUs
import com.CraftyCoders.LaunchCash.repositories.ContactUsRepository

@RestController
@RequestMapping("/api/contactus")
public class ContactUsController {

    @Autowired
    private ContactUsRepository contactUsRepository;

    @PostMapping
    public ResponseEntity<ContactUs> createMessage(@RequestBody ContactUs contactMessage) {
        ContactUs savedMessage = contactUsRepository.save (contactUs);
        return ResponseEntity.ok(savedMessage);
    }
}

