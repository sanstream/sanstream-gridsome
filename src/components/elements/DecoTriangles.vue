<template>
  <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <path
          id="decoTriangle"
          d="M1.506 33.2211L6.57673 0.88948L34.7919 19.9698L1.506 33.2211Z"
          fill="#f424e3"
        />
    </defs>
    <use
      v-for="(triangle, index) in triangles"
      href="#decoTriangle"
      :key="index"
      :transform="`translate(${triangle.x},${triangle.y})`"
    />
  </svg>
</template>

<script>
import VueTypes from 'vue-types'

function randomFloor (min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default {
  name: 'DecoTriangles',
  props: {
    grouping: VueTypes.string.isRequired
  },

  computed: {
    triangles () {
      const ratio = [
        'yellow',
        'yellow',
        'orange',
        'orange',
        'light-grey',
        'middle-grey',
        'dark-grey',
      ]
      const raw = new Array(25).fill(0)
      return raw.map(() => {
        return {
          x: randomFloor(10, 500),
          y: randomFloor(10, 50),
        }
      })
    }
  }
}
</script>