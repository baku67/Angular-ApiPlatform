import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectCardComponent } from './project-card/project-card.component';
import { HeaderComponent } from './header/header.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProjectCardComponent, ProjectListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Toudoulist';
}
