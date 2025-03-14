<script lang="ts" setup>
const route = useRoute()
const i18n = useI18n()
const docsCollectionName = 'docs_' + i18n.locale.value;

const { data: aboutPage } = await useAsyncData(route.path, async () => {
  return queryCollection(docsCollectionName).first()
})
</script>

<template>
  <div>
    <Breadcrumb :items="[
      { text: $t('breadcrumb.about')}
    ]" />

    <ContentRenderer v-if="aboutPage" :value="aboutPage" />
  </div>
</template>