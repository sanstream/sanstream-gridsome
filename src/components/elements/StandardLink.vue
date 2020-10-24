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
  color: var(--sanstream-orange-on-white);
  text-decoration: none;
  display: inline;
  border-bottom: 2px solid var(--sanstream-orange);
}

a[href]:focus,
a[href]:hover {
  outline: none;
  color: var(--sanstream-orange-on-white);
  text-decoration: none;
  border-bottom: 2px solid var(--sanstream-yellow);
}
</style>
