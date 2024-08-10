package com.CraftyCoders.LaunchCash.controllers;

import com.CraftyCoders.LaunchCash.repositories.UserRepository;
import com.CraftyCoders.LaunchCash.models.dto.User;
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

    @GetMapping("/find-user")
    public User getUser(@RequestParam String username) {
         return userRepository.findByUsername(username);
    }

//    @GetMapping("/search")
//    public ResponseEntity<?> searchForUser(@RequestParam String username) {
//        User foundUser = userRepository.findByUsername(username);
//
//        if (!(foundUser == null)) {
//            return ResponseEntity.ok(foundUser.get());
//        } else {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No user was found by that name");
//    }
}

//    @GetMapping("edit/{id}")
//    public String editUser(@PathVariable("id") Long id, Model model){
//        model.addAttribute("user", userRepository.getReferenceById(id));
//        return "user/form";
//    }
//    @PostMapping("delete/{id}")
//    public String deleteUser(@PathVariable("id") Long id){
//        userRepository.deleteById(id);
//        return "redirect:/users";
//    }


