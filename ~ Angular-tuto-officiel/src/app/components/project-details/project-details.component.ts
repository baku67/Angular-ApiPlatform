import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent implements OnInit {
  project: any = null;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit(): void {
    // Retrieve the project ID from the route parameters
    const id = this.route.snapshot.paramMap.get('id');
    console.log(`Route ID: ${id}`); // Log the ID retrieved from the route
    if (id) {
      this.projectService.getProject(id).subscribe({
        next: data => {
          console.log('Service response:', data); // Log the entire response
          this.project = data;
          console.log('Project:', JSON.stringify(this.project));
        },
        error: err => {
          console.error('Error fetching project:', err);
        }
      });
    } else {
      console.error('No project ID found in route parameters');
    }
  }
}
