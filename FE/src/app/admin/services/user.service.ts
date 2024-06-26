import { IUsers } from './../entities/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
  private url = 'http://localhost:4000/api/user';
  // private url2 = 'http://localhost:4000/api/user';
  constructor(private http: HttpClient) { }

  getAllusers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(this.url)
      .map(response => response as IUsers[])
      .catch(this.handleError);
  }
  getUserById(id: string): Observable<IUsers> {
    if (!id) {
      return Observable.throw('ID không hợp lệ');
    }
    return this.http.get<IUsers>(`${this.url}/${id}`)
      .catch(this.handleError);
  }
  createuser(user: IUsers): Observable<IUsers> {
    return this.http.post<IUsers>(this.url, user)
      .catch(this.handleError);
  }

  deleteuser(id: string): Observable<void> {
    console.log(`Xóa task với ID: ${id}`); 
    return this.http.delete<void>(`${this.url}/${id}`)
      .catch(this.handleError);
  }
  
  updateUser(id: string, user: IUsers): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.put<any>(url, user);
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