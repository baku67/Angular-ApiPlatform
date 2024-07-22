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

  private headers = new HttpHeaders({
    'Content-Type': 'application/ld+json'
  });



  createDiagram(diagram: Diagram): Observable<Diagram> {
    console.log('NOUVEAU DIAGRAMME :' + JSON.stringify(diagram));
    return this.http.post<any>(this.apiUrl, diagram, {headers: this.headers} ).pipe(
      map(data => new Diagram(data))
    );
  }


  updateDiagram(diagram: Diagram): void {
    console.log("Updating diagram with ID: " + diagram.id); 
    console.log("DIAGRAM Service: " + JSON.stringify(diagram)); 
    this.http.put<any>(`${this.apiUrl}/${diagram.id}`, diagram, { headers: this.headers }).pipe(
      map(data => new Diagram(data))
    ).subscribe(
      response => {
        console.log("Diagram updated successfully:", response);
      },
      error => {
        console.error("Error updating diagram:", error);
      }
    );
  }

}
