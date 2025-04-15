---
name: Architecture SGBDR
slug: architecture-sgbdr
technical: true
icon: material-symbols-light:dataset-linked
---

# Architecture SGBDR

## Ma définition

Les **systèmes de gestion de base de données relationnelles** (SGBDR) sont le type de base de données le plus largement utilisé dans les applications en tout genre développées de nos jours. Un SGBDR organise les données dans des **tables** constitués de lignes et de **colonnes**. Les données sont reliées entre elles à l’aide de **relations**. Une relation est définie entre deux colonnes de tables différentes. Par exemple, dans le cadre d’une application de vente de produits en ligne, on aura une table Customers qui stocke les clients de l’application, et une table Orders qui va stocker les commandes des clients. Chaque table a une clé primaire. La clé primaire permet d’identifier de façon unique chaque enregistrement d’une table. En plus d’une clé primaire, une table peut avoir une ou plusieurs clés étrangères. Une clé étrangère est une colonne qui fait référence à une clé primaire d’une autre table afin de relier les deux tables entre elles. Ici, Orders a une clé étrangère customer\_id qui est reliée à id de la table Customers afin de relier chaque commande passée dans l’application à un client unique.

![undefined](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeD30ZIb-_Qq7Fp7WK22j4O4N8pq_Wy0ieRkcZJGI-XSFmfAd8aDmW45tsXRsvAF6Fomx40he4yXPpuVDo3bsdBSLSKC5NaLqxFo5aheYiPx5SvvHLFUZcZ99P9n_d0SPAE4-S8?key=RRprmsyVMUCaxJPHdaL93IfK)

L’architecture SGBDR est la manière dont le SGBDR est **structuré** pour stocker, organiser et manipuler efficacement les données. Cette compétence a 3 objectifs principaux:

Tout d’abord, **garantir l’intégrité des données** stockées. Pour cela, il faut s’assurer que les relations entre les tables soient cohérentes à l’aide de clés primaires et étrangères. Il faut également s’assurer que les données soient du type attendu en attribuant à chaque colonne un type et des contraintes.

Ensuite, il faut **garantir un accès performant aux données**. Cela se fait grâce aux “Index”. Les index se placent sur les colonnes et permettent d’améliorer la vitesse à laquelle une donnée peut être accédée sur ces colonnes. Il faut soigneusement choisir sur quelles colonnes on met les index, car en contrepartie d’améliorer la vitesse de lecture, la vitesse d’écriture est ralentie car à chaque modification l’index doit être mis à jour.

Enfin, il faut que le modèle soit suffisamment **flexible et évolutif** pour évoluer dans le temps en fonction de l’évolution des besoins. Une stratégie que je trouve intéressante et que j’essaye d’appliquer est la normalisation des données. La normalisation est un ensemble de règles à appliquer lors de l’architecture de la base de données afin de structurer les données de la bonne manière.

Des critères appelés formes normales ont été créés afin de nous aider à normaliser les tables et garantir la qualité du modèle. Les 3 premières formes qui couvrent la majorité des cas et leurs critères sont les suivants:

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

En respectant ces 3 formes normales, il est possible d'architecturer ses bases de données relationnelles de façon à **éliminer la redondance**, **garantir l’intégrité** des données, et structurer les données de façon **logique et maintenable**.

## Comment j’ai développé cette compétence?

J’ai développé cette compétence tout au long de ma formation, notamment en BTS où l’architecture de SGBDR a été un des sujets les plus importants qu’on nous a enseigné, que ça soit en cours de SGBD, ou en modélisation, où nous avons appris, à partir d’un besoin métier à extraire les données à stocker, puis les **modéliser** dans un schéma **MCD** ou **UML**, pour ensuite traduire ce schéma en **schéma relationnel**. 

