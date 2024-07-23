import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Project } from '../../models/project.model';
import { User } from '../../models/user.model';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { switchMap } from 'rxjs/operators';

import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DiagramService } from '../../services/diagram.service';
import { Diagram } from '../../models/diagram.model';

import { v4 as uuidv4 } from 'uuid';



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

  users: User[] = [];

  isFormToggled: boolean = false;
  formToggleBtnIcon: string = "add";
  formToggleBtnText: string = "Nouveau";


  constructor(
    private projectService: ProjectService,
    private userService: UserService,
    private router: Router,
    private diagramService: DiagramService,
  ) { }

  
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


    this.userService.getUsers(true, 30).subscribe({
      next: (data: User[]) => {
        this.users = data;
      },
      error: err => {
        console.error('Error fetching projects:', err);
      }
      
    });


  }


  onSubmit(form: NgForm) {
    const formData = form.value;
    const project = new Project(formData); 
    project.status = "pending";
    project.start_date = new Date();
    project.end_date = new Date();
    // Si pas de chef de projet => null:
    if(!formData.owner) {
      project.owner = null;
    }
    else {
      project.owner = formData.owner;
      // project.owner = `/api/users/${formData.owner.id}`; // C'est pas l'id pur qu'il faut, c'est l'IRI / @id (/api/users/xx)
    }


    // Projet bien créé:
    console.log("NOUVEAU PROJET: " + JSON.stringify(project));
    this.projectService.createProject(project).subscribe(response => {
      console.log('Réponse de l\'API', response);
        // redirection nouveau projet details:
        // Extraire l'ID ddu nouveau projet depuis la réponse
        const newProjectId = response.id;
        this.router.navigate(['/projects', newProjectId]);
    }, error => {
      console.error('Erreur', error);
    });
  }
  
} 