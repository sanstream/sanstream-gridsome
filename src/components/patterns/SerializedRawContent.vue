<template>
  <BlockContent
    class="sanstream-block-content"
    :blocks="rawContent.filter(e => e._type === 'block')"
    :serializers="serializers"
  />
</template>

<script>
import VueTypes from 'vue-types'
import BlockContent from 'sanity-blocks-vue-component'
import StandardLink from '../elements/StandardLink'
import StandardParagraph from '../elements/StandardParagraph'

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
        },
        marks: {
          link: StandardLink,
        }
      }
    }
  },

  props: {
    rawContent: VueTypes.array.required,
  },
}
</script>