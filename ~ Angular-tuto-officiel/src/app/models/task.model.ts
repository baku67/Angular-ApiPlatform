import { Project } from "./project.model";
import { User } from "./user.model";


export class Task {

    id: number;
    task_name: string;
    task_description: string;
    project: Project;
    status: string;
    assignated_members: User[];

    constructor(data:any) {
      this.id = data.id;
      this.task_name = data.task_name;
      this.task_description = data.task_description;
      this.project = data.project;
      this.status = data.status;
      this.assignated_members = data.assignated_members;
    }

}