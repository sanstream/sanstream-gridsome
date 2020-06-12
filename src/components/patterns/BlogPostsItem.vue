<template>
  <article
    class="blog--posts-item sanstream-grid-layout"
  >
    <h1
      class="sanstream-heading"
    >
      {{title}}
    </h1>
    <figure
      v-if="mainImage"
      class="blog--posts-item-main-image"
    >
      <g-image
        :src="mainImage.asset.url"
      />
    </figure>
    <div
      :class="`blog--posts-item-text-content ${!mainImage && 'no-main-image'}`"
    >
      <SerializedRawContent
        v-if="postBody && postBody.length"
        :rawContent="postBody.filter((e, index) => index < 2)"
      ></SerializedRawContent>
      <a :href="`/post/${id}`">read more</a>
    </div>
  </article>
</template>

<script>
import SerializedRawContent from './SerializedRawContent'
import VueTypes from 'vue-types'

export default {
  name: 'allSanityPost',
  components: {
    SerializedRawContent,
  },

  props: {
    id: VueTypes.string.required,
    title: VueTypes.string.required,
    mainImage: VueTypes.object,
    postBody: VueTypes.array,
  },
}
</script>

<style scoped>
.blog--posts-item {
  margin-bottom: calc(3 * var(--base-size));
}

.blog--posts-item > h1 {
  margin: 0;
  grid-column: 1 / 9;
  grid-row: 1;
}

.blog--posts-item-main-image {
  margin: 0;
  grid-column: 1 / 4;
  grid-row: 2;
}

.blog--posts-item-main-image img {
  width: 100%;
}

.blog--posts-item-text-content {
    margin: 0;
    /* grid-area: 2 / 4 / 2 / 9; */
    grid-column: 4 / 9;
    grid-row: 2;
}

.blog--posts-item-text-content.no-main-image {
  grid-column: 1 / 9;
}

</style>
