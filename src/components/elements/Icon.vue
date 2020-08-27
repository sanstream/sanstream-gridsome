<template>
  <component
    class="santream-svg-icon"
    :is="id"
  />
</template>


<script>
import Menu from '../icons/Menu'
import CloseCross from '../icons/CloseCross'
import VueTypes from 'vue-types'
export default {
  name: 'Icon',

  components: {
    Menu,
    CloseCross,
  },

  props: {
    id: VueTypes.string.required,
  },
}
</script>

<style scoped>
  svg {
    display:inline-block;
    vertical-align: middle;
    position: relative;
    top: -1px;
    pointer-events: none;
    stroke: currentColor;
    fill: currentColor;
  }
</style>

<docs>
```jsx
<Icon
  id="Menu"
/>
```
</docs>