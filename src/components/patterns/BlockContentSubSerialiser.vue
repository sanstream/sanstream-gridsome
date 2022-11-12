<template>
  <component :is="derivedComponent"><slot /></component>
</template>

<script>
import { StandardParagraph } from 'sanstream-design-system'
import VueTypes from 'vue-types';
import Vue from 'vue'
import H2Heading from '../elements/H2Heading.vue';

export default {
  name: 'BlockContentSubSerialiser',

  components: {
    StandardParagraph,
  },

  computed: {
    derivedComponent () {
      switch (this.style) {
        case 'h2':
          return H2Heading
        default:
          return StandardParagraph
      }
    },
  },

  props: {
    style: VueTypes.string,
  },
}
</script>