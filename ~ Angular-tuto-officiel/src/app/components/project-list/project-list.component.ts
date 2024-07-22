import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Project } from '../../models/project.model';
import { User } from '../../models/user.model';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { switchMap } from 'rxjs/operators';

import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DiagramService } from '../../services/diagram.service';
import { Diagram } from '../../models/diagram.model';

import { v4 as uuidv4 } from 'uuid';



@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, RouterLink, ProjectCardComponent, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent implements OnInit { 

  projects: Project[] = [];
  errors: any = null;
  isLoading: boolean = false; 

  users: User[] = [];

  isFormToggled: boolean = false;
  formToggleBtnIcon: string = "add";
  formToggleBtnText: string = "Nouveau";


  constructor(
    private projectService: ProjectService,
    private userService: UserService,
    private router: Router,
    private diagramService: DiagramService,
  ) { }

  
  public toggleForm() {
    this.isFormToggled = !this.isFormToggled;
    if(this.isFormToggled) {
      this.formToggleBtnText = "Retour"
      this.formToggleBtnIcon = "remove";
    }
    else {
      this.formToggleBtnText = "Nouveau"
      this.formToggleBtnIcon = "add";
    }
  }


  ngOnInit(): void {

    this.isLoading = true; 

    this.projectService.getProjects(true, 10).subscribe({
      next: data => {
        this.projects = data;
        this.isLoading = false;
      },
      error: err => {
        this.errors = err;
        console.error('Error fetching projects:', err);
        this.isLoading = false; 
      }
    });


    this.userService.getUsers(true, 30).subscribe({
      next: (data: User[]) => {
        this.users = data;
      },
      error: err => {
        console.error('Error fetching projects:', err);
      }
      
    });


  }


  onSubmit(form: NgForm) {
    const formData = form.value;
    const project = new Project(formData); 
    project.status = "pending";
    project.start_date = new Date();
    project.end_date = new Date();
    // Si pas de chef de projet => null:
    if(!formData.owner) {
      project.owner = null;
    }
    else {
      project.owner = formData.owner;
      // project.owner = `/api/users/${formData.owner.id}`; // C'est pas l'id pur qu'il faut, c'est l'IRI / @id (/api/users/xx)
    }
    // Création d'un Diagram 
    const diagramData = {
        id: uuidv4(), 
        title:'empty diagram', 
        json:'{"enableRtl":false,"locale":"fr-FR","animationComplete":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"click":{"closed":false,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"collectionChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"commandExecute":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"connectionChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"contextMenuBeforeItemRender":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"contextMenuClick":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"contextMenuOpen":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"created":{"closed":false,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"dataLoaded":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"doubleClick":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"dragEnter":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"dragLeave":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"dragOver":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"drop":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"elementDraw":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"expandStateChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"fixedUserHandleClick":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"historyChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"historyStateChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"keyDown":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"keyUp":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"load":{"closed":false,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"mouseEnter":{"closed":false,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"mouseLeave":{"closed":false,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"mouseOver":{"closed":false,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"mouseWheel":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"onFixedUserHandleMouseDown":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"onFixedUserHandleMouseEnter":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"onFixedUserHandleMouseLeave":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"onFixedUserHandleMouseUp":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"onImageLoad":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"onUserHandleMouseDown":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"onUserHandleMouseEnter":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"onUserHandleMouseLeave":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"onUserHandleMouseUp":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"positionChange":{"closed":false,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"propertyChange":{"closed":false,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"rotateChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"scrollChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"segmentChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"segmentCollectionChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"selectionChange":{"closed":false,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"sizeChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"sourcePointChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"targetPointChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"textEdit":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"width":"100%","height":"580px","nodes":[{"shape":{"type":"Basic","shape":"Rectangle","cornerRadius":0},"ports":[],"id":"node1","height":60,"width":100,"offsetX":440,"offsetY":427,"annotations":[{"id":"RU3lT","content":"Start","annotationType":"String","style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","bold":false,"textWrapping":"WrapWithOverflow","color":"black","whiteSpace":"CollapseSpace","fontFamily":"Arial","fontSize":12,"italic":false,"opacity":1,"strokeDashArray":"","textAlign":"Center","textOverflow":"Wrap","textDecoration":"None"},"hyperlink":{"link":"","hyperlinkOpenState":"NewTab","content":"","textDecoration":"None"},"constraints":4,"visibility":true,"rotateAngle":0,"rotationReference":"Parent","margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center","offset":{"x":0.5,"y":0.5}}],"zIndex":0,"container":null,"visible":true,"horizontalAlignment":"Left","verticalAlignment":"Top","backgroundColor":"transparent","borderColor":"none","borderWidth":0,"rotateAngle":0,"pivot":{"x":0.5,"y":0.5},"margin":{},"flip":"None","wrapper":{"actualSize":{"width":100,"height":60},"offsetX":440,"offsetY":427},"constraints":5240814,"style":{"fill":"white","gradient":{"type":"None"},"strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"textOverflow":"Wrap"},"isExpanded":true,"expandIcon":{"shape":"None"},"fixedUserHandles":[],"flipMode":"All","tooltip":{"openOn":"Auto","content":"","isSticky":false},"inEdges":[],"outEdges":[],"parentId":"","processId":"","umlIndex":-1,"isPhase":false,"isLane":false}],"enablePersistence":false,"scrollSettings":{"viewPortWidth":700.0000610351562,"viewPortHeight":580,"currentZoom":1,"horizontalOffset":0,"verticalOffset":0,"padding":{"left":0,"right":0,"top":0,"bottom":0},"scrollLimit":"Diagram","canAutoScroll":false},"rulerSettings":{"showRulers":false,"horizontalRuler":{"orientation":"Horizontal","arrangeTick":null},"verticalRuler":{"orientation":"Vertical","arrangeTick":null}},"backgroundColor":"transparent","dataSourceSettings":{"crudAction":{"read":""},"dataManager":null,"dataSource":null},"mode":"SVG","layers":[{"objects":["node1"],"id":"default_layer","visible":true,"lock":false,"zIndex":0,"objectZIndex":0}],"connectors":[],"constraints":500,"layout":{"type":"None","enableRouting":false},"pageSettings":{"orientation":"Landscape","height":null,"width":null,"background":{"source":"","color":"transparent"},"showPageBreaks":false,"fitOptions":{"canFit":false},"boundaryConstraints":"Infinity"},"snapSettings":{"constraints":31,"gridType":"Lines","verticalGridlines":{"lineIntervals":[1.25,18.75,0.25,19.75,0.25,19.75,0.25,19.75,0.25,19.75],"snapIntervals":[20],"lineDashArray":"","lineColor":"lightgray"},"horizontalGridlines":{"lineIntervals":[1.25,18.75,0.25,19.75,0.25,19.75,0.25,19.75,0.25,19.75],"snapIntervals":[20],"lineDashArray":"","lineColor":"lightgray"}},"selectedItems":{"nodes":[],"connectors":[],"wrapper":null,"constraints":16382,"selectedObjects":[{"shape":{"type":"Basic","shape":"Rectangle","cornerRadius":0},"ports":[],"id":"node1","height":60,"width":100,"offsetX":440,"offsetY":427,"annotations":[{"id":"RU3lT","content":"Start","annotationType":"String","style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","bold":false,"textWrapping":"WrapWithOverflow","color":"black","whiteSpace":"CollapseSpace","fontFamily":"Arial","fontSize":12,"italic":false,"opacity":1,"strokeDashArray":"","textAlign":"Center","textOverflow":"Wrap","textDecoration":"None"},"hyperlink":{"link":"","hyperlinkOpenState":"NewTab","content":"","textDecoration":"None"},"constraints":4,"visibility":true,"rotateAngle":0,"rotationReference":"Parent","margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center","offset":{"x":0.5,"y":0.5}}],"zIndex":0,"container":null,"visible":true,"horizontalAlignment":"Left","verticalAlignment":"Top","backgroundColor":"transparent","borderColor":"none","borderWidth":0,"rotateAngle":0,"pivot":{"x":0.5,"y":0.5},"margin":{},"flip":"None","wrapper":{"actualSize":{"width":100,"height":60},"offsetX":440,"offsetY":427},"constraints":5240814,"style":{"fill":"white","gradient":{"type":"None"},"strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"textOverflow":"Wrap"},"isExpanded":true,"expandIcon":{"shape":"None"},"fixedUserHandles":[],"flipMode":"All","tooltip":{"openOn":"Auto","content":"","isSticky":false},"inEdges":[],"outEdges":[],"parentId":"","processId":"","umlIndex":-1,"isPhase":false,"isLane":false}],"userHandles":[],"rotateAngle":0,"canToggleSelection":false,"pivot":{"x":0.5,"y":0.5},"width":100,"height":60,"offsetX":440,"offsetY":427,"handleSize":14},"basicElements":[],"tooltip":{"content":""},"commandManager":{"commands":[]},"contextMenuSettings":{},"tool":3,"bridgeDirection":"Top","diagramSettings":{"inversedAlignment":true},"customCursor":[],"version":17.1}'
      };
    const newDiagram = new Diagram(diagramData);
    console.log('NOUVEAU DIAGRAM 0: ' + JSON.stringify(newDiagram));


    // Diagram bien créé mais FK projet_id null:
    this.diagramService.createDiagram(newDiagram).pipe(
      switchMap(diagram => {
        project.diagram = diagram; // Ajouter le diagramme au projet
        return this.projectService.createProject(project); // Créer le projet après le diagramme
      })
    ).subscribe(
      response => {
        console.log('Réponse de l\'API', response);
        const newProjectId = response.id;
        this.router.navigate(['/projects', newProjectId]);
      },
      error => {
        console.error('Erreur', error);
      }
    );


    // Projet bien créé:
    console.log("NOUVEAU PROJET: " + JSON.stringify(project));
    this.projectService.createProject(project).subscribe(response => {
      console.log('Réponse de l\'API', response);
        // redirection nouveau projet details:
        // Extraire l'ID ddu nouveau projet depuis la réponse
        const newProjectId = response.id;
        this.router.navigate(['/projects', newProjectId]);
    }, error => {
      console.error('Erreur', error);
    });
  }
  
} 