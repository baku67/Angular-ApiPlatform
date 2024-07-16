import { Task } from "./task.model";
import { Project } from "./project.model";

export class User {
    id: number;
    username: string;
    email: string;
    password: string;
    roles: string;
    projects_owned: Project[];
    imgUrl: string;
    projects_member: Project[];
    tasks_assignated: Task[];
  
    constructor(data: any) {
      this.id = data.id;
      this.username = data.username;
      this.email = data.email;
      this.password = data.password;
      this.roles = data.roles;
      this.projects_owned = data.projects_owned;
      this.imgUrl = data.string;
      this.projects_member = data.projects_member;
      this.tasks_assignated = data.tasks_assigned
    }
  }