<script setup>
const route = useRoute()
const i18n = useI18n()

const skillCollectionName = 'skills_' + i18n.locale.value

const {data: skill} = await useAsyncData(route.path, async () => {
  const collection = queryCollection(skillCollectionName)
  return collection.where('slug', '==', route.params.slug).first()
})

</script>

<template>
  <div>
    <h1>{{ skill.name }}</h1>
    <ContentRenderer :value="skill" />
  </div>
</template>