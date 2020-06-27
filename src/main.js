/* eslint-disable import/extensions */
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient, }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Armata&family=Fira+Code&family=Montserrat:wght@500&display=swap',
  })
  head.link.push({
    rel: 'stylesheet',
    href: '/syntax-highlighting/prism.css',
  })
  head.script.push({
    src: '/syntax-highlighting/prism.js',
    body: true,
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
