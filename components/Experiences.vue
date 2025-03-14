<script setup lang="ts">
const experiences = [
  {
    title: 'Medialeads',
    subtitle: "Alternance - Développement web Symfony",
    period: 'Septembre 2023 - Septembre 2025 (2 ans)',
  },
  {
    title: 'Medialeads',
    subtitle: "CDD - Développement web Symfony",
    period: 'Juillet 2023 (1 mois)',
  },
  {
    title: 'Medialeads',
    subtitle: "Stage - Développement web Symfony",
    period: 'Avril à Juin 2023 (3 mois)',
  },
  {
    title: 'Medialeads',
    subtitle: "Stage - Développement web Symfony",
    period: 'Janvier à février 2022 (2 mois)',
  },
  {
    title: 'BAB Radiokom',
    subtitle: 'Stage - Conception de leur site internet',
    period: 'Juin 2021 (1 mois)',
  }
]
</script>

<template>
  <h2>Mes expériences professionnelles</h2>
  <Timeline :items="experiences" />
</template>