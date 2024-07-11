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
        // Loop through each project fixture
        for ($i = 0; $i < 5; $i++) {
            // Get the reference to the project
            $project = $this->getReference(ProjectFixtures::PROJECT_REFERENCE . $i);

            // Get members of the current project
            $members = $project->getMembers();

            // Create tasks for the current project
            for ($j = 0; $j < mt_rand(3, 7); $j++) {
                $task = new Task();
                $task->setTaskName('Task ' . ($j + 1));
                $task->setTaskDescription('Description for Task ' . ($j + 1));
                $task->setStatus('pending'); // Set a default status, or randomize as needed

                // Assign the project to the task
                $task->setProject($project);

                // Assign random members from the project to the task
                $randomMembers = $this->getRandomMembers($members);
                foreach ($randomMembers as $member) {
                    $task->addAssignatedMember($member);
                }

                $manager->persist($task);
            }
        }

        $manager->flush();
    }

    /**
     * Get a random subset of members from the project.
     *
     * @param iterable $members Members of the project
     * @param int $count Number of members to randomly select
     * @return array Random subset of members
     */
    private function getRandomMembers(iterable $members, int $count = 2): array
    {
        // Convert iterable to array
        $membersArray = iterator_to_array($members);

        // Shuffle the array to get random members
        shuffle($membersArray);

        // Return a slice of the shuffled array with $count members
        return array_slice($membersArray, 0, $count);
    }

    public function getDependencies()
    {
        return [
            ProjectFixtures::class,
        ];
    }
}