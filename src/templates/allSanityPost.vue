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
          <article
            class="blog--posts-item sanstream-grid-layout"
          >
            <h1
              class="sanstream-heading"
            >
              {{node.node.title}}
            </h1>
            <figure
              v-if="node.node.mainImage"
              class="blog--posts-item-main-image"
            >
              <g-image
                :src="node.node.mainImage.asset.url"
              />
            </figure>
            <div
              :class="`blog--posts-item-text-content ${!node.node.mainImage && 'no-main-image'}`"
            >
              <p>{{node.node._rawContent}}</p>
              <a :href="`/post/${node.node.id}`">read more</a>
            </div>
          </article>
        </li>
      </ol>
      <footer class="sanstream-grid-layout">
        <Pager
          class="blog--pagination"
          :info="$page.allSanityPost.pageInfo"
        />
      </footer>
    </main>
    </div>
  </Default>
</template>

<script>
import { Pager } from 'gridsome'
import Default from '../layouts/Default'

export default {
  name: 'allSanityPost',
  components: {
    Default,
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
