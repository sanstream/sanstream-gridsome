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
              :postBody="node.node._rawContent.filter(e => e._type === 'block')"
              :mainImage="node.node.mainImage"
              :publishedOn="node.node.publishedAt"
              :partOfCategories="node.node.categories"
            />
        </li>
      </ol>
      <footer class="sanstream-grid-layout-full-viewport">
        <!-- <Pager :info="$page.allSanityPost.pageInfo"/> -->
        <Pagination
          class="blog--pagination"
          :pageInfo="$page.allSanityPost.pageInfo"
          basePath="/blog"
        />
      </footer>
    </main>
  </Default>
</template>

<script>
import Default from '../layouts/Default'
import BlogPostsItem from '../components/patterns/BlogPostsItem'
import Pagination from '../components/patterns/Pagination'
import { Pager } from 'gridsome'

export default {
  name: 'allSanityPost',
  components: {
    Default,
    BlogPostsItem,
    Pagination,
    Pager,
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
        id
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
