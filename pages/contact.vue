<template>
  <div class="wrapper">
    <Breadcrumb :items="[
      { text: $t('breadcrumb.contact') }
    ]" />

    <Contact/>
  </div>

</template>

<script>
export default {
  head() {
    return {
      title: "Contact"
    };
  },
}
</script>
