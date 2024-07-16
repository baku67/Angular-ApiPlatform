import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';
import { Task } from '../../models/task.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {

  @Input() user!: {
    id: number,
    username: string,
    email: string,
    password: string,
    roles: string,
    projects_owned: Project[],
    imgUrl: string,
    projects_member: Project[],
    tasks_assignated: Task[],
  }
}
