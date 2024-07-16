import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ProjectService } from '../../services/project.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Task } from '../../models/task.model';
import { Project } from '../../models/project.model';
import { TaskCardComponent } from '../task-card/task-card.component';
import { ProjectCardComponent } from '../project-card/project-card.component';

import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterLink, TaskCardComponent, ProjectCardComponent, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {


  tasks: Task[] = [];
  errors: any = null;
  isLoading: boolean = false; 

  projects: Project[] = [];


  isFormToggled: boolean = false;
  formToggleBtnIcon: string = "add";
  formToggleBtnText: string = "Nouveau";


  constructor(
    private taskService: TaskService,
    private projectService: ProjectService,
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

    this.taskService.getTasks(true, 30).subscribe({
      next: (data: Task[]) => {
        this.tasks = data;
        this.isLoading = false;
      },
      error: err => {
        console.error('Error fetching projects:', err);
        this.isLoading = false; 
      }
      
    });


    this.projectService.getProjects(true, 30).subscribe({
      next: (data: Project[]) => {
        this.projects = data;
      },
      error: err => {
        console.error('Error fetching projects:', err);
      }
      
    });

  }

  onSubmit(form: NgForm) {
    const formData = form.value;
    const task = new Task(formData); 
    console.log(formData.project);
    task.status = "planning";

        task.project = `/api/projects/${formData.project}`;
  
        // Log the new task object
        console.log("NOUVELLE TASK: " + JSON.stringify(task));
  
        // Send the task object to the API
        this.taskService.createTask(task).subscribe(
          response => {
            console.log('Réponse de l\'API', response);
          },
          error => {
            console.error('Erreur', error);
          }
        );


  }

}
