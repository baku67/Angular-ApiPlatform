import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Task } from '../../models/task.model';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterLink, TaskCardComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  errors: any = null;
  isLoading: boolean = false; 

  constructor(private taskService: TaskService
  ) { }

  ngOnInit(): void {

    this.isLoading = true;

    this.taskService.getTasks().subscribe({
      next: (data: Task[]) => {
        this.tasks = data;
        this.isLoading = false;
      },
      error: err => {
        console.error('Error fetching projects:', err);
        this.isLoading = false; 
      }
      
    });

  }

}
