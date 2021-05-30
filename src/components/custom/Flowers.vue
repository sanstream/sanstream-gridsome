<template>
  <section>
   <framed-figure
    caption="I started of by rotating a basic oblong shape for the petals..."
   >
      <svg
        :height="baseHeight"
        :width="baseHeight"
        class="flower">
        <g :transform="`translate(${baseHeight/2},${baseHeight/2})`">
        <path
          v-for="(petal, index) in flower1.petals"
          style="filter: url(#shadow);"
          :key="index"
          :d="petal.dims"
          :fill="petal.fill"
          :stroke="petal.fill"
          stroke-width="1"
          :transform="`rotate(${petal.rotation} 0 0)`"
        ></path>
        </g>
      </svg>
    </framed-figure>

    <framed-figure
      caption="Played arround with the shapes themselves and colour ranges..."
    >
      <svg
        :height="baseHeight"
        :width="baseHeight"
        class="flower">
        <g :transform="`translate(${baseHeight/2},${baseHeight/2})`">
        <path
          v-for="(petal, index) in flower2.petals"
          style="filter: url(#shadow);"
          :key="index"
          :d="petal.dims"
          :fill="petal.fill"
          :stroke="petal.fill"
          stroke-width="1"
          :transform="`rotate(${petal.rotation} 0 0)`"
        ></path>
        </g>
      </svg>
    </framed-figure>
     <framed-figure
      caption="And took it up a notch by generating a couple of circles of petals"
     >
      <svg
        :height="baseHeight"
        :width="baseHeight"
        class="flower">
        <defs>
          <filter id="shadow">
            <feDropShadow dx="0.5" dy="0.6" stdDeviation="0.8" floodColor="black"/>
          </filter>
        </defs>
        <g :transform="`translate(${baseHeight/2},${baseHeight/2})`">
        <path
          style="filter: url(#shadow);"
          v-for="(petal, index) in flower3.petals"
          :key="index"
          :d="petal.dims"
          :fill="petal.fill"
          :stroke="petal.fill"
          stroke-width="1"
          :transform="`rotate(${petal.rotation} 0 0)`"
        ></path>
        </g>
      </svg>
    </framed-figure>
    <framed-figure
      caption="And took it up a notch by generating a couple of circles of petals"
     >
      <svg
        :height="baseHeight"
        :width="baseHeight"
        class="flower">
        <defs>
          <filter id="shadow">
            <feDropShadow dx="0.5" dy="0.6" stdDeviation="0.8" floodColor="black"/>
          </filter>
        </defs>
        <g :transform="`translate(${baseHeight/2},${baseHeight/2})`">
        <path
          style="filter: url(#shadow);"
          v-for="(petal, index) in flower4.petals"
          :key="index"
          :d="petal.dims"
          :fill="petal.fill"
          :stroke="petal.fill"
          stroke-width="1"
          :transform="`rotate(${petal.rotation} 0 0)`"
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
const fullCircle = 2 * Math.PI
const goldenRatio = 1/1.618

function generatePositions ({
  petalLength,
  bottomWidth,
  topWidth,
  relativeTopOffset,
  relativeBottomOffset,
}) {
  petalLength = petalLength || baseHeight / 2
  bottomWidth = bottomWidth || 20
  topWidth = topWidth || 20
  relativeTopOffset = relativeTopOffset || 0.4
  relativeBottomOffset = relativeBottomOffset || 0.1
  return [
    [0, 0],
    [-(bottomWidth / 2), petalLength * relativeBottomOffset],
    [-(topWidth / 2), petalLength * (1 - relativeTopOffset)],
    [0, petalLength],
    [(topWidth / 2), petalLength * (1 - relativeTopOffset)],
    [(bottomWidth / 2), petalLength * relativeBottomOffset],
  ].map(pos => ({
    x: pos[0],
    y: pos[1],
  }))
}

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
      const generateClosedLine = d3.line()
        .x((d) => d.x)
        .y((d) => d.y)
        .curve(d3.curveCatmullRomClosed);
      const calculateColour = d3.scaleLinear()
        .domain([1, nPetals])
        .range(['#d6d500', '#d66800',]);
      return {
        petals: Array.from(Array(nPetals)).map((_, index) => {
          const rotation = Math.round(((index) / nPetals) * 360)
          // [0, 20, 30, 40, 50, ]
          const positions = [
            [-20, -10],
            [-40, -30],
            [-34, -40],
            [-30, -60],
            [0, -80],
            [0, 0],
          ].map(pos => ({
            x: pos[0],
            y: pos[1],
          }))
          const dims = generateClosedLine(positions)

          return {
            dims,
            fill: calculateColour(index + 1),
            rotation,
          };
        }),
      }
    },

    flower2 () {
      const nPetals = 13
      const generateClosedLine = d3.line()
        .x((d) => d.x)
        .y((d) => d.y)
        .curve(d3.curveCatmullRomClosed);
      const calculateColour = d3.scaleLinear()
        .domain([1, nPetals])
        .range(['#4d02d3', '#d66800',]);
      return {
        petals: Array.from(Array(nPetals)).map((_, index) => {
          const rotation = Math.round(((index) / nPetals) * 360)
          // [0, 20, 30, 40, 50, ]
          const positions = [
            [-10, -10],
            [-20, -30],
            [-25, -40],
            [-21, -60],
            [-10, -80],
            [0, 0],
          ].map(pos => ({
            x: pos[0],
            y: pos[1],
          }))
          const dims = generateClosedLine(positions)

          return {
            dims,
            fill: calculateColour(index + 1),
            rotation,
          };
        }),
      }
    },

    flower3 () {
      const nPetals = 13
      const maxPetalLength = baseHeight / 2
      const generateClosedLine = d3.line()
        .x((d) => d.x)
        .y((d) => d.y)
        .curve(d3.curveCatmullRomClosed);
      const calculateColour = d3.scaleLinear()
        .domain([0, 1])
        .range(['#4d02d3', '#d66800',]);

      const circlesOfPetals = [
          1,
          0.7,
          0.5,
          0.2,
        ].map(size => Array.from(Array(nPetals)).map((_, index) => {
          const rotation = Math.round(((index) / nPetals) * 360)
          const positions = generatePositions({
            petalLength: maxPetalLength * size,
            bottomWidth: 30 *size,
            topWidth: 30 * size,
            relativeTopOffset: 0.2,
            relativeBottomOffset: 0.3,
          })
          const dims = generateClosedLine(positions)

          return {
            dims,
            fill: calculateColour(size),
            rotation,
          };
        }))
      console.log(circlesOfPetals)
      const petals = [].concat(...circlesOfPetals)

      return {
        petals,
      }
    },


    flower4 () {
      const nPetals = 15
      const maxPetalLength = baseHeight / 2
      const generateClosedLine = d3.line()
        .x((d) => d.x)
        .y((d) => d.y)
        .curve(d3.curveCatmullRomClosed);
      const calculateColour = d3.scaleLinear()
        .domain([0, 1])
        .range(['#4d02d3', '#d66800',]);

      const circlesOfPetals = [
          1,
          // 0.7,
          0.5,
          // 0.2,
        ].map(size => {
          let petalCount = 0
          return Array.from(Array(nPetals)).map((_, index) => {
          const rotation = Math.round(petalCount * goldenRatio * 360)
          const positions = generatePositions({
            petalLength: maxPetalLength * size,
            bottomWidth: 30 *size,
            topWidth: 30 * size,
            relativeTopOffset: 0.2,
            relativeBottomOffset: 0.3,
          })
          const dims = generateClosedLine(positions)
          petalCount++
          return {
            dims,
            fill: calculateColour(size),
            rotation,
          }
        })
      })
      console.log(circlesOfPetals)
      const petals = [].concat(...circlesOfPetals)

      return {
        petals,
      }
    },
  }
}
</script>

<style>
.flower {
  margin: 1em auto;
  overflow: visible;
}

figure .content {
  /* soft plant-like bg colour: */
  background-color: #bac5b5;
}
</style>