<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class UserFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create();

        // Create 5 users
        for ($i = 0; $i < 5; $i++) {
            $user = new User();
            $user->setUsername($faker->userName)
                ->setEmail($faker->unique()->email)
                ->setPassword('password123') // Set a default password
                ->setRoles('ROLE_USER'); // Default role, can be an array

            $manager->persist($user);

            // Reference each user by a unique key
            $this->addReference('user_' . $i, $user);
        }

        $manager->flush();
    }
}