<template>
  <svg
  :viewBox="`0 0 ${diagramSize} ${diagramSize}`"
  :aria-activedescendant="(!!selectedCircleSegment).toString()"
  @click="toggleSelection($event,null)"
  >
    <g :transform="`translate(${diagramSize/2},${diagramSize/2})`">
      <template v-for="(circleSegment) of shapes.problemCircleSegments">
        <path
          :key="circleSegment.data.id"
          :d="circleSegment.pathDims"
          class="problem-circle-segment"
          :aria-selected="(selectedCircleSegment === circleSegment.data.id).toString()"
          @click="toggleSelection($event, circleSegment.data.id)"
        >
          <title>{{circleSegment.data.name}}</title>
        </path>
      </template>
      <template v-for="(connection) of shapes.connectionLines">
        <path
          :key="connection.data.id"
          :d="connection.pathDims"
          class="problem-connection"
          :data-is-outgoing="(selectedCircleSegment === connection.data.source).toString()"
          :data-is-incoming="(selectedCircleSegment === connection.data.target).toString()"
        >
          <title>{{connection.data.name}}</title>
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
const diagramSize = 400
const outerRadius = diagramSize / 2
const segmentThickness = 0.09 // percentage of total outerRadius
const innerRadius = outerRadius * (1 - segmentThickness)
const connectorLineGenerator = d3.lineRadial()
  .curve(d3.curveBundle.beta(0.85))
  .angle(d => d)
  .radius((_, index) => (([0, 3].includes(index)) ? 0.99 : 0.8) * innerRadius)

export default {
  name: 'AllTheProblems',

  data () {
    const idToProblemIndex = {}
    problems.forEach((problem, index) => {
      idToProblemIndex[problem.id] = index
    })
    return {
      problems,
      idToProblemIndex,
      connections,
      diagramSize,
      selectedCircleSegment: null,
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
          innerRadius,
        })

        return {
          data: problem,
          pathDims,
        }
      })

      const connectionLines = this.connections.map(connection => {
        const targetIndex = this.idToProblemIndex[connection.target]
        const targetAngle = offsetInRadians + (((targetIndex + 0.5) / this.problems.length) * fullCircleInRadians) + spacingInRadians

        const sourceIndex = this.idToProblemIndex[connection.source]
        const sourceAngle = offsetInRadians + (((sourceIndex + 0.5) / this.problems.length) * fullCircleInRadians) + spacingInRadians

        console.log([sourceAngle, targetAngle])
        return {
          pathDims: connectorLineGenerator([sourceAngle, sourceAngle, targetAngle, targetAngle]),
          data: connection,
        }
      })

      return {
        problemCircleSegments,
        connectionLines,
      }
    }
  },

  methods: {
    toggleSelection (event, id) {
      event.stopPropagation()
      if (id === this.selectedCircleSegment) {
        this.selectedCircleSegment = null
      } else {
        this.selectedCircleSegment = id
      }
    },
  },
}
</script>

<style scoped lang="scss">

path.problem-circle-segment {
 fill: var(--colour-middle-grey-fill);
 cursor: pointer;
 transition: opacity 0.1s;
}


path.problem-connection {
 stroke: var(--colour-middle-grey-fill);
 stroke-width: 2px;
 fill: none;
 cursor: pointer;
 transition: opacity 0.1s;
}

svg[aria-activedescendant="true"] {
  .problem-circle-segment[aria-selected="false"] {
    opacity: 0.3;
  }

  .problem-connection {
    opacity: 0.3;
  }

  path.problem-circle-segment[aria-selected="true"] {
    fill: var(--colour-range-red);
    opacity: 1;
  }

  .problem-connection[data-is-incoming="true"] {
    stroke: var(--colour-range-green);
    opacity: 1;
  }


  .problem-connection[data-is-outgoing="true"] {
    stroke: var(--colour-range-red);
    opacity: 1;
  }
}
</style>