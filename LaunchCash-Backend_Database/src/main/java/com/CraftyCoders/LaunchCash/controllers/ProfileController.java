package com.CraftyCoders.LaunchCash.controllers;

import com.CraftyCoders.LaunchCash.repositories.ProfileRepository;
import com.CraftyCoders.LaunchCash.repositories.UserRepository;
import com.CraftyCoders.LaunchCash.models.Profile;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("profiles")
public class ProfileController {
    @Autowired
    private ProfileRepository profileRepository;
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public String getAllProfiles(Model model, HttpSession session){
        Long userId = (Long) session.getAttribute("user");
        model.addAttribute("profiles",profileRepository.findByUserId(userId));
//        model.addAttribute("profiles",profileRepository.findAll());
        return "profile/list";
    }

    @GetMapping("new")
    public String showNewProfileForm(Model model){
        model.addAttribute("profile", new Profile());
        model.addAttribute("users", userRepository.findAll());

        return "profile/form";
    }

    @PostMapping
    public String saveProfile(@ModelAttribute("profile") Profile profile){
        profileRepository.save(profile);
        return "redirect:/profiles";
    }

    @GetMapping("edit/{id}")
    public String editProfile(@PathVariable("id") Long id, Model model){
        model.addAttribute("profile", profileRepository.getReferenceById(id));
        model.addAttribute("users", userRepository.findAll());
        return "profile/form";
    }
    @PostMapping("delete/{id}")
    public String deleteProfile(@PathVariable("id") Long id){
        profileRepository.deleteById(id);
        return "redirect:/profiles";
    }
}
