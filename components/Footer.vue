<template>
  <footer>
    <div class="wrapper">
      © Iban Etchepareborde 2022
      <div class="link-icon">
        <a href="https://github.com/IbanEtchep" target="_blank">
          <span class="visually-hidden">Visitez mon github !</span>
          <Icon name="uil:github"/>
      </a>
      </div>

      <div class="link-icon">
        <a href="https://www.linkedin.com/in/iban-etchepareborde-277118224/" target="_blank">
          <span class="visually-hidden">Visitez mon linkedin !</span>
          <Icon name="uil:linkedin"/>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer.vue"
}
</script>

<style lang="scss">
footer {
  background-color: var(--bg-primary);
  padding: 3rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 115px;

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .link-icon {
    margin-left: 1rem;
    a {
      color: var(--text-color-primary);
      font-size: 1.25rem;
    }

    a:hover {
      color: var(--text-link-color);
    }
  }

}
</style>
