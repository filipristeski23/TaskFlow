package com.example.demo.model.dto;

import lombok.Data;
import lombok.NonNull;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document
public class TaskDto {
    private String title;
    private String text;
    private LocalDateTime due;
    private LocalDateTime finishedDate;
    private Boolean isFinished;
    private String user;
}
