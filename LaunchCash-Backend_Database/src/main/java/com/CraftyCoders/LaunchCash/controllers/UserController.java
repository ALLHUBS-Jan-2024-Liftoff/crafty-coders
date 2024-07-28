package com.CraftyCoders.LaunchCash.controllers;

import com.CraftyCoders.LaunchCash.repositories.UserRepository;
import com.CraftyCoders.LaunchCash.models.dto.User;
//import com.CraftyCoders.LaunchCash.services.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

//    @Autowired
//    private JwtService jwtService;

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

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestParam String username,
                                       @RequestParam String password) {
        User existingUser = userRepository.findByUsername(username);

        if (existingUser == null || !passwordEncoder.matches(password, existingUser.getHashedPassword())) {
            throw new IllegalArgumentException("Username or password incorrect.");
        }

        //String token = jwtService.generateToken(existingUser);

        Map<String, Object> response = new HashMap<>();
        //response.put("token", token);
        response.put("user", existingUser);

        return ResponseEntity.ok(response);
    }
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


