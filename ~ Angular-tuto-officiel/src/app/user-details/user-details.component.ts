import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ProjectService } from '../project.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {

  user: any = null;

  constructor(private route: ActivatedRoute, private userService: UserService, private projectService: ProjectService) { }

  ngOnInit(): void {
    // Retrieve the project ID from the route parameters
    const id = this.route.snapshot.paramMap.get('id');
    console.log(`Route ID: ${id}`); // Log the ID retrieved from the route
    if (id) {
      this.userService.getUser(id).subscribe({
        next: data => {

          console.log('Service response:', data); // Log the entire response
          this.user = data;
          console.log('User:', JSON.stringify(this.user));
          console.log(this.user.projects_owned)

          // Fetch details for each project owned by the user
          this.fetchProjectDetails();
        },
        error: err => {
          console.error('Error fetching user:', err);
        }
      });
    } else {
      console.error('No user ID found in route parameters');
    }


  }

  fetchProjectDetails(): void {
    // Iterate through each project and fetch details
    this.user.projects_owned.forEach((project: any) => {
      this.projectService.getProject(project.id).subscribe({
        next: detailedProject => {
          // Update the project with detailed information
          project.project_name = detailedProject.project_name; // Update other details as needed
          console.log(`Updated project: ${project.project_name}`);
        },
        error: err => {
          console.error(`Error fetching details for project ${project.id}:`, err);
        }
      });
    });
  }
}
