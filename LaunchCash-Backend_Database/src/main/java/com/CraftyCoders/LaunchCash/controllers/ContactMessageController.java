package com.CraftyCoders.LaunchCash.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.CraftyCoders.LaunchCash.models.ContactMessage;
import com.CraftyCoders.LaunchCash.repositories.ContactMessageRepository;
@RestController
@RequestMapping("/contactus")
public class ContactMessageController {
    @Autowired
    private ContactMessageRepository contactMessageRepository;

    @PostMapping
    public ResponseEntity<ContactMessage> createMessage(@RequestBody ContactMessage contactMessage) {
        ContactMessage savedMessage = contactMessageRepository.save(contactMessage);  // Save the message
        return ResponseEntity.ok(savedMessage);
    }
}
