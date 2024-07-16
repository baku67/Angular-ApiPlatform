import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = '/api/tasks'; 

  constructor(private http: HttpClient) { }

  
  getTasks(pagination:boolean, itemsPerPage:number): Observable<Task[]> {
    
    const params = { 'pagination': pagination.toString(), 'itemsPerPage': itemsPerPage.toString() }; // Paramètres de pagination

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map(data => {
        if (data && Array.isArray(data['hydra:member'])) {
          return data['hydra:member'].map((item: any) => new Task(item));
        } else {
          console.error('Expected an array but got:', data);
          return [];
        }
      })
    );
  }

  getTask(taskId: any): Observable<Task> {
    return this.http.get<any>(`${this.apiUrl}/${taskId}`).pipe(
      map(data => new Task(data))
    );
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<any>(this.apiUrl, task).pipe(
      map(data => new Task(data))
    );
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<any>(`${this.apiUrl}/${task.id}`, task).pipe(
      map(data => new Task(data))
    );
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


}

