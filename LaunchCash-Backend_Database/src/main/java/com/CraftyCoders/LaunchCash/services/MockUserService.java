package com.CraftyCoders.LaunchCash.services;

import com.CraftyCoders.LaunchCash.models.MockUser;
import com.CraftyCoders.LaunchCash.repositories.MockUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MockUserService {

    @Autowired
    private MockUserRepo mockUserRepo;

    public MockUser postMockUser(MockUser mockUser) {return mockUserRepo.save(mockUser);}

    public List<MockUser> getAllMockUsers(){
        return mockUserRepo.findAll();
    }
}
