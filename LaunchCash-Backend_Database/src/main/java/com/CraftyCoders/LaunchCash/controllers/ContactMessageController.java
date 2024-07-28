package com.CraftyCoders.LaunchCash.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api.contactus")
public class ContactMessageController {
    @Autowired
    private ContactMessage contactMessage;

    @PostMapping
    public ResponseEntity<ContactMessage> createMessage (@RequestBody ContactMessage contactMessage) {
        ContactMessage savedMessage = contactMessageRepository.save(contactMessage);
        return ResponseEntity.ok(savedMessage);
    }
}
