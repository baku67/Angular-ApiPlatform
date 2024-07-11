import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent implements OnInit { 

  projects: any[] = [];
  // Test:
  // project: any = null;


  constructor(private projectService: ProjectService) { }


  ngOnInit(): void {

    this.projectService.getProjects().subscribe(data => {
      this.projects = data['hydra:member'];
    });

    // Test select 1 projet (vérifi id dur bdd)
    // this.projectService.getProject(32).subscribe(data => {
    //   this.project = data['hydra:member'];
    // });
  }
  
} 