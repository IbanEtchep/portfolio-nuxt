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

    <div class="markdown-content">
      <ContentRenderer :value="project" />
    </div>

    <div v-if="project.meta.youtube_url" class="youtube-wrapper">
      <iframe width="100%" height="auto"
              :src="project.meta.youtube_url"
              frameborder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen></iframe>
    </div>
  </div>
</template>

<style lang="scss">
.youtube-wrapper {
  display: flex;
  justify-content: center;
  margin: 2rem 0;

  iframe {
    width: 100%;
    height: 400px;
    border-radius: 1rem;
    box-shadow: var(--shadow);
  }
}
</style>