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

  getUsers(pagination:boolean, itemsPerPage:number): Observable<User[]> {
    
    const params = { 'pagination': pagination.toString(), 'itemsPerPage': itemsPerPage.toString() }; // Paramètres de pagination

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map(data => {
        if (data && Array.isArray(data['hydra:member'])) {
          return data['hydra:member'].map((item: any) => new User(item));
        } else {
          console.error('Expected an array but got:', data);
          return [];
        }
      })
    );
  }

  getUser(userId: any): Observable<User> {
    return this.http.get<any>(`${this.apiUrl}/${userId}`).pipe(
      map(data => new User(data))
    );
  }
}
