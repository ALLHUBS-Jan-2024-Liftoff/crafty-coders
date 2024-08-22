package com.CraftyCoders.LaunchCash.controllers;

import com.CraftyCoders.LaunchCash.models.MockUser;
import com.CraftyCoders.LaunchCash.services.MockUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
@RequestMapping("/api/mockUsers")
public class MockUserController {

    @Autowired
    private MockUserService mockUserService;

    @PostMapping("/create")
    public MockUser postMockUser(@RequestBody MockUser mockUser) {return mockUserService.postMockUser(mockUser);}

    @GetMapping("/return")
    public List<MockUser> getAllMockUsers() {
        return mockUserService.getAllMockUsers();
    }
}
