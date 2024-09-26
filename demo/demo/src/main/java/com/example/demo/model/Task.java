package com.example.demo.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document
public class Task {
    @Id
    private String id;
    private String title;
    private String text;
    private LocalDateTime due;
    private LocalDateTime finishedDate;
    private Boolean isFinished;
    private String user;

}
