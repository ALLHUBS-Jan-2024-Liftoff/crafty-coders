//package com.CraftyCoders.LaunchCash.services;
//
//import com.CraftyCoders.LaunchCash.models.dto.User;
//import com.CraftyCoders.LaunchCash.repositories.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.stereotype.Service;
//
//@Service
//public class UserService {
//    @Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private JwtService jwtService;
//
//    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//
//    // Register a new user
//    public String registerUser(String username, String password, String email) {
//        if (userRepository.findByUsername(username) != null) {
//            return "Username already exists";
//        }
//        User user = new User();
//        user.setUsername(username);
//        user.setHashedPassword(encoder.encode(password));
//        user.setEmail(email);
//        userRepository.save(user);
//        return "User registered successfully";
//    }
//
//    // Authenticate and generate a token for the user
//    public String loginUser(String username, String password) {
//        User user = userRepository.findByUsername(username);
//        if (user == null || !encoder.matches(password, user.getHashedPassword())) {
//            return "Invalid username or password";
//        }
//
//        String token = jwtService.generateToken(user.getId().toString());
//        return "Login successful, token: " + token;
//    }
//}
//
//
