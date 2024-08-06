package com.CraftyCoders.LaunchCash.models.dto;

//import com.CraftyCoders.LaunchCash.models.Profile;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import org.springframework.stereotype.Indexed;

@Entity
@Indexed
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty

    private String username;

    @NotEmpty
    private String hashedPassword;

    @NotEmpty
    private String email;

    private String role;

    private double balance;

//    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
//    private Profile profile;

    public User() {
    }

    public User(String username, String hashedPassword, String email) {
        this.username = username;
        this.hashedPassword = hashedPassword;
        this.email = email;
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

    public String getHashedPassword() {
        return hashedPassword;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public void setHashedPassword(String hashedPassword) {
        this.hashedPassword = hashedPassword;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    //public boolean isMatchingPassword(String password) {
      //  return encoder.matches(password, hashedPassword);
}


