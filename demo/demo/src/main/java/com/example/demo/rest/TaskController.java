package com.example.demo.rest;

import com.example.demo.model.Task;
import com.example.demo.model.dto.TaskDto;
import com.example.demo.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/task")
public class TaskController {

    private final TaskService taskService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public void createTask(@RequestBody TaskDto taskdto) {
        taskService.createTask(taskdto);
    }

    @GetMapping
    public List<Task> getTasks() {
        return taskService.getTasks();
    }

    @GetMapping("/active")
    public List<Task> getActiveTasks() {
        return taskService.getActiveTasks();
    }

    @GetMapping("/analytics")
    public long getAnalytics() {
        return taskService.getAnalytics();
    }

    @GetMapping("/search")
    public List<Task> getTaskByKeywords(@RequestParam String keywords) {
        return taskService.getTasksByKeywords(keywords);
    }

    @PutMapping("/{id}")
    public void updateTask(@PathVariable String id, @RequestBody TaskDto taskDto) {
        taskService.updateTask(id, taskDto);
    }

    @PutMapping("/finished/{id}")
    public void updateIsFinishedTask(@PathVariable String id, @RequestParam boolean isFinished) {
        taskService.finishTask(id, isFinished);
    }

}
