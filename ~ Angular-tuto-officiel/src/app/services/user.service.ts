import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = '/api/users'; 

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => {
          return data['hydra:member'].map((item: any) => new User(item));
      })
    );
  }

  getUser(userId: any): Observable<User> {
    return this.http.get<any>(`${this.apiUrl}/${userId}`).pipe(
      map(data => new User(data))
    );
  }
}
