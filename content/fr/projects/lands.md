---
name: Lands
description: Plugin Minecraft pour la gestion des territoires
slug: lands
---

# Lands

## Présentation générale

Lands est une extension que j’ai développé pour mon serveur minecraft qui permet de définir des territoires afin de les protéger et contrôler qui peut y faire quoi. Un territoire est formé de plusieurs “chunk”. Un “chunk” est une unité fondamentale utilisée dans le jeu pour gérer le monde. C’est une sélection cubique qui englobe un morceau de 16x16 blocs de la carte. Le joueur peut définir son territoire en revendiquant des chunks. Une fois le territoire formé, il est par exemple possible de faire en sorte que le joueur A puisse y poser des blocs, que le joueur B puisse y ouvrir les portes et ouvrir les coffres, et que tout le monde puisse tuer des créatures qui s’y trouvent.

L’extension permet de créer différents types de territoires. Les territoires système, qui servent à protéger les zones communes, comme le village d’apparition, ou les zones d'événements. Les territoires joueurs, que les joueurs peuvent créer et paramétrer comme ils le souhaitent, en autorisant leurs amis à construire dessus par exemple. Puis les territoires de Guilde, qui sont des territoires communs à toute une Guilde (groupe de joueurs).

## Technologie

L’extension, comme toute extension sur le jeu minecraft, doit se faire avec le langage Java et les API mises à disposition pour personnaliser le jeu.

Les données sont stockées sur une base de données Mysql, et la synchronisation entre les différents serveurs qui utilisent l’extension est assurée par un serveur redis et un système de pub/sub.

## Développement

Pour développer cette extension, j’ai d’abord commencé à rassembler toutes les fonctionnalités qui selon moi seraient nécessaires, en m’inspirant de ce qui existe déjà, et mon expérience durant les années où je jouais beaucoup au jeu.

Une fois cela fait, j’ai extrait toutes les données que j’aurai besoin de stocker afin de créer la structure de la base de données, c'est-à-dire les tables et leurs colonnes.

## Performance

Un aspect crucial d’un plugin de territoires est la performance. En effet, des milliers de joueurs passent sur le serveur et créent des territoires. Chaque territoire est constitué d’un à plusieurs centaines de chunks. Quand une interaction se produit dans le jeu, par exemple quand un joueur casse un bloc, il faut instantanément savoir si le bloc cassé se trouve dans un territoire, et si le joueur en question est autorisé à casser un bloc ici. Pour cela, il faut trouver territoire associé au chunk qui contient le bloc, parmi les 150 000 chunks protégés par l’extension à l’heure actuelle et chaque seconde, des centaines d’intéractions se produisent dans le jeu. Il est donc nécessaire d’accéder instantanément au territoire où se produit l'interaction. Pour cela, lors du chargement de l'extension, toutes les données sont chargées en mémoire sur une HashMap. Une HashMap est une structure de données qui stocke des données sous format clé-valeur, et l’accès à une valeur, si on connaît sa clé se fait en un temps constant. C’est à dire que ce temps ne dépend pas du nombre d’éléments d'un hashmap, et est quasiment instantané (quelques nanosecondes).

Le plugin contient deux HashMaps principales une première qui a pour clé l’identifiant du territoire et en valeur la référence à l’objet Land qui contient toutes les informations du territoire, et la deuxième a pour clé un objet SChunk, qui a pour contient les coordonnées du Chunk, (par exemple x:1 z:1 world: “world1”, server: “survie”). Dans java, il existe quelque chose appelé le hashcode. Il s’agit d’une méthode sur chaque objet qui permet d’obtenir une clé de hachage. Cette clé de hachage est utilisée dans les HashMap et d’autres structures de données pour accéder à un élément de façon unique. Dans mon objet SChunk, j’ai redéfini cette clé de hachage pour être toujours la même en fonction des coordonnées du Chunk. Ainsi, deux objets SChunk qui contiennent les mêmes coordonnées renvoient la même clé de hachage. Quand une interaction se produit sur le serveur, à partir de ses coordonnées, je peux donc créer un objet SChunk et accéder instantanément à l’objet Land stocké dans l’hashmap grâce à sa clé de hachage.

Cela permet, malgré le grand nombre de territoires, que l’extension ne consomme que 0.01% des performances du serveur et que son impact sur l’expérience des joueurs soit nul.

## Retour sur expérience

La réalisation de ce projet m’a permis d’en apprendre plus sur le langage Java et la programmation orienté objet, ainsi qu’en architecture de code. Je l’utilise dans mes projets de serveurs Minecraft et je le maintiens et l’améliore depuis 4 ans en prenant en compte les retours des centaines de joueurs qui l’ont utilisé au fil des années. Il est passé par différents stades et a été retravaillé entièrement plusieurs fois, que ça soit en terme de fonctionnel et expérience utilisateur, ou bien en terme d’architecture de code.
