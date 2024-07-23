import { User } from "./user.model";
import { Task } from "./task.model";
import { Diagram } from "./diagram.model";


export class Project {

    id: number;
    project_name: string;
    tasks: Task[];
    description: string;
    owner: User | string;
    start_date: Date;
    end_date: Date;
    status: string;
    members: User[];
    diagram: Diagram

    constructor(data:any) {
        this.id = data.id;
        this.project_name = data.project_name;
        this.tasks = data.tasks;
        this.description = data.description;
        this.owner = data.owner;
        this.start_date = new Date(data.start_date);
        this.end_date = new Date(data.end_date);
        this.status = data.status;
        this.members = data.members;
        this.diagram = data.diagram;
    }


    // removeMember(id: number): void {
        
    // }

}