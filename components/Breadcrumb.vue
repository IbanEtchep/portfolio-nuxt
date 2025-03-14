<script setup lang="ts">
interface BreadcrumbItem {
  text: string;
  to?: string;
}

const props = withDefaults(defineProps<{
  items?: BreadcrumbItem[];
}>(), {
  items: () => []
});

const localePath = useLocalePath();
</script>

<template>
  <nav aria-label="Breadcrumb" class="breadcrumb">
    <ol>
      <li>
        <NuxtLink :to="localePath('/')" aria-label="Accueil">
          <Icon name="line-md:home-simple" />
        </NuxtLink>
      </li>
      <li v-for="(item, index) in props.items" :key="index">
        <span v-if="index < props.items.length - 1 && item.to">
          <NuxtLink :to="localePath(item.to)">{{ item.text }}</NuxtLink>
        </span>
        <span v-else>{{ item.text }}</span>
      </li>
    </ol>
  </nav>
</template>

<style scoped lang="scss">
.breadcrumb {
  margin: 2rem 0;

  ol {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;

    &:not(:last-child)::after {
      content: '›';
      margin-left: 0.5rem;
      color: var(--text-color-secondary);
    }
  }

  svg {
    fill: currentColor;
    width: 1.25rem;
    height: 1.25rem;
  }

  a {
    color: var(--text-color-terciary);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>