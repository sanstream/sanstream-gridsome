<template>
  <header class="PageHeader sanstream-grid-layout-full-viewport">
    <TopDecoration/>
    <nav class="sanstream-grid-layout">
      <g-link to="/">
        <g-image src="/logos/logo-emblem.svg" alt="sanstream logo" />
      </g-link>
    </nav>
  </header>
</template>

<script>
import TopDecoration from '~/components/patterns/TopDecoration';

export default {
  name: 'PageHeader',
  components: {
    TopDecoration,
  },
}
</script>

<style>
.PageHeader {
  position: relative;
  position: sticky;
  top: 0;
  left: 0;
  height: calc(6 * var(--base-size));
  background-color: var(--colour-background);
  width: 100vw;
  z-index: 20;
}

.PageHeader .TopDecoration {
  z-index: 3;
  position: absolute;
}

.PageHeader nav {
  position: relative;
  z-index: 2;
  position: relative;
  padding: calc(2.5 * var(--base-size)) var(--base-size) 0 var(--base-size);
  border-bottom: 1px solid var(--toned-down-border-colour);
  background-color: inherit;
}

.PageHeader nav.sanstream-grid-layout a {
  grid-area: 1 / 1 / 1 / 9;
  place-self: center;
}
</style>