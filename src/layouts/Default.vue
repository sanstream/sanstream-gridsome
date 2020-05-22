<template>
  <div class="default-layout">
    <PageHeader />
    <main>
      <slot/>
    </main>
  </div>
</template>

<script>
import PageHeader from '../components/patterns/PageHeader';

export default {
  components: {
    PageHeader,
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

  --base-size: 20px;
}

.sanstream-intro-text {
  font-family: 'Armata', "Helvetica", sans-serif;
  color: var(--text-colour);
}

.sanstream-intro-text a {
  color: var(--sanstream-orange);
}

body {
  margin:0;
  padding:0;
  line-height: 1.5;
  background-color: var(--colour-background);
}

.PageHeader {
  margin-bottom: calc(2 * var(--base-size));
}

.sanstream-grid-layout {
  margin: auto;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(8, calc(4 * var(--base-size)));
  row-gap: calc(2 * var(--base-size));
  column-gap: calc(2 * var(--base-size));
}

.sanstream-grid-layout-full-viewport {
  display: flex;
  flex-direction: column;
}

.sanstream-grid-layout-full-viewport > .sanstream-grid-layout {
  flex: 1 0 auto;
  align-self: center;
}

</style>
