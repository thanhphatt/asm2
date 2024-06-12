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
  private url2 = 'http://localhost:4000/api/project';
  constructor(private http: HttpClient) { }

  getAllprojects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.url)
      .map(response => response as IProject[])
      .catch(this.handleError);
  }
  getProjectById(id: string): Observable<IProject> {
    if (!id) {
      return Observable.throw('ID không hợp lệ');
    }
    return this.http.get<IProject>(`${this.url2}/${id}`)
      .catch(this.handleError);
  }
  createproject(project: IProject): Observable<IProject> {
    return this.http.post<IProject>(this.url, project)
      .catch(this.handleError);
  }

  deleteproject(id: string): Observable<void> {
    console.log(`Deleting project with ID: ${id}`); // Log để kiểm tra
    return this.http.delete<void>(`${this.url2}/${id}`)
      .catch(this.handleError);
  }
  
  updateproject(project: IProject): Observable<IProject> {
    if (project._id && project._id.$oid) {
      const projectId = project._id.$oid;
      return this.http.put<IProject>(`${this.url}/${projectId}`, project)
        .catch(this.handleError);
    } else {
      // Xử lý khi _id không hợp lệ
      console.error('ID bài viết không hợp lệ!');
      return Observable.throw('ID bài viết không hợp lệ!');
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
