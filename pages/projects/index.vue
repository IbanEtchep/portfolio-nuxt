<script setup>
const route = useRoute()
const i18n = useI18n()
const localePath = useLocalePath()
const projectCollectionName = 'projects_' + i18n.locale.value;

const { data: projects } = await useAsyncData(route.path, async () => {
  const collection = queryCollection(projectCollectionName)
  return collection.all()
})
</script>

<template>
  <div>
    <Breadcrumb :items="[
      { text: $t('breadcrumb.projects') }
    ]" />

    <h1 class="text-center">{{ $t('projects.title') }}</h1>

    <div class="projects">
      <div class="project card" v-for="project in projects" :key="project.slug">
        <nuxt-link :to="localePath('/projects/' + project.slug)">
          <div class="project-wrapper">
            <NuxtImg :src="`/images/${project.slug}/thumbnail.png`" alt="thumb du projet" />
            <div class="details">
              <h3>{{ project.name }}</h3>
              <p>{{ project.description }}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;

  .project {
    flex: 0 0 calc((100% - 2rem) / 3);
    padding: 0;
  }
}

@media (max-width: 1024px) {
  .projects .project {
    flex: 0 0 calc((100% - 1rem) / 2);
  }
}

@media (max-width: 640px) {
  .projects .project {
    flex: 0 0 100%;
  }
}

.project-wrapper {
  background-color: var(--bg-primary);
  border-radius: 10px;
  width: 100%;
  transition: transform 250ms ease, box-shadow 250ms ease, color 250ms ease;

  img {
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h3 {
    text-align: center;
  }

  .details {
    padding: 2rem;
    height: 180px;
  }
}

.project-filter {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 4rem 0 1rem;

  input {
    border: 0;
    color: var(--text-color-primary);
    font-size: 1.125rem;

    ::-webkit-search-cancel-button {
      color: white;
    }
  }
}

.filter-item {
  background-color: var(--bg-primary);
  display: block;
  height: 3rem;
  padding: 0.75rem;
  border-radius: 1rem;
  cursor: pointer;

  svg {
    fill: var(--text-color-primary);
    height: 100%;
    width: auto;
  }
}

.search-wrapper {
  display: flex;
  gap: 0.5rem;
}

</style>