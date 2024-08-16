package com.CraftyCoders.LaunchCash.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.CraftyCoders.LaunchCash.models.ContactForm;
import com.CraftyCoders.LaunchCash.repositories.ContactFormRepository;
@RestController
@RequestMapping("/contactform")
public class ContactFormController {
    @Autowired
    private ContactFormRepository contactFormRepository;

    @PostMapping
    public ResponseEntity<ContactForm> createMessage(@RequestBody ContactForm contactForm) {
        ContactForm savedMessage = contactFormRepository.save(contactForm);
        return ResponseEntity.ok(savedMessage);
    }
}
