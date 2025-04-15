<script setup lang="ts">
const experiences = [
  {
    title: 'Medialeads - Bayonne',
    subtitle: "Alternance - Développement web Symfony",
    period: 'Septembre 2023 - Septembre 2025 (2 ans)',
    logoPath: '/logos/medialeads.webp',
    website: 'https://medialeads.fr/',
    description: `
    <p>
      Pendant ces deux années, j'ai travaillé sur le développement d'une place de marché b2b dans le secteur
      de la distribution d'énergie, dans une petite équipe de 4 personnes constituée d'une chef de projet et de 3
      développeurs.
    </p>
    <p>Vous trouverez une description plus détaillée du projet <a href='/projects/mpa' target='_blank'>ici</a>.</p>
    Compétences travaillées:
    <ul>
      <li><a href='/skills/symfony' target='_blank'>Symfony</a></li>
      <li><a href='/skills/git' target='_blank'>Git</a></li>
      <li><a href='/skills/architecture-sgbdr' target='_blank'>Architecture SGBDR</a></li>
      <li><a href='/skills/architecture-logicielle' target='_blank'>Architecture logicielle</a></li>
      <li><a href='/skills/communication' target='_blank'>Communication</a></li>
      <li><a href='/skills/communication' target='_blank'>Autonomie</a></li>
      <li><a href='/skills/communication' target='_blank'>Travail d'équipe</a></li>
      <li><a href='/skills/communication' target='_blank'>Empathie</a></li>
      <li><a href='/skills/communication' target='_blank'>Organisation</a></li>
    </ul>
  `
  },
  {
    title: 'ESIEA - Dax',
    subtitle: "BAC+5 - Expert en ingénierie du logiciel",
    period: 'Septembre 2023 - Septembre 2025 (2 ans)',
    logoPath: '/logos/esiea.jpg',
    website: 'https://esiea.fr/',
    description: `
    <p>
      Formation en distanciel en ingénierie du logiciel avec un rythme d'1 jour de cours par semaine et 1 semaine complète
      toutes les 5 semaines.
    </p>

    <p>
    Les cours sont dispensés sous forme de modules où pendant plusieurs créneaux, un intervenant nous enseigne
    sa discipline, avec souvent une grande partie de travaux pratiques, puis une évaluation sous forme de projet.
    Les technologies étudiées sont variées. Il y a des cours de développement (rust, c, python, ionic, flutter) et des cours
    plus généraux comme la blockchain, la cybersécurité, systèmes réseaux, anglais, droit, machine learning, kubernetes, ect.
    </p>
    `
  },
  {
    title: 'Medialeads - Bayonne',
    subtitle: "CDD - Développement web Symfony",
    period: 'Juillet 2023 (1 mois)',
    logoPath: '/logos/medialeads.webp',
    website: 'https://medialeads.fr/',
    description: `
    <p>
      Prolongation de mon stage pendant les vacances d'été. J'ai continué à travailler sur le projet de CRM dans le domaine médical.
    </p>
    `
  },
  {
    title: 'Medialeads - Bayonne',
    subtitle: "Stage - Développement web Symfony",
    period: 'Avril à Juin 2023 (3 mois)',
    logoPath: '/logos/medialeads.webp',
    website: 'https://medialeads.fr/',
    description: `
    <p>
      Durant ces 3 mois, j'ai travaillé sur l'amélioration d'un projet de CRM dans le domaine médical. J'ai pu travailler sur des fonctionnalités comme
      la synchronisation de calendrier avec google/outlook ou autre, l'intégration avec salesforce, ou bien l'intégration d'une nouvelle API de recherche de
      personnel ou établissements médicaux.
    </p>

    Compétences travaillées:
    <ul>
      <li><a href='/skills/symfony' target='_blank'>Symfony</a></li>
      <li><a href='/skills/git' target='_blank'>Git</a></li>
      <li><a href='/skills/architecture-logicielle' target='_blank'>Architecture logicielle</a></li>
      <li><a href='/skills/communication' target='_blank'>Communication</a></li>
      <li><a href='/skills/communication' target='_blank'>Autonomie</a></li>
      <li><a href='/skills/communication' target='_blank'>Travail d'équipe</a></li>
    </ul>
    `
  },
  {
    title: 'Université de Bordeaux',
    subtitle: "BAC+3 - Licence MIAGE (Méthodes informatiques appliquées à la gestion des entreprise)",
    period: '2022 - 2023 (1 an)',
    logoPath: '/logos/ub.jpg',
    website: 'https://miage.emi.u-bordeaux.fr/',
    description: `
    <p>
      La MIAGE est une formation qui combine l'informatique et la gestion. En parallèle de compétences techniques
      comme l'algorithmique ou le développement C++, j'ai pu acquerir des bases dans divers domaines tels que la finance,
      la comptabilité, la gestion de projet ou le droit.
    </p>

    <p>
    Les cours étaient selon moi trop théoriques et je n'appréciais pas particulièrement les matières de gestion.
    Après l'obtention de ma licence, j'ai donc décidé de ne pas enchaîner sur le master MIAGE et de me réorienter vers une formation en alternance
    où j'avais la garantie de travailler sur des projets concrets et d'acquérir de l'expérience professionnelle.
    </p>
    `
  },
  {
    title: 'Medialeads - Bayonne',
    subtitle: "Stage - Développement web Symfony",
    period: 'Janvier à février 2022 (2 mois)',
    logoPath: '/logos/medialeads.webp',
    website: 'https://medialeads.fr/',
    description: `
    <p>
      Mon premier stage chez Medialeads. J'ai travaillé sur la création d'<a href='/projects/apibook' target='_blank'>Apibook</a>
      un outil fait pour les apiculteurs permettant un suivi et une gestion de leurs ruches.
    </p>

    Compétences travaillées:
    <ul>
      <li><a href='/skills/symfony' target='_blank'>Symfony</a></li>
      <li><a href='/skills/git' target='_blank'>Git</a></li>
      <li><a href='/skills/architecture-logicielle' target='_blank'>Architecture logicielle</a></li>
      <li><a href='/skills/communication' target='_blank'>Autonomie</a></li>
    </ul>
    `
  },
  {
    title: 'BAB Radiokom - Anglet',
    subtitle: 'Stage - Conception de leur site internet',
    period: 'Juin 2021 (1 mois)',
    logoPath: '/logos/babrad.png',
    website: 'https://bab-radiokom.fr/',
    description: `
    <p>
      Durant ce stage de première année, j'ai pu réaliser le site internet de l'entreprise BAB Radiokom, utilisant Wordpress
      et comprenant un thème personnalisé, et une partie e-commerce.
    </p>
    `
  },
  {
    title: 'Louis de Foix - Bayonne',
    subtitle: "BAC+2 - BTS SIO - Option Solutions Logicielles et Applications Métier",
    period: '2020 - 2022 (2 ans)',
    logoPath: '/logos/ldf.jpg',
    website: 'https://louisdefoix.fr/bts-sio/',
    description: `
    <p>
      Durant ces deux années, j'ai pu acquérir des bases solides en informatique, que ce soit en développement,
      en modélisation UML/Merise, en gestion de projet ou en administration système.
    </p>
    `
  },
  {
    title: 'Bernat Etxepare - Bayonne',
    subtitle: "BAC+0 - Baccalauréat Scientifique mention assez bien",
    period: '2018',
    logoPath: '/logos/etxepare.jpg',
    website: 'https://www.betxepare.eus/',
    description: `
    <p>
    Lycée général et technologique privé. Tous les cours y sont dispensés dans la langue basque. J'ai pu y acquérir des bases solides dans les matières scientifiques
    comme les mathématiques, la physique-chimie ou la SVT, mais aussi en langues avec l'anglais et l'espagnol.
    </p>
    `
  },
]
</script>

<template>
  <h2>Mon parcours</h2>
  <Timeline :items="experiences" />
</template>
