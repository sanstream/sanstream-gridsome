<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <ol>
      <!-- {{$page}} -->
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
  allSanityPost (sortBy:"_createdAt") {
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
        slug {
          current
        }
        markDownBody
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

