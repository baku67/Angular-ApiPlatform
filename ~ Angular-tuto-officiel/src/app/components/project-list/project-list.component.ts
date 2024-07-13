import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent implements OnInit { 

  projects: any[] = [];
  errors: any = null;
  isLoading: boolean = false; 

  isFormToggled: boolean = false;
  formBtnText: string = "Nouveau";

  constructor(private projectService: ProjectService) { }


  public toggleForm() {
    console.log("toggleForm")
    this.isFormToggled = !this.isFormToggled;
    this.formBtnText = "Retour"
  }


  ngOnInit(): void {

    this.isLoading = true; 
    this.projectService.getProjects().subscribe({
      next: data => {
        this.projects = data['hydra:member'];
        this.isLoading = false;
      },
      error: err => {
        console.error('Error fetching projects:', err);
        this.isLoading = false; 
      }
    });

  }
  
} 