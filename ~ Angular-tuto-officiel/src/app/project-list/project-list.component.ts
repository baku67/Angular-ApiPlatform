import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-list',
  standalone: true,
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent {
// export class ProjectListComponent implements OnInit {
//   projects: any[] = [];

//   constructor(private projectService: ProjectService) { }

//   ngOnInit(): void {
//     this.projectService.getProjects().subscribe(data => {
//       this.projects = data['hydra:member'];
//     });
//   }
} 