package com.CraftyCoders.LaunchCash.repositories;

import com.CraftyCoders.LaunchCash.models.ContactForm;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactFormRepository extends JpaRepository <ContactForm, Long> {
}
