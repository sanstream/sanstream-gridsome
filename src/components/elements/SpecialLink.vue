<template>
  <g-link
    class="sanstream-special-text special-link"
    :class="triangleToText"
   :to="href">
    <PointerTriangle
      v-if="triangleToText === 'left'"
    />
    <span class="displayed-text">
      <slot />
    </span>
    <PointerTriangle
      v-if="triangleToText === 'right'"
    />
   </g-link>
</template>

<script>
import VueTypes from 'vue-types'
import PointerTriangle from './PointerTriangle'

export default {
  name: 'SpecialLink',

  components: {
    PointerTriangle,
  },

  props: {
    href: VueTypes.string.required,
    triangleToText: VueTypes.oneOf(['left', 'right', 'none']).def('right'),
  },
}
</script>

<style>
a[href].special-link {
  color: var(--text-colour);
  text-decoration: none;
  display: inline-block;
  height: 22px;
  line-height: 22px;
  }

a[href].special-link .displayed-text {
  display: inline-block;
  border-bottom: 1px solid var(--sanstream-yellow);
}

a[href].special-link:hover .displayed-text {
  border-bottom: 2px solid var(--sanstream-orange);
}

a[href].special-link svg {
  display: inline-block;
  vertical-align: middle;
  position: relative;
  top: -1px;
}


a[href].special-link.left svg {
  transform: rotate(180deg);
  margin-right: 0.5em;
}

a[href].special-link.right svg {
  margin-left: 0.5em;
}

a[href].special-link svg path {
  transition: fill 0.1s linear;
  fill: var(--sanstream-orange);
}

a[href].special-link:hover svg path {
  fill: var(--sanstream-yellow);
}
</style>