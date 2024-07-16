import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Project } from '../../models/project.model';
import { ProjectCardComponent } from '../project-card/project-card.component';

import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, RouterLink, ProjectCardComponent, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent implements OnInit { 

  projects: Project[] = [];
  errors: any = null;
  isLoading: boolean = false; 

  isFormToggled: boolean = false;
  formToggleBtnIcon: string = "add";
  formToggleBtnText: string = "Nouveau";


  constructor(private projectService: ProjectService) { }

  
  public toggleForm() {
    this.isFormToggled = !this.isFormToggled;
    if(this.isFormToggled) {
      this.formToggleBtnText = "Retour"
      this.formToggleBtnIcon = "remove";
    }
    else {
      this.formToggleBtnText = "Nouveau"
      this.formToggleBtnIcon = "add";
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


  onSubmit(form: NgForm) {
    const formData = form.value;
    const project = new Project(formData); 
    project.start_date = new Date();
    project.end_date = new Date();
    console.log("NOUVEAU PROJET: " + JSON.stringify(project));
    this.projectService.createProject(project).subscribe(response => {
      console.log('Réponse de l\'API', response);
    }, error => {
      console.error('Erreur', error);
    });
  }
  
} 