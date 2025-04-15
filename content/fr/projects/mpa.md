---
name: MPA
description: Place de marché B2B
slug: mpa
---

# Mon Portail Achats

## Présentation générale

Mon Portail Achats est le projet sur lequel je travaille à plein temps durant mon alternance chez Medialeads. Il s’agit d’une **place de marché B2B** qui a pour objectif de faciliter l’achat de matériel pour les acteurs du secteur de l’énergie. Elle est conçue pour que les ELD (Entreprises Locales de Distribution) puissent plus efficacement organiser leurs achats de matériel. La particularité est que les ELD sont des entreprises publiques et donc ont des processus d’achat particuliers. Par exemple, tout achat de matériel doit d’abord passer par un appel d’offre publique sur un site du gouvernement.

Grâce à MPA, ces ELD adhérentes au portail et ayant des besoins matériels très similaires peuvent se rassembler en “groupe achat” afin d’acheter de gros volumes et donc réduire leurs coûts. 

La plateforme comprends:

 **Un back office Opérateur**, où les opérateurs peuvent gérer:

- Les adhérents (établissements, adresses, contacts, …)
- Les fournisseurs (établissements, adresses, contacts, …)
- Les produits génériques, ayant des catégories, des attributs, des options, des variantes, produits groupés, ect..
- Créer/gérer des dossiers/lots (produits, volumes…)
- Gérer les contrats
- Valider des produits des fournisseurs

**Un back office Fournisseur,** où les fournisseur peuvent essentiellement gérer les produits associés aux contrats où ils sont rattachés, ils peuvent y spécifier pour chaque produit:

- Les prix
- Informations en tout genre
- Les options
- Les attributs
- Les conditionnements
- Les remises

**Un front office,** permettant aux adhérents de: **** 

- Consulter le catalogue de produits génériques
- Acheter des produits
- Renseigner les prévisions de volumes pour les groupes achat auxquels ils sont rattachés.

## Contexte et enjeux

L’équipe chargée de ce projet est relativement petite, constituée d’une cheffe de projet, deux alternants, et un ou deux autres développeurs selon la période.

La cheffe de projet a le rôle central dans le projet. D’un côté, elle récolte le besoin des clients au travers d’ateliers en physique ou d’appels en visio. Elle retranscrit le besoin en tâches et en maquettes et s’assure de leur validation. De l’autre, elle attribue et explique les tâches aux développeurs, suit l’avancement du développement, et fait des retours sur leur travail.

En tant que développeur, mon rôle est de mettre en place techniquement les fonctionnalités. Cela passe par une phase de conception, où je vais réfléchir à comment intégrer ce qu’on me demande de faire, notamment au niveau de la base de données, au travers de diagrammes de classe, puis mettre en place les fonctionnalités dans l’application développée en utilisant le framework Symfony.

Le premier enjeu a été de rassurer le client, étant donné qu’ils avaient déjà entamé la création d’un portail avec une autre entreprise et que ça s’était mal passé. Le second a été de bien comprendre le besoin métier particulier lié au fonctionnement particulier des entreprises publiques. Enfin, le besoin de flexibilité extrême a rendu plus difficile la conception de l’architecture de la base de données, et il a induit un risque supplémentaire en termes de solidité de l’architecture et la performance de l’accès aux données.

Mes objectifs étaient simples, répondre au mieux au besoin du client et respecter au maximum les délais prévus pour la réalisation du projet.

## Étapes de réalisation

Je vais maintenant détailler certaines fonctionnalités clé que j’ai mis en place sur le projet.

### Panier et commandes

Une des fonctionnalités que j’ai réalisée est la mise au panier des produits et les différentes étapes jusqu’à la signature de la commande.

Pour réaliser cette fonctionnalité, la première étape a été de lire attentivement les différentes User Story sur Jira, analyser les maquettes, et discuter avec le chef de projet pour mettre au clair les zones d’ombre. Une fois que j’avais bien comprit le processus et le besoin métier, j’ai créé un diagramme de classe pour représenter les entités que j’allais devoir créer.

![undefined](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfLtFBO_Uc818EYAN50GVTxVaHMSN-xeOnahxVd3D6Prafnzc8BnYXm6vUb4tvGPA3qv1x7wnkVX5O2ca52nhEzz8aYV23dIxYsWCcKXR8gNvfgNtNXGTxLnfqlCmilp1iQrHhUHg?key=b4qgPwR2iylp8lmpfD3EjA)

Le besoin métier veut que chaque panier soit divisé en sous panier au fur et à mesure qu’on y ajoute des produits. Les produits venant d’un même contrat sont rassemblés dans un “CartContract”, et lors de l’ajout d’un produit au panier, il est possible de choisir sa quantité du produit, son conditionnement, et de configurer ses options.

Le processus de mise au panier jusqu’à la commande est découpé en 5 étapes. La première est la mise au panier des produits et leur configuration. La seconde est la sélection des adresses de livraison, de facturation, et d’envoi de commande, et la sélection des différentes fluctuations facultatives. A cette étape, il est aussi possible de livrer un produit dans différentes adresses en différentes quantités, ce qui aura pour effet de découper un sous panier en plusieurs autres sous paniers lors du passage à la 3ème étape. Lors de la 3ème étape, on choisit les différents acteurs de la commande, comme le signataire ou l’acheteur, et on spécifie les informations telles que les modalités de livraison ou des commentaires aux différents acteurs. La prochaine étape est le récapitulatif qui permet de vérifier les informations renseignées à l’étape précédente, et de confirmer le passage à la prochaine étape qui est la génération des proforma. Une proforma est en quelque sorte un brouillon, un bon de commande au format pdf qui n’est pas encore terminé. C’est là qu’entre en jeu l’acheteur. Il va pouvoir lire les proforma, demander des modifications, ou les valider. Si une proforma est validée, le sous panier est transformé en commande et toutes les informations sont enregistrées et ne sont plus modifiables. Le bon de commande est alors envoyé sur la plateforme externe Yousign qui permet de signer numériquement des documents et le signataire défini lors d’une étape précédente va pouvoir le signer. Une fois signé, on récupère le document signé et la commande passe en statut signé. Il ne manquera plus que l’étape de validation de la réception de la commande qui passera la commande en terminée.

J’ai développé tout le processus de mise au panier étape par étape. Pour chaque étape, j’ai créé les contrôleurs symfony et les formulaires permettant de renseigner de la donnée. J’ai créé plusieurs composants twig, comme l’affichage d’un produit ou d’un contrat. J’ai fait en sorte que les actions effectuées au sein de chaque étape soient effectuées en ajax afin de maximiser la fluidité du remplissage des informations du panier afin que ça soit le plus agréable possible pour l’utilisateur. Par exemple, lorsqu'on change la quantité d’un produit, une requête est envoyée au serveur grâce au javascript, le serveur va mettre à jour le CartProduct, et va renvoyer au client les informations mise à jour.

Pour faciliter la gestion des statuts, j’ai utilisé un bundle symfony appelé Workflow. Ce bundle permet de créer des workflow et définir les différentes étapes de ce workflow. Pour chaque étape il est possible d’ajouter des contraintes, par exemple il n’est pas possible de passer à l’étape de génération des proforma si le l’étape précédente n’est pas l'étape du choix des contacts. Il est aussi possible d’écouter une multitude d'événements associés au workflow, par exemple lorsqu’on demande au sous panier de passer à l’étape proforma, on écoute cette transition, et on a la possibilité de la bloquer selon certaines conditions, par exemple si un produit n’est plus disponible à l’achat. Cela permet de faciliter grandement la gestion des statuts et d’éviter des incohérences.

### Forum

Une autre fonctionnalité que j’ai développée est le forum. Après avoir fait des recherches et exploré les différentes solutions Open Source disponibles sur le marché, nous sommes arrivés à la conclusion que le mieux était de faire nous même un forum afin de plus uniformément l’intégrer la plateforme, en utilisant les même technologies et processus de travail.

Comme toujours, la première étape a été la conception de la structure de données. Etant donné que j’allais aussi devoir faire un système de ticket qui se comporte de façon similaire à quelques différences près, j’ai fait d’un pierre deux coups.

