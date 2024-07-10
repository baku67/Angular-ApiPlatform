composer create-project symfony/skeleton {{ path }}
composer require api 


symfony serve
symfony server:stop

symfony console doctrine:database:create
symfony console make:migration
symfony console doctrine:migrations:migrate

// ** Modif schema BDD sans migration :
symfony console doctrine:schema:update --force

// ** Fixtures (Faker pour dummy data)
php bin/console make:fixture
php bin/console doctrine:fixtures:load