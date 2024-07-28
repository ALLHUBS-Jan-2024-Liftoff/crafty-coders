//package com.CraftyCoders.LaunchCash.models;
//
//import jakarta.persistence.*;
//
//import java.util.HashSet;
//import java.util.Set;
//
//@Entity
//public class Activity {
//    @Id
//    @GeneratedValue
//    private Long id;
//    private String type;
//    private double duration;
//    private double caloriesBurned;
//    @ManyToOne
//    private Profile profile;
//
//    @ManyToMany
//    private Set<Tag> tags = new HashSet<>();
//
//    public Activity() {
//    }
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public double getDuration() {
//        return duration;
//    }
//
//    public void setDuration(double duration) {
//        this.duration = duration;
//    }
//
//    public double getCaloriesBurned() {
//        return caloriesBurned;
//    }
//
//    public void setCaloriesBurned(double caloriesBurned) {
//        this.caloriesBurned = caloriesBurned;
//    }
//
//    public Profile getProfile() {
//        return profile;
//    }
//
//    public void setProfile(Profile profile) {
//        this.profile = profile;
//    }
//
//    public Set<Tag> getTags() {
//        return tags;
//    }
//
//    public void setTags(Set<Tag> tags) {
//        this.tags = tags;
//    }
//
//    public String getType() {
//        return type;
//    }
//
//    public void setType(String type) {
//        this.type = type;
//    }
//}
