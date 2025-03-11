<script setup>
const route = useRoute()
const i18n = useI18n()
const localePath = useLocalePath()
const skillCollectionName = 'skills_' + i18n.locale.value;

const { data: skills } = await useAsyncData(route.path, async () => {
  const collection = queryCollection(skillCollectionName)
  return collection.all()
})
</script>

<template>
  <div>
    <h1 class="text-center">{{ $t('skills.title') }}</h1>

    <div class="skills">
      <div class="skill" v-for="skill in skills" :key="skill.slug">
        <nuxt-link :to="localePath('/skills/' + skill.slug)">
          <div class="skill-wrapper">
            <NuxtImg :src="`/images/${skill.slug}/thumbnail.png`" alt="thumb du projet" />
            <div class="details">
              <h3>{{ skill.name }}</h3>
              <p>{{ skill.description }}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .skill {
    width: 30%;
  }
}

@media (max-width: 1024px) {
  .skills .skill {
    width: 49%;
  }
}

@media (max-width: 640px) {
  .skills .skill {
    width: 100%;
  }
}

.skill-wrapper {
  background-color: var(--bg-primary);
  border-radius: 10px;
  width: 100%;
  margin: 1rem 0;
  box-shadow: 1px 1px 5px 0 rgb(1 1 1 / 5%);
  transition: transform 250ms ease, box-shadow 250ms ease, color 250ms ease;

  img {
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: auto;
  }

  h3 {
    text-align: center;
  }

  .details {
    padding: 2rem;
  }
}

.skill-wrapper:hover {
  transform: translateY(-0.25rem);
  box-shadow: 0px 2px 4px rgb(46 41 51 / 8%), 0px 5px 10px rgb(71 63 79 / 16%);;
}

.skill-filter {
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