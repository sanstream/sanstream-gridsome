<template>
  <Layout>
    <main
      v-if="$page.allSkill.edges.length && skillCategories.length"
      class="sanstream-grid-layout-full-viewport"
    > 
      <header
        class="sanstream-fluid-layout"
      >
        <h1 class="sanstream-heading">About me / CV</h1>
      </header>
      <article 
        class="sanstream-fluid-layout"
      >
        <h1 class="sanstream-heading">Introduction</h1>
        <StandardParagraph>
          My <strong>name</strong> is Sanne Peters and allthough,
          I work in Eindhoven, I life in Venray (the Netherlands, Europe),
          because I like to live in the countryside.
        </StandardParagraph>
        <StandardParagraph>
          My <strong>hobbies</strong> involve reading, philosophy, making and enjoying art,
          coding, eating fancy food (I am a full on foodie).
          Most of what I do in my spare time somehow ends up on this website.
        </StandardParagraph>
        <StandardParagraph>
          I am <strong>bilingual</strong> in Dutch and English. I speak and write both fluently,
          but my accent is a bit all over the place.
          My Dutch has a non-specific southren tone to it and the English one is a wonderful mix of Southern-English, Ausie and hints of Canadian.
          In general people have no clue where I am from (I am from the Netherlands, by the way).
        </StandardParagraph>
        <StandardParagraph>
          I have a <strong>background</strong> in Data-Science and more specifically Bio-Informatics, but I quickly
          learned that doing science was not really my jam. I realised that in my core I am more of a Builder
          than a Discoverer. From that I moved into Design and Programming and grew into the wonderful
          front-end flower I am today.
        </StandardParagraph>
        <StandardParagraph>
          I <strong>travel</strong> solely by public transportation and do not drive a car.
          The reason for that is that I have Autism which limits my ability
          to maintain overview within the timeframes needed for safe driving.
          Luckily it also brings a keen sense for detail and structure, both completely
          useless for driving though.
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
      </article>
      <article 
        class="sanstream-fluid-layout"
      >
        <h1 class="sanstream-heading">
          Skills
        </h1>
        <figure
          v-for="category in skillCategories"
          :key="category.id"
        >
          <figcaption class="sanstream-body-text">
            {{category.label}}
          </figcaption>
        </figure>
      </article>
    </main>
  </Layout>
</template>

<script>
import StandardParagraph from '../components/elements/StandardParagraph'
import StandardLink from '../components/elements/StandardLink'
import * as d3 from 'd3-hierarchy'

export default {
  metaInfo: {
    title: 'homepage',
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
            console.log(d)
            return node.node.level
          })

          const pack = d3.pack()
            .size([
              400, 400,
            ])
            .padding(3)
          pack(framedAsHierarchy)
          console.log(framedAsHierarchy.descendants())
          return {
            id: category,
            label: category,
            skills: framedAsHierarchy.descendants(),
          }
        })
      } else {
        return []
      }
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

<style>
</style>

