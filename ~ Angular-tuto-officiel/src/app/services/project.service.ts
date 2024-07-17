import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Project } from '../models/project.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  private apiUrl = '/api/projects'; 

  constructor(private http: HttpClient) { }

  getProjects(pagination:boolean, itemsPerPage:number): Observable<Project[]> {
    
    const params = { 'pagination': pagination.toString(), 'itemsPerPage': itemsPerPage.toString() }; // Paramètres de pagination

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map(data => {
        if (data && Array.isArray(data['hydra:member'])) {
          return data['hydra:member'].map((item: any) => new Project(item));
        } else {
          console.error('Expected an array but got:', data);
          return [];
        }
      })
    );
  }

  getProject(projectId: any): Observable<Project> {
    return this.http.get<any>(`${this.apiUrl}/${projectId}`).pipe(
      map(data => new Project(data))
    );
  }


  
  private headers = new HttpHeaders({
    'Content-Type': 'application/ld+json'
  });
  createProject(project: Project): Observable<Project> {
    return this.http.post<any>(this.apiUrl, project, {headers: this.headers} ).pipe(
      map(data => new Project(data))
    );
  }
} 