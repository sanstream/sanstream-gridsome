<template>
  <p class="sanstream-body-text">
    <slot />
  </p>
</template>

<script>
import VueTypes from 'vue-types'
export default {
  name: 'StandardParagraph',
  props: {
    href: VueTypes.string.required,
  },
}
</script>

<style scoped>
p:first-child {
  margin-top: 0;
}
</style>