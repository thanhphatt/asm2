import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { IUser } from '../entities/user';
 // Đảm bảo đường dẫn đúng

@Injectable()
export class UserService {  // Đảm bảo đúng tên class
  private url = 'http://localhost:4000/api/user';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url)
      .map(response => response as IUser[])
      .catch(this.handleError);
  }

  getUserById(id: string): Observable<IUser> {
    if (!id) {
      return Observable.throw('ID không hợp lệ');
    }
    return this.http.get<IUser>(`${this.url}/${id}`)
      .catch(this.handleError);
  }

  createUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.url, user)
      .catch(this.handleError);
  }

  deleteUser(id: string): Observable<void> {
    console.log(`Deleting user with ID: ${id}`); // Log để kiểm tra
    return this.http.delete<void>(`${this.url}/${id}`)
      .catch(this.handleError);
  }

  updateUser(id: string, user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this.url}/${id}`, user)
      .catch(this.handleError);
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
