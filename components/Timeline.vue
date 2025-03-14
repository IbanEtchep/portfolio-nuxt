<script setup lang="ts">
interface TimelineItem {
  title: string
  subtitle: string
  period: string
  duration?: string
}

defineProps<{
  items: TimelineItem[]
}>()
</script>

<template>
  <div class="timeline">
    <div v-for="(item, index) in items" :key="index" class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content card">
        <h3 class="text-primary">{{ item.title }}</h3>
        <h4 class="text-normal">{{ item.subtitle }}</h4>
        <div class="text-secondary">
          <span>{{ item.period }}</span>
          <span v-if="item.duration" class="timeline-duration">{{ item.duration }}</span>
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
}
</style>