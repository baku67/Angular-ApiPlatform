import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = '/api/tasks'; 

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getTask(taskId: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/${taskId}`);
  }
}