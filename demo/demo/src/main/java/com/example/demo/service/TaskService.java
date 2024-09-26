package com.example.demo.service;


import com.example.demo.model.Task;
import com.example.demo.model.dto.TaskDto;

import java.time.LocalDateTime;
import java.util.List;

public interface TaskService {
    void createTask(TaskDto taskDto);
    List<Task> getTasks();
    List<Task> getActiveTasks();
    long getAnalytics();
    List<Task> getTasksByKeywords(String keywords);
    void finishTask(String id, boolean isFinished);
    void updateTask(String id, TaskDto taskDto);
}
