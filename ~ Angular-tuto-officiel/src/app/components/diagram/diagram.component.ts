import { Component, ViewEncapsulation, ViewChild, AfterViewInit, AfterViewChecked, Input } from "@angular/core";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DiagramComponent, DiagramModule, UndoRedoService, ShapeStyleModel  } from '@syncfusion/ej2-angular-diagrams'
import { ContextMenuSettingsModel, Diagram, NodeModel, ConnectorModel } from "@syncfusion/ej2-angular-diagrams";
import { DiagramContextMenuService } from "@syncfusion/ej2-angular-diagrams";
import { DiagramPaletComponent } from "../diagram-palet/diagram-palet.component";
import { HttpClient } from "@angular/common/http";
import { DiagramService } from "../../services/diagram.service";
import { Diagram as DiagramModel } from "../../models/diagram.model";


// Trad:
import { L10n, setCulture } from '@syncfusion/ej2-base';
setCulture('fr-FR');
L10n.load({
    'fr-FR': {
        'diagram': {
            "Copy": "Copie",
            "Cut": "Couper",
            "Paste": "Coller",
            "Undo": "annuler",
            "Redo": "Refaire",
            "SelectAll": "Tout sélectionner",
            "Grouping": "Regroupement",
            "Group": "Regroupement",
            "UnGroup": "Dissocier",
            "Order": "Commande",
            "BringToFront": "Mettre au premier plan",
            "MoveForward": "Avance",
            "SendToBack": "Envoyer au fond",
            "SendBackward": "Envoyer vers l'arrière",
            "group": "Grouper"
        },
    }
});



@Component({
  selector: 'app-diagram',
  standalone: true,
  imports: [DiagramModule, DiagramPaletComponent],
  providers: [UndoRedoService, DiagramContextMenuService],
  templateUrl: './diagram.component.html',
  styleUrl: './diagram.component.scss'
})


export class DiagramUiComponent implements AfterViewInit, AfterViewChecked {

  constructor(private http: HttpClient, private diagramService: DiagramService) {
    
  }

  @Input() diagram!: DiagramModel;

  @ViewChild("diagram") diagramObj !: DiagramComponent;
  // public diagramData: any;
  public  diagramJson: string = `${this.diagram?.json}`;

  public contextMenuSettings?: ContextMenuSettingsModel;




  ngOnInit(): void {
    // https://ej2.syncfusion.com/angular/documentation/diagram/context-menu
    this.contextMenuSettings = {
      show: true,
      
    }
  }


  ngAfterViewInit(): void {
    this.checkDiagramLoaded();
  }

  ngAfterViewChecked(): void {
  }






  private checkDiagramLoaded(): void {
    setTimeout(() => {
      if (this.diagramObj) {
        this.loadDiag();
      } else {
        console.error("Diagram component is not initialized.");
      }
    }, 0);
  }


  // PB: envoi le json seulement ? il me faut l'id du diagram dans service.updateDiagram() !!
  public saveDiag():void {
    this.diagram.json = this.diagramObj?.saveDiagram();
    console.log("Saved diagram: " + JSON.stringify(this.diagram));
    // Upload du diagram BDD (diagramService)
    this.diagramService.updateDiagram(this.diagram);
  }

  public loadDiag():void {
    try {
      if (this.diagram?.json) {
        const parsedData = JSON.parse(this.diagram.json);
        this.diagramObj.loadDiagram(parsedData);
      }
    } catch (error) {
      console.error("Error loading diagram: ", error);
    }
  }



  public undo():void {
    this.diagramObj.undo();
  }

  public redo():void {
    this.diagramObj.redo();
  }


  // https://ej2.syncfusion.com/angular/documentation/diagram/commands
  public group(): void {
    (this.diagramObj as DiagramComponent).group();
  }



  public bringForwards(): void {
    (this.diagramObj as DiagramComponent).bringToFront();
  }
  public bringBackwards(): void {
    (this.diagramObj as DiagramComponent).sendToBack();
  }

  public moveForwards(): void {
    (this.diagramObj as DiagramComponent).moveForward();
  }
  public moveBackwards(): void {
    (this.diagramObj as DiagramComponent).sendBackward();
  }



  public zoomIn():void {
    this.diagramObj.zoom(1.1, {
      x: 0,
      y: 0
    });
  }
  public zoomOut():void {
    this.diagramObj.zoom(0.9, {
      x: 0,
      y: 0
    });
  }



  public fitToPage(): void {
    this.diagramObj.fitToPage({
      mode: 'Page',
      region: 'Content',
      margin: {
          bottom: 50
      },
      canZoomIn: false
      // canZoomIn: true
  });
  }


}
