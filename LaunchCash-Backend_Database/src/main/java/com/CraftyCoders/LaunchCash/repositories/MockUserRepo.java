package com.CraftyCoders.LaunchCash.repositories;

import com.CraftyCoders.LaunchCash.models.MockUser;
import org.checkerframework.framework.qual.MonotonicQualifier;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MockUserRepo extends JpaRepository<MockUser, Long> {
}
