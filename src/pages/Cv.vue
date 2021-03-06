<template>
  <Layout>
    <main
      v-if="$page && $page.allSkill.edges.length && skillCategories.length"
      class="sanstream-grid-layout-full-viewport"
    >
      <header
        class="sanstream-fluid-layout"
      >
        <h1 class="sanstream-heading hide-on-print">About me / CV</h1>
      </header>
      <section
        class="sanstream-fluid-layout"
      >
        <h1 class="sanstream-heading hide-on-print">Introduction</h1>
        <h1 class="sanstream-heading hide-on-screen">Curriculum Vitea</h1>
        <StandardParagraph>
          My <strong>name</strong> is Sanne Peters and, although
          I work in Eindhoven, I live in Venray (the Netherlands, Europe),
          because I like to live in the countryside.
        </StandardParagraph>
        <StandardParagraph>
          My <strong>hobbies</strong> involve reading, philosophy, making and enjoying art,
          coding, eating fancy food (I am a full on foodie) and scuplting trees until they become bonsai.
          Most of what I do in my spare time ends up on
            <span class="hide-on-screen">my website: <strong>sanstream.nl</strong></span> 
            <span class="hide-on-print">this website</span>.
        </StandardParagraph>
        <StandardParagraph>
          I am <strong>bilingual</strong> in Dutch and English and speak both since childhood.
          I speak and write both really well and as a result my accent is a bit all over the place.
          My Dutch has a non-specific southern tone to it and the English one is a
          wonderful mix of Southern-English, Ausie and hints of Canadian.
          In general people have no clue where I am from (I am from the Netherlands, by the way).
        </StandardParagraph>
        <StandardParagraph>
          I have a <strong>background</strong> in Data-Science and more specifically Bio-Informatics
          (graduated in 2008, from the HAN unversity in Nijmegen).
          I quickly learned that doing science did not work for me. I figured out that in my core I am more of a Builder
          than a Discoverer. So I moved into Design and Programming (front-end development) and grew into the wonderful
          <em>front-end flower</em> I am today.
        </StandardParagraph>
        <StandardParagraph>
          I cannot drive a car. I only <strong>travel</strong> by public transportation and bicycle.
          This gives me plenty of time for reading and sketching.
        </StandardParagraph>

        <StandardParagraph>
          Besides all that, I am also active online on
          <StandardLink
            rel="me"
            href="https://github.com/sanstream"
          >
          Github
          </StandardLink> and
          <StandardLink
            rel="me"
            href="https://twitter.com/sanstreamed"
          >
          Twitter
          </StandardLink>.
        </StandardParagraph>
      </section>
      <section 
        class="sanstream-fluid-layout"
      >
        <h1 class="sanstream-heading">
          Skills
        </h1>

        <StandardParagraph>
          Instead of just summarising my skills and expertises I visualised them using circles.
          so they can be scanned and reviewed quickly. Each circle size and color represents the following skill-levels:
        </StandardParagraph>

        <ul class="sanstream-no-list-styles">
          <li
            v-for="legend in skillsLegend"
            :key="legend.value"
            class="sanstream-body-text"
          >
          <svg class="legend-colour-icon"
            height="16"
            width="16"
            viewBox="0 0 16 16"
          >
            <circle
              r="8"
              cy="8"
              cx="8"
              :fill="getSkillColour(legend.value)"
            >
              <title>{{legend.value}}</title>
            </circle>
          </svg> = {{legend.label}}
          </li>
        </ul>

        <figure
          class="skill-bubbles"
          v-for="category in skillCategories"
          :key="category.id"
        >
          <figcaption>
            <h3 class="sanstream-heading">{{category.label}}</h3>
            <StandardParagraph v-if="category.explanation">
              {{category.explanation}}
            </StandardParagraph>
          </figcaption>
          <svg
            :viewBox="`0 0
            ${skillsBox.width}
            ${skillsBox.height}`"
          >
            <circle
              class="main-circle"
              :r="skillsBox.width / 2"
              :cy="skillsBox.width / 2"
              :cx="skillsBox.width / 2"
            />
            <g
              v-for="skill in category.skills.children"
              :key="skill.data.node.id"
            >
              <circle
                :r="skill.r"
                :cy="skill.y"
                :cx="skill.x"
                :data-skill-level="skill.data.node.level"
                stroke-width="2"
                :stroke="getSkillColour(skill.data.node.level)"
              >
                <title>{{skill.data.node.label}}: {{skill.data.node.level}}</title>
              </circle>
              <text
                text-anchor="middle"
                :y="skill.y - ((skill.data.node.label.split(' ').length / 2) * (skill.data.node.level * 5))"
                :x="skill.x"
                dy="0"
                class="sanstream-special-text"
              >
                <!-- v-if="skill.data.node.level > 2" -->
                <title>{{skill.data.node.label}}: {{skill.data.node.level}}</title>
                <tspan
                  v-for="(part, index) in skill.data.node.label.split(' ')"
                  :key="index"
                  :font-size="(skill.data.node.level * 3.2)"
                  dy="1.3em"
                  :x="skill.x"
                >
                  {{part}}
                </tspan>
              </text>
            </g>
          </svg>
        </figure>

        <StandardParagraph class="hide-on-screen">
          Please visit my website: <strong>www.sanstream.nl/cv</strong> to get a more interactive version of this CV.
        </StandardParagraph>
      </section>
    </main>
  </Layout>
</template>

<script>
import { StandardParagraph, StandardLink } from 'sanstream-design-system'
import * as d3 from 'd3'

export default {
  metaInfo: {
    title: 'CV',
  },

  data () {
    return {
      skillsBox: {
        width: 500,
        height: 500,
      },
      skillsLegend: [
        { 
          value: 1,
          label: "Familiar with it, but it has been a while.",
        },
        {
          value: 2,
          label: "Have worked with it, in the past.",
        },
        {
          value: 3,
          label: "Fairly experienced in it.",
        },
        {
          value: 4,
          label: "Good at it.",
        },
        {
          value: 5,
          label: "Excellent at it.",
        },
      ],
      scale: d3.scalePow()
        .exponent(2)
        .domain([1, 5])
        .range([0.5, 6]),
      skillCategoriesMeta: {
        'frontend tech': {
          label: 'Frontend technologies and programming',
          explanation:`
            Frontend technologies refer the technologies and techniques for building websites.
            The frontend is comprised out of three basic technologies, the mark-up (HTML5 and/or SVG), layout + styling (CSS) and logic (JavaScript).
            All other frontend technologies are built upon these.
            `,
        },
        'Process': {
          label: 'Work processes and management',
          explanation:`
          As a team lead I am about 20% of my time busy with organising tasks and structuring work processes
          for my team.
          Most of them focus either on common ways of working, writing effective documentation and mentoring.
          At the basis of all of these I believe everything is about clear communication.
          Due to the technical nature of my work a lot of these skills are technical too.
          `,
        },
        'Design methods': {
          label: 'Design concepts and methods',
          explanation:`
          Even though most of my work is in programming, I often do some work in the design stage of creating applications and tools.
          In this I specialise in information design (displaying information in the most effective way), which directly relates to data visualisation.
          `,
        }
      }
    }
  },

  computed: {
    skillCategories () {
      if (this.$page.allSkill && this.$page.allSkill.edges.length) {
        const allCategoriesFromAllSkills = [].concat(...this.$page.allSkill.edges
          .map(item => item.node.categories))

        return [...new Set(allCategoriesFromAllSkills)].map(category => {
          const skillData = this.$page.allSkill.edges
          .filter(item => item.node.categories.find(text => text === category))

          const framedAsHierarchy = d3.hierarchy({
            name: 'root',
            children: skillData.map(d => {
              return {
                ...d,
                size: d.node.level,
              }
            }),
          }, node => {
            if (node.children) {
              return node.children
            } else return null
          })
          .sum(d => {
            return (d.node) ? this.scale(d.node.level) : null
          })

          const pack = d3.pack()
            .size([
              this.skillsBox.width, this.skillsBox.height,
            ])
            .padding(20)
          pack(framedAsHierarchy)
          return {
            id: category,
            label: this.skillCategoriesMeta[category] ? this.skillCategoriesMeta[category].label : null,
            explanation: this.skillCategoriesMeta[category] ? this.skillCategoriesMeta[category].explanation : null,
            skills: framedAsHierarchy,
          }
        })
      } else {
        return []
      }
    },

    getSkillColour () {
      return d3.scaleLinear()
      .domain([1,5])
      .range(['#FE9800', '#99c511'])
      .interpolate(d3.interpolateHcl)
    },
  },

  components: {
    StandardParagraph,
    StandardLink,
  },
}
</script>

<page-query>
query {
  allSkill {
    edges {
      node {
        id,
        label,
        level,
        lastUsed,
        categories,
      }
    }
  }
}
</page-query>

<style scoped>
section svg {
  display: inline-block;
  overflow: visible;
  vertical-align: middle;
}

section figure {
  margin: 1em 0;
  display: inline-block;
}


section figure svg {
  margin: 2em auto;
  display: block;
  width: 500px;
  max-width: 100%;
}

section svg .main-circle {
  fill: var(--light-grey-fill);
  stroke: var(--middle-grey-fill);
  stroke-width: 2;
  opacity: 0.7;
}

section svg g circle {
  fill: var(--lightest-colour);
}

@media print {
  section:nth-of-type(2) {
    break-before: page;
  }
}
</style>
