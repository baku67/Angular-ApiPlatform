*** Frontend:

~ npm install -g @angular/cli   
~ npm install
~ ng new {{ projectName }}

~ ng serve ( ou ng serve --host 0.0.0.0 --port 4200 pour test réseau local)

Test:
http://localhost:4200

~ ng generate component {{componentName}}




**** Backend:

composer create-project symfony/skeleton {{ path }}
composer require api 

composer install

symfony serve (ou php -S 0.0.0.0:8000 -t public pour test réseau local)
symfony server:stop

symfony console doctrine:database:create
symfony console make:migration
symfony console doctrine:migrations:migrate

// ** Modif schema BDD sans migration :
symfony console doctrine:schema:update --force

// ** Fixtures (Faker pour dummy data)
php bin/console make:fixture
php bin/console doctrine:fixtures:load