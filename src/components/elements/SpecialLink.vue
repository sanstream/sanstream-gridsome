<template>
  <a
    class="sanstream-special-text"
   :href="href">
    <slot />
    <svg class="link-pointer" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.511413 1.05792L14.073 8.67267L0.715917 16.6426L0.511413 1.05792Z" fill="#FF5C00" stroke="#4D4D4D"/>
    </svg>
   </a>
</template>

<script>
import VueTypes from 'vue-types'

export default {
  name: 'SpecialLink',

  props: {
    href: VueTypes.string.required,
  },
}
</script>

<style scoped>
a[href] {
  color: var(--text-colour);
  text-decoration: none;
  display: inline;
  }

/* a[href]:hover {
  text-decoration: none;
} */

svg {
  display: inline-block;
  vertical-align: middle;
  position: relative;
  top: -1px;
}

a[href] svg path {
  transition: fill 0.1s linear;
  fill: var(--sanstream-orange);
}

a[href]:hover svg path {
  fill: var(--sanstream-yellow);
}
</style>