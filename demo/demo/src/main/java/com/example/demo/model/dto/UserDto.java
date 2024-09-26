package com.example.demo.model.dto;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class UserDto {
    private String email;
    private String password;
}
