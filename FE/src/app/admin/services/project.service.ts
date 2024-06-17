import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { IProject } from '../entities/project'; // Đảm bảo đường dẫn đúng

@Injectable()
export class ProjectService {
  private url = 'http://localhost:4000/api/project';

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.url)
      .map(response => response as IProject[])
      .catch(this.handleError);
  }

  getProjectById(id: string): Observable<IProject> {
    if (!id) {
      return Observable.throw('ID không hợp lệ');
    }
    return this.http.get<IProject>(`${this.url}/${id}`)
      .catch(this.handleError);
  }

  createProject(project: IProject): Observable<IProject> {
    return this.http.post<IProject>(this.url, project)
      .catch(this.handleError);
  }

  deleteProject(id: string): Observable<void> {
    console.log(`Deleting project with ID: ${id}`); // Log để kiểm tra
    return this.http.delete<void>(`${this.url}/${id}`)
      .catch(this.handleError);
  }

  // updateProject(id: string, project: IProject): Observable<IProject> {
  //   return this.http.put<IProject>(`${this.url}/${id}`, project)
  //     .catch(this.handleError);
  // }
  updateProject(id: string, project: IProject): Observable<IProject> {
    return this.http.put<IProject>(`${this.url}/${id}`, project);
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