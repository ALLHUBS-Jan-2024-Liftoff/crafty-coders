package com.hodges.LaunchCash.repositories;

import com.hodges.LaunchCash.models.dto.user;
import org.springframework.data.jpa.repository.JpaRepository;

public interface userRepo extends JpaRepository<user,Long> {
}
