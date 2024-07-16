import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Project } from '../../models/project.model';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, RouterLink, ProjectCardComponent],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent implements OnInit { 

  projects: Project[] = [];
  errors: any = null;
  isLoading: boolean = false; 

  isFormToggled: boolean = false;
  formBtnText: string = "Nouveau";


  constructor(private projectService: ProjectService) { }

  
  public toggleForm() {
    this.isFormToggled = !this.isFormToggled;
    if(this.isFormToggled) {
      this.formBtnText = "Retour"
    }
    else {
      this.formBtnText = "Nouveau"
    }
  }


  ngOnInit(): void {

    this.isLoading = true; 
    this.projectService.getProjects(true, 10).subscribe({
      next: data => {
        this.projects = data;
        this.isLoading = false;
      },
      error: err => {
        this.errors = err;
        console.error('Error fetching projects:', err);
        this.isLoading = false; 
      }
    });

  }
  
} 