package com.CraftyCoders.LaunchCash.repositories;

import com.CraftyCoders.LaunchCash.models.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactMessageRepository extends JpaRepository <ContactMessage, Long> {
}
