// edit-task.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '../admin/entities/task';
@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {
  @Input() task: ITask; // Nhận task để chỉnh sửa từ parent component
  @Output() save: EventEmitter<ITask> = new EventEmitter<ITask>();
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  saveTask() {
    // Gửi sự kiện saveTask với task đã chỉnh sửa
    this.save.emit(this.task);
  }

  cancelEdit() {
    // Gửi sự kiện cancelEdit để hủy chỉnh sửa
    this.cancel.emit();
  }
}
