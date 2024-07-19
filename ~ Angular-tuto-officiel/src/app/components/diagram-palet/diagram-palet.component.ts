import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DiagramModule, SymbolPaletteModule } from '@syncfusion/ej2-angular-diagrams'

import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SymbolPaletteComponent, SymbolPalette, NodeModel, ConnectorModel, PaletteModel } from '@syncfusion/ej2-angular-diagrams';
import { ExpandMode } from '@syncfusion/ej2-navigations';


// Trad:
// import { L10n, setCulture } from '@syncfusion/ej2-base';
// setCulture('fr-FR');
// L10n.load({
//     'fr-FR': {
//         'diagram-palet': {
//             "Connectors": "Connecteurs",
//         },
//     }
// });




@Component({
  selector: 'app-diagram-palet',
  standalone: true,
  imports: [DiagramModule, SymbolPaletteModule],
  providers: [ ],
  templateUrl: './diagram-palet.component.html',
  styleUrl: './diagram-palet.component.scss'
})
export class DiagramPaletComponent implements OnInit {

  public expandMode?: ExpandMode;
    public palettes?: PaletteModel[];
    public getBasicShapes(): NodeModel[] {
        let basicShapes: NodeModel[] = [{
                id: 'Rectangle',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                }
            },
            {
                id: 'Ellipse',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                }
            },
            {
                id: 'Triangle',
                shape: {
                    type: 'Basic',
                    shape: 'Triangle'
                }
            },
            {
              id: 'Plus',
              shape: {
                  type: 'Basic',
                  shape: 'Plus'
              }
            },
            {
              id: 'Star',
              shape: {
                  type: 'Basic',
                  shape: 'Star'
              }
            },
            {
              id: 'Pentagon',
              shape: {
                  type: 'Basic',
                  shape: 'Pentagon'
              }
            },
            {
              id: 'Heptagon',
              shape: {
                  type: 'Basic',
                  shape: 'Heptagon'
              }
            },
            {
              id: 'Octagon',
              shape: {
                  type: 'Basic',
                  shape: 'Octagon'
              }
            },
            {
              id: 'Ellipse',
              shape: {
                  type: 'Basic',
                  shape: 'Ellipse'
              }
            },
            {
              id: 'Trapezoid',
              shape: {
                  type: 'Basic',
                  shape: 'Trapezoid'
              }
            },
            {
              id: 'Decagon',
              shape: {
                  type: 'Basic',
                  shape: 'Decagon'
              }
            },
            {
              id: 'Parallelogram',
              shape: {
                  type: 'Basic',
                  shape: 'Parallelogram'
              }
            },


        
        ];
        return basicShapes;
    };
    public getUmlShapes(): NodeModel[] {
        let umlShapes: NodeModel[] = [
            {
                id: 'Action',
                shape: {
                    type: 'UmlActivity',
                    shape: 'Action'
                }
            },
            {
                id: 'Decision',
                shape: {
                    type: 'UmlActivity',
                    shape: 'Decision'
                }
            },
            {
                id: 'MergeNode',
                shape: {
                    type: 'UmlActivity',
                    shape: 'MergeNode'
                }
            },
            {
                id: 'InitialNode',
                shape: {
                    type: 'UmlActivity',
                    shape: 'InitialNode'
                }
            },
            {
                id: 'FinalNode',
                shape: {
                    type: 'UmlActivity',
                    shape: 'FinalNode'
                }
            },
            {
                id: 'ForkNode',
                shape: {
                    type: 'UmlActivity',
                    shape: 'ForkNode'
                }
            },
            {
                id: 'JoinNode',
                shape: {
                    type: 'UmlActivity',
                    shape: 'JoinNode'
                }
            },
            {
                id: 'TimeEvent',
                shape: {
                    type: 'UmlActivity',
                    shape: 'TimeEvent'
                }
            },
            {
                id: 'AcceptingEvent',
                shape: {
                    type: 'UmlActivity',
                    shape: 'AcceptingEvent'
                }
            },
            {
                id: 'SendSignal',
                shape: {
                    type: 'UmlActivity',
                    shape: 'SendSignal'
                }
            },
            {
                id: 'ReceiveSignal',
                shape: {
                    type: 'UmlActivity',
                    shape: 'ReceiveSignal'
                }
            },
            {
                id: 'StructuredNode',
                shape: {
                    type: 'UmlActivity',
                    shape: 'StructuredNode'
                }
            },
            {
                id: 'class',
                style: {
                    fill: '#26A0DA',
                },
                borderColor: 'white',
                shape: {
                    type: 'UmlClassifier',
                    classShape: {
                        attributes: [
                            { name: 'accepted', type: 'Date', style: { color: "red", fontFamily: "Arial", textDecoration: 'Underline',  italic: true },isSeparator: true },
                        ],
                        methods: [{ name: 'getHistory', style: {}, parameters: [{ name: 'Date', style: {} }], type: 'History' }],
                        name: 'Patient'
                    },
                    classifier: 'Class'
                },
            },
            {
                id: 'Interface',
                style: {
                    fill: '#26A0DA',
                }, borderColor: 'white',
                shape: {
                    type: 'UmlClassifier',
                    interfaceShape: {
                        name: "Bank Account",
                    },
                    classifier: 'Interface'
                },
            },
            {
                id: 'Enumeration',
                style: {
                    fill: '#26A0DA',
                }, borderColor: 'white',
                shape: {
                    type: 'UmlClassifier',
                    enumerationShape: {
                        name: 'AccountType',
                        members: [
                            {
                                name: 'Checking Account', style: {}
                            },
                        ]
                    },
                    classifier: 'Enumeration'
                },
            },
        ];
        return umlShapes;
    }
    public getFlowShapes(): NodeModel[] {
        let flowShapes: NodeModel[] = [{
                id: 'Terminator',
                shape: {
                    type: 'Flow',
                    shape: 'Terminator'
                }
            },
            {
                id: 'Process',
                shape: {
                    type: 'Flow',
                    shape: 'Process'
                }
            },
            {
                id: 'Decision',
                shape: {
                    type: 'Flow',
                    shape: 'Decision'
                }
            },
            {
                id: 'Document',
                shape: {
                    type: 'Flow',
                    shape: 'Document'
                }
            },
            {
                id: 'predefinedprocess',
                shape: {
                    type: 'Flow',
                    shape: 'PreDefinedProcess'
                }
            },
            {
                id: 'papertape',
                shape: {
                    type: 'Flow',
                    shape: 'PaperTap'
                }
            },
            {
                id: 'sort',
                shape: {
                    type: 'Flow',
                    shape: 'Sort'
                }
            },
            {
                id: 'multidocument',
                shape: {
                    type: 'Flow',
                    shape: 'MultiDocument'
                }
            },
            {
                id: 'collate',
                shape: {
                    type: 'Flow',
                    shape: 'Collate'
                }
            },
            {
                id: 'summingjunction',
                shape: {
                    type: 'Flow',
                    shape: 'SummingJunction'
                }
            },
            {
                id: 'or',
                shape: {
                    type: 'Flow',
                    shape: 'Or'
                }
            },
            {
                id: 'internalstorage',
                shape: {
                    type: 'Flow',
                    shape: 'InternalStorage'
                }
            },
            {
                id: 'extract',
                shape: {
                    type: 'Flow',
                    shape: 'Extract'
                }
            },
            {
                id: 'manualoperation',
                shape: {
                    type: 'Flow',
                    shape: 'ManualOperation'
                }
            },
            {
                id: 'merge',
                shape: {
                    type: 'Flow',
                    shape: 'Merge'
                }
            },
            {
                id: 'offpagereference',
                shape: {
                    type: 'Flow',
                    shape: 'OffPageReference'
                }
            },
            {
                id: 'sequentialaccessstorage',
                shape: {
                    type: 'Flow',
                    shape: 'SequentialAccessStorage'
                }
            },
            {
                id: 'data',
                shape: {
                    type: 'Flow',
                    shape: 'Data'
                }
            },
            {
                id: 'card',
                shape: {
                    type: 'Flow',
                    shape: 'Card'
                }
            },
              
        ];
        return flowShapes;
    };
    public getConnectors(): ConnectorModel[] {
        let connectorSymbols: ConnectorModel[] = [{
                id: 'Link1',
                type: 'Orthogonal',
                sourcePoint: {
                    x: 0,
                    y: 0
                },
                targetPoint: {
                    x: 40,
                    y: 40
                },
                targetDecorator: {
                    shape: 'Arrow'
                }
            },
            {
                id: 'Link21',
                type: 'Straight',
                sourcePoint: {
                    x: 0,
                    y: 0
                },
                targetPoint: {
                    x: 40,
                    y: 40
                },
                targetDecorator: {
                    shape: 'Arrow'
                }
            },
            {
                id: 'link33',
                type: 'Bezier',
                sourcePoint: {
                    x: 0,
                    y: 0
                },
                targetPoint: {
                    x: 40,
                    y: 40
                },
                style: {
                    strokeWidth: 2
                },
                targetDecorator: {
                    shape: 'None'
                }
            }
        ];
        return connectorSymbols;
    };


    ngOnInit(): void {
      this.expandMode = 'Multiple'
      this.palettes = [{
              //Sets the id of the palette
              id: 'flow',
              //Sets whether the palette expands/collapse its children
              expanded: false,
              //Adds the palette items to palette
              symbols: this.getFlowShapes(),
              //Sets the header text of the palette
              title: 'Formes de flux',
              iconCss: 'e-ddb-icons e-flow'
          },
          {
            id: 'uml',
            expanded: true,
            symbols: this.getUmlShapes(),
            title: 'Formes UML',
            iconCss: 'e-ddb-icons e-uml'
          },
          {
              id: 'basic',
              expanded: false,
              symbols: this.getBasicShapes(),
              title: 'Formes basiques',
              iconCss: 'e-ddb-icons e-basic'
          },
          {
              id: 'connectors',
              expanded: false,
              symbols: this.getConnectors(),
              title: 'Connecteurs',
              iconCss: 'e-ddb-icons e-connector'
          }
      ]
  }

}
