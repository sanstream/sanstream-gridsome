<template>
  <div>
    <template
      v-for="child in rawContent"
    >
      {{child}}
    <template>
  </div>
</template>

<script>
import VueTypes from 'vue-types'

export default {
  name: 'SerializedRawContent',
  props: {
    rawContent: VueTypes.array.required,
  },
}
</script>