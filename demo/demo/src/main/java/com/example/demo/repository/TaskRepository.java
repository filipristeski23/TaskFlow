package com.example.demo.repository;

import com.example.demo.model.Task;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface TaskRepository extends MongoRepository<Task, String> {
    List<Task> findByIsFinishedFalse();

    long countByFinishedDateBetween(LocalDateTime startOfDay, LocalDateTime endOfDay);

    List<Task> findByTitleContaining(String keywords);

}
