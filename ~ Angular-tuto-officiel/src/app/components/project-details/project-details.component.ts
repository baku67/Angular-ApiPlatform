import { Component, OnInit, signal } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Project } from '../../models/project.model';
import { UserCardComponent } from '../user-card/user-card.component';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { TaskCardComponent } from '../task-card/task-card.component';

import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, RouterLink, MatDividerModule, DatePipe, UserCardComponent, TaskCardComponent, MatExpansionModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})


export class ProjectDetailsComponent implements OnInit {

  project: Project | null = null;
  members: User[] | null = null;

  errors: any = null;
  isLoading: boolean = false; 



  constructor(private route: ActivatedRoute, private projectService: ProjectService, private userService: UserService) { }



  ngOnInit(): void {
    // Retrieve the project ID from the route parameters
    const id = this.route.snapshot.paramMap.get('id');
    console.log(`Route ID: ${id}`); // Log the ID retrieved from the route

    if (id) {

      this.isLoading = true; 

      this.projectService.getProject(id).subscribe({
        next: data => {
          console.log('Service response:', data); // Log the entire response
          this.project = data;
          console.log('Project:', JSON.stringify(this.project));
          this.isLoading = false; 
          // this.members = data.members;
        },
        error: err => {
          console.error('Error fetching project:', err);
          this.isLoading = false; 
        }
      });

    } else {
      console.error('No project ID found in route parameters');
    }
  }



  readonly panelOpenState = signal(false);



}
