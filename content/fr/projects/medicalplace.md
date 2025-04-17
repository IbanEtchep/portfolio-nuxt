---
name: MedicalPlace
description: Plateforme CRM dans le domaine médical.
slug: medicalplace
title: MedicalPlace
skills:
  - travail_d_equipe
  - organisation
  - symfony
  - autonomie
  - architecture-logicielle
  - architecture-sgbdr
  - communication
  - empathie
---

# MedicalPlace

## Présentation du projet

MedicalPlace est un projet sur mesure développé par Medialeads. J’y ai travaillé pendant 4 mois, à l’occasion de mon stage de 3ème année qui s’est prolongé par un CDD pendant mes vacances d’été. C’est une plateforme CRM dans le domaine médical. Elle permet de faciliter la prospection et le suivi de l’activité commerciale des professionnels et établissements médicaux. Elle propose également une partie business intelligence qui leur permet d'agréger et visualiser les données qui concernent le secteur.

En termes de réalisations, on m’a d’abord assigné des tâches de correctifs et d’ajout mineurs, le temps que je me familiarise bien avec le projet et qu’ils jaugent mes capacités. J’ai ensuite pu travailler sur des fonctionnalités plus intéressantes. Parmi elles, les plus notables ont été: 

- La synchronisation bidirectionnelle de calendriers externes comme google/outlook ou tout service offrant un feed au format ical, avec le calendrier interne de l’application.
- La création d’une intégration avec Salesforce permettant de connecter son compte Salesforce à la plateforme pour importer/exporter des contacts/établissements.
- L’intégration d’une nouvelle API permettant de requêter des professionnels et établissements médicaux.
- La mise en place de Cypress permettant la création de tests end-to-end.
- La mise à niveau de Phpstan.

## Contexte et enjeux

J’ai été intégré à ce projet en cours de route. Cela faisait environ 1 an qu’il était en développement par un chef de projet, un développeur à plein temps, et un autre développeur occasionnel. Le projet était développé en utilisant la méthodologie Agile. Avec des sprints durant 2 semaines, un daily tous les jours, et une rétrospective de sprint et planification du prochain sprint entre deux sprints.

N’ayant précédemment pas eu d’expérience sur des projets de cette taille ni d’expérience réelle en travail d’équipe en méthodologie Agile, mon enjeu principal était de réussir à m’intégrer au projet, de bien me familiariser avec celui-ci et la méthodologie de travail, et de prouver la valeur que je pourrais apporter à l’entreprise en tant que développeur. Quant aux risques, le principal était que mon manque d’expérience fragilise le projet ou ralentisse sa vélocité si les développeurs et chef de projet devaient prendre trop de temps pour m’expliquer les choses.

## Étapes de réalisation

### Étapes globales

Chacune des fonctionnalités sont réalisées en plusieurs étapes. La première est la phase de conception. Durant cette phase, j’analyse la demande afin de m’assurer que je comprenne bien ce qu’on me demande de faire. Cela se fait essentiellement en discutant avec le chef de projet, en lisant la tâche Jira qui représente l’User Story de la fonctionnalité à développer, et en regardant les maquettes.

Je rédige ensuite une sous-tâche sur Jira détaillant ce que je m’apprête à faire d’un point de vue technique. Pour cela, j’analyse le code existant pour voir comment peut s’intégrer la fonctionnalité et voir si une fonctionnalité similaire a déjà été développée afin de m’en inspirer et garder une cohérence dans le code. Si besoin, je fais des recherches externes et lis les documentations en lien avec ce qui m’est demandé. Dans certains cas, il peut être utile de faire un “POC” (Proof of concept) afin de tester rapidement une solution avant sa mise en place définitive. Une fois la conception technique rédigée, sa dernière étape consiste à renseigner le temps passé en conception, estimer le temps que prendra la réalisation, et faire valider la conception à un autre développeur.

Je peux ensuite me lancer dans le développement de la fonctionnalité. Grâce à la phase précédente de conception cela va relativement vite étant donné que tout a été clarifié et que je sais exactement quoi faire. Une fois la fonctionnalité terminée, je la teste, le lance l’outil d’analyse statique du code, et l’envoi en code review sur gitlab où un autre développeur va faire la revue de mon code afin de me faire des retours sur les choses à améliorer, éliminer les erreurs d'inattention, et si tout va bien, fusionner la fonctionnalité avec le reste du code.

### Intégration SalesForce

Je vais désormais détailler un peu plus la réalisation de l’intégration salesforce. L’objectif était de pouvoir connecter son compte Salesforce à son compte MedicalPlace pour pouvoir importer des contacts et établissements depuis Salesforce et d’en exporter de nouveaux sur Salesforce. 

Pour cela, j’ai fait des recherches sur leur documentation. Ça m'a pris pas mal de temps de trouver l’API qui correspondait au besoin étant donné que Salesforce possèdes des dizaines d’API dont certaines servent des objectifs similaires. 

