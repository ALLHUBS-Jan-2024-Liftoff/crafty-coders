package com.CraftyCoders.LaunchCash.repositories;

import com.CraftyCoders.LaunchCash.models.Activity;
import com.CraftyCoders.LaunchCash.models.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActivityRepository extends JpaRepository<Activity,Long> {
    List<Activity> findByTagsContains(Tag tag);
}
