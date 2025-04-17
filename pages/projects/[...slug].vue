<script setup>
const localePath = useLocalePath()
const route = useRoute()
const i18n = useI18n()

const projectCollectionName = 'projects_' + i18n.locale.value
const skillCollectionName = 'skills_' + i18n.locale.value

const {data: project} = await useAsyncData(route.path, async () => {
  const collection = queryCollection(projectCollectionName)
  return collection.where('slug', '==', route.params.slug).first()
})

const {data: linkedSkills} = await useAsyncData('skills-' + route.path, async () => {
  if (!project.value?.skills?.length) return []

  const collection = queryCollection(skillCollectionName)
  const skills = await collection.where('slug', 'in', project.value.skills).all()

  const skillMap = {}
  skills.forEach(skill => {
    skillMap[skill.slug] = skill.name
  })

  return project.value.skills.map(slug => ({
    slug,
    name: skillMap[slug] || slug
  }))
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

    <div v-if="linkedSkills && linkedSkills.length" class="skills-section">
      <h2>{{ $t('projects.relatedSkills') }}</h2>
      <div class="skills-list">
        <nuxt-link 
          v-for="skill in linkedSkills" 
          :key="skill.slug" 
          :to="localePath('/skills/' + skill.slug)"
          class="skill-link">
          {{ skill.name }}
        </nuxt-link>
      </div>
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

.skills-section {
  margin: 2rem 0;
  
  h2 {
    margin-bottom: 1rem;
  }
  
  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    
    .skill-link {
      display: inline-block;
      padding: 0.5rem 1rem;
      background-color: var(--bg-primary);
      color: var(--text-color-primary);
      border-radius: 0.5rem;

      &:hover {
        transform: translateY(-2px);
      }
    }
  }
}
</style>