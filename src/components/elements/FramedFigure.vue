<template>
<figure>
  <div class="frame">
    <div class="content">
      <slot />
    </div>
  </div>
  <figcaption
    class="sanstream-body-text"
    v-if="caption"
  >
    {{caption}}
  </figcaption>
</figure>
</template>

<script>
import VueTypes from 'vue-types'

export default {
  name: 'FramedFigure',

  props: {
    caption: VueTypes.string,
  },
}
</script>

<style scoped>
figure {
  margin: 1em 0;
}

figure > figcaption {
  margin: 0.5em 0 1.5em 0;
}
.frame {
  border: 1px solid var(--toned-down-border-colour);
}

.content {
  border: calc(0.5 * var(--base-size) - 1px) solid var(--colour-background);
  overflow: hidden;
  max-height: 100%;
}

figure .content > * {
  display: block;
}
</style>