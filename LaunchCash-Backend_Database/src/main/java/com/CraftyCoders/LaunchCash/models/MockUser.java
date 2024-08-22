package com.CraftyCoders.LaunchCash.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import org.springframework.stereotype.Indexed;

import java.awt.*;

@Entity
@Indexed
public class MockUser {

    @Id
    private Long id;
    @NotEmpty
    private String username;
    @NotEmpty
    private String email;
    private Image avatar;
    private boolean isFriend;

    public MockUser(Long id, String username, String email, Image avatar) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.avatar = avatar;
        this.isFriend = isFriend;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Image getAvatar() {
        return avatar;
    }

    public void setAvatar(Image avatar) {
        this.avatar = avatar;
    }
}
