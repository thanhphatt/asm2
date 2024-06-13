import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ITask } from '../entities/task'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: ITask[] = [];
  selectedTask: ITask | null = null;
  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.getAlltasks();
  }

  getAlltasks() {
    this.taskService.getAllTasks().subscribe(
      data => {
        console.log('Data received:', data); // Debugging line
        this.tasks = data;
      },
      error => console.error('Lỗi khi lấy bài viết:', error)
    );
  }
  editTask(task: ITask) {
    this.taskService.getTaskById(task._id).subscribe(
      (fetchedTask: ITask) => {
        this.selectedTask = fetchedTask;
        this.router.navigate(['/edit-task']);
        // Có thể thực hiện các hành động khác khi lấy task thành công như hiển thị form chỉnh sửa
      },
      error => console.error('Lỗi khi lấy task:', error)
    );
  }
  deleteTask(taskId: string) {
    this.taskService.deleteTask(taskId).subscribe(
      () => {
        console.log('Task deleted successfully');
        // Load lại trang sau khi xoá thành công
        window.location.reload();
      },
      error => console.error('Lỗi khi xoá task:', error)
    );
  }
  


}
