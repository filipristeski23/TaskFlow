package com.example.demo.service;

import com.example.demo.configuration.exception.RecordNotFoundException;
import com.example.demo.model.Task;
import com.example.demo.model.dto.TaskDto;
import com.example.demo.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class TaskServiceImpl implements TaskService{

    private final TaskRepository taskRepository;

    @Override
    public void createTask(TaskDto taskDto) {
        if(!taskDto.getTitle().isEmpty()) {
            Task task = new Task();
            task.setTitle(taskDto.getTitle());
            task.setText(taskDto.getText());
            task.setDue(taskDto.getDue());
            task.setFinishedDate(taskDto.getFinishedDate());
            task.setIsFinished(taskDto.getIsFinished());
            task.setUser(taskDto.getUser());

            taskRepository.save(task);
        }
    }

    @Override
    public List<Task> getTasks() {
        return taskRepository.findAll();
    }

    @Override
    public List<Task> getActiveTasks() {
        return taskRepository.findByIsFinishedFalse();
    }

    @Override
    public long getAnalytics() {
        LocalDate today = LocalDate.now();
        LocalDateTime startDateTime = today.atStartOfDay();
        LocalDateTime endDateTime = today.plusDays(1).atStartOfDay();

        return taskRepository.countByFinishedDateBetween(startDateTime, endDateTime);
    }

    @Override
    public List<Task> getTasksByKeywords(String keywords) {
        return taskRepository.findByTitleContaining(keywords);
    }

    @Override
    public void finishTask(String id, boolean isFinished) {
        Task task = taskRepository.findById(id).orElseThrow(
                () -> new RecordNotFoundException("task not found"));

        task.setIsFinished(isFinished);
        if(isFinished) {
            task.setFinishedDate(LocalDateTime.now());
        } else {
            task.setFinishedDate(null);
        }
        taskRepository.save(task);
    }

    @Override
    public void updateTask(String id, TaskDto taskDto) {
        Task task = taskRepository.findById(id).orElseThrow(
                () -> new RecordNotFoundException("task not found"));

        task.setTitle(taskDto.getTitle());
        task.setText(taskDto.getText());
        task.setDue(taskDto.getDue());
        task.setIsFinished(taskDto.getIsFinished());
        task.setFinishedDate(taskDto.getFinishedDate());
        task.setUser(taskDto.getUser());

        taskRepository.save(task);
    }
}
