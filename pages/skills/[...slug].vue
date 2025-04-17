<script setup>
const route = useRoute()
const i18n = useI18n()
const localePath = useLocalePath()

const skillCollectionName = 'skills_' + i18n.locale.value
const projectCollectionName = 'projects_' + i18n.locale.value

const {data: skill} = await useAsyncData(route.path, async () => {
  const collection = queryCollection(skillCollectionName)
  return collection.where('slug', '==', route.params.slug).first()
})

const {data: linkedProjects} = await useAsyncData('projects-' + route.path, async () => {
  if (!skill.value) return []
  
  // Récupération des projets depuis différents chemins possibles
  const projectsData = skill.value.projects || 
                     skill.value.meta?.projects || 
                     (skill.value.body && skill.value.body.projects) ||
                     []
  
  if (!projectsData || !projectsData.length) return []
  
  const collection = queryCollection(projectCollectionName)
  const projects = await collection.where('slug', 'in', projectsData).all()
  
  const projectMap = {}
  projects.forEach(project => {
    projectMap[project.slug] = project.name
  })
  
  return projectsData.map(slug => ({
    slug,
    name: projectMap[slug] || slug
  }))
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

    <div v-if="linkedProjects && linkedProjects.length" class="projects-section">
      <h2>{{ $t('skills.relatedProjects') }}</h2>
      <div class="projects-list">
        <nuxt-link 
          v-for="project in linkedProjects" 
          :key="project.slug" 
          :to="localePath('/projects/' + project.slug)"
          class="project-link">
          {{ project.name }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.projects-section {
  margin: 2rem 0;
  
  h2 {
    margin-bottom: 1rem;
  }
  
  .projects-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    
    .project-link {
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