import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../models/project.model';
import { User } from '../../models/user.model';
import { Task } from '../../models/task.model';
import { ProjectService } from '../../services/project.service';
import { TaskService } from '../../services/task.service';
import { UserService } from '../../services/user.service';
import { UserCardComponent } from '../user-card/user-card.component';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { TaskCardComponent } from '../task-card/task-card.component';

// import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterLink, UserCardComponent, ProjectCardComponent, TaskCardComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {

  public projects: Project[] = [];
  public users: User[] = []
  public tasks: Task[] = []

  public errors: any = null;

  constructor(
    private projectService: ProjectService, 
    private taskService: TaskService,
    private userService: UserService,
  ) {}


  ngOnInit(): void {

    // Récup des 5 derniers projets:
    this.projectService.getProjects(true, 5).subscribe({
      next: data => {
        this.projects = data;
        // this.isLoading = false;
      },
      error: err => {
        this.errors = err;
        console.error('Error fetching projects:', err);
        // this.isLoading = false; 
      }
    });


    // Récup des 5 derniers utilisateurs:
    this.userService.getUsers(true, 5).subscribe({
      next: data => {
        this.users = data;
        // this.isLoading = false;
      },
      error: err => {
        this.errors = err;
        console.error('Error fetching projects:', err);
        // this.isLoading = false; 
      }
    });


    // Récup des 5 derniers Taches:
    this.taskService.getTasks(true, 5).subscribe({
      next: data => {
        this.tasks = data;
        // this.isLoading = false;
      },
      error: err => {
        this.errors = err;
        console.error('Error fetching projects:', err);
        // this.isLoading = false; 
      }
    });
  }

  
  
}
