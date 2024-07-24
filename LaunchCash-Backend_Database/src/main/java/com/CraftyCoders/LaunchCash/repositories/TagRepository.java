package com.CraftyCoders.LaunchCash.repositories;

import com.CraftyCoders.LaunchCash.models.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TagRepository extends JpaRepository<Tag,Long> {
}
