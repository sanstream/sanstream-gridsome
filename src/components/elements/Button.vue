<template>
  <button
    :class="`variant-${variant}`"
    type="button"
    @click="onClick()"
  >
    <slot />
  </button>
</template>

<script>
import VueTypes from 'vue-types'
export default {
  name: 'Button',
  props: {
    variant: VueTypes.oneOf([
      'textual',
    ]),
    onClick: VueTypes.func.isRequired,
  },
}
</script>


<style scoped>
button {
  display: inline-block;
  cursor: pointer;
}

button.variant-textual {
  border: 0;
  box-shadow: none;
  background-color: inherit;
  color: var(--sanstream-orange);
}
</style>


<docs>
```jsx
<Button
  variant="textual"
  :onClick="() => {}"
>
  Textual button
</Button>
``` 
</docs>