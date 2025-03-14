<script setup>
const localePath = useLocalePath()
const route = useRoute()
const i18n = useI18n()

const projectCollectionName = 'projects_' + i18n.locale.value

const {data: project} = await useAsyncData(route.path, async () => {
  const collection = queryCollection(projectCollectionName)
  return collection.where('slug', '==', route.params.slug).first()
})

</script>

<template>
  <div>
    <Breadcrumb :items="[
      { text: $t('breadcrumb.projects'), to: localePath('projects')
      },
      { text: project.name }
    ]" />

    <ContentRenderer :value="project" />
  </div>
</template>