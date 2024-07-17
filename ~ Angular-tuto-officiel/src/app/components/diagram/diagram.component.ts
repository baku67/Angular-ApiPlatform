import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { DiagramComponent, DiagramModule } from '@syncfusion/ej2-angular-diagrams'

@Component({
  selector: 'app-diagram',
  standalone: true,
  imports: [ DiagramModule ],
  templateUrl: './diagram.component.html',
  styleUrl: './diagram.component.scss'
})


export class DiagramUiComponent {

  @ViewChild("diagram")

  public diagram?: DiagramComponent;

  public nodes: any[] = [
      {
        
        
      }
  ]; // Remplacez le type par le format de vos données JSON

  ngOnInit(): void {
    
  }

  consoloLog() {
    console.log(this.diagram?.saveDiagram())
  }
}
