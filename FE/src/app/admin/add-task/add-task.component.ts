import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { ITask } from '../entities/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task: ITask = {
    id: '',
    name: '',
    description: '',
    assignee_id: '',
    status: 'to do',
    priority: 'low',
    start_date: new Date(),
    due_date: new Date(),
   
  };


  tasks: ITask[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.taskService.createtask(this.task).subscribe(
        response => {
          this.tasks.push(response);
        
        },
        error => {
          console.error('lỗi mẹ nó rồi ', error);
        }
      );
    }
  }

  getTasks() {
    this.taskService.getAlltasks().subscribe(
      tasks => {
        this.tasks = tasks;
      },
      error => {
        console.error('Error fetching tasks', error);
      }
    );
  }
}
