<?php 


namespace App\EventListener;

use App\Entity\Project;
use App\Service\ProjectService;
use Doctrine\ORM\Event\LifecycleEventArgs;
use Doctrine\ORM\Event\PostPersistEventArgs;

class ProjectListener
{
    private $projectService;

    public function __construct(ProjectService $projectService)
    {
        $this->projectService = $projectService;
    }

    public function postPersist(PostPersistEventArgs $args): void
    {
        $entity = $args->getObject();

        // Vérifier si l'entité est une instance de Project
        if (!$entity instanceof Project) {
            return;
        }

        $this->projectService->createProjectWithDiagram($entity);
    }

}