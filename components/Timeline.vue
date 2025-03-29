<script setup lang="ts">
import { ref } from 'vue'

interface TimelineItem {
  title: string
  subtitle: string
  period: string
  duration?: string
  logoPath: string
  website?: string
  description: string
}

defineProps<{
  items: TimelineItem[]
}>()

const expandedItems = ref<Set<number>>(new Set())

const toggleItem = (index: number) => {
  if (expandedItems.value.has(index)) {
    expandedItems.value.delete(index)
  } else {
    expandedItems.value.add(index)
  }
}
</script>

<template>
  <div class="timeline">
    <div v-for="(item, index) in items" :key="index" class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content card">
        <div class="visible-content">
          <div class="logo">
            <NuxtImg :src="item.logoPath" alt="logo" />
          </div>

          <div class="d-flex justify-content-between">
            <div>
              <h3 class="text-primary">{{ item.title }}</h3>
              <h4 class="text-normal" v-html="item.subtitle"></h4>
              <div class="text-secondary">
                <span>{{ item.period }}</span>
                <span v-if="item.duration" class="timeline-duration">{{ item.duration }}</span>
              </div>
            </div>

            <div>
              <button @click="toggleItem(index)" class="collapse-button" :aria-label="expandedItems.has(index) ? 'Réduire' : 'Développer'">
                <svg v-if="expandedItems.has(index)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="description" :class="{ 'expanded': expandedItems.has(index) }">
          <div v-html="item.description"></div>

          <div v-if="item.website">
            <a :href="item.website" target="_blank">Visiter le site</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.timeline {
  position: relative;
  padding-left: 2rem;
  margin-left: 1rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: var(--text-color-secondary);
  }
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }
}

.timeline-marker {
  position: absolute;
  left: -2.45rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--text-color-secondary);
}

.timeline-content {
  width: 100%;

  .visible-content {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  .logo {
    width: 4rem;
    height: 4rem;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
    background-color: #fff;
    flex-shrink: 0;
  }

  .description {
    color: var(--text-color-secondary);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition: all 0.3s ease-in-out;

    &.expanded {
      max-height: 1000px;
      opacity: 1;
      margin-top: 1rem;
    }

    a {
      color: var(--text-color-primary);
      text-decoration: underline;
    }
  }

  .collapse-button {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: var(--text-color-secondary);
    transition: color 0.3s;

    &:hover {
      color: var(--text-color-primary);
    }
  }
}
</style>