J’ai eu l’occasion de pratiquer dans différents exercices et projets scolaires, puis lors de stage et et en particulier plus récemment lors de mon alternance, sur le projet MPA, qui est un projet avec des concepts métiers complexes qu’il faut modéliser, et qui à l’heure actuelle contient une base de données PostgreSQL d’environ 200 tables.

Un exemple d’architecture de base de données que j’ai eu à réaliser est la structure des produits sur MPA. Le besoin métier est que les opérateurs de la place de marché puissent créer une liste de catégories, une liste d’attribut produits de plusieurs types différents, ainsi que des options produits de types différents. Ils doivent ensuite pouvoir créer des produits, qui peuvent être “simple” ou “avec variantes”. Un exemple de produit avec variante pourrait être un câble électrique, qui a un attribut “couleur”, permettant à l’acheteur de choisir la couleur du produit lors de l’achat. Pour chaque produit avec variante, il y a une base commune, et chaque variante peut écraser n’importe quelle donnée du produit de base. A ce stade, il s’agit de produits dits génériques. Par la suite les fournisseurs doivent spécifier leurs produits, c'est-à-dire configurer son prix, son conditionnement, la logistique, et ont aussi la possibilité d’écraser des données du produit générique comme son nom, les valeurs d’attributs ou bien activer ou non des options.

Voici des extraits des diagrammes de classe UML que j’ai créé de cette structure:

Extrait de la structure des attributs :

![undefined](https://lh7-rt.googleusercontent.com/docsz/AD_4nXenqk9Gkx9SMxtXy97rfb_JNPyQe0Bqvxg742XQUOWIAL4WyQDa4o8V-twi9gZ1GRR3elSZFp9zf6kfsn8Vj-738jCVc2I1lcbeap9Iese6Ec218o1v8SdRkfONrUNjDs-JKWOsig?key=RRprmsyVMUCaxJPHdaL93IfK)

Extrait de la structure des produits génériques :

![undefined](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdvlJRr4IkX_HM2UvfWh-v9PDDPJ919vBfFMOQjogs7tliYK93h6bLYOfsyS9WMv6Mz0pWZ3zdSSv3ZD0Kzpc18OKZDQjyah6w9pL4-nYoPQIePt3zwJw-UTH4ki9L_FLZI8KjVcg?key=RRprmsyVMUCaxJPHdaL93IfK)

Extrait de la structure des produits spécifiques :

![undefined](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfGFLgaikTXYwirATJbKSg2v71p1_vI6uaEcGizPZ2DUVdaTvF4KDxl0CmBhn8AEp1y5hExWXB3dVt7vLvdn-DwyI7wGAXhoPikEf69-5jXc1QnueHcIkM2EltiUdv3ulZPedXflQ?key=RRprmsyVMUCaxJPHdaL93IfK)

### Mon autocritique

Je pense avoir atteint un bon niveau de maîtrise de cette compétence, suffisant pour travailler sur la majorité des projets faisant appel à une base de données relationnelle. Durant ces deux dernières années à travailler sur MPA, j’ai pu participer à l’élaboration d’une architecture relationnelle complexe. En plus de la grande expérience que ça m’a apportée sur le sujet, ça m’a permis de me rendre compte de la complexité que pouvaient atteindre les bases de données, bien loin de ce que j’ai pu voir durant mes formations et de me rendre compte de l’importance de maîtriser cette compétence. L’architecture de la base de données est l’un des piliers d’un logiciel. Je conseille de prendre le temps en amont du développement pour bien la concevoir et s’assurer qu’elle réponde bien au besoin métier et qu’elle soit suffisamment flexible car une fois en place et qu’elle contient des données il peut être très fastidieux de changer sa structure.

### Mon évolution dans cette compétence

Je souhaite progresser davantage dans cette compétence. Pour cela il faut que je continue de la pratiquer dans des projets divers, et lire sur le sujet pour apprendre également de l’expérience d’experts en la matière afin de suivre les conseils qu’ils pourraient avoir afin de faire face aux problèmes qu’ils ont pu rencontrer.
