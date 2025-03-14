<template>
  <div class="wrapper">
    <h1 class="text-center">Contactez-moi</h1>
    <p class="text-center">N'hésitez pas à me contacter par les moyens suivants :</p>
    <div class="contact-wrapper">

      <div class="contact-element">
        <div class="contact-icon"><Icon name="ic:outline-mail"/></div>
        <div class="contact-text">
          <a href="mailto:iban.etchepareborde@gmail.com">iban.etchepareborde@gmail.com</a>
        </div>
      </div>

      <div class="contact-element">
        <div class="contact-icon"><Icon name="uil:linkedin"/></div>
        <div class="contact-text">
          <a href="https://www.linkedin.com/in/iban-etchepareborde-277118224/">LinkedIn</a>
        </div>
      </div>

      <div class="contact-element">
        <div class="contact-icon"><Icon name="ic:baseline-discord"/></div>
        <div class="contact-text">
          Iban#0001
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
  head() {
    return {
      title: "Contact"
    };
  },
}
</script>

<style lang="scss">

.contact-wrapper {
  max-width: 350px;
  margin-right: auto;
  margin-left: auto;
}

.contact-element {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;

  a {
    color: var(--text-color-primary);

    :hover {
      color: var(--text-link-color);
      text-decoration: underline;
    }
  }

  .contact-icon {
    padding: 1rem;
    border-radius: 50%;
    background-color: var(--bg-primary);
    color: var(--text-color-light);
    font-size: var(--text-xl);
  }
}

.contact-text {
  font-size: 1.25rem;
  color: var(--text-color-primary);
}

</style>
