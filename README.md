# api mini projet Laravel

- Réalisé par Adrien Quimbre

- Api permettant le visionnage, l’ajout, la suppression et la modification d’articles, l’upload de fichier.

## Pour commencer:

Vous devez avoir installé:

- composer
- node
- php

Dans le terminal à la racine du projet, tapez: npm install.

Créez une base de donnée mysql avec le nom de votre choix.

## Installation de la base de données:

Changez le nom de la base de donnée par celui que vous avez choisi dans le fichier ".env" à la ligne DB_DATABASE
Si besoin:
- Changez le nom d'utilisateur dans le fichier ".env" à la ligne DB_USERNAME
- Changez le mot de passe dans le fichier ".env" à la ligne DB_PASSWORD
- Changez le port mysql dans le fichier ".env" à la ligne DB_PORT

Dans le terminal à la racine du projet, tapez: php artisan migrate.

## Rentrer des données fictives:

Dans le terminal à la racine du projet, tapez: php artisan tinker.
Puis: Blog::factory()->count(10)->create();

## Tester l'api:

L’api peut être testée sur Postman (ou autre).
Dans le terminal à la racine du projet, tapez: php artisan serve.
Dans Postman, l’url sera localhost:8000/api/blog. Utilisez le port donné par la commande php artisan serve
Pour voir les routes, dans le terminal, tapez la commande suivante à la racine du projet: php artisan route:liste 

L’api peut être testée via une page web localhost:8000/. Utilisez le port donné par la commande php artisan serve.

## Test feature:

Dans le terminal à la racine du projet, tapez: Php artisan test.
La commande va vider la base de donné. Vous pouvez retaper la commande: php artisan tinker.
Puis: Blog::factory()->count(10)->create(); pour en simuler des nouvelles.


