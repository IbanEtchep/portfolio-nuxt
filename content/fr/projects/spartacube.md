---
name: Spartacube
description: Serveur minecraft survie
skills:
  - Minecraft
  - Serveur
  - Survie
slug: spartacube
---

# Spartacube

## Présentation générale

Spartacube est un serveur Minecraft public. Minecraft est un jeu vidéo de type bac à sable développé et publié par Mojang Studios. Il a été créé en 2009 et est aujourd’hui possédé par Microsoft. Ce jeu a la particularité de ne pas avoir d’instructions spécifiques, le joueur apparaît sur un monde infini, livré à lui-même, et doit y survivre, et a la possibilité d’y faire tout ce qu’il souhaite. La grande force de ce jeu est sa communauté, de par le contenu qu'elle crée, en matière de mods, cartes, serveurs multijoueur et modes de jeu. Un serveur minecraft est une plateforme qui permet à plusieurs joueurs de jouer ensemble.

Spartacube permet à n’importe qui de venir jouer gratuitement dans un monde enrichi de différentes fonctionnalités ayant pour but d’améliorer l’expérience de jeu. Parmi ces ajouts, il y a une économie, des métiers, des protections contre la destruction d’autres joueurs, de nouveaux objets, et autres.

Afin de fonctionner, un serveur a besoin de différents ingrédients essentiels.

- Des joueurs, sans lesquels le serveur n’a pas vocation à exister, donc du contenu et un service qui les satisfasse.
- Des modérateurs/guides afin d’aider les joueurs et faire régner une ambiance saine.
- Une machine accessible 24h/24

## Infrastructure matérielle

Minecraft est un jeu gourmand en ressources, notamment en CPU et en RAM, et est peu optimisé pour utiliser plusieurs cœurs de processeurs. De ce fait, pour héberger un serveur, il faut un ordinateur ayant le plus haut score single thread possible, et suffisamment de mémoire vive et d’espace disque. Nous avons commencé par un simple hébergeur minecraft, nous avons migré sur un serveur dédié à l’affluence de joueurs. Nous nous sommes dans un premier temps tournés vers un serveur dédié GAME chez OVH pendant 1 an, que nous avons résilié ayant trouvé un bien meilleur rapport qualité prix chez Hetzner, un hébergeur Allemand. Avoir notre propre serveur nous a permis de pouvoir héberger de multiples serveurs sur la même machine et donc faire de la répartition de charge afin de pouvoir accueillir plus de joueurs dans de bonnes conditions. En plus d’héberger les serveurs Minecraft, il héberge une base de données MariaDB et un serveur Redis qui sont nécessaires pour gérer les données des joueurs.

En parallèle, nous avons un site web hébergé sur un simple hébergeur web, étant donné le faible coût et afin d’éviter qu’un problème de site n’influence le serveur ou vice versa.

Ensuite, les serveurs de jeu étant régulièrement sujets à attaques DDOS, nous payons un service qui se charge de la protection en couche réseau et applicative et redirige le trafic légitime sur notre serveur.

Enfin, nous faisons des sauvegardes journalières que nous stockons sur un S3 sur scaleway, garantissant une excellente durabilité et disponibilité des données.

## Infrastructure logicielle

Dans le jeu Minecraft, le serveur et le client sont tous deux programmés avec le langage Java. Pour héberger le serveur, nous avons choisi d’utiliser “Paper” qui est une surcouche au serveur de base fourni par minecraft, open source et existant depuis 10 ans, ajoutant de multiples correctifs, notamment en matière de performances et de bugs de duplication. Ça fournit par la même occasion une API en Java permettant d’ajouter des extensions au serveur (plugins). Il existe des milliers de plugins publiques gratuits ou payants qu’on peut installer. 

Ayant une infrastructure de serveur particulière, répartissant les joueurs sur différents serveurs, ce qui nécessite de synchroniser les données des différents serveurs, rendant la plupart des plugins publiques incompatibles, et voulant offrir l’expérience la plus personnalisée possible, j’ai développé un grand nombre de plugins, comme par exemple un plugin de Guildes, de territoires, de mini jeux événementiels, et des 10aines d’autres, ce qui m’a permi d'acquérir une forte expérience en développement Java.

## Modèle économique

Le modèle économique du serveur est “Free-to-Play”, c'est-à-dire que le joueur peut venir jouer gratuitement, et a la possibilité d’effectuer des achats intégrés, tels que des cosmétiques, des boost ou bien un abonnement premium. Nous avons à cœur de ne pas pénaliser les joueurs “gratuit”, et de ce fait tout avantage qui peut être obtenu en payant est gagnable également en jeu.

## L’équipe

L’équipe est aujourd’hui constituée d’une 12aine de personnes.

### Les modérateurs (4 à 8)

Ce sont des joueurs bénévoles qui postulent pour devenir modérateur afin d’aider à faire respecter le règlement et guider les joueurs. Tout joueur de plus de 18 ans peut nous envoyer une candidature qui peut donner lieu à un entretien, puis un recrutement.

### Les administrateurs (4)

Ils ont des permissions plus avancées que les modérateurs, leur permettant d’agir sur des problèmes plus avancés, tels que des remboursements d’objets causés par des bugs, ou restaurations de zones à un état antérieur suite à la destruction par un autre joueur en cas d’oubli de protection de celui-ci.

Ils ont aussi accès à la console et aux fichiers du serveur pour aider à la configuration et la mise en place de nouvelles fonctionnalités. 

### Fondateurs (2)

Moi et mon associé, qui sommes à l’origine de la création du serveur. Bien que nous puissions tous les deux toucher à tout, il est essentiellement en charge de l’équipe tandis que je suis chargé de la partie technique.

## Communication

La communication est importante pour tout serveur de jeu qui fonctionne. Sur Spartacube, elle se déroule principalement sur un serveur Discord dédié où la communauté est rassemblée. On y retrouve plusieurs éléments:

- Des salons d’annonce afin de tenir informé les joueurs. On y poste toute sorte d’informations utiles aux joueurs dans les canaux dédiés, notamment les annonces importantes, les événements, les promotions, les giveaway, ou bien les mises à jour.
- Un salon suggestions, afin que les joueurs puissent proposer leurs idées pour améliorer le serveur et récolter l’avis de la communauté sur chaque idée.
- Un salon rapport de bugs, pour qu’ils puissent nous informer lorsqu’ils détectent un bug et suivre la résolution.
- Des salons de discussion publique, où les joueurs peuvent discuter entre eux, que ce soit à l’écrit ou à l’oral, ou bien partager leurs créations, recruter des coéquipiers, ou bien promouvoir leurs shops en jeu.
- Un système de tickets, où le joueur peut ouvrir un ticket afin d’obtenir du support pour toute sorte de problème.
- Un espace staff, avec un salon annonce, salons vocaux (réunion, bureaux..), salon chat staff, chat administration, absences, ainsi que des salons où nous recevons des alertes de l’anti cheat, ou des plaintes de joueurs depuis le jeu.

## Publicité

La publicité pour le serveur se fait essentiellement grâce à des sites de référencement, qui sont en première place dans les moteurs de recherche et offrent un classement des serveurs minecraft. Les serveurs qui obtiennent le plus de votes sur ces classements sont les mieux placés, et il est aussi possible de souscrire à des places sponsorisées à durée limitée.

Notre site internet possède une partie “Voter”, où les joueurs peuvent voter sur différents sites afin d’obtenir des récompenses en jeu. Une fois le vote effectué, nous contactons l’API des sites en question pour qu’ils nous confirment si la personne a bien voté.

Afin d'optimiser le taux de clic sur ces sites, il est important d’avoir une description et une bannière qui donne envie. C’est pourquoi nous avons fait appel aux services d’un graphiste pour nous faire des illustrations (logo, icône, bannière)

## Quelques chiffres

En 3 ans:

- 30 000 visiteurs uniques sur le serveur
- record de 150 connectés simultanés
- 2 000 membres sur le discord

## Compétences travaillés:

- Autonomie
- Communication
- Travail d’équipe
- POO
- Administration systèmes
- Sécurité informatique

## Conclusion

Ce projet tient une place importante dans ma vie. Elle m’a permis d'acquérir une réelle expérience dans différents domaines, tels que le développement java, l'administration systèmes, la gestion des données, la gestion d’incidents, la sécurité informatique ou bien la communication. En plus de cette expérience, ça m’a permis de passer d’étudiant fauché à une situation confortable, tout en faisant ce que j’aime.

Je pense que Minecraft est un excellent outil pédagogique. Ce jeu m’a permis d’apprendre énormément sur les défis qui peuvent être rencontrés dans le monde professionnel tout en restant dans une ambiance décontractée et sans pression.
