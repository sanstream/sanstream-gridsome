<template>
  <Layout>
    <template v-if="$page.allSanityLandingPage">
      <template v-for="edge in $page.allSanityLandingPage.edges">
        <main
        class="sanstream-grid-layout-full-viewport"
        :key="edge.node.id"
        >
          <TextAndPictureSequence
            class=""
            :sequence="edge.node.pictureAndTextSequence"
          />
        </main>
      </template>
    </template>
  </Layout>
</template>

<script>
import TextAndPictureSequence from '../components/patterns/TextAndPictureSequence'

export default {
  metaInfo: {
    title: 'homepage',
  },

  components: {
    TextAndPictureSequence,
  },
}
</script>

<page-query>
query {
  allSanityLandingPage (filter: {forPath: {eq: "/"}}) {
    edges {
      node {
        title
        pictureAndTextSequence {
          _key
          picture {
            altText
            asset {
              url
            }
          }
          _rawText
        }
      }
    }
  }
}
</page-query>
<style>
.home-links a {
  margin-right: 1rem;
}
</style>

