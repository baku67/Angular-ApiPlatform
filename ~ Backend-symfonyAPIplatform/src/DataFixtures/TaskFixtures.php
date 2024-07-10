<?php

namespace App\DataFixtures;

use App\Entity\Task;
use Faker\Factory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class TaskFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create();

        $statuses = ['pending', 'in_progress', 'completed', 'on_hold']; // Tableau de statuts possibles

        for ($i = 0; $i < 5; $i++) {
            // Create 3-7 tasks for each project
            for ($j = 0; $j < mt_rand(3, 7); $j++) {
                $task = new Task();
                $task->setTaskName($faker->sentence(3));
                $task->setTaskDescription($faker->paragraph);
                $task->setStatus($faker->randomElement($statuses)); // statut aléatoire
                
                // Get the reference to the project
                $project = $this->getReference(ProjectFixtures::PROJECT_REFERENCE . $i);
                $task->setProject($project);

                $manager->persist($task);
            }
        }

        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            ProjectFixtures::class,
        ];
    }
}
