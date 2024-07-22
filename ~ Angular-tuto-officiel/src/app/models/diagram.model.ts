import { Project } from "./project.model";

export class Diagram {

    id: number;
    title: string;
    json: string;


    constructor(data:any) {
        this.id = data.id;
        this.title = data.title;
        this.json = data.json;
    }

}
