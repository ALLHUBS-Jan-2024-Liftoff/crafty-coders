package com.CraftyCoders.LaunchCash.repositories;

import com.CraftyCoders.LaunchCash.models.dto.user;
import org.springframework.data.jpa.repository.JpaRepository;

public interface userRepo extends JpaRepository<user,Long> {
}
