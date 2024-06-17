import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { TaskService } from '../services/task.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  project_id: string;
  name: string;
  description: string;
  assignee_id: string;
  status: string;
  priority: string;
  start_date: string;
  due_date: string;
  errorMessage: string;

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {}

  createtask() {
    this.taskService.createTask({
      project_id: this.project_id,
      name: this.name,
      description: this.description,
      assignee_id: this.assignee_id,
      status: this.status,
      priority: this.priority,
      start_date: this.start_date,  // Or new Date().toISOString(),
      due_date: this.due_date       // Or new Date().toISOString()
    }).subscribe(
      res => {
        this.router.navigate(['/task']); // Navigate to the tasks page upon successful task creation
      },
      err => {
        this.errorMessage = 'Cannot create task, please try again'; // Error message
        console.error('Error:', err);
      }
    );
  }
}
