import { Component, Input } from '@angular/core';
import { Task } from '../../models/task.model';
import { User } from '../../models/user.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project!: { 
    id: number,
    project_name: string,
    tasks: Task[],
    description: string,
    owner: User,
    start_date: Date,
    end_date: Date,
    status: string,
    members: User[],
   };
}
