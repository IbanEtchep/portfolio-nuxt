<template>
  <div>
    <header id="about-header" class="wrapper">
      <h1 class="text-center">
        <span v-html="$t('welcome_1')"></span>
        <span v-html="$t('welcome_2')"></span>
      </h1>
    </header>

    <section id="about">
    </section>
  </div>
</template>

<script>
import Contact from "~/pages/contact.vue";
export default {
  name: "Accueil",
  components: {Contact: Contact},
  head() {
    return {
      title: "Accueil"
    };
  },
}
</script>

<style lang="scss">

#about-header {
  background-color: var(--bg-secondary);
  margin: 2.5rem 0;
  box-shadow: none;

  .colored {
    color: var(--text-color-terciary);
  }

  h1 {
    font-size: 3rem;
    line-height: 1.1;
  }

  p {
    font-size: 1.5rem;
    color: var(--text-color-secondary);
  }
}

section {

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  margin: 3rem 0;
}

@media (max-width: 1024px) {
  #about-header {
    h1 {
      font-size: 1.75rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.25rem;
      color: var(--text-color-secondary);
    }
  }
}

</style>
