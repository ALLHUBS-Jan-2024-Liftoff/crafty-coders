package com.CraftyCoders.LaunchCash.controllers;

import com.CraftyCoders.LaunchCash.repositories.UserRepository;
import com.CraftyCoders.LaunchCash.models.User;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:5174", allowCredentials = "true")
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> saveUser(@RequestParam String username,
                                      @RequestParam String email,
                                      @RequestParam String password,
                                      @NotNull HttpServletResponse response) {
        User newUser = new User();
        String hashedPassword = passwordEncoder.encode(password);
        newUser.setEmail(email);
        newUser.setUsername(username);
        newUser.setHashedPassword(hashedPassword);
        userRepository.save(newUser);

        Cookie sessionCookie = new Cookie("user_session", newUser.getId().toString());
        sessionCookie.setHttpOnly(true);
        sessionCookie.setPath("/");
        sessionCookie.setMaxAge(86400);
        response.addCookie(sessionCookie);

        return ResponseEntity.ok(newUser);
    }

    @GetMapping("/login")
    public ResponseEntity<?> loginUser(@RequestParam String username,
                                       @RequestParam String password,
                                       @CookieValue(value = "user_session",
                                               defaultValue = "")
                                       String userSessionCookie,
                                       HttpServletResponse response) {
        User existingUser = userRepository.findByUsername(username);

        if (existingUser == null || !passwordEncoder.matches(password, existingUser.getHashedPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Username or password incorrect.");
        }

        if (!userSessionCookie.isEmpty()) {
            Long userId = Long.parseLong(userSessionCookie);
            User sessionUser = userRepository.findById(userId).orElse(null);
            if (sessionUser != null) {
                return ResponseEntity.ok(sessionUser);
            }
        }

        Cookie sessionCookie = new Cookie("user_session", existingUser.getId().toString());
        sessionCookie.setHttpOnly(true);
        sessionCookie.setPath("/");
        sessionCookie.setMaxAge(86400);
        response.addCookie(sessionCookie);

        return ResponseEntity.ok(existingUser);
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logoutUser(HttpServletRequest request, HttpServletResponse response) {
        request.getSession().invalidate();

        Cookie cookie = new Cookie("user_session", null);
        cookie.setPath("/");
        cookie.setHttpOnly(true);
        cookie.setMaxAge(0);
        response.addCookie(cookie);

        return ResponseEntity.ok("Logged out successfully.");
    }

    @PostMapping("/{username}/friends")
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

    @GetMapping("/{username}/friends")
    public ResponseEntity<Set<User>> getFriends(@PathVariable String username) {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(user.getFriends());
    }
}


