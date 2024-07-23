<?php

namespace App\Service;

use App\Entity\Project;
use App\Entity\Diagram;
use Doctrine\ORM\EntityManagerInterface;

class ProjectService
{
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function createProjectWithDiagram(Project $project)
    {
        $diagram = new Diagram();
        $project->setDiagram($diagram);
        $this->em->persist($project);
        $this->em->flush();
    }
}