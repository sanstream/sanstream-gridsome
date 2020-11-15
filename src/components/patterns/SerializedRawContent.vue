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
import { StandardLink, StandardParagraph, CodeExample } from 'sanstream-design-system'
import StandardImage from '../elements/StandardImage'

export default {
  name: 'SerializedRawContent',

  components: {
    BlockContent,
  },

  computed: {
    serializers () {
      return {
        types: {
          block: StandardParagraph,
          image: StandardImage,
          code: CodeExample,
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
