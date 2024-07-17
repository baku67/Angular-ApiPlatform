import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent implements OnInit{

  @Input() task!: {
    id: number,
    task_name: string,
    task_description: string,
    project: Project | string,
    status: string,
    assignated_members: User[],
  }

  public statusColor: string = "";

  ngOnInit(): void {
    
    if(this.task.status == "planning") {
      this.task.status = "planifié";
      this.statusColor = "grey";
    }
    else if (this.task.status == "in_progress") {
      this.task.status = "en cours";
      this.statusColor = "#2900ff";
    }
    else if (this.task.status == "completed") {
      this.task.status = "complété";
      this.statusColor = "#11c711";
    }
    else if (this.task.status == "on_hold") {
      this.task.status = "en attente";
      this.statusColor = "#f7c70d";
    }
  }


  

}
