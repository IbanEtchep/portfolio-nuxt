---
name: Git
slug: git
technical: true
icon: fa-brands:github
---

# Git

## Ma définition

Git est un logiciel qui permet la **gestion des versions** de projets informatiques. Il permet de garder une trace de chaque modification effectuée dans les fichiers d’un projet, de façon à savoir qui a modifié quoi, quand, et à revenir en arrière si nécessaire. Il facilite également la **collaboration** entre plusieurs personnes grâce à des outils de **gestion de conflits**. Si deux personnes travaillent sur le projet, au moment de mettre en commun le code des deux personnes, git analyse les différences et recherche des conflits. Les conflits sont des modifications incompatibles qui apparaissent dans la même partie d’un fichier. Quand un conflit est détecté, Git propose alors des stratégies pour **résoudre ce conflit**, en choisissant quelle modification conserver ou en les combinant. Cela en fait un outil indispensable que chaque développeur doit maîtriser.

## Mes éléments de preuve

J’ai découvert git pour la première fois en découvrant GitHub, le plus grand site d’hébergement de code. [GitHub](https://github.com/)héberge la grande majorité de projets open source existant à l’heure actuelle. J’ai pris pour habitude d’y héberger chacun des petits projets de plugins Minecraft que je faisais. Mon utilisation de git était alors très simple, je poussais simplement mon code au fur et à mesure de mon avancée, mais je n’avais pas de conflits à gérer, je faisais tout sur la même branche et je ne connaissais pas les bonnes pratiques à suivre sur cet outil.

Ma première vraie expérience avec git dans un milieu professionnel a été lors de mon stage de 2ᵉ année de BTS chez Medialeads. J’ai eu l’occasion d’apprendre à utiliser l’outil de façon plus poussée. En effet, chaque développeur devait créer une **branche** pour chaque tâche qu’il avait à faire sur le projet. Une fois terminé, il envoyait les modifications sur [GitLab](https://gitlab.com/), où il pouvait créer une **merge request**, c'est-à-dire demander à combiner son code avec le code existant jusque-là dans le projet. La fonctionnalité passait alors en **code review**, et grâce à git, les autres développeurs pouvaient facilement visualiser les modifications apportées au projet et accepter ou non les changements. Cela permet de capturer en amont des erreurs d'inattention ou de mauvaises pratiques, d’en discuter et d’éviter qu’elles soient envoyées en production.

Depuis, mon expérience chez Medialeads s’est prolongée de 2 ans, et j’ai eu l’occasion de pratiquer les fonctionnalités essentielles de git dans le cadre de vrais projets informatiques. Sur Medical Place et Mon Portail Achats, nous utilisons aussi Gitlab. En plus de son utilisation habituelle, plusieurs outils y sont intégrés pour déclencher des actions automatisées. Par exemple, quand on crée une merge request, le code est analysé avec Phpstan afin de vérifier que le code suit certaines règles, et une fois le code fusionné dans la branche develop, il est automatiquement déployé sur un serveur web. Il en est de même avec les autres branches telles que staging ou production. Utiliser GitLab au quotidien chez Medialeads m’a permis de bien me familiariser avec l’outil et de voir comment fonctionnent les outils CI/CD qui y sont rattachés.

## Mon autocritique

Je connais toutes les commandes couramment utilisées dans Git dont un développeur se sert au quotidien et je suis capable de résoudre les conflits qui peuvent survenir lors de la mise en commun avec le code d’autrui. Cependant, il me reste encore des éléments à apprendre, comme par exemple la gestion d’un projet git multi-module.

D’après mon expérience, pour bien appréhender l’outil, je conseillerai à un débutant de d’abord apprendre les notions et commandes de base de l’outil, et d’initialiser un projet Git dans chaque projet qu’il débute, y compris les plus simples. Il découvrira ensuite les aspects plus avancés avec l’expérience.

## Mon évolution dans cette compétence

Je souhaite m’améliorer davantage dans l’utilisation de Git. Pour cela, je souhaite contribuer à des projets open source dans l’univers de Minecraft où les projets permettant la modification du cœur du jeu sont des projets git multi-modules et les modifications se font dans des fichiers de patch, ce qui demande une profonde connaissance de git.
