<script setup>
const route = useRoute()
const i18n = useI18n()
const localePath = useLocalePath()
const skillCollectionName = 'skills_' + i18n.locale.value;

const { data: skillsData } = await useAsyncData(route.path, async () => {
  return {
    technicalSkills: await queryCollection(skillCollectionName).where('technical', '==', true).all(),
    softSkills: await queryCollection(skillCollectionName).where('technical', '==', false).all()
  }
})

const technicalSkills = skillsData.value.technicalSkills
const softSkills = skillsData.value.softSkills

</script>

<template>
  <div>
    <Breadcrumb :items="[
      { text: $t('breadcrumb.skills') }
    ]" />

    <h1 class="text-center">{{ $t('skills.title') }}</h1>

    <div id="technical-skills" class="skills-wrapper">
      <h2 class="text-center">{{ $t('skills.technical.title') }}</h2>

      <div class="skills">
        <div class="skill card" v-for="skill in technicalSkills" :key="skill.slug">
          <nuxt-link :to="localePath('/skills/' + skill.slug)">
            <div class="skill-wrapper">
              <div class="skill-icon" v-if="skill.icon">
                <Icon :name="skill.icon" />
              </div>
              <div class="details">
                <h3>{{ skill.name }}</h3>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div id="soft-skills" class="skills-wrapper">
      <h2 class="text-center">{{ $t('skills.soft.title') }}</h2>

      <div class="skills">
        <div class="skill card" v-for="skill in softSkills" :key="skill.slug">
          <nuxt-link :to="localePath('/skills/' + skill.slug)">
            <div class="skill-wrapper">
              <div class="skill-icon" v-if="skill.icon">
                <Icon :name="skill.icon" />
              </div>
              <div class="details">
                <h3>{{ skill.name }}</h3>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.skills-wrapper {
  padding: 3rem 0;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 3rem 0;

  .skill {
    flex-basis: calc(50% - 0.5rem);
  }
}

@media (max-width: 1024px) {
  .skills .skill {
    flex-basis: 100%;
  }
}
.skill-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: auto;
  }

  h3 {
    text-align: center;
    margin-bottom: 0;
  }
}

.skill-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  color: var(--text-color-primary);
  font-size: 3rem;
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