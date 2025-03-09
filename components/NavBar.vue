<script setup>
const localePath = useLocalePath()

const navItems = [
  { to: '/projects', label: 'Projets' },
  { to: '/', label: 'Compétences' },
  { to: '/contact', label: 'Contact' }
]

const isOpen = ref(false)
</script>

<template>
  <header>
    <div class="wrapper">
      <div id="logo">
        <nuxt-link :to="localePath('/')">
          <span>Iban</span> <span>Etchepareborde</span>
        </nuxt-link>
      </div>

      <nav class="desktop-nav">
        <nuxt-link
            v-for="item in navItems"
            :key="item.to"
            :to="localePath(item.to)"
        >
          {{ item.label }}
        </nuxt-link>
      </nav>

      <theme-switcher/>

      <div class="burger">
        <button @click="isOpen = !isOpen" type="button" aria-label="Menu toggle">
          <svg viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    </div>

    <nav v-if="isOpen" :class="{ opened: isOpen }" class="mobile-nav">
      <nuxt-link
          v-for="item in navItems"
          :key="item.to"
          :to="localePath(item.to)"
      >
        {{ item.label }}
      </nuxt-link>
    </nav>
  </header>
</template>

<style lang="scss">

header {
  background-color: var(--bg-primary);
  padding: 3rem 0;
  box-shadow: 1px 1px 5px 0 rgb(1 1 1 / 5%);

  .wrapper {
    display: flex;
    justify-content: space-between;
  }

  nav {
    margin-left: 1rem;
    display: flex;
    justify-content: center;
    width: 60%;
  }

  a {
    font-size: 1.25rem;
    font-weight: 600;
    padding: 1.25rem;
    color: var(--text-color-primary);
  }

}

.burger {
  display: none;
  margin-left: 1rem;
}

.desktop-nav {
  display: block;
}

.mobile-nav {
  display: none;
}

#logo {

  a, a.nuxt-link-exact-active {
    margin-left: 1rem;
    font-size: 1.5rem;
    font-weight: bolder;
    color: var(--text-color-primary);
  }

  span {
    display: inline-block;
  }

  span:first-letter {
    display: block;
    color: var(--text-color-terciary);
  }
}

@media (max-width: 1024px) {
  header {
    align-items: center;
    padding: 1.5rem 0;

    .wrapper {
      margin: 0;
      display: flex;

      .theme-switcher {
        align-self: center;
        justify-self: center;
      }
    }
  }

  .burger {
    display: block;

    button {
      display: block;
      color: var(--text-color-primary);

      svg {
        fill: var(--text-color-primary);
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }

  nav {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
  }

  .desktop-nav {
    display: none;
  }

  .mobile-nav {
    margin: 2rem auto auto;
    text-align: center;
    display: flex;
  }
}

.router-link-exact-active {
  color: var(--text-color-terciary);
}
</style>
