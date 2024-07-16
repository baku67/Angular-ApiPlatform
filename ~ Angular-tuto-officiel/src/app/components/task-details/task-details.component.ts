import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent implements OnInit {

  task: Task | null = null;
  errors: any = null;
  isLoading: boolean = false; 

  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit(): void {
    // Retrieve the project ID from the route parameters
    const id = this.route.snapshot.paramMap.get('id');
    console.log(`Route ID: ${id}`); // Log the ID retrieved from the route
    if (id) {

      this.isLoading = true; // Activer l'indicateur de chargement
      this.taskService.getTask(id).subscribe({
        next: data => {

          console.log('Service response:', data); // Log the entire response
          this.task = data;
          console.log('Task:', JSON.stringify(this.task));
          this.isLoading = false; // Désactiver l'indicateur de chargement lorsque la requête est terminée
        },
        error: err => {
          this.errors = err;
          console.error('Error fetching user:', err);
          this.isLoading = false; // Désactiver l'indicateur de chargement lorsque la requête est terminée
        },
        complete: () => {
          // this.isLoading = false;  // Désactiver l'indicateur de chargement lorsque la requête est terminée
        }
      });
    } else {
      console.error('No task ID found in route parameters');
    }
  }


}
