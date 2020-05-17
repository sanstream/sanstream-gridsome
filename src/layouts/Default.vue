<template>
  <div class="layout">
    <header>
      <TopDecoration/>
    </header>
    <main>
      <slot/>
    </main>
  </div>
</template>

<script>
import TopDecoration from '../components/patterns/TopDecoration';

export default {
  components: {
    TopDecoration,
  },
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
:root {
  --colour-background: #ffffff;
  --sanstream-orange: #FF5C00;
  --sanstream-yellow: #FE9800;
  --text-colour: #4D4D4D;
  --contrasting-border-colour: #4D4D4D;
  --toned-down-border-colour: #ABABAB;
  --light-grey-fill:#E3E3E3;
  --middle-grey-fill:#C4C4C4;
  --dark-grey-fill:#878787;
}

body {
  margin:0;
  padding:0;
  line-height: 1.5;
}

body .layout--top-deco-triangles {
  position: absolute;
  position:sticky;
  top: 0;
  left: 0;
  width: 100vw;
  height: 70px;
}
</style>
