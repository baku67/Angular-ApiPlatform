import { Routes } from '@angular/router';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { HomepageComponent } from './components/homepage/homepage.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'home', component: HomepageComponent },
    { path: 'projects', component: ProjectListComponent },
    { path: 'projects/:id', component: ProjectDetailsComponent },
    { path: 'users', component: UserListComponent },
    { path: 'users/:id', component: UserDetailsComponent },
    { path: 'tasks', component: TaskListComponent },
    { path: 'tasks/:id', component: TaskDetailsComponent },
    // { path: '', redirectTo: '/projects', pathMatch: 'full' },
    // { path: '**', redirectTo: '/projects' }
];
