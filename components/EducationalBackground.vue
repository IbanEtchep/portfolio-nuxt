<script setup lang="ts">
const items = [
  {
    title: 'BAC+5 - Expert en ingénierie du logiciel',
    subtitle: "ESIEA - Dax",
    period: 'Septembre 2020 - Juin 2022 (2 ans)',
  },
  {
    title: 'BAC+3 - Licence MIAGE',
    subtitle: "Université de Bordeaux",
    period: '2022 - 2023 (1 an)',
  },
  {
    title: 'BAC+2 - BTS SIO',
    subtitle: "Louis de foix - Bayonne",
    period: '2020 - 2022 (2 ans)',
  },
  {
    title: 'BAC+0 - Baccalauréat Scientifique',
    subtitle: "Bernat Etxepare - Bayonne",
    period: '2018',
  },
]
</script>

<template>
  <h2>Mon parcours scolaire</h2>
  <Timeline :items="items" />
</template>