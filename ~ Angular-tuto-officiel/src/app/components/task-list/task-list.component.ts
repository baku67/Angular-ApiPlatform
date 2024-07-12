import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {

  tasks: any[] = [];
  errors: any = null;
  isLoading: boolean = false; 

  constructor(private taskService: TaskService
  ) { }

  ngOnInit(): void {

    this.isLoading = true;

    this.taskService.getTasks().subscribe({
      next: data => {
        this.tasks = data['hydra:member'];
        this.isLoading = false;
      },
      error: err => {
        console.error('Error fetching projects:', err);
        this.isLoading = false; 
      }
      
    });

  }

}
