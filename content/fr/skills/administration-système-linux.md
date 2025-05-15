---
name: Administration systèmes Linux
slug: administration-systemes-linux
technical: true
icon: material-symbols-light:data-table
projects:
  - spartacube
---

# Administration systèmes Linux

## Ma définition

L’administration de systèmes Linux consiste à **gérer, maintenir et optimiser des systèmes** utilisant le système d’exploitation **Linux**. Linux est un système d’exploitation open source créé à l’origine par Linus Torvalds en 1991. Il est connu pour sa **stabilité**, sa **sécurité** et sa **flexibilité**, ce qui en fait un système d’exploitation très adapté pour héberger des services. Le rôle principal d’un administrateur de système Linux est de s’assurer que les utilisateurs puissent **accéder aux services** auxquels ils doivent pouvoir accéder, tout en **bloquant les attaques malveillantes** et en garantissant une haute **disponibilité** des services.

Cette compétence englobe plusieurs aspects :

- Installation et configuration du système
- Gestion des droits d’accès
- Installation et configuration de logiciels à l’aide de gestionnaires de paquets (nginx, apache, mariadb…).
- Surveillance du système (analyse des processus en cours, logs, alertes…).
- Gestion du réseau (mise en place de pare-feu et diagnostic des problèmes de transit de paquets)
- Scripting et automatisation (redémarrages automatiques, sauvegardes automatiques…)

## Mes éléments de preuve

La première fois que j’ai eu affaire à un système sous Linux était peu avant le début de mes études d’informatique, lorsque j’ai voulu héberger mon serveur Minecraft sur un serveur distant afin qu’il soit accessible 24 h/24 par les joueurs. J’ai d’abord trouvé ça intimidant. Il n’y avait pas d’interface et le seul moyen de communiquer avec le serveur était à l’aide d’une **connexion SSH** sur un terminal. Dans le cadre de l’hébergement de mon serveur Minecraft et à l’aide de tutoriels, j’ai pu faire mes premiers pas dans l’administration d’un système sous Linux. J’ai appris à **naviguer** dans les fichiers, les **commandes** de base pour **surveiller** le système, installer des mises à jour ou des services tels que MySQL ou Apache. Je me suis aussi essayé à la création de **pare-feu** afin de protéger ce serveur, même si je me suis rendu compte que ce que j’y mettais n’était pas optimal ou souvent inutile. 

Ensuite, en BTS, une grande partie des cours de la première année portaient sur Linux. Sur comment utiliser, maintenir et sécuriser un système sous Linux. J’ai eu la chance d’avoir un professeur passionné qui a su attiser ma curiosité sur le sujet, et sous ses recommandations, j’ai installé Linux en dual boot sur mon PC personnel afin de me familiariser davantage avec son écosystème, et depuis, je l’utilise quotidiennement. J’ai aussi utilisé Linux tous les jours durant mes stages et mon alternance, car chez Medialeads tous les développeurs utilisent exclusivement ce système d’exploitation.

Ces apprentissages m'ont permis de mettre en œuvre cette compétence dans des cas pratiques concrets. Les plus significatifs concernent l'installation de mes serveurs Minecraft. Je vais décrire étape par étape le déroulé de l'installation sur le dernier serveur que j'ai commandé.

Tout d'abord, j'ai commandé un serveur dédié suffisamment grand pour pouvoir accueillir plusieurs serveurs afin de répartir la charge. Après avoir testé différentes solutions, comme OVH et Ikoula, j'ai fini par me tourner vers Hetzner, un gros hébergeur allemand offrant le meilleur rapport qualité-prix. J'y ai commandé un serveur dédié possédant un processeur AMD Ryzen™ 9 7950X3D, 128 Go de RAM et 2 x 2 To SSD NVMe. Une fois commandé, j'ai patienté quelques heures et j'ai reçu les accès SSH me permettant de m'y connecter.

Une fois le serveur entre mes mains, je commence par mettre en place les **sécurités de base**. Tout d'abord, je crée un **nouvel utilisateur** et je **désactive la connexion en root**. Ensuite, je mets en place un **pare-feu** pour autoriser le trafic vers le service dont j’ai besoin par les utilisateurs autorisés. Quand l'hébergeur le permet, je privilégie la création du pare-feu dans son interface. Ainsi, c'est lui qui se charge du filtrage et encaisse la charge CPU et réseau. Une fois le pare-feu en place, tout accès au serveur depuis l'extérieur est impossible. Le pare-feu n'autorise que l'adresse IP de mon VPN et les adresses IP du service anti-DDoS que j'utilise, qui agit comme un proxy entre ma machine et les utilisateurs. Les utilisateurs se connectent sur l'infrastructure de l'anti-DDOS et celui-ci redirige le trafic légitime sur mon serveur Minecraft.

Ensuite, pour **surveiller le système**, j’installe netdata. C’est un outil très populaire permettant de mettre en place en quelques minutes un dashboard offrant une vision complète sur le serveur et ses services et permet même de mettre en place des **alertes** quand des **incidents** se produisent.

La prochaine étape consiste à installer les serveurs Minecraft. Pour cela, j'utilise Pterodactyl. Pterodactyl est un panel de gestion de serveurs de jeu qui permet de faire tourner des serveurs dans des conteneurs Docker et d'avoir une interface web simple d'utilisation pour les tâches courantes comme l'édition de configuration, les différentes actions comme le démarrage, l'arrêt, le redémarrage du serveur, la visualisation des logs en temps réel et l'envoi de commandes au serveur. Pour l’installer, je commence par un serveur **MariaDB**, un serveur web **Nginx**, **PHP** et les différentes extensions requises, et **Docker**. Puis je suis les différentes étapes décrites dans leur documentation. Une fois Pterodactyl installé, je peux y installer tous les serveurs Minecraft et les relier entre eux à l’aide du proxy Velocity et d’un serveur Redis. Je crée ensuite les accès pour les membres du staff ainsi qu’un **accès VPN** pour y accéder.

L’installation est dans les grandes lignes terminée, il ne me reste plus qu’à mettre en place la **sauvegarde journalière** sur un serveur distant. Pour cela, j’ai choisi de stocker les sauvegardes sur un object storage chez Scaleway, à l’aide de l’outil restic permettant de créer des **sauvegardes rapides, sûres et efficientes** en stockage, étant donné que les sauvegardes sont **compressées** et sont **différentielles**. Cela propose l’avantage que, entre deux versions sauvegardées, la différence de poids de la sauvegarde sera le poids des modifications effectuées entre les deux sauvegardes. Le serveur Minecraft pesant plusieurs centaines de GO, cela a deux avantages majeurs : le premier est que cela réduit considérablement le temps de la sauvegarde et la bande passante utilisée, et le 2ᵉ est l’optimisation des coûts du stockage.

Durant ces 5 dernières années d’études en informatique, que ce soit au travail, à l’école ou sur mes projets personnels, j’ai eu l’occasion de pratiquer cette compétence dans divers projets touchant de près ou de loin à l’administration de systèmes Linux.

## Mon autocritique

Bien que ça ne soit pas mon domaine d’expertise, j’ai acquis une bonne maîtrise de Linux et je suis capable d’administrer un système sous Linux de façon à ce que le service qui y est hébergé soit suffisamment stable et sécurisé pour être utilisé en production. Je suis tout de même loin d’avoir le niveau de quelqu’un qui est spécialisé dans cette branche et dont c’est le métier, c’est pourquoi je préfère déléguer les aspects critiques comme la protection anti-DDoS, qui ne peut pas être mise en place sans de plus profondes connaissances et des moyens considérables. Pour quelqu’un qui souhaite apprendre à utiliser Linux, je lui conseillerai de l’installer sur son ordinateur, dans un premier temps en dual boot, et si ça lui plaît, de l’utiliser quotidiennement. Cela lui permettra de connaître petit à petit l’écosystème et les commandes de base.

## Mon évolution dans cette compétence

Il n’est pas rare qu’un développeur se voie confier des tâches de gestion de systèmes Linux, surtout dans les petites entreprises où il n’y a pas d’équipe dédiée à ça. Maîtriser cette compétence est donc un vrai plus si on veut travailler dans une petite entreprise, et c’est aussi grandement utile dans la vie de tous les jours d’un développeur pour déployer ses applications ou améliorer son flux de travail. C’est pour ces raisons que je vais continuer à lire sur le sujet et à mettre en pratique quand l’occasion se présente afin de m’améliorer dans cette compétence.
