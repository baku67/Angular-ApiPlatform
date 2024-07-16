import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  private apiUrl = '/api/projects'; 

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => {
          return data['hydra:member'].map((item: any) => new Project(item));
      })
    );
  }

  getProject(projectId: any): Observable<Project> {
    return this.http.get<any>(`${this.apiUrl}/${projectId}`).pipe(
      map(data => new Project(data))
    );
  }
} 