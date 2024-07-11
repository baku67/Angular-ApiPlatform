<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use GuzzleHttp\Client;

class UserFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {

        $client = new Client();

        // Fetch 5 random users from randomuser.me
        $response = $client->request('GET', 'https://randomuser.me/api/', [
            'query' => ['results' => 5]
        ]);

        $data = json_decode($response->getBody()->getContents(), true);
        $results = $data['results'];

        // Create 5 users using the fetched data
        foreach ($results as $i => $result) {
            $user = new User();
            $user->setUsername($result['login']['username']) 
                ->setEmail($result['email']) 
                ->setPassword('password123') // Set a default password
                ->setRoles('ROLE_USER') // Default role as an array
                ->setImgUrl($result['picture']['large']);

            $manager->persist($user);

            // Reference each user by a unique key
            $this->addReference('user_' . $i, $user);
        }

        $manager->flush();
    }
}