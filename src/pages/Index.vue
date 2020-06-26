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
          <nav
            class="continued-navigation sanstream-fluid-layout"
          >
            <h1 class="sanstream-heading">Dive Deeper</h1>
            <ul>
              <li>
                <SpecialLink
                  href="/blog/"
                >
                  Blog posts
                </SpecialLink>
              </li>
            </ul>
          </nav>
        </main>
      </template>
    </template>
  </Layout>
</template>

<script>
import TextAndPictureSequence from '../components/patterns/TextAndPictureSequence'
import SpecialLink from '../components/elements/SpecialLink'

export default {
  metaInfo: {
    title: 'homepage',
  },

  components: {
    TextAndPictureSequence,
    SpecialLink,
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

.continued-navigation {
  text-align: center;
  margin: 40px 0;
}

.continued-navigation ul {
  list-style: none;
  margin: 1em 0;
  padding: 0;
}
</style>

