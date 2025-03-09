<script setup>
const route = useRoute()
const i18n = useI18n()
const localePath = useLocalePath()

const projectCollectionName = 'projects_' + i18n.locale.value

const {data: project} = await useAsyncData(route.path, async () => {
  const collection = queryCollection(projectCollectionName)
  return collection.where('slug', '==', route.params.slug).first()
})

</script>

<template>
  <div>
    <h1>{{ project.name }}</h1>
    <ContentRenderer :value="project" />
  </div>
</template>