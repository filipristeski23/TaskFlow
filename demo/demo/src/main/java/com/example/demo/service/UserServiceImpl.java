package com.example.demo.service;

import com.example.demo.configuration.exception.UserAlreadyExistsException;
import com.example.demo.model.User;
import com.example.demo.model.dto.UserDto;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public ResponseEntity<String> registerUser(UserDto userDto) {
        if (!userDto.getEmail().isEmpty() && !userDto.getPassword().isEmpty()) {
            User userEmail = userRepository.findByEmail(userDto.getEmail());

            if (userEmail == null) {
                User user = new User();
                user.setEmail(userDto.getEmail());
                user.setPassword(passwordEncoder.encode(userDto.getPassword()));

                userRepository.save(user);
                return ResponseEntity.status(201).body("Register successful");
            } else {
                throw new UserAlreadyExistsException("User already registered with that email");
            }
        }
        return ResponseEntity.status(400).body("Email or password cannot be empty");
    }

    @Override
    public ResponseEntity<String> loginUser(UserDto userDto) {
        User user = userRepository.findByEmail(userDto.getEmail());
        if (user == null || !passwordEncoder.matches(userDto.getPassword(), user.getPassword())) {
            return ResponseEntity.status(401).body("Invalid email or password");
        }
        return ResponseEntity.ok("Login successful");
    }
}
