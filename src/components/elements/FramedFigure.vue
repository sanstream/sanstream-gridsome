<template>
<figure>
  <div>
    <slot />
  </div>
</figure>
</template>

<script>
import VueTypes from 'vue-types'

export default {
  name: 'FramedFigure',
}
</script>

<style scoped>
figure {
  border: 1px solid var(--toned-down-border-colour);
  margin: 1em 0;
}

div {
  border: calc(0.5 * var(--base-size) - 1px) solid var(--colour-background);
  overflow: hidden;
  max-height: 100%;
}

figure > div > * {
  display: block;
}
</style>