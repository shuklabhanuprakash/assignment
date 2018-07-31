package com.assignment.service;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetailsService;

import com.assignment.model.User;

public interface UserService extends UserDetailsService{
	
	List<User> userList();

	User addUser(User user);

	String deleteUser(Long id);
}
