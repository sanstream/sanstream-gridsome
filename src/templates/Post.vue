<template>
  <Default>
    <div class="sanstream-grid-layout-full-viewport">
      <BlogPost
       class="sanstream-fluid-layout"
       :postData="$page.sanityPost"
      />
    </div>
  </Default>
</template>

<script>
import Default from '../layouts/Default'
import BlogPost from '../components/patterns/BlogPost'

export default {
  name: 'allSanityPost',
  components: {
    BlogPost,
    Default,
  }
}
</script>

<page-query>
query($id: ID) {
  sanityPost(id: $id) {
    id
    publishedAt
    title
    mainImage {
      asset {
        url
        path
      }
    }
    _rawContent
  }
}
</page-query>
