<template>
  <div>
    <template v-if="componentName === 'Flowers'">
      <Flowers  />
    </template>
    <template v-if="componentName === 'AllTheProblems'">
      <AllTheProblems  />
    </template>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import Flowers from '../custom/Flowers'
import AllTheProblems from '../custom/AllTheProblems'

export default {
  name: 'CustomComponent',

  components: {
    Flowers,
    AllTheProblems,
  },

  props: {
    componentName: VueTypes.string.required,
    inputData: VueTypes.object.required,
  }
}
</script>