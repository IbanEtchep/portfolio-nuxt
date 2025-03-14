---
name: Architecture SGBDR
slug: architecture-sgbdr
technical: true
icon: material-symbols-light:dataset-linked
---

# Architecture SGBDR

## Ma définition
Les systèmes de gestion de base de données relationnelles (SGBDR) sont le type de base de données le plus largement utilisé dans les applications en tout genre développées de nos jours. Un SGBDR organise les données dans des tables constitués de lignes et de colonnes. Les données sont reliées entre elles à l’aide de relations. Une relation est définie entre deux colonnes de tables différentes. Par exemple, dans le cadre d’une application de vente de produits en ligne, on aura une table Customers qui stocke les clients de l’application, et une table Orders qui va stocker les commandes des clients. Chaque table a une clé primaire. La clé primaire permet d’identifier de façon unique chaque enregistrement d’une table. En plus d’une clé primaire, une table peut avoir une ou plusieurs clés étrangères. Une clé étrangère est une colonne qui fait référence à une clé primaire d’une autre table afin de relier les deux tables entre elles. Ici, Orders a une clé étrangère customer\_id qui est reliée à id de la table Customers afin de relier chaque commande passée dans l’application à un client unique.

L’architecture SGBDR est la manière dont le SGBDR est structuré pour stocker, organiser et manipuler efficacement les données. Cette compétence a 3 objectifs principaux:

Tout d’abord, **garantir l’intégrité des données** stockées. Pour cela, il faut s’assurer que les relations entre les tables soient cohérentes à l’aide de clés primaires et étrangères. Il faut également s’assurer que les données soient du type attendu en attribuant à chaque colonne un type et des contraintes. Enfin, il faut s’assurer que les données ne soient pas dupliquées, et toujours présentes quand il le faut (nullabilité).

Ensuite, il faut **garantir un accès performant aux données**. Cela se fait grâce aux Index. Les index se placent sur les colonnes et permettent d’améliorer la vitesse à laquelle une donnée peut être accédée sur ces colonnes. Il faut soigneusement choisir sur quelles colonnes on met les index, car en contrepartie d’améliorer la vitesse de lecture, la vitesse d’écriture est ralentie car à chaque modification l’index doit être mis à jour.

Enfin, il faut que le modèle soit suffisamment **flexible et évolutif** pour évoluer dans le temps en fonction de l’évolution des besoins. Cela se fait grâce à la normalisation des données. La normalisation est un ensemble de règles à appliquer lors de l’architecture de la base de données afin de connecter les données de la bonne manière.

Des critères appelés formes normales ont été créés afin de nous aider à normaliser nos tables et garantir la qualité du modèle. Les 3 premières formes et leurs critères sont les suivants:

**1NF:**

- Chaque table a une clé primaire
- Chaque cellule ne contient qu’une seule information à la fois.
- Aucun groupe ne se répète. Un groupe qui se répète doit être stocké sur une table différente.

**2NF:** 

- Respecte les critères 1NF
- Chaque donnée doit dépendre de la clé primaire. Chaque colonne qui ne dépend pas de la clé primaire doit être déplacée sur une nouvelle table. 

**3NF:** 

- Respecte les critères 2NF
- La clé primaire doit définir chaque colonne non clée.

## Comment j’ai développé cette compétence?

J’ai développé cette compétence tout au long de ma formation, notamment en BTS où l’architecture de SGBDR a été un des sujets les plus importants qu’on nous a enseigné, que ça soit en cours de SGBD, ou en modélisation, où nous avons appris, à partir d’un besoin métier à extraire les données à stocker, puis les modéliser dans un schéma MCD ou UML, pour ensuite traduire ce schéma en schéma relationnel. 

J’ai eu l’occasion de pratiquer dans différents exercices et projets scolaires, puis lors de stage et et en particulier plus récemment lors de mon alternance, sur le projet MPA, qui est un projet avec des concepts métiers complexes qu’il faut modéliser, et qui à l’heure d’aujourd’hui contient une base de données PostgreSQL de plus de 180 tables.
