package com.hodges.LaunchCash.controllers;

import com.hodges.LaunchCash.models.Activity;
import com.hodges.LaunchCash.models.Tag;
import com.hodges.LaunchCash.repositories.ActivityRepository;
import com.hodges.LaunchCash.repositories.TagRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("tags")
public class TagController {

    @Autowired
    private TagRepository tagRepository;
    @Autowired
    private ActivityRepository activityRepository;

    @GetMapping
    public String getAllTags(Model model) {
        model.addAttribute("tags", tagRepository.findAll());
        return "tag/list";
    }

    @GetMapping("/new")
    public String showNewTagForm(Model model) {
        model.addAttribute("tag", new Tag());
        return "tag/form";
    }

    @PostMapping
    public String saveTag(@ModelAttribute("tag") @Valid Tag tag, Errors errors, Model model) {
        tagRepository.save(tag);
        return "redirect:/tags";
    }
    @GetMapping("/edit/{id}")
    public String showEditTagForm(@PathVariable("id") Long id, Model model) {
        model.addAttribute("tag", tagRepository.getReferenceById(id));
        return "tag/form";
    }

    @PostMapping("/delete/{id}")
    public String deleteTag(@PathVariable("id") Long id) {
        tagRepository.deleteById(id);
        return "redirect:/tags";
    }
    @GetMapping("/{id}/activities")
    public String getActivitiesByTag(@PathVariable("id") Long id, Model model){
        Tag tag = tagRepository.getReferenceById(id);
        List<Activity> activities = activityRepository.findByTagsContains(tag);
        model.addAttribute("activities", activities);
        model.addAttribute("tag", tag);
        return "activity/list";
    }
}
