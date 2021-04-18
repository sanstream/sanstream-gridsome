<template>
  <section>
    <framed-figure>
      <svg
        :height="baseHeight"
        :width="baseHeight"
        class="flower">
        <g :transform="`translate(${baseHeight/2},${baseHeight/2})`">
        <path
          v-for="(petal, index) in flower1.petals"
          :key="index"
          :d="petal.dims"
          :fill="petal.fill"
          :stroke="petal.fill"
          stroke-width="1"
        ></path>
        </g>
      </svg>
    </framed-figure>
  </section>
</template>

<script>
import FramedFigure from '../elements/FramedFigure'
import * as d3 from 'd3'

const baseHeight = 250
const padding = 10

export default {
  components: { FramedFigure },
  name: 'Flowers',

  data () {
    return {
      baseHeight,
    }
  },

  computed: {
    flower1 () {
      const nPetals = 13
      const calculateColour = d3.scaleLinear()
        .domain([1, nPetals])
        .range(['#d6d500', '#d66800']);
      const fullCircle = 2 * Math.PI
      const arc = d3.arc()
        .innerRadius(0)
        .outerRadius((0.5 * baseHeight))
      return {
        petals: Array.from(Array(nPetals)).map((_, index) => {
          const dims = arc({
            startAngle: (index / nPetals) * fullCircle,
            endAngle: ((index + 1) / nPetals) * fullCircle,
          })
          console.log(dims);
          return {
            dims,
            fill: calculateColour(index + 1),
          };
        }),
      }
    }
  }
}
</script>

<style>
.flower {
  margin: 1em auto;
}
</style>