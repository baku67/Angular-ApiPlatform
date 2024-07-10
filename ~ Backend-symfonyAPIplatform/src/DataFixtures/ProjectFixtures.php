<?php

namespace App\DataFixtures;

use App\Entity\Project;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class ProjectFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);

        $faker = Factory::create();

        for ($i = 0; $i < 10; $i++) {
            $project = new Project();
            $project->setProjectName($faker->sentence(3));

            $manager->persist($project);
        }

        $manager->flush();
    }
}
