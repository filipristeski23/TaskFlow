package com.example.demo.service;

import com.example.demo.model.dto.UserDto;
import org.springframework.http.ResponseEntity;

public interface UserService {
    ResponseEntity<String> registerUser(UserDto userDto);
    ResponseEntity<String> loginUser(UserDto userDto);
}
