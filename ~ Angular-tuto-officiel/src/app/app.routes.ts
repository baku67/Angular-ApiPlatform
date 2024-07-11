import { Routes } from '@angular/router';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectListComponent } from './project-list/project-list.component';

export const routes: Routes = [
    { path: 'projects', component: ProjectListComponent },
    { path: 'projects/:id', component: ProjectDetailsComponent },
    { path: '', redirectTo: '/projects', pathMatch: 'full' },
    { path: '**', redirectTo: '/projects' }
];
