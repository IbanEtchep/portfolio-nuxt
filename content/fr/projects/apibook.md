---
name: Apibook
description: Gestion des rûches pour les apiculteurs
slug: apibook
---

# Apibook

## Présentation générale

Apibook est une application web qui permet aux apiculteurs de gérer leurs ruches. J’ai réalisé ce projet durant mon stage de 2ème année en BTS. Ayant passé mes premiers jours sur des petites tâches de réajustement et correctifs sur un projet de l’entreprise, mon tuteur de stage n’ayant plus d’idées de missions à me confier et le directeur, apiculteur par passion ont décidé de me confier la création d’Apibook. Pendant 6 semaines, j’ai eu la chance de pouvoir mettre en pratique mes connaissances acquises en développement afin de créer ce projet passionnant. 

## Fonctionnalités

- ToDoList
- Suivi sanitaire
- Suivi colonial
- Suivi des reines
- Suivi des ruches
- Suivi des floraisons
- Suivi de la pression du frelon
- Affichage d'une carte montrant les points de floraisons et de pression du frelon en assemblant les données de tous les apiculteurs.

## Déroulé du développement

Pour réaliser ce projet, on faisait un compte rendu à chaque étape du projet avec mon tuteur de stage, mais sans vraiment définir de durée pour la réalisation des étapes.

La première étape de ce projet a été de créer un wireframe du site. Pour ce faire, j'ai utilisé l'outil en ligne Balsamiq.

Une fois le wireframe validé, j'ai créé un schéma de la structure de la base de données à l'aide de l'application DBSchema.

J’ai ensuite pu commencer le développement de l’application web. J’ai d’abord commencé par créer un nouveau projet symfony en local lié à une une base de données Postgres que j’ai créé aussi en local, puis j’ai installé les composants nécessaires à l’application. Parmi eux, Webpack Encore qui permet de gérer la compilation du SASS et mettre tout le contenu statique (css, js, images) dans un dossier accessible à l’application.

Une fois que tout était installé, j’ai dû créer toutes les entités à partir du schéma de données que j’avais créé,

Puis, j'ai mis en place des fixtures qui sont un jeu de fausses données générées grâce à un module additionnel de symfony (https\://github.com/zenstruck/foundry) et qui permettent de donner vie à l’application et faciliter les tests.

J'ai ensuite créé les routes de l'application et les formulaires symfony dont j’ai besoin pour le développement de l’application. (Connexion, inscription, ajout/édition de ruchers, de ruche, de suivis…)

Enfin, j'ai développé les différentes parties de l'application, fonctionnalité par fonctionnalité.

## Retour d’expérience

Cette expérience a permis l’approfondissement de mes connaissances du framework Symfony et des technologies web. En effet, les pratiques apprises à l’école sur le framework avaient quelques années de retard, et travailler dans une entreprise qui utilise cet outil tous les jours m’a permis de les actualiser.

Elle m’a aussi apporté une expérience dans la création d’un site web dynamique, de la conception et maquettage, au produit fini.
