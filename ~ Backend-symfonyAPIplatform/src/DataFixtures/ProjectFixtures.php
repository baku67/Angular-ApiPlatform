<?php

namespace App\DataFixtures;

use App\Entity\Project;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use App\Repository\UserRepository;

class ProjectFixtures extends Fixture implements DependentFixtureInterface
{
    public const PROJECT_REFERENCE = 'project_';

    private UserRepository $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create();

        // Load users from references created in UserFixtures
        $users = [];
        for ($i = 0; $i < 8; $i++) {
            $users[] = $this->getReference('user_' . $i);
        }

        $statuses = ['planning', 'in_progress', 'completed', 'on_hold', 'cancelled'];

        for ($i = 0; $i < 8; $i++) {
            $project = new Project();
            $project->setProjectName($faker->company);
            $project->setDescription($faker->paragraph);
            $project->setStartDate($faker->dateTimeBetween('-1 year', 'now'));
            $project->setEndDate($faker->dateTimeBetween('now', '+1 year'));
            $project->setStatus($statuses[array_rand($statuses)]);

            // Assign a random user as the owner of the project
            $randomUser = $users[array_rand($users)];
            $project->setOwner($randomUser);
            // Ensure the owner is added as a member if not already added
            $project->addMember($randomUser);

            // Add multiple random members to the project
            $membersCount = mt_rand(3, 8); // Randomly choose between 3 to 8 members
            $randomMembers = $this->getRandomMembers($users, $membersCount);
            foreach ($randomMembers as $member) {
                $project->addMember($member);
            }

            $manager->persist($project);

            // Store the project reference for use in TaskFixtures
            $this->addReference(self::PROJECT_REFERENCE . $i, $project);
        }

        $manager->flush();
    }


    private function getRandomMembers(array $users, int $count): array
    {
        $randomKeys = array_rand($users, $count);
        $randomMembers = [];
        foreach ($randomKeys as $key) {
            $randomMembers[] = $users[$key];
        }
        return $randomMembers;
    }




    public function getDependencies(): array
    {
        return [
            UserFixtures::class,
        ];
    }
}