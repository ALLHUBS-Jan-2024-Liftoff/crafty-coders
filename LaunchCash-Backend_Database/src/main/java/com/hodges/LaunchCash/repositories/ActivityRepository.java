package com.hodges.LaunchCash.repositories;

import com.hodges.LaunchCash.models.Activity;
import com.hodges.LaunchCash.models.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActivityRepository extends JpaRepository<Activity,Long> {
    List<Activity> findByTagsContains(Tag tag);
}
