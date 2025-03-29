<script setup lang="ts">
const experiences = [
  {
    title: 'Medialeads - Bayonne',
    subtitle: "Alternance - Développement web Symfony",
    period: 'Septembre 2023 - Septembre 2025 (2 ans)',
  },
  {
    title: 'ESIEA - Dax',
    subtitle: "BAC+5 - Expert en ingénierie du logiciel",
    period: 'Septembre 2023 - Septembre 2025 (2 ans)',
  },
  {
    title: 'Medialeads - Bayonne',
    subtitle: "CDD - Développement web Symfony",
    period: 'Juillet 2023 (1 mois)',
  },
  {
    title: 'Medialeads - Bayonne',
    subtitle: "Stage - Développement web Symfony",
    period: 'Avril à Juin 2023 (3 mois)',
  },
  {
    title: 'Université de Bordeaux',
    subtitle: "BAC+3 - Licence MIAGE (Méthodes informatiques appliquées à la gestion des entreprise)",
    period: '2022 - 2023 (1 an)',
  },
  {
    title: 'Medialeads - Bayonne',
    subtitle: "Stage - Développement web Symfony",
    period: 'Janvier à février 2022 (2 mois)',
  },
  {
    title: 'BAB Radiokom - Anglet',
    subtitle: 'Stage - Conception de leur site internet',
    period: 'Juin 2021 (1 mois)',
  },
  {
    title: 'Louis de foix - Bayonne',
    subtitle: "BAC+2 - BTS SIO - Option Solutions Logicielles et Applications Métier",
    period: '2020 - 2022 (2 ans)',
  },
  {
    title: 'Bernat Etxepare - Bayonne',
    subtitle: "BAC+0 - Baccalauréat Scientifique",
    period: '2018',
  },
]
</script>

<template>
  <h2>Mon parcours</h2>
  <Timeline :items="experiences" />
</template>