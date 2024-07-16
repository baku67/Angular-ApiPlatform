import { Component, Input } from '@angular/core';
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
export class TaskCardComponent {

  @Input() task!: {
    id: number,
    task_name: string,
    task_description: string,
    project: Project | string,
    status: string,
    assignated_members: User[],
  }
}
