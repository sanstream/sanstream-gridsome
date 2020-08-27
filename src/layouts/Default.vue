<template>
  <div class="default-layout">
    <PageHeader />
    <main>
      <slot/>
    </main>
    <PageFooter/>
  </div>
</template>

<script>
import '../tokens.css'
import PageHeader from '../components/patterns/PageHeader';
import PageFooter from '../components/patterns/PageFooter';

export default {
  components: {
    PageHeader,
    PageFooter,
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
body {
  margin:0;
  padding:0;
  line-height: 1.5em;
  background-color: var(--colour-background);
  min-height: 100vh;
  overflow-x: hidden;
}

body > .default-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

body > .default-layout  > footer,
body > .default-layout  > header {
  flex: 0 1;
}

body > .default-layout  > * {
  flex: 1 0;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

.PageHeader {
  margin-bottom: calc(2 * var(--base-size));
}

@media (min-width: 920px) {
  .sanstream-grid-layout {
    margin: auto;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(8, calc(4 * var(--base-size)));
    row-gap: calc(2 * var(--base-size));
    column-gap: calc(2 * var(--base-size));
  }

  .sanstream-fluid-layout {
    width: calc(46 * var(--base-size));
  }
}

@media (max-width: 920px) {
  .sanstream-grid-layout {
    margin: auto;
    display: initial;
    width: var(--min-content-width);
  }

  .sanstream-fluid-layout {
    width: var(--min-content-width);
  }
}

.sanstream-grid-layout-full-viewport {
  display: flex;
  flex-direction: column;
}

.sanstream-grid-layout-full-viewport > * {
  flex: 1 0 auto;
  align-self: center;
}

</style>
