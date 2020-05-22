<template>
  <article
    class="TextAndPictureSequence sanstream-grid-layout"
  >
    <section
      class="TextAndPictureSequence--item"
      v-for="item in sequence"
      :key="item._key"
    >
      <div
        class="TextAndPictureSequence--item-text sanstream-intro-text"
      >
        <p v-for="chunck in item._rawText"
          :key="chunck._key"
        >
          {{chunck.children.map(child => child.text).join(' ')}}
        </p>
      </div>
      <figure
        class="TextAndPictureSequence--item-figure"
      v-if="item.picture">
        <g-image :src="item.picture.asset.url" :alt="item.picture.altText"/>
      </figure>
    </section>
  </article>
</template>

<script>
import VueTypes from 'vue-types'

export default {
  name: 'TextAndPictureSequence',
  props: {
    sequence: VueTypes.array,
  }
}
</script>

<style>

figure {
  margin: 0;
}

.TextAndPictureSequence .TextAndPictureSequence--item {
  grid-column: 2 / 8;
  place-self: center;
  display: grid;
  grid-template-areas: "left right";
  flex-direction: row;
  gap: calc(4 * var(--base-size));
}

.TextAndPictureSequence .TextAndPictureSequence--item .TextAndPictureSequence--item-text {
  grid-area: left;
}

.TextAndPictureSequence .TextAndPictureSequence--item .TextAndPictureSequence--item-text > *:first-child {
  margin-top: 0;
}

.TextAndPictureSequence .TextAndPictureSequence--item .TextAndPictureSequence--item-figure {
  grid-area: right;
}

.TextAndPictureSequence .TextAndPictureSequence--item:nth-child(even) .TextAndPictureSequence--item-text {
  grid-area: right;
}

.TextAndPictureSequence .TextAndPictureSequence--item:nth-child(even) .TextAndPictureSequence--item-figure {
  grid-area: left;
}

</style>