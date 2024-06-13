import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ITask } from '../../entities/task'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: ITask[] = [];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.getAlltasks();
  }

  getAlltasks() {
    this.taskService.getAlltasks().subscribe(
      data => {
        console.log('Data received:', data); // Debugging line
        this.tasks = data;
      },
      error => console.error('Lỗi khi lấy bài viết:', error)
    );
  }
}
