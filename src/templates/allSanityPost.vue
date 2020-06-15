<template>
  <Default>
    <main
      class=""
    >
      <ol
        class="blog--posts"
        v-if="$page">
        <li
          class="sanstream-grid-layout-full-viewport"
          v-for="node in $page.allSanityPost.edges"
          :key="node.id">
            <BlogPostsItem
              :id="node.node.id"
              :title="node.node.title"
              :postBody="node.node._rawContent"
              :mainImage="node.node.mainImage"
              :publishedOn="node.node.publishedAt"
              :partOfCategories="node.node.categories"
            />
        </li>
      </ol>
      <footer class="sanstream-grid-layout">
        <Pager
          class="blog--pagination"
          :info="$page.allSanityPost.pageInfo"
        />
      </footer>
    </main>
  </Default>
</template>

<script>
import { Pager } from 'gridsome'
import Default from '../layouts/Default'
import BlogPostsItem from '../components/patterns/BlogPostsItem'

export default {
  name: 'allSanityPost',
  components: {
    Default,
    Pager,
    BlogPostsItem,
  }
}
</script>

<page-query>
query($page: Int) {
  allSanityPost(sortBy: "publishedAt" , page: $page, perPage: 5) @paginate {
    pageInfo {
      totalPages
      currentPage
      hasNextPage
      hasPreviousPage
    }
    edges {
      node {
        publishedAt
        title
        mainImage {
          asset {
						url
						path
          }
        }
        categories {
          title
        }
				_rawContent
      }
    }
  }
}
</page-query>

<style scoped>

.blog--posts {
  margin: 0;
  list-style-type: none;
  padding: 0;
}
</style>
