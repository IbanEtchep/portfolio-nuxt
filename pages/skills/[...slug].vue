<script setup>
const route = useRoute()
const i18n = useI18n()
const localePath = useLocalePath()

const skillCollectionName = 'skills_' + i18n.locale.value

const {data: skill} = await useAsyncData(route.path, async () => {
  const collection = queryCollection(skillCollectionName)
  return collection.where('slug', '==', route.params.slug).first()
})

</script>

<template>
  <div>
    <Breadcrumb :items="[
      { text: $t('breadcrumb.skills'), to: localePath('skills')
      },
      { text: skill.name }
    ]" />

    <div class="markdown-content">
      <ContentRenderer :value="skill" />
    </div>
  </div>
</template>