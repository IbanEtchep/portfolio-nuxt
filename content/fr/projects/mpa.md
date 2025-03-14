---
name: MPA
description: Place de marché B2B
slug: mpa
---

Mon Portail Achats

## Présentation générale

Mon Portail Achats est le projet sur lequel je travaille à plein temps durant mon alternance. Il s’agit d’une place de marché B2B pour l’achat de matériel pour les acteurs du secteur de l’énergie. Elle est conçue pour que les ELD (Entreprises Locales de Distribution) puissent plus efficacement organiser leur achat de matériel.

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

## L’équipe

L’équipe chargée de ce projet est relativement petite, constituée d’une cheffe de projet, deux alternants, et deux autres développeurs en renfort pour aider à accélérer la vélocité quand les délais l’imposent.

La cheffe de projet a le rôle central dans le projet. D’un côté, elle récolte le besoin des clients au travers d’ateliers en physique ou en visio, le retranscrit en tâches et en maquettes et s’assure de leur validation. De l’autre, elle attribue et explique les tâches aux développeurs et suit l’avancement, fait des retours sur leur travail.

En tant que développeur, mon rôle est de mettre en place techniquement les fonctionnalités. Cela passe par une phase de conception, où je vais réfléchir à comment intégrer ce qu’on me demande de faire, notamment au niveau de la base de données, au travers de diagrammes de classe, puis de transcrire en code.

## Infrastructure logicielle

Le projet est développé à l’aide du framework Symfony et le système de gestion de base de données utilisé dans ce projet est PostgreSQL. En local, nous avons un docker-compose qui permet de reproduire l’environnement local à l’identique pour chaque développeur. 

## Méthodologie de travail

Le travail sur cette plateforme se fait en méthodologie Agile à l’aide de Jira. Le backlog est écrit sur Jira, où le chef et projet conçoit les fonctionnalités, les clients les valident, et les tâches sont ensuite assignées un développeur.

## Retour d’expérience

### Difficultés

Les principales difficultés du projet ont été la logique métier complexe et spécifique au domaine. En effet, les ELD ont des processus et des termes qui leur sont propres et il a fallu bien les comprendre pour les mettre en place dans l’application. 

L’autre difficulté a été le besoin de flexibilité extrême, notamment au niveau de la structure des produits. Les opérateurs de la plateforme doivent pouvoir créer des produits génériques. Ces produits peuvent être simples, ou variant. Sur chaque produit, ils doivent pouvoir renseigner une multitude de données, comme leurs attributs, ou les options que les acheteurs pourront choisir. Ensuite, à partir des produits génériques, les fournisseurs doivent pouvoir spécifier les produits qu’ils vendent, donc compléter ou modifier les informations du produit générique, et renseigner en plus toutes les données logistiques, comme les conditionnement ou les remises.

### Ce que ça m’a apporté

Ce projet m’a permis de monter en compétences dans divers domaines. Tout d’abord, il m’a permis d'acquérir une solide expérience en architecture des données sur un projet complexe. Ensuite, dans ma façon d’écrire du code, j’ai énormément gagné en productivité en identifiant les points qui me prennent du temps et en les optimisant, notamment en apprenant des raccourcis clavier, mais aussi en qualité de code. J’ai aussi eu à faire à une multitude de problèmes non courants qui m’ont poussé à pousser plus en profondeur le fonctionnement de Symfony et ainsi grandement améliorer mon expertise sur ce framework. Enfin, d’un côté humain, ça m’a permis de travailler en équipe pendant 2 ans et ainsi améliorer mes compétences de travail d’équipe et de communication.
