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

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<IUsers[]> {
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

  createUser(user: any): Observable<any> {
    // Remove the password field if it is empty or null
    if (!user.password) {
      delete user.password;
    }
    return this.http.post(this.url, user)
      .catch(this.handleError);
  }

  deleteUser(id: string): Observable<void> {
    console.log(`Xóa task với ID: ${id}`);
    return this.http.delete<void>(`${this.url}/${id}`)
      .catch(this.handleError);
  }

  updateUser(user: IUsers): Observable<any> {
    return this.http.put(`${this.url}/${user._id}`, user);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }
}


export { IUsers };