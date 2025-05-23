---
name: Spartacube
description: Serveur minecraft survie
slug: spartacube
youtube_url: https://www.youtube.com/embed/ntjIo3n8C5o
skills:
  - travail_d_equipe
  - organisation
  - autonomie
  - administration-systemes-linux
  - communication
  - empathie
---

# Spartacube

## Présentation générale

Spartacube est un serveur Minecraft public. Minecraft est un jeu vidéo de type bac à sable développé et publié par Mojang Studios. Il a été créé en 2009 et est aujourd’hui possédé par Microsoft. Ce jeu a la particularité de ne pas avoir d’instructions spécifiques : le joueur apparaît dans un monde infini. Il doit y survivre, et a la possibilité d’y faire tout ce qu’il souhaite. La grande force de ce jeu est sa communauté, de par le contenu qu'elle crée, en matière de mods, de cartes, de serveurs multijoueur et de modes de jeu. Un serveur Minecraft est une plateforme qui permet à plusieurs joueurs de jouer ensemble.

Spartacube permet à n’importe qui de venir jouer gratuitement dans un monde enrichi de différentes fonctionnalités ayant pour but d’améliorer l’expérience de jeu et d’offrir un cadre sécurisé et bienveillant. Parmi ces ajouts, il y a une économie, des métiers, des protections contre la destruction d’autres joueurs, de nouveaux objets et des événements.

Afin de fonctionner, un serveur a besoin de différents ingrédients essentiels.

- Des joueurs, donc du contenu et un service qui les satisfasse.
- Des modérateurs/guides afin d’aider les joueurs et de faire régner une ambiance saine.
- Une machine accessible 24 h/24

## Contexte et enjeux

J’ai commencé le projet lors de ma première année de BTS SIO. J’avais pas mal de temps libre et de vacances scolaires à cette période, alors j’ai eu envie de refaire un serveur Minecraft, d’abord par passion, mais aussi pour gagner un peu d’argent. J’ai alors contacté un ami de longue date avec qui j’avais fait un autre serveur par le passé et il a tout de suite été motivé pour se lancer sur ce projet avec moi. On s’est mis d’accord sur le fait que son rôle serait plutôt de gérer la communauté et l’équipe, et moi plutôt la partie technique, à savoir l’hébergement du serveur et son développement.

Pour moi, l’enjeu était d’offrir aux joueurs un espace où jouer sereinement, dans la bienveillance, avec une expérience de jeu simple et ouverte à tous. Les risques, du côté de l'équipe, étaient les abus de pouvoir et les sanctions injustifiées. Du côté des joueurs, c’était plutôt les conflits entre joueurs ou la triche qui fragiliserait l’économie du serveur. Enfin, le dernier risque était la cybersécurité. Beaucoup de personnes mal intentionnées cherchent des rançons ou juste à se sentir puissantes et attaquent les serveurs de jeu. Les attaques les plus courantes sont les attaques DDoS, mais il y a aussi des risques de prise de contrôle et de destruction du serveur à l’aide de failles en tout genre, notamment au niveau des extensions, ou en prenant le contrôle du compte d’un administrateur.

Le modèle économique du serveur est “free-to-play”, c'est-à-dire que le joueur peut venir jouer gratuitement et a la possibilité d’effectuer des achats intégrés, tels que des cosmétiques, des boosts ou bien un abonnement premium. Nous avons à cœur de ne pas pénaliser les joueurs “gratuits”, et de ce fait tout avantage qui peut être obtenu en payant est obtenable également en jeu.

## Les acteurs

Les deux acteurs principaux sont l’équipe du serveur et ses joueurs.

L’équipe est d’abord constituée de modérateurs. Ce sont des joueurs bénévoles qui postulent pour devenir modérateurs afin d’aider à faire respecter le règlement et à guider les joueurs. Tout joueur de plus de 18 ans peut nous envoyer une candidature qui peut donner lieu à un entretien, puis à un recrutement.

Il y a ensuite les administrateurs. Ils ont des permissions plus avancées que les modérateurs, leur permettant d’agir sur des problèmes plus avancés, tels que des remboursements d’objets causés par des bugs, ou des restaurations de zones à un état antérieur suite à la destruction par un autre joueur. Ils ont aussi accès à la console et aux fichiers du serveur pour aider à la configuration et à la mise en place de nouvelles fonctionnalités.

Enfin, il y a moi et mon associé, qui sommes à l’origine de la création du serveur. Bien que nous puissions tous les deux toucher à tout, il est essentiellement en charge de l’équipe tandis que je suis chargé de la partie technique.

Du côté des joueurs, il y en a de tout âge. La tranche d’âge la plus représentée est 14 à 22 ans selon des sondages, mais on a vu des joueurs de tout âge, des retraités, ou bien des parents qui jouent avec leurs enfants.

## Les étapes de réalisation

Je vais maintenant présenter ce que j’ai fait sur ce projet. D’abord pour sa création, puis au cours de sa vie.

Tout d’abord, nous avons discuté avec mon associé de nos idées respectives et les avons écrites sur un tableau Kanban à l’aide de l’outil Trello, qui offre une interface intuitive pour faire des tâches, les assigner et les déplacer dans les colonnes “Idées - À faire - En cours - Terminé”. Ensuite, pendant plusieurs mois, à l’aide de l’expérience que j’ai acquise les années précédentes et des enseignements en BTS SIO, j’ai installé les plugins (extensions) de base. Par exemple, celui qui permet la création de groupes de droit et l’assignation de permissions, la restauration de zones détruites, ou la carte web interactive. Ensuite, j’ai développé en Java les extensions qui manquaient ou ne me convenaient pas. Par exemple, j’ai développé un plugin de gestion de territoires, permettant aux joueurs de protéger leurs constructions et d’y inviter leurs amis. J’ai aussi développé un plugin de guildes permettant aux joueurs de créer des groupes, d’avoir une résidence commune, des territoires de guilde, un chat de groupe et des alliances avec les autres guildes. Ensuite, j’ai développé un plugin qui ajoute un système de progression permettant aux joueurs de monter en niveaux en effectuant des actions qui rapportent un nombre d’xp défini. Ces niveaux permettent aux joueurs d’obtenir des récompenses par paliers, comme de l’argent en jeu, des grades, ou d’agrandir leurs territoires. Une fois toutes les fondations faites, nous avons ouvert le serveur. Il nous manquait plus que les joueurs. Nous avons alors payé une publicité sur un site qui référence les serveurs Minecraft et, au bout de quelques minutes, les premiers joueurs ont fait leurs apparitions, et, quelques temps après, nous avons recruté les premiers membres de l’équipe. La vie du serveur a donc commencé et nous avons fait face à différents problèmes que je vais détailler par la suite.

Le premier problème était qu’il y avait de plus en plus de joueurs sur le serveur, et des joueurs qui faisaient des machines de plus en plus grandes demandant de plus en plus de ressources au système. Le serveur avait donc du mal à tenir la charge et des perturbations se faisaient ressentir chez les joueurs.

La réponse immédiate que j’ai apportée a été l’optimisation de la configuration du serveur. Pour cela, j’ai fait un travail de recherche qui m’a mené à lire différents articles donnant des conseils pour optimiser sa configuration, telle que la page [minecraft-optimization](https://github.com/YouHaveTrouble/minecraft-optimization). J’ai donc appliqué certains des conseils s’y trouvant. Ensuite, j’ai installé l’outil [Spark](https://spark.lucko.me/). C’est un outil appelé un profiler permettant d’analyser ce qui consomme des performances sur un serveur Minecraft. Elle détaille le temps que prennent chaque fonction Java exécutée sur le serveur et leur pourcentage par rapport au reste. Cela m’a permis d’identifier les extensions pas optimisées pour les remplacer et de mettre en place des limites sur les machines que construisent les joueurs et les taux d’apparition des animaux et des monstres.

À plus long terme, j’ai commencé à refaire de 0 une grande partie des extensions du serveur dans l’optique de répartir les joueurs entre plusieurs serveurs pour répartir la charge. J’ai donc fait en sorte que les extensions synchronisent leurs données entre les serveurs à l’aide de Redis. Pour cela, j’ai aussi développé une extension permettant la communication entre les serveurs et la synchronisation des fonctionnalités de base comme le chat et les téléportations. Aujourd’hui, les joueurs sont répartis sur plusieurs serveurs : 3 serveurs survie où ils construisent leurs maisons et tout ce qu’ils veulent, un serveur ressources pour récolter des ressources et éviter d’endommager les serveurs survie, et un serveur événements où ont lieu de temps en temps des mini-jeux pour divertir les joueurs.

Pour cela, en termes d’hébergement, j’ai aussi dû passer d’un hébergement mutualisé à la location d’un serveur dédié chez OVH. Cela nous a emmenés face au problème suivant : les attaques et les problèmes de sécurité.

Le fait d’être passé sur un serveur dédié a fait que nous ne bénéficions plus de la protection anti-DDoS proposée par l’ancien hébergeur. Je pensais que l’anti-DDOS d’OVH suffirait étant donné sa bonne réputation, mais les premières attaques n’ont pas tardé à arriver et le serveur ne tenait pas. Le filtrage effectué par OVH était trop tardif et le serveur tombait avant qu’il n’entre en action. J’ai donc pris la décision de déléguer cette partie à un service externe qui protège les serveurs d’attaques DDoS en répartissant la charge réseau sur différents serveurs et en filtrant les requêtes sur la couche applicative.

Gérer un serveur dédié m’a aussi permis de monter en compétences en administration de systèmes Linux, car il m’a fallu mettre en place les serveurs Minecraft, un serveur de base de données, un serveur web, un système de sauvegarde journalier, mettre en place un VPN et un pare-feu afin de fermer toute porte aux assaillants.

Le dernier aspect important auquel j’ai beaucoup participé est la communication et le support technique. J’ai en effet été amené à régulièrement aider les joueurs quand ils rencontraient des bugs, gérer des conflits ou autres problèmes, et j’ai beaucoup communiqué sur les ajouts et modifications apportées aux serveurs. J’ai aussi créé des espaces suggestions et débats sur Discord où les joueurs sont libres de proposer leurs idées, et j’ai de temps en temps créé des sondages afin de mieux connaître les joueurs, leurs attentes et leurs motivations afin de toujours améliorer le serveur.

## **Les résultats**

En 3 ans, plus de 20 000 joueurs uniques se sont connectés au serveur et nous avons rassemblé plus de 2000 personnes sur le serveur Discord. Ce projet m’a apporté énormément sur plusieurs plans. D’abord sur le plan technique, en développement et en administration de systèmes grâce aux nombreux problèmes rencontrés. Ensuite, sur le plan humain, j’ai pu faire la connaissance de personnes extraordinaires et j'ai amélioré mes compétences en communication et ma compréhension des besoins des joueurs. Et enfin, sur le plan financier, j’ai pu créer une auto-entreprise pour déclarer les revenus et ne plus être dépendant de mes parents, pour acheter du matériel, payer l’essence, payer mon logement durant mes études, et profiter de la vie.

## **Lendemains et regard critique**

Depuis environ 1 an, je suis beaucoup moins actif sur le serveur, car j’ai moins de temps libre, de motivation et d’autres activités qui se sont ajoutées. Le serveur est donc beaucoup moins actif, seuls quelques joueurs continuent à jouer et certains membres de l’équipe créent de temps en temps des animations. Cependant, j’ai l’intention de redonner une seconde vie à ce serveur une fois que j’aurai fini mes études, en évitant de répéter les mêmes erreurs. Je vais soigneusement préparer un plan le rendant plus pérenne dans le temps avec plus d’interactions entre les joueurs, une expérience de jeu plus épurée, plus d’animations et une économie plus stable. Je vais également mieux répartir mes efforts. En voyant la croissance rapide au début du projet, j’ai déployé trop d’efforts pour pouvoir accueillir plus de joueurs, et aujourd’hui je pense en avoir trop fait. Ce que les gens aiment avant tout, c’est l’aspect familial et communautaire du serveur, il vaut donc mieux que je concentre mes efforts sur ça, sur la création des fonctionnalités manquantes et la consolidation et épuration de l’existant.