![undefined](https://lh7-rt.googleusercontent.com/docsz/AD_4nXflOmZxTmHKI9vlSCWAz8vSWjqA7LqEnd5pdqjczRVO39oljfg6YXwwIMz2q3yo-U7v72XN8OIkdRmbnWNuzloT9fZ9dvu2-vavY7jjEOK1K_ieQCOOAXS1QgMY51CMFZunW6O8?key=b4qgPwR2iylp8lmpfD3EjA)

J’ai ensuite mis en place les entités avec Symfony et Doctrine. Un thème pouvant contenir beaucoup de discussions et une discussion pouvant contenir beaucoup de messages, j’ai utilisé une fonctionnalité de Doctrine appelée les associations Extra Lazy sur ces collections. Par défaut, doctrine charge toute la collection d’un coup quand elle est utilisée pour la première fois, ce qui fait que par exemple si la discussion possède 1000 messages, ça va charger les 1000 messages en mémoire. Le fait de la marquer comme Extra Lazy permet d’éviter ça. Par exemple, si on appelle les méthodes “count”, ou “contains”, ou bien “first”, une requête SQL sera utilisée au lieu de charger toute la collection. Cela optimise grandement les performances, car par exemple dans la liste des discussions, il faut afficher le nombre de messages de chaque discussion. Le traitement aurait été beaucoup plus lourd si on devait charger les messages de chaque discussion pour le faire.

Une fois la structure en place, le prochaine tâche a été de mettre en place le formulaire de création de thème, la liste de thèmes, la liste paginée des discussions de chaque thème, ainsi que le formulaire d’ajout de discussion. Pour cela, j’ai ajouté de nouveaux droits à la plateforme, j’ai créé le contrôleur, les vues twig, et les formulaires symfony nécessaires. J’ai ensuite créé la page la plus importante du forum, la page discussion. Cette page contient la liste des messages par ordre chronologique et paginé. Elle permet aux opérateurs de supprimer ou modifier des messages, ainsi qu’à leurs créateurs respectifs. Elle permet aussi de naviguer page par page et d’ajouter un nouveau message. Le champ qui permet d’ajouter un nouveau message est un champ de texte riche. Sur Mon Portail Achats, nous utilisons ckeditor, une librairie javascript permettant de créer des champs de texte riches avec un multitude de fonctionnalités comme la mise en page, l’ajout de documents, de photos, ou d’emoji, et de pouvoir ensuite afficher tout ça au format html. L’ajout d’un message possède aussi un système de notification permettant de notifier tout ou partie des utilisateurs de la plateforme.

J’ai donc dû par la même occasion créer un système de notification permettant d’afficher une cloche de notification aux utilisateurs qui change de couleur quand un nouveau message apparaît et qui permet d’afficher les notifications sur une flenêtre flottante quand on clique dessus et les marque comme lues une fois la fenêtre ouverte.

## Résultat et regard critique

Ce projet m’a permis de monter en compétences dans divers domaines. Tout d’abord, il m’a permis d'acquérir une solide expérience en architecture des données sur un projet complexe. Ensuite, dans ma façon d’écrire du code, j’ai énormément gagné en productivité en identifiant les points qui me prennent du temps et en les optimisant, notamment en apprenant des raccourcis clavier, mais aussi en qualité de code. J’ai aussi eu à faire à une multitude de problèmes non courants qui m’ont poussé à connaître plus en profondeur le fonctionnement de Symfony et ainsi grandement améliorer mon expertise sur ce framework. Enfin, d’un côté humain, ça m’a permis de travailler en équipe pendant 2 ans et ainsi améliorer mes compétences de travail d’équipe et de communication.

Cette expérience m’a aussi permis d’identifier certains points qui pourraient être améliorés si on devait refaire un projet de 0. Déjà j'insisterais sur la mise en place de tests. J’ai pu voir que l’absence de test est un point qui fragilise énormément le projet et son évolutivité. Ensuite, je proposerai la mise en place de règles UI facilement applicables uniformément dans tout le projet et à la création de plus de composants réutilisables en amont du projet.

Ce projet est quand même dans l’ensemble une réussite. Nous avons pu apporter des solutions à chacunes des problématiques rencontrées, la vélocité a été bonne, et le client a rapidement pris confiance. La cheffe de projet s’est déplacée un peu partout en France pour former les utilisateurs suite à la mise en production, et leurs retours quant à ce nouveau portail d’achats ont été très positifs. Le client souhaite continuer à travailler avec nous pour faire évoluer le portail et prépare déjà le backlog pour une V2.
