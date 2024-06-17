import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../admin/services/task.service';
import { ITask } from '../admin/entities/task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  task: ITask = {
    _id: '',
    id: '',
    project_id: '',
    name: '',
    description: '',
    assignee_id: '',
    status: 'to do',
    priority: 'low',
    start_date: new Date(), // Ensure this is a Date object
    due_date: new Date()    // Ensure this is a Date object
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getTask(id);
    } else {
      console.error('Task ID is not provided in the route.');
    }
  }

  getTask(id: string): void {
    this.taskService.getTaskById(id).subscribe(
      (data: ITask) => {
        if (data) {
          this.task = data;
          console.log('Task assigned:', this.task);
        } else {
          console.error('API response does not contain task data');
        }
      },
      error => {
        console.error('Error fetching task:', error);
      }
    );
  }

  updateTask(): void {
    console.log('Updating task:', this.task);
    
    // Check if this.task exists and this.task._id has a value
    if (this.task && this.task._id) {
      this.taskService.updateTask(this.task._id, this.task).subscribe(
        response => {
          console.log('Task updated:', response);
          this.router.navigate(['/task']);
        },
        error => {
          console.error('Error updating task:', error);
        }
      );
    } else {
      console.error('Task ID is undefined or task is not properly initialized, cannot update task.');
    }
  }
  
}
