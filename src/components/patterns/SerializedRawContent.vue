<template>
  <BlockContent
    class="sanstream-block-content"
    :blocks="rawContent"
    :serializers="serializers"
    project-id="he47alh5"
    dataset="production"
  />
</template>

<script>
import VueTypes from 'vue-types'
import BlockContent from 'sanity-blocks-vue-component'
import { StandardLink, CodeExample } from 'sanstream-design-system'
import StandardImage from '../elements/StandardImage'
import CustomComponent from './CustomComponent'
import H2Heading from '../elements/H2Heading'
import BlockContentSubSerialiser from './BlockContentSubSerialiser.vue'

export default {
  name: 'SerializedRawContent',

  components: {
    BlockContent,
  },

  computed: {
    serializers () {
      return {
        types: {
          block: BlockContentSubSerialiser,
          image: StandardImage,
          code: CodeExample,
          customComponent: CustomComponent,
        },
        marks: {
          link: StandardLink,
        },
      }
    },
  },

  props: {
    rawContent: VueTypes.array.required,
  },
}
</script>
