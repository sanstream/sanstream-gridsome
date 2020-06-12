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
  --min-content-width: calc(20px * 4 * 3 + 20px * 2 * 2); /* base-size * 4 (= column-width) * 3 columns */
  --mobile-breakpoint: 920px;
}

.sanstream-intro-text {
  font-family: 'Armata', "Helvetica", sans-serif;
  color: var(--text-colour);
  font-size: 100%;
}

.sanstream-heading {
  font-family: 'Armata', "Helvetica", sans-serif;
  color: var(--text-colour);
}

.sanstream-special-text {
  font-family: 'Fira Code', monospace;
  color: var(--text-colour);
}

.sanstream-body-text {
  font-family: 'Montserrat', serif;
  color: var(--text-colour);
}

body {
  margin:0;
  padding:0;
  line-height: 1.5em;
  background-color: var(--colour-background);
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
}

@media (max-width: 920px) {
  .sanstream-grid-layout {
    margin: auto;
    display: initial;
    width: var(--min-content-width);
  }
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
