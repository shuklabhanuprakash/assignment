package com.assignment.controller;

import java.security.Principal;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

	@GetMapping("/authenticate")
	public Principal authenticateUser(Principal user){
		return user;
	}
	
	
}
