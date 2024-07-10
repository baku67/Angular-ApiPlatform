import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent implements OnInit {

  project: any = null;

  constructor(private projectService: ProjectService) { }


  ngOnInit(): void {

    // Test select 1 projet id:32 (vérifi id dur bdd)
    this.projectService.getProject(32).subscribe(data => {
      this.project = data['hydra:member'];
    });
  }
}
