import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Diagram } from '../models/diagram.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiagramService {

  private apiUrl = '/api/diagrams'; 

  constructor(private http: HttpClient) { }


  updateDiagram(id: number, project: Diagram): Observable<Diagram> {
    // Convert Task objects to their IRIs
    // const projectWithIRIs = {
    //   ...project,
    //   tasks: project.tasks.map(task => `/api/tasks/${task.id}`)
    // };
    return this.http.put<Diagram>(`${this.apiUrl}/${id}`, projectWithIRIs, {headers: this.headers});
  }

}
