---
name: Apibook
description: Gestion des rûches pour les apiculteurs
slug: apibook
---

# Apibook

## Présentation générale

Apibook est une application web qui permet aux apiculteurs de gérer leurs ruches. Elle offre une multitude de fonctionnalités, comme le suivi de ses ruches, le suivi des reines, le suivi colonial, le suivi des tâches à faire, ou la visualisation des floraisons et de la pression du frelon sur une carte, basé sur les données des utilisateurs de l’application. L’application est développée en utilisant le framework Symfony, et une base de données PostgreSQL.

## Contexte et enjeux

J’ai réalisé ce projet durant mon stage de 2ème année en BTS pendant 5 semaines. Ayant passé mes premiers jours sur des petites tâches de réajustement et correctifs sur un projet de l’entreprise, mon tuteur de stage n’ayant plus d’idées de missions à me confier et le directeur, apiculteur par passion a décidé de me confier la création d’Apibook. Pendant 5 semaines, j’ai eu la chance de pouvoir mettre en pratique mes connaissances acquises en développement afin de créer ce projet passionnant. L’enjeu était avant tout de montrer à l’entreprise de quoi j’étais capable.

## Étapes de réalisation

Pour réaliser ce projet, on faisait un compte rendu à chaque étape du projet avec mon tuteur de stage, mais sans vraiment définir de durée pour la réalisation des étapes.

La première étape de ce projet a été de créer une maquette du site afin de concevoir rapidement un visuel permettant de se faire une idée des différentes pages qui vont constituer le site, et avoir la possibilité de facilement tester différentes structures sans avoir à les développer. Pour ce faire, j'ai utilisé l'outil en ligne Balsamiq qui est l’outil que l’entreprise a l’habitude d’utiliser pour faire les maquettes.

Une fois la maquette validée, j’ai fait une liste des entités et des données dont j’aurai besoin dans chaque entités et j'ai créé un schéma relationnel de la structure de la base de données à l'aide de l'application DBSchema.

![undefined](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdYhZi8c2rDOZH5ckw0zVNIwYblDK_xbChq9_7hOjlP0d-ecBF4VFx7tSoauADmt29Tq0Ni2iK-hRoTurLyxsQ69Tydi0X-XP1tzCpYLrtfvm916LnKSDxy1IRKt7TEhCJJnUgWSw?key=lyo5y9kRlNtOtrkWP5eqmA)

J’ai ensuite pu commencer le développement de l’application web. J’ai d’abord commencé par créer un nouveau projet symfony en local lié à une une base de données Postgres que j’ai créé aussi en local, puis j’ai installé les composants nécessaires à l’application. Parmi eux, Webpack Encore qui permet de gérer la compilation du SASS et mettre tout le contenu statique (css, js, images) dans un dossier accessible à l’application. Et le bundle de “Security” qui permet de facilement mettre en place un système d’authentification et le chiffrage des mots de passe.

Une fois que tout était installé, j’ai dû créer toutes les entités à partir du schéma de données que j’avais créé, en définissant les relations et les colonnes à créer en base de données à l’aide de l’ORM Doctrine.

Puis, j'ai mis en place des fixtures. C’est un jeu de fausses données générées grâce à un module additionnel de symfony (https\://github.com/zenstruck/foundry) et qui permettent de donner vie à l’application et faciliter les tests. C’est très important pour le développement d’une application pour éviter d’avoir à chaque fois à repasser par tous les formulaires de création d’objets quand la base de données est réinitialisée.

J'ai ensuite entamé le développement de l'application, fonctionnalité par fonctionnalité, avec les routes, les formulaires, et les vues qui vont avec. (Connexion, inscription, ajout/édition de ruchers, de ruche, de suivis…)

Une fonctionnalité originale et dont le développement m’a beaucoup plu a été la création des cartes qui permettent de visualiser l’évolution de la pression du frelon et des floraisons selon les dates choisies. Je n’avais jamais fait ce genre de fonctionnalité alors ça m’a demandé pas mal de recherche et développement. D’abord, j’ai recherché le moyen d’afficher une carte sur le navigateur. J’ai comparé différentes fonctionnalités comme mapbox ou google maps et j’ai fini par choisir Leaflet. C’est une solution open source très populaire et flexible permettant de d’afficher des cartes sur un navigateur, et d’y ajouter des éléments comme des points chaud, des délimitations de pays, ou des tooltips. J’ai donc lu la documentation de leaflet pour apprendre à afficher une map. J’ai ensuite créé une requête en PHP qui récolte les données de floraison et de pression du frelon, et les coordonnées GPS de la ville par date. Puis j’ai fait une route ajax permettant de récupérer la liste depuis le navigateur de façon asynchrone, et j’ai créé des points chaud à ces coordonnées GPS selon la date choisie. Pour avoir les coordonnées GPS des villes des ruches, j’ai connecté l’application à une API du gouvernement français qui permet d’obtenir des informations sur les villes et des adresses françaises, dont les coordonnées GPS, et j’ai fait appel à cette API lors de la création et modification des ruches.

![undefined](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfLoUEgfJeKsAVGxV9Xf94pnqa8K9p_Dzx-d6O2EkKKL7vk_z4B_1Z_mhEpE5Nw8je8kdTlnqTS8AxqVO5KkUUepsMKGlydN9ZTaDAYYX8exqE2QfJtwSebKVXZ0TEwqgsOIySU?key=lyo5y9kRlNtOtrkWP5eqmA)

## Résultat et regard critique

Une fois l’application terminée, le directeur commercial, qui est aussi apiculteur sur son temps libre a invité un ami à lui, apiculteur professionnel afin que nous lui présentions le projet. Il a apprécié le projet mais il nous a dit qu’il ne l’utiliserait pas car il avait déjà sa propre gestion minutieusement élaborée au fil des années, mais que le projet était tout à fait adapté pour des apiculteurs amateurs.

Une page facebook a par la suite été créée et a reçu pas mal d'intérêt de la part de nombreux apiculteurs français qui ont eu l’occasion de tester l’application. Cependant c’est resté un projet passion sans réel but commercial et le projet n’a pas réellement connu de croissance depuis.

Cette expérience a permis l’approfondissement de mes connaissances du framework Symfony et des technologies web. En effet, les pratiques apprises à l’école sur le framework avaient quelques années de retard, et travailler dans une entreprise qui utilise cet outil tous les jours m’a permis de les actualiser. J’ai aussi appris quelles sont les étapes de création d’un site web. Avant cette expérience j’aurai eu tendance à me lancer directement dans le développement sans la phase de conception et de maquettage initiale.

L’entreprise a apprécié mon travail et m’a offert une rémunération malgré qu’elle n’y était pas obligée, le stage n’ayant duré que 6 semaines. De plus, ils ont pu me mettre à l’épreuve et approuver mes compétences en développement web. Grâce à cette expérience, ils ont tout de suite accepté ma demande de stage l’année suivante, cette fois-ci pour une durée de 3 mois.
