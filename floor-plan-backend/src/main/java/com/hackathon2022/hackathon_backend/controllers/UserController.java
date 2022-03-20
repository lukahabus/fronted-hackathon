package com.hackathon2022.hackathon_backend.controllers;

import com.hackathon2022.hackathon_backend.dtos.LoginInfoDTO;
import com.hackathon2022.hackathon_backend.dtos.RegisterInfoDTO;
import com.hackathon2022.hackathon_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
public class UserController {
    @Autowired
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginInfoDTO loginInfoDTO) {
        return userService.login(loginInfoDTO.getUsername(), loginInfoDTO.getPassword());
    }

    @PostMapping("/register")
    public String register(@RequestBody RegisterInfoDTO registerInfoDTO) {
        return userService.register(RegisterInfoDTO.getModeratorFromDTO(registerInfoDTO));
    }
}
