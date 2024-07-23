import { Component, Input } from '@angular/core';
import { Task } from '../../models/task.model';
import { User } from '../../models/user.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent implements OnInit {
  @Input() project!: { 
    id: number,
    project_name: string,
    tasks: Task[],
    description: string,
    owner: User | string | null,
    start_date: Date,
    end_date: Date,
    status: string,
    members: User[],
   };

   ownerObj: User | null = null;

   constructor(private userService: UserService) {};


 
   ngOnInit(): void {

    // getOwner (pas propre):
    // Check if owner is an object and has an id
    if (typeof this.project.owner === 'object' && this.project.owner !== null && 'id' in this.project.owner) {
      this.userService.getUser(this.project.owner.id).subscribe({ 
        next: data => {
          this.ownerObj = data;
          console.log('Owner:', JSON.stringify(this.ownerObj));
        },
        error: err => {
          console.error('Error fetching owner:', err);
        }
      });
    } else if (typeof this.project.owner === 'string') {
      // If owner is a string (assumed to be an ID), fetch the user by ID
      this.userService.getUser(this.project.owner).subscribe({ 
        next: data => {
          this.ownerObj = data;
          console.log('Owner:', JSON.stringify(this.ownerObj));
        },
        error: err => {
          console.error('Error fetching owner:', err);
        }
      });
    } else {
      console.log('Owner is neither a User object nor a string ID.');
    }

   }

}
