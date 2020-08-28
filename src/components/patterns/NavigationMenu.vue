<template>
  <menu class="navigation-menu">
    <Button
      variant="textual"
      :onClick="openDialog"
    >
      <Icon
        id="Menu"
        titleText="Open main menu"
      />
    </Button>
    <dialog
      class="sanstream-grid-layout-full-viewport"
      ref="dialog"
    >
      <div
        class="sanstream-fluid-layout navigation-menu--dialog-content"
      >
        <header>
          <Button
            variant="textual"
            :onClick="closeDialog"
            class="navigation-menu--close-dialog"
          >
            <Icon
              id="CloseCross"
              titleText="Close main menu"
            />
          </Button>
        </header>
        <ul>
          <li>  
            <SpecialLink
              href="/blog/"
              triangleToText="right"
              :hasDarkParent="true"
            >
              Blog
            </SpecialLink>
          </li>  
        </ul>
      </div>
    </dialog>
  </menu>
</template>


<script>
import VueTypes from 'vue-types'
import SpecialLink from '../elements/SpecialLink'
import Button from '../elements/Button'
import Icon from '../elements/Icon'
import dialogPolyfill from 'dialog-polyfill'

const arrayOfLinks = VueTypes.arrayOf(VueTypes.shape({
  href: VueTypes.string,
  label: VueTypes.string,
}))

export default {
  name: 'NavigationMenu',
  components: {
    SpecialLink,
    Button,
    Icon,
  },
  props: {
    collectionPages: arrayOfLinks,
    singlePages: arrayOfLinks,
  },

  data () {
    return {
      isDialogVisible: false,
    }
  },

  mounted () {
    dialogPolyfill.registerDialog(this.$refs.dialog)
  },

  methods: {
    openDialog () {
      if (this.$refs.dialog.showModal) {
        this.$refs.dialog.showModal()
      } else {
        console.log(this.$refs.dialog)
        this.$refs.dialog.show()
      }
    },

    closeDialog () {
      this.$refs.dialog.classList.add('hide')
      this.$refs.dialog.addEventListener('animationend', () => {
        this.$refs.dialog.classList.remove('hide')
        this.$refs.dialog.close()
      }, {
        once: true,
      })
    },
  },
}
</script>

<style scoped>
menu button {
  color: var(--sanstream-orange);
}

menu dialog:not([open]) {
  display: none;
}

@keyframes show-dialog {
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
}
@keyframes hide-dialog{
  from {
      opacity: 1;
  }
  to {
      opacity: 0;
  }
}

menu dialog[open]::backdrop {
  background-color: rgba(0,0,0,0);
}

menu dialog[open] {
  color: #ffffff;
  border: none 0;
  position: fixed;
  background-color: #4d4d4d;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 100;
  animation: show-dialog 0.25s ease-in-out;
}

menu dialog.hide {
  animation: hide-dialog 0.25s ease-in-out;
}
.navigation-menu--dialog-content {
  position: relative;
}

.navigation-menu--close-dialog {
  position: absolute;
  top: var(--base-size);
  right: var(--base-size);
}


/**dialog animation: https://codepen.io/geckotang/pen/KmGkL */

</style>

<docs>
```jsx
<NavigationMenu
  :collectionPages="[
    {
      href:"/blog/",
      label: 'blog',
    },
    {
      href:"/portfolio/",
      label: 'portfolio',
    },
  ]"
  :singlePages="[
    {
      href:"/cv/",
      label: 'my CV',
    },
  ]"
/>
```
</docs>
