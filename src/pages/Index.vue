<template>
  <Layout>
    <ol v-if="$page.allSanityPost">
      <li
        v-for="edge in $page.allSanityPost.edges"
        :key="edge.node.id"
        >
        <article>
          <img
            :src="edge.node.mainImage ? edge.node.mainImage.asset.url : ''"
          />
          <h1>
            {{edge.node.title}}
          </h1>
        </article>
      </li>
    </ol>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  },

  mount () {
    console.log(this)
  }
}
</script>

<page-query>
query {
  allSanityPost (sortBy:"publishedAt") {
    edges {
      node {
        id
        title
        mainImage {
          _key
          asset {
            assetId
            url
            label
          }
        }
        publishedAt
        _createdAt
        categories {
          title
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

