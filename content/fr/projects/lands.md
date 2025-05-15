---
name: Lands
description: Plugin Minecraft pour la gestion des territoires
slug: lands
skills:
  - autonomie
  - architecture-logicielle
  - architecture-sgbdr
---

# Lands

## Présentation générale

Lands est une extension (plus couramment appelée plugin) que j’ai développée pour mon serveur Minecraft qui permet de définir des territoires afin de les protéger et de contrôler qui peut y faire quoi. Un territoire est formé de plusieurs “chunks”. Un “chunk” est une unité fondamentale utilisée dans le jeu pour gérer le monde. C’est une sélection cubique qui englobe un morceau de 16 x 16 blocs de la carte. Le joueur peut définir son territoire en revendiquant des chunks. Une fois le territoire formé, il est par exemple possible de faire en sorte que le joueur A puisse y poser des blocs, que le joueur B puisse y ouvrir les portes et ouvrir les coffres, et que tout le monde puisse tuer les créatures qui s’y trouvent.

L’extension permet de créer différents types de territoires. Les territoires système, qui servent à protéger les zones communes, comme le village d’apparition, ou les zones d'événements. Les territoires joueurs, que les joueurs peuvent créer et paramétrer comme ils le souhaitent, en autorisant leurs amis à construire dessus par exemple. Puis les territoires de Guilde, qui sont des territoires communs à toute une Guilde (groupe de joueurs).

## Contexte et enjeux

J’ai décidé de créer cette extension dès le début de la création de mon serveur Minecraft. Il existait déjà certaines extensions disponibles, mais elles ne me convenaient pas pour plusieurs raisons. La première est qu’elles sont trop complexes à utiliser, pas assez intuitives. La seconde était que j’avais prévu de les intégrer à d’autres extensions, comme les guildes, et que les autres extensions ne permettaient pas de le faire facilement, car elles n’étaient pas conçues pour. Enfin, il y a la performance. J’avais vu sur des serveurs Discord d’entraide que ces plugins apparaissent souvent dans les rapports de profiler Spark parmi ceux qui consomment le plus gros pourcentage des ressources du serveur.

Mon objectif était donc de créer une extension intuitive, sur laquelle je peux facilement implémenter de nouvelles fonctionnalités, et dont l’impact en termes de performances soit négligeable.

## Étapes de réalisation

Pour développer cette extension, j’ai d’abord commencé à rassembler toutes les fonctionnalités qui, selon moi, seraient nécessaires, en m’inspirant de ce qui existe déjà et de mon expérience durant les années où je jouais beaucoup au jeu.

J’ai ensuite enchaîné sur la création des modèles. Les principaux sont Land, qui est une classe abstraite qui représente un territoire, et les classes qui en héritent, à savoir PlayerLand, les territoires joueurs, GuildLand, les territoires de guilde, et SystemLand, les territoires système, utilisés pour protéger le spawn et les zones d'événements et qui contiennent des fonctionnalités supplémentaires.

Une fois cela fait, j’ai extrait toutes les données dont j’aurais besoin de stocker afin de créer la structure de la base de données, c'est-à-dire les tables et leurs colonnes.

J’ai ensuite commencé à réfléchir à un aspect crucial d’un plugin de territoires : la performance. En effet, des milliers de joueurs passent sur le serveur et créent des territoires. Chaque territoire est constitué d’un à plusieurs centaines de chunks. Quand une interaction se produit dans le jeu, par exemple quand un joueur casse un bloc, il faut instantanément savoir si le bloc cassé se trouve dans un territoire, et si le joueur en question est autorisé à casser un bloc ici. Pour cela, il faut trouver le territoire associé au chunk qui contient le bloc parmi les 150 000 chunks protégés par l’extension à l’heure actuelle. Et chaque seconde, des centaines d’interactions se produisent dans le jeu. Il est donc nécessaire d’accéder instantanément au territoire où se produit l'interaction. Pour cela, lors du chargement de l'extension, toutes les données sont chargées en mémoire sur une HashMap. Une HashMap est une structure de données qui stocke des données sous format clé-valeur, et l’accès à une valeur, si on connaît sa clé, se fait en un temps constant. C’est-à-dire que ce temps ne dépend pas du nombre d’éléments d'un hashmap, et est quasiment instantané (quelques nanosecondes).

Le plugin contient deux HashMaps principales : une première qui a pour clé l’identifiant du territoire et en valeur la référence à l’objet Land qui contient toutes les informations du territoire, et la deuxième a pour clé un objet SChunk, qui contient les coordonnées du chunk (par exemple x:1 z:1 world: “world1”, server: “survie”). Dans Java, il existe quelque chose appelé le hashcode. Il s’agit d’une méthode sur chaque objet qui permet d’obtenir une clé de hachage. Cette clé de hachage est utilisée dans les HashMap et d’autres structures de données pour accéder à un élément de façon unique. Dans mon objet SChunk, j’ai redéfini cette clé de hachage pour être toujours la même en fonction des coordonnées du chunk. Ainsi, deux objets SChunk qui contiennent les mêmes coordonnées renvoient la même clé de hachage. Quand une interaction se produit sur le serveur, à partir de ses coordonnées, je peux donc créer un objet SChunk et accéder instantanément à l’objet Land stocké dans la hashmap grâce à sa clé de hachage.

Cela permet, malgré le grand nombre de territoires, que l’extension ne consomme que 0,01 % des performances du serveur et que son impact sur l’expérience des joueurs soit nul.

J’ai développé le plugin de façon à ce que son architecture respecte les bonnes pratiques dont j’avais connaissance jusque-là, tout en restant simple et facilement compréhensible. Le dossier model contient les objets métier. Le dossier storage contient l’interface qui définit les méthodes nécessaires pour la sauvegarde des données, de façon à pouvoir ajouter plusieurs types de stockage, et contient également l’implémentation SqlStorage qui implémente cette interface et contient les requêtes SQL permettant de manipuler les données. Une classe LandRepository est chargée de garder en cache toutes les données du plugin et contient une instance d’une implémentation de l'interface Storage afin de lire et sauvegarder les données. Une classe LandService contient les différentes actions qui peuvent être faites impliquant la manipulation des objets métier comme la création de nouveaux territoires. Ensuite, j’ai créé des menus et des commandes permettant aux joueurs de gérer leurs territoires. Ils utilisent le repository et le service pour éviter le couplage. De façon similaire, dans le dossier listeners, j’écoute de nombreux événements du jeu comme la destruction de blocs ou l’apparition de monstres afin de les bloquer ou non, selon le territoire où est déclenché l'événement. Cette architecture me permet de savoir exactement où se trouvent les éléments, de réduire le couplage entre les composants et de bien séparer les responsabilités.

## Résultats et regard critique

La réalisation de ce projet m’a permis de renforcer mes compétences sur le langage Java et la programmation orientée objet, ainsi qu’en architecture de code. Je l’utilise dans mes projets de serveurs Minecraft et je le maintiens et l’améliore depuis 4 ans en prenant en compte les retours des nombreux joueurs qui l’ont utilisé au fil des années. Il est passé par différents stades et a été retravaillé entièrement plusieurs fois, que ce soit en termes de fonctionnel et d’expérience utilisateur ou bien en termes d’architecture de code au fil de mon apprentissage.

Je pense avoir fait le bon choix en créant un plugin de territoire plutôt qu’en utilisant des plugins publics, car les joueurs en sont contents, je peux facilement y ajouter des fonctionnalités, et tous les types de territoires sont gérés de la même manière, ce qui rend l’expérience générale plus cohérente.