Après avoir trouvé l’API dont j’avais besoin, j’ai créé un nouveau module sur le projet sur une nouvelle branche, j’ai créé un compte développeur salesforce me donnant accès à un environnement bac à sable, et je me suis lancé dans la création d’un POC. La première étape a été de gérer l’authentification afin de pouvoir utiliser les routes API qui permettent d’accéder aux données du compte et de les modifier. Salesforce utilise le protocole OAuth. J’ai donc créé une nouvelle application sur Salesforce pour MedicalPlace, avec les autorisations nécessaires. Une fois cette application créée sur Salesforce, elle donne accès à un URL que l’utilisateur peut cliquer depuis MedicalPlace, redirigeant sur la page de connexion Salesforce. Une fois connecté, Salesforce appelle un webhook que j’ai créé dans le module permettant de récupérer le token d’authentification, et l’utilisateur est de nouveau redirigé sur MedicalPlace. A ce stade, nous avons le token d’authentification permettant d'interagir avec le compte Salesforce de l’utilisateur. La prochaine étape a été de créer les routes permettant de renouveler le token, de supprimer le token dans le cas où l’utilisateur veut se déconnecter de salesforce, et de créer les routes pour importer et exporter des données.

Une fois cela fait, j’ai montré le résultat au chef de projet et il m’a donné le feu vert pour terminer la mise en place du module et son intégration à l’application.

### Mise en place Cypress

Cypress est un framework permettant la mise en place d’automatisation de tests end to end(ou de bout en bout). Pour l’expliquer plus simplement, c’est un robot qui navigue sur le site web à l’aide d’un navigateur, comme le ferait un utilisateur, en suivant un scénario donné. Il se charge en cours de route de vérifier que ses actions produisent bien le résultat attendu.

Le contexte qui a mené à la décision de mettre en place des tests de bout en bout sur le projet était la mise en place croissante de fonctionnalités sur le projet et le manque de tests unitaires à la demande explicite du client qui menait à l’apparition de plus en plus fréquentes de régressions.

Cypress était un outil qui n’avait encore jamais été utilisé dans l’entreprise. La première étape était alors de faire de la recherche et développement sur l’outil, afin de voir si oui ou non sa mise en place était pertinente et comment le mettre en place. Je me suis donc consacré à cette tâche durant plusieurs jours où j’ai mené des recherches sur le sujet. J’ai lu une grande partie de la documentation officielle de l’outil avec une attention particulière pour la page best-practices qui référence les meilleures pratiques pour utiliser l’outil. J’ai également regardé la conférence d’un des fondateurs de Cypress où il explique l’outil et le met en place en direct. Enfin, j’ai lu le code du projet RWA qu’ils mettent à disposition pour montrer un exemple de mise en place de Cypress dans le cadre d’un projet réel.

J’ai dans le même temps effectué un “POC” (proof of concept) où j’ai intégré cypress à l’application sur une branche séparée et où j’ai mis en place toutes les bases et les des scénarios de tests que le chef de projet avait commencé à faire sur Notion et que j’ai complété.

Une fois la recherche et le POC effectués, on m’a demandé de présenter Cypress aux reste de l’équipe du projet et des autres projets. J’ai alors préparé un diaporama afin de mieux structurer ma présentation.

Voici les points clés de la présentation:

- J’ai d’abord expliqué de façon générale ce qu’est un test end to end, ses avantages et ses inconvénients.
- Ensuite, j’ai expliqué plus en détails la mise en place avec Cypress. Comment est structuré un test cypress, comment fonctionne l’outil, quels sont les points clés à connaître pour écrire un test.
- Puis, j’ai résumé les bonnes pratiques pour écrire des tests que j’ai tirés de ma lecture de la documentation.
- Enfin, j’ai répondu aux différentes questions que m’ont posées mes collègues suite à la présentation.

![undefined](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdpooYEbtI5mQXiO5N4qq9cjuQZHnt9ecsd_TzTn6xDaoRthVLMqPQbHpYzwnTG9SrMoAc6W6nA5qq5NHJ5zc4u7cjWC-TUUjUyfk-Pcf_GOiP51KAqChLDYY_LsTPmqwIPWgch?key=eS0VhAfWoDcA9yxcaUUJCAZ9)

En termes de résultats, j’ai pu apprendre à utiliser ce framework de test end-to-end et les bonnes pratiques, qu’elles soient liées à cypress ou aux tests end-to-end en général. Sur le court terme, la mise en place des tests end-to-end a directement permis la détection de certaines régressions, parfois même pendant l’écriture des tests. J’ai pu aussi partager mon expérience avec les autres membres de l’équipe.

Je suis passé sur un autre projet peu après et ce projet n’est aujourd’hui plus développé par Medialeads, je ne sais donc pas quels sont les résultats sur le long terme.

## Résultats et regard critique

Pour moi, l’objectif initial de réussir à bien m’intégrer au projet a été réussi. Malgré sa taille j’ai pu rapidement me familiariser avec le projet, adapter ma méthodologie de travai,l et monter en compétence. Cela m’a permis de gagner la confiance de l’équipe et de me voir attribuer des tâches clés comme l’intégration de Salesforce, ou la mise en place du module MedicalData.

Au-delà de la montée en compétence sur les outils comme Symfony ou Cypress, j’en tire une expérience très enrichissante en projet d’entreprises, en méthodologie de travail Agile et plus généralement en travail en équipe.

L’entreprise a été très contente de mon travail et m’a proposé de me garder en CDI ou en alternance si je souhaitais poursuivre mes études, ce que j’ai fait. Aujourd’hui, je travaille sur un autre projet appelé Mon Portail Achats sur lequel j’ai été présent depuis le tout début jusqu’à sa mise en production.
