package org.carth.springreact.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class WelcomeAuthController {
    @GetMapping("/welcome")
    public String welcome(){
        return "Welcome to the Spring Boot Azure Active Directory Protected API";
    }
}