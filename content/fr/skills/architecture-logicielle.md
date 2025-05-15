---
name: Architecture logicielle
slug: architecture-logicielle
technical: true
icon: ic:baseline-architecture
projects:
  - mpa
  - medicalplace
  - apibook
  - lands
---

# Architecture logicielle

## Ma définition

Je définis cette compétence comme la capacité à **imbriquer différentes parties d’un logiciel** de façon à garantir son **évolutivité** et sa **maintenabilité**. Quand cet aspect est négligé, les projets logiciels informatiques perdent leur capacité à évoluer, car la moindre évolution implique des changements sur l’ensemble de la base de code. Donc ces fonctionnalités prennent plus de temps à être développées et font souvent apparaître des bugs. À cause de ça, il faut toujours plus de développeurs pour une même quantité de valeur apportée, et les développeurs perdent aussi en motivation, car une grande partie de leurs efforts est utilisée pour corriger des bugs plutôt que d’apporter de la valeur.

La mise en place d’une architecture logicielle passe par plusieurs étapes. D’abord, la **planification** et l’**analyse des besoins**, où on comprend les besoins métier et les contraintes. Cela permettra, dans la 2ᵉ étape, qui est la **conception**, de faire les choix architecturaux qui vont le mieux répondre aux besoins et aux contraintes. Et enfin, le **développement**, où on va appliquer concrètement la conception effectuée dans l’étape précédente.

Il y a différents niveaux d'architecture, plus ou moins précis selon d’où on se place pour regarder. Un modèle que je trouve intéressant permettant de visualiser les niveaux importants d’une application est le modèle C4, qui permet de modéliser 4 niveaux de zoom afin de parler aux différents acteurs. Le niveau 1 est le **contexte**, il décrit simplement les différents acteurs et leurs interactions. Le 2ᵉ niveau est le **conteneur**. Il décrit les différentes briques logicielles qui composent le système, comme la base de données, l’API et le front-end. En 3ᵉ vient le **composant**. Il découpe un conteneur du niveau précédent en plusieurs composants. Enfin, il y a le niveau **code** qui descend encore d’un niveau et découpe un composant en classe.

Afin d’aider à répondre à ce besoin d’architecture **évolutive, maintenable et flexible**, des principes se sont répandus afin de guider les développeurs. Parmi eux, les plus connus sont les suivants :

- KIS (Keep It Simple) : garder le code le plus **simple et lisible** possible.
- DRY (Don’t repeat yourself) : **Éviter de se répéter**, car si on se répète trop, le jour où on doit changer cette chose qui a été répétée, il faudra la changer partout.
- YAGNI (You ain’t gonna need it) : À doser, mais **éviter de trop complexifier** le système en essayant de prévoir des choses dont on n’aura pas forcément besoin.
- SOLID : ensemble de principes appliqués spécifiquement à la programmation orientée objet.
  - **S**ingle responsibility principle : une classe doit avoir une seule raison de changer.
  - **O**pen/Closed principle : les entités doivent être fermées à la modification, mais ouvertes à l’extension.
  - **L**iskov substitution principle : tous les enfants d’une classe doivent pouvoir être substituables entre eux sans altérer le comportement du programme.
  - **I**nterface segregation principle : préférer faire plusieurs interfaces plutôt qu’une seule regroupant tout, afin d’éviter que des classes se retrouvent avec des méthodes dont elles n’ont pas besoin.
  - **D**ependency inversion principle : les dépendances doivent se faire sur des abstractions afin de favoriser la modularité et la flexibilité et d’éviter les dépendances directes entre modules.

Cependant, afin de bien utiliser ces principes, il faut bien comprendre à quoi ils servent. Ils ne sont pas toujours indiscutables et leur respect peut dépendre du contexte.

En plus de ces principes, il est intéressant de connaître quelques **design patterns**. Ce sont des solutions réutilisables qui peuvent être utilisées pour répondre à la majorité des problèmes communs d’architecture de code en programmation orientée objet, tout en restant en accord avec les principes SOLID.

## Mes éléments de preuve

Je me suis intéressé à ce domaine quand j’ai commencé à réaliser des extensions en Java pour mes serveurs Minecraft. Au début, je faisais des extensions mal architecturées, et je finissais par tout refaire de 0 quelques mois/années plus tard, car je me rendais compte que ça n’allait pas du tout. Tout était en désordre et j’avais du mal à comprendre et faire évoluer ce que j’avais moi-même fait quelques années plus tôt.

Un exemple de réalisation où j’ai fait appel à cette compétence est la réalisation de l’extension Lands pour mes serveurs Minecraft. Tout d’abord, j’ai organisé les dossiers de façon à ce que la structure soit **compréhensible** pour quelqu’un qui n’a jamais travaillé sur le projet et qu’il puisse facilement se repérer.

![undefined](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeNtZtTDcBs7Q02hxaWwDMaBBp_NUJ4Qwbfjeddmr2KyhWpA8xvh1RXtRYLnO1KG3Tr86uZHfCfy4VSdW_SFmK7H3S-F0ujjbnFMp7bNcx9a53D5FkWPu9XYWSI-q02UC73ZknYoQ?key=b8fc5JNR_BXBrCxNrL70ili7)

Le dossier API contient les interfaces exposées aux autres extensions afin qu’elles puissent **utiliser certaines fonctionnalités** de l’extension. J’ai également créé une multitude d'événements personnalisés qui sont déclenchés lorsque certaines actions sont effectuées par les joueurs. Par exemple, PlayerChunkClaimEvent est déclenché quand un joueur veut s’approprier un territoire, ou PlayerLandEnterEvent est déclenché quand un joueur entre dans un territoire. Une autre extension peut **écouter ces événements** et agir en fonction de certaines conditions. Par exemple, si on veut empêcher un joueur d’entrer dans une zone restreinte, on peut écouter PlayerLandEnterEvent et bloquer l'événement si la zone en contexte est la zone restreinte et que le joueur n’a pas la permission d’y accéder. Cela permet aux autres extensions **d’étendre les fonctionnalités sans toucher au code d’origine**.

Le plugin permet aussi de créer des territoires de guilde. Pour cela, j’ai créé une interface qui référence toutes les fonctions dont j’ai besoin pour intégrer un plugin de guildes. Le code utilise uniquement les fonctions de cette interface, et pour ajouter une compatibilité avec un autre plugin de guildes, il suffit simplement de créer une classe qui utilise cette interface. Ainsi, il n’y a pas besoin de modifier le cœur du code et de risquer de créer des bugs.

Un autre exemple où j’ai utilisé ma compétence d’architecture logicielle est lorsque j’ai intégré Yousign au projet Mon Portail Achats. Yousign est un service qui permet de signer numériquement des documents. Sur MPA, une demande du client était que l’on puisse intégrer ce service afin de signer les bons de commande.

Comme pour tous les services externes rattachés à la plateforme, comme l’envoi d’e-mail ou ElasticSearch, on crée des **modules séparés du cœur**. Les modules interagissent avec le cœur de l’application à l’aide d'**événements**. Ils peuvent écouter et déclencher des événements. Ces événements sont génériques et **indépendants du module**, et **spécifiés dans le cœur**. Ainsi, par exemple, pour envoyer un e-mail, on déclenche l'événement d’envoi d’e-mail, et le module actuellement chargé écoute cet événement et envoie l’e-mail. Grâce à cela, il est extrêmement facile de changer le service qui se charge d’envoyer les mails sans toucher au cœur de l’application.

Pour en revenir au module Yousign, il est architecturé de la façon suivante :

```text
src/
    Command/
        YousignSendCommand – commande permettant d’envoyer un document en signature
        YousignWebhookCommand – commande utile en local pour tester le webhook
    Controller/
        YousignController – contient le webhook appelé par yousign lors d’actions sur le service
    EventSubscriber/
        YousignEventSubscriber – écoute les événements déclenchés par le cœur et interagit avec le service Yousign
    Service/
        YousignService - contient la logique d’appel API au service Yousign
```

Voici la classe qui permet d’écouter les événements déclenchés par l’application et d’utiliser le service yousign.

![undefined](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf2XHlncs5jYDeZsd8T7D52rfmgqJlBvAMBb9yHS6YNzIYNM_j6N_hb_PrnDdQhVSI8Z0L59sEupMqjGP58DLxCq6QiQ1-0eFWLyIJz6uO5xuacnIFKZgbZMk7lPe0YDB84eRz3TA?key=b8fc5JNR_BXBrCxNrL70ili7)

Voici le contrôleur qui permet d’écouter des événements déclenchés par Yousign.

![undefined](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfyGeQJPE-ozLZxYyg-4GK3uK6UF4Agu4eCLY7bNmNqHlvjPAt3yXCY0YFpwSq7lZkj9aj3ZR2U4fTk4BdXWrrz2NthgUvZyhwlnqmc9-E2hhXLXP6QaNwue7FLGkOHbJueWNSzVw?key=b8fc5JNR_BXBrCxNrL70ili7)

Ainsi, il n’y a **pas de couplage** entre le service de signature et le code métier, et si on veut par la suite changer de service de signature, il est possible de le faire très facilement en créant un nouveau module qui utilise ces mêmes événements. Cela a aussi l’avantage de rendre le code **plus facile à tester**, car étant donné qu’on utilise des événements, quand on veut tester les parties de code qui utilisent des événements, il est possible de le faire sans faire appel aux services externes en remplissant nous-mêmes les réponses avec des fausses données.

## Mon autocritique

Je pense avoir acquis un niveau de maîtrise suffisant dans cette compétence pour pouvoir exercer le métier de développeur. J’ai bien compris l’enjeu crucial que représente l’architecture dans un logiciel et les pratiques qui permettent de la rendre plus robuste. Les projets informatiques finissent souvent à la poubelle à cause d’un manque de rigueur ou de compétence dans cet aspect.

Cependant, il me reste une grosse marge de progression. Beaucoup d’aspects de l’architecture des projets sur lesquels j’ai travaillé peuvent être améliorés et je dois encore gagner en expérience et en connaissances, en particulier dans l’utilisation des outils de modélisation des différents niveaux d’architecture.

Les conseils que je donnerais à moi-même ou aux personnes souhaitant progresser dans cette compétence seraient de bien comprendre l’importance du sujet, d’explorer des projets open source sur GitHub pour voir les différentes façons de faire, d’apprendre les notions théoriques, par exemple en regardant des conférences sur YouTube, et surtout de pratiquer.

## Mon évolution dans cette compétence

Je n’ai pas encore atteint le niveau que je souhaite atteindre dans cette compétence. C’est pour cette raison que, depuis récemment, je déploie des efforts pour m’améliorer dans cette compétence. J’ai découvert la notion de clean architecture et de Domain-Driven Development et je me forme sur le sujet en regardant des vidéos sur le sujet et en essayant d’appliquer les concepts sur un nouveau projet personnel sur lequel je me suis lancé récemment. J’aimerais aussi prendre le temps de lire le livre “Design Patterns: Elements of Reusable Object-Oriented Software” pour mieux connaître les design patterns afin d’avoir plus d’outils en main pour bien architecturer mon code.
