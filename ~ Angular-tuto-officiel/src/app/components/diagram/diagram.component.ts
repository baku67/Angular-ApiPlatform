import { Component, ViewEncapsulation, ViewChild, AfterViewInit, AfterViewChecked } from "@angular/core";
import { DiagramComponent, DiagramModule, UndoRedoService } from '@syncfusion/ej2-angular-diagrams'

@Component({
  selector: 'app-diagram',
  standalone: true,
  imports: [ DiagramModule ],
  providers: [UndoRedoService],
  templateUrl: './diagram.component.html',
  styleUrl: './diagram.component.scss'
})


export class DiagramUiComponent implements AfterViewInit, AfterViewChecked {

  @ViewChild("diagram") diagramObj !: DiagramComponent
  public diagramData: any;
  public diagramDataTest: string = '{"enableRtl":false,"locale":"en-US","animationComplete":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"click":{"closed":false,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"collectionChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"commandExecute":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"connectionChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"contextMenuBeforeItemRender":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"contextMenuClick":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"contextMenuOpen":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"created":{"closed":false,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"dataLoaded":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"doubleClick":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"dragEnter":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"dragLeave":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"dragOver":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"drop":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"elementDraw":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"expandStateChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"fixedUserHandleClick":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"historyChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"historyStateChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"keyDown":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"keyUp":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"load":{"closed":false,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"mouseEnter":{"closed":false,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"mouseLeave":{"closed":false,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"mouseOver":{"closed":false,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"mouseWheel":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"onFixedUserHandleMouseDown":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"onFixedUserHandleMouseEnter":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"onFixedUserHandleMouseLeave":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"onFixedUserHandleMouseUp":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"onImageLoad":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"onUserHandleMouseDown":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"onUserHandleMouseEnter":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"onUserHandleMouseLeave":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"onUserHandleMouseUp":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"positionChange":{"closed":false,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"propertyChange":{"closed":false,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"rotateChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"scrollChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"segmentChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"segmentCollectionChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"selectionChange":{"closed":false,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"sizeChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"sourcePointChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"targetPointChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"textEdit":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"width":"100%","height":"580px","nodes":[{"shape":{"type":"Basic","shape":"Rectangle","cornerRadius":0},"ports":[],"id":"node1","height":60,"width":100,"offsetX":440,"offsetY":427,"annotations":[{"id":"RU3lT","content":"Start","annotationType":"String","style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","bold":false,"textWrapping":"WrapWithOverflow","color":"black","whiteSpace":"CollapseSpace","fontFamily":"Arial","fontSize":12,"italic":false,"opacity":1,"strokeDashArray":"","textAlign":"Center","textOverflow":"Wrap","textDecoration":"None"},"hyperlink":{"link":"","hyperlinkOpenState":"NewTab","content":"","textDecoration":"None"},"constraints":4,"visibility":true,"rotateAngle":0,"rotationReference":"Parent","margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center","offset":{"x":0.5,"y":0.5}}],"zIndex":0,"container":null,"visible":true,"horizontalAlignment":"Left","verticalAlignment":"Top","backgroundColor":"transparent","borderColor":"none","borderWidth":0,"rotateAngle":0,"pivot":{"x":0.5,"y":0.5},"margin":{},"flip":"None","wrapper":{"actualSize":{"width":100,"height":60},"offsetX":440,"offsetY":427},"constraints":5240814,"style":{"fill":"white","gradient":{"type":"None"},"strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"textOverflow":"Wrap"},"isExpanded":true,"expandIcon":{"shape":"None"},"fixedUserHandles":[],"flipMode":"All","tooltip":{"openOn":"Auto","content":"","isSticky":false},"inEdges":[],"outEdges":[],"parentId":"","processId":"","umlIndex":-1,"isPhase":false,"isLane":false}],"enablePersistence":false,"scrollSettings":{"viewPortWidth":700.0000610351562,"viewPortHeight":580,"currentZoom":1,"horizontalOffset":0,"verticalOffset":0,"padding":{"left":0,"right":0,"top":0,"bottom":0},"scrollLimit":"Diagram","canAutoScroll":false},"rulerSettings":{"showRulers":false,"horizontalRuler":{"orientation":"Horizontal","arrangeTick":null},"verticalRuler":{"orientation":"Vertical","arrangeTick":null}},"backgroundColor":"transparent","dataSourceSettings":{"crudAction":{"read":""},"dataManager":null,"dataSource":null},"mode":"SVG","layers":[{"objects":["node1"],"id":"default_layer","visible":true,"lock":false,"zIndex":0,"objectZIndex":0}],"connectors":[],"constraints":500,"layout":{"type":"None","enableRouting":false},"pageSettings":{"orientation":"Landscape","height":null,"width":null,"background":{"source":"","color":"transparent"},"showPageBreaks":false,"fitOptions":{"canFit":false},"boundaryConstraints":"Infinity"},"snapSettings":{"constraints":31,"gridType":"Lines","verticalGridlines":{"lineIntervals":[1.25,18.75,0.25,19.75,0.25,19.75,0.25,19.75,0.25,19.75],"snapIntervals":[20],"lineDashArray":"","lineColor":"lightgray"},"horizontalGridlines":{"lineIntervals":[1.25,18.75,0.25,19.75,0.25,19.75,0.25,19.75,0.25,19.75],"snapIntervals":[20],"lineDashArray":"","lineColor":"lightgray"}},"selectedItems":{"nodes":[],"connectors":[],"wrapper":null,"constraints":16382,"selectedObjects":[{"shape":{"type":"Basic","shape":"Rectangle","cornerRadius":0},"ports":[],"id":"node1","height":60,"width":100,"offsetX":440,"offsetY":427,"annotations":[{"id":"RU3lT","content":"Start","annotationType":"String","style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","bold":false,"textWrapping":"WrapWithOverflow","color":"black","whiteSpace":"CollapseSpace","fontFamily":"Arial","fontSize":12,"italic":false,"opacity":1,"strokeDashArray":"","textAlign":"Center","textOverflow":"Wrap","textDecoration":"None"},"hyperlink":{"link":"","hyperlinkOpenState":"NewTab","content":"","textDecoration":"None"},"constraints":4,"visibility":true,"rotateAngle":0,"rotationReference":"Parent","margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center","offset":{"x":0.5,"y":0.5}}],"zIndex":0,"container":null,"visible":true,"horizontalAlignment":"Left","verticalAlignment":"Top","backgroundColor":"transparent","borderColor":"none","borderWidth":0,"rotateAngle":0,"pivot":{"x":0.5,"y":0.5},"margin":{},"flip":"None","wrapper":{"actualSize":{"width":100,"height":60},"offsetX":440,"offsetY":427},"constraints":5240814,"style":{"fill":"white","gradient":{"type":"None"},"strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"textOverflow":"Wrap"},"isExpanded":true,"expandIcon":{"shape":"None"},"fixedUserHandles":[],"flipMode":"All","tooltip":{"openOn":"Auto","content":"","isSticky":false},"inEdges":[],"outEdges":[],"parentId":"","processId":"","umlIndex":-1,"isPhase":false,"isLane":false}],"userHandles":[],"rotateAngle":0,"canToggleSelection":false,"pivot":{"x":0.5,"y":0.5},"width":100,"height":60,"offsetX":440,"offsetY":427,"handleSize":14},"basicElements":[],"tooltip":{"content":""},"commandManager":{"commands":[]},"contextMenuSettings":{},"tool":3,"bridgeDirection":"Top","diagramSettings":{"inversedAlignment":true},"customCursor":[],"version":17.1}';



  ngOnInit(): void {
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



  public saveDiag():void {
    this.diagramData = this.diagramObj?.saveDiagram();
    console.log("Saved diagram string: " + this.diagramData)
  }

  public loadDiag():void {
    try {
      this.diagramObj.loadDiagram(this.diagramDataTest);
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
