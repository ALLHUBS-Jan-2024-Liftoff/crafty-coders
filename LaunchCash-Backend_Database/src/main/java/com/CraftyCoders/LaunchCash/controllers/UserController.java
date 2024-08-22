package com.CraftyCoders.LaunchCash.controllers;

import com.CraftyCoders.LaunchCash.repositories.UserRepository;
import com.CraftyCoders.LaunchCash.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin("http://localhost:5173")
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;



    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public User saveUser(@RequestParam String username,
                         @RequestParam String email,
                         @RequestParam String password) {
        User newUser = new User();
        String hashedPassword = passwordEncoder.encode(password);
        newUser.setEmail(email);
        newUser.setUsername(username);
        newUser.setHashedPassword(hashedPassword);
        return userRepository.save(newUser);
    }

    @GetMapping("/login")
    public ResponseEntity<?> loginUser(@RequestParam String username,
                                       @RequestParam String password) {
        User existingUser = userRepository.findByUsername(username);

        if (existingUser == null || !passwordEncoder.matches(password, existingUser.getHashedPassword())) {
            throw new IllegalArgumentException("Username or password incorrect.");
        }

        Map<String, Object> response = new HashMap<>();
        response.put("user", existingUser);

        return ResponseEntity.ok(response);
    }

    @PostMapping("/{username}/friends/add")
    public ResponseEntity<String> addFriend(@PathVariable String username, @RequestParam String friendName) {
        User existingUser = userRepository.findByUsername(username);
        if (existingUser == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found.");
        }

        User friendUser = userRepository.findByUsername(friendName);
        if (friendUser == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Friendly user not found.");
        }

        try {
            existingUser.addFriend(friendUser);
            userRepository.save(existingUser);
            return ResponseEntity.ok("Friend added successfully.");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @DeleteMapping("/{username}/friends/remove")
    public ResponseEntity<String> removeFriend(@PathVariable String username,
                                             @RequestParam String friendName) {
        User existingUser = userRepository.findByUsername(username);
        if (existingUser == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found.");
        }

        User friendUser = userRepository.findByUsername(friendName);
        if (friendUser == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Friendly user not found.");
        }

        try {
            existingUser.removeFriend(friendUser);
            userRepository.save(existingUser);
            return ResponseEntity.ok("Ejected {friendName} into space.");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @GetMapping("/{username}/friends/get")
    public ResponseEntity<Set<User>> getFriends(@PathVariable String username) {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(user.getFriends());
    }

    @GetMapping("/get-all")
    public ResponseEntity<List<User>> getAllUsers() {
        try {
            List<User> users = userRepository.findAll();
            return ResponseEntity.ok(users);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }
}