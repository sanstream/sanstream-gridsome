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
  color: var(--sanstream-orange-on-white);
}

button.variant-textual:focus {
  outline: none;
}

button.variant-textual:focus *,
button.variant-textual:hover * {
  filter:
    drop-shadow(0px 0px 1px var(--sanstream-yellow))
    drop-shadow(0px 0px 6px var(--sanstream-yellow));
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
