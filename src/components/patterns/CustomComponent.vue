<template>
  <div>
    <template v-if="componentName === 'Flowers'">
      <Flowers  />
    </template>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import Flowers from '../custom/Flowers'

export default {
  name: 'CustomComponent',

  components: {
    Flowers,
  },

  props: {
    componentName: VueTypes.string.required,
    inputData: VueTypes.object.required,
  }
}
</script>