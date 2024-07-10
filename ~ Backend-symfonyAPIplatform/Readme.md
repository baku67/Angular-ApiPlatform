composer create-project symfony/skeleton {{ path }}
composer require api 

./backend/config/api_platform.yaml
api_platform:
    title: Hello API Platform
    version: 1.0.0
    formats:
        jsonld: ['application/ld+json']
    docs_formats: 
        jsonld: ['application/ld+json']
        jsonopenapi: ['application/vnd.openapi+json']
        html: ['text/html']
    defaults:
        # DEV : Liaison API frontend Angular: 
        attributes:
                cors:
                    allow_origin: ['http://localhost:4200']
                    allow_headers: ['content-type', 'authorization']
                    allow_methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
                    max_age: 3600



symfony serve
symfony server:stop

symfony console doctrine:database:create
symfony console make:migration
symfony console doctrine:migrations:migrate

// ** Modif schema BDD sans migration :
symfony console doctrine:schema:update --force