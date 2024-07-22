<?php

namespace App\DataFixtures;

use App\Entity\Diagram;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class DiagramFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create();

        for ($i = 0; $i < 10; $i++) {
            $diagram = new Diagram();
            $diagram->setTitle('Diagram ' . $faker->sentence);
            // $diagram->setJson($faker->json);
            $diagram->setJson('{"enableRtl":false,"locale":"fr-FR","animationComplete":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"click":{"closed":false,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"collectionChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"commandExecute":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"connectionChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"contextMenuBeforeItemRender":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"contextMenuClick":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"contextMenuOpen":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"created":{"closed":false,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"dataLoaded":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"doubleClick":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"dragEnter":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"dragLeave":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"dragOver":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"drop":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"elementDraw":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"expandStateChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"fixedUserHandleClick":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"historyChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"historyStateChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"keyDown":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"keyUp":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"load":{"closed":false,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"mouseEnter":{"closed":false,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"mouseLeave":{"closed":false,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"mouseOver":{"closed":false,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"mouseWheel":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"onFixedUserHandleMouseDown":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"onFixedUserHandleMouseEnter":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"onFixedUserHandleMouseLeave":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"onFixedUserHandleMouseUp":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"onImageLoad":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"onUserHandleMouseDown":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"onUserHandleMouseEnter":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"onUserHandleMouseLeave":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"onUserHandleMouseUp":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"positionChange":{"closed":false,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"propertyChange":{"closed":false,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"rotateChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"scrollChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"segmentChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"segmentCollectionChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"selectionChange":{"closed":false,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"sizeChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"sourcePointChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"targetPointChange":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"textEdit":{"closed":false,"currentObservers":null,"isStopped":false,"hasError":false,"thrownError":null,"__isAsync":false},"width":"100%","height":"580px","nodes":[{"shape":{"type":"Basic","shape":"Rectangle","cornerRadius":0},"ports":[],"id":"node1","height":60,"width":100,"offsetX":440,"offsetY":427,"annotations":[{"id":"RU3lT","content":"Start","annotationType":"String","style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","bold":false,"textWrapping":"WrapWithOverflow","color":"black","whiteSpace":"CollapseSpace","fontFamily":"Arial","fontSize":12,"italic":false,"opacity":1,"strokeDashArray":"","textAlign":"Center","textOverflow":"Wrap","textDecoration":"None"},"hyperlink":{"link":"","hyperlinkOpenState":"NewTab","content":"","textDecoration":"None"},"constraints":4,"visibility":true,"rotateAngle":0,"rotationReference":"Parent","margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center","offset":{"x":0.5,"y":0.5}}],"zIndex":0,"container":null,"visible":true,"horizontalAlignment":"Left","verticalAlignment":"Top","backgroundColor":"transparent","borderColor":"none","borderWidth":0,"rotateAngle":0,"pivot":{"x":0.5,"y":0.5},"margin":{},"flip":"None","wrapper":{"actualSize":{"width":100,"height":60},"offsetX":440,"offsetY":427},"constraints":5240814,"style":{"fill":"white","gradient":{"type":"None"},"strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"textOverflow":"Wrap"},"isExpanded":true,"expandIcon":{"shape":"None"},"fixedUserHandles":[],"flipMode":"All","tooltip":{"openOn":"Auto","content":"","isSticky":false},"inEdges":[],"outEdges":[],"parentId":"","processId":"","umlIndex":-1,"isPhase":false,"isLane":false}],"enablePersistence":false,"scrollSettings":{"viewPortWidth":700.0000610351562,"viewPortHeight":580,"currentZoom":1,"horizontalOffset":0,"verticalOffset":0,"padding":{"left":0,"right":0,"top":0,"bottom":0},"scrollLimit":"Diagram","canAutoScroll":false},"rulerSettings":{"showRulers":false,"horizontalRuler":{"orientation":"Horizontal","arrangeTick":null},"verticalRuler":{"orientation":"Vertical","arrangeTick":null}},"backgroundColor":"transparent","dataSourceSettings":{"crudAction":{"read":""},"dataManager":null,"dataSource":null},"mode":"SVG","layers":[{"objects":["node1"],"id":"default_layer","visible":true,"lock":false,"zIndex":0,"objectZIndex":0}],"connectors":[],"constraints":500,"layout":{"type":"None","enableRouting":false},"pageSettings":{"orientation":"Landscape","height":null,"width":null,"background":{"source":"","color":"transparent"},"showPageBreaks":false,"fitOptions":{"canFit":false},"boundaryConstraints":"Infinity"},"snapSettings":{"constraints":31,"gridType":"Lines","verticalGridlines":{"lineIntervals":[1.25,18.75,0.25,19.75,0.25,19.75,0.25,19.75,0.25,19.75],"snapIntervals":[20],"lineDashArray":"","lineColor":"lightgray"},"horizontalGridlines":{"lineIntervals":[1.25,18.75,0.25,19.75,0.25,19.75,0.25,19.75,0.25,19.75],"snapIntervals":[20],"lineDashArray":"","lineColor":"lightgray"}},"selectedItems":{"nodes":[],"connectors":[],"wrapper":null,"constraints":16382,"selectedObjects":[{"shape":{"type":"Basic","shape":"Rectangle","cornerRadius":0},"ports":[],"id":"node1","height":60,"width":100,"offsetX":440,"offsetY":427,"annotations":[{"id":"RU3lT","content":"Start","annotationType":"String","style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","bold":false,"textWrapping":"WrapWithOverflow","color":"black","whiteSpace":"CollapseSpace","fontFamily":"Arial","fontSize":12,"italic":false,"opacity":1,"strokeDashArray":"","textAlign":"Center","textOverflow":"Wrap","textDecoration":"None"},"hyperlink":{"link":"","hyperlinkOpenState":"NewTab","content":"","textDecoration":"None"},"constraints":4,"visibility":true,"rotateAngle":0,"rotationReference":"Parent","margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center","offset":{"x":0.5,"y":0.5}}],"zIndex":0,"container":null,"visible":true,"horizontalAlignment":"Left","verticalAlignment":"Top","backgroundColor":"transparent","borderColor":"none","borderWidth":0,"rotateAngle":0,"pivot":{"x":0.5,"y":0.5},"margin":{},"flip":"None","wrapper":{"actualSize":{"width":100,"height":60},"offsetX":440,"offsetY":427},"constraints":5240814,"style":{"fill":"white","gradient":{"type":"None"},"strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"textOverflow":"Wrap"},"isExpanded":true,"expandIcon":{"shape":"None"},"fixedUserHandles":[],"flipMode":"All","tooltip":{"openOn":"Auto","content":"","isSticky":false},"inEdges":[],"outEdges":[],"parentId":"","processId":"","umlIndex":-1,"isPhase":false,"isLane":false}],"userHandles":[],"rotateAngle":0,"canToggleSelection":false,"pivot":{"x":0.5,"y":0.5},"width":100,"height":60,"offsetX":440,"offsetY":427,"handleSize":14},"basicElements":[],"tooltip":{"content":""},"commandManager":{"commands":[]},"contextMenuSettings":{},"tool":3,"bridgeDirection":"Top","diagramSettings":{"inversedAlignment":true},"customCursor":[],"version":17.1}');

            
        }

        $manager->persist($diagram);

        $manager->flush();
    }
}