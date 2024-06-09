import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ITask } from '../entities/task';

@Injectable()
export class TaskService {
  private url = 'http://localhost:4000/api/tasks';
  private url2 = 'http://localhost:4000/api/task';
  constructor(private http: HttpClient) { }

  getAlltasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.url)
      .map(response => response as ITask[])
      .catch(this.handleError);
  }
  getTaskById(id: string): Observable<ITask> {
    if (!id) {
      return Observable.throw('ID không hợp lệ');
    }
    return this.http.get<ITask>(`${this.url2}/${id}`)
      .catch(this.handleError);
  }
  createtask(task: ITask): Observable<ITask> {
    return this.http.post<ITask>(this.url, task)
      .catch(this.handleError);
  }

  deletetask(id: string): Observable<void> {
    console.log(`Xóa task với ID: ${id}`); 
    return this.http.delete<void>(`${this.url}/${id}`)
      .catch(this.handleError);
  }
  
  updatetask(task: ITask): Observable<ITask> {
    if (task._id && task._id) {
      const taskId = task._id;
      return this.http.put<ITask>(`${this.url}/${taskId}`, task)
        .catch(this.handleError);
    } else {
      // Xử lý khi _id không hợp lệ
      console.error('ID task không hợp lệ!');
      return Observable.throw('ID task không hợp lệ!');
    }
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }
}
