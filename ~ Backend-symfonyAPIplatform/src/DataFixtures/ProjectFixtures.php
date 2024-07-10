<?php

namespace App\DataFixtures;

use App\Entity\Project;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class ProjectFixtures extends Fixture
{

    public const PROJECT_REFERENCE = 'project_';


    public function load(ObjectManager $manager): void
    {

        $faker = Factory::create();

        for ($i = 0; $i < 5; $i++) {
            $project = new Project();
            $project->setProjectName($faker->company);

            $manager->persist($project);

            // Store the project reference for use in TaskFixtures
            $this->addReference(self::PROJECT_REFERENCE . $i, $project);
        }

        $manager->flush();
    }
}
