<template>
  <a :href="href"><slot /></a>
</template>

<script>
import VueTypes from 'vue-types'
export default {
  name: 'StandardLink',
  props: {
    href: VueTypes.string.required,
  },
}
</script>

<style scoped>
a[href] {
  color: var(--sanstream-orange);
  text-decoration: none;
  display: inline-block;
  border-bottom: 1px solid transparent;
}

a[href]:hover {
  color: var(--sanstream-orange);
  text-decoration: none;
  border-bottom: 1px solid var(--sanstream-yellow);
}
</style>