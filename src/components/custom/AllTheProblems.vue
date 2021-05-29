<template>
  <svg :viewBox="`0 0 ${edgeSize} ${edgeSize}`">
    <g :transform="`translate(${edgeSize/2},${edgeSize/2})`">
      <template v-for="(circleSegment, index) of shapes.problemCircleSegments">
        <path
          :key="circleSegment.data.id"
          :d="circleSegment.pathDims"
          fill="red"
        >
          <title>{{circleSegment.data.name}}</title>
        </path>
      </template>
    </g>
  </svg>
</template>

<script>
import { problems, connections} from '../../data/problems'
import * as d3 from 'd3'
const arcGenerator = d3.arc()
const fullCircleInRadians = 2 * Math.PI
const spacingInRadians = 0.002 * fullCircleInRadians
const edgeSize = 200
const outerRadius = edgeSize / 2
const segmentThickness = 0.09 // percentage of total outerRadius
export default {
  name: 'AllTheProblems',

  data () {
    return {
      problems,
      connections,
      edgeSize,
    }
  },

  computed: {
    shapes () {
      // for the problem slices: https://github.com/d3/d3-shape/blob/v2.1.0/README.md#areaRadial
      // to calculate the start and end points: https://github.com/d3/d3-shape/blob/v2.1.0/README.md#lineRadial
      // for curvature: https://github.com/d3/d3-shape/blob/v2.1.0/README.md#curveBundle
      const offsetInRadians = spacingInRadians / 2
      const problemCircleSegments = this.problems.map((problem, index) => {
        const startAngle = offsetInRadians + ((index / this.problems.length) * fullCircleInRadians) + spacingInRadians
        const endAngle = offsetInRadians + (( (index + 1) / this.problems.length) * fullCircleInRadians) - spacingInRadians
        const pathDims = arcGenerator({
          startAngle,
          endAngle,
          outerRadius,
          innerRadius: outerRadius * (1 - segmentThickness),
        })

        return {
          data: problem,
          pathDims,
        }
      })
      return {
        problemCircleSegments,
      }
    }
  }
}
</script>