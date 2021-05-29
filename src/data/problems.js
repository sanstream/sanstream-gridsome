import * as d3 from 'd3'

const ProblemTypes = {
  EconomicRecession: 1,
  Extinction: 2,
  EnergyCrisis: 3,
  ClimateChange: 4,
  WorldHunger: 5,
  Epidemics: 6,
  Deforestation: 7,
  GenderInequality: 8,
  Racism: 9,
  War: 10,
}

export const problems = [
  {
    id: ProblemTypes.EconomicRecession,
    name: "Economic recession",
    expl: "The Economic recession...",
    wikiLink: "https://en.wikipedia.org/wiki/Recession",
    whatIsDone: "",
    whatCanBeDone: "Invest, invest invest!!",
    whatCanYouDo: "",
  },
  {
    id: ProblemTypes.Extinction,
    name: "Extinction",
    expl: "The Extinction...",
    wikiLink: "https://en.wikipedia.org/wiki/Extinction#Modern_extinctions",
    whatIsDone: "",
    whatCanBeDone: "",
    whatCanYouDo: "",
  },
  {
    id: ProblemTypes.EnergyCrisis,
    name: "The energy crisis",
    expl: "The energy crisis...",
    wikiLink: "https://en.wikipedia.org/wiki/Energy_crisis",
    whatIsDone: "",
    whatCanBeDone: "",
    whatCanYouDo: ""
  },
  {
    id: ProblemTypes.ClimateChange,
    name: "climate change",
    expl: "The climate change...",
    wikiLink: "https://en.wikipedia.org/wiki/Climate_change",
    whatIsDone: "",
    whatCanBeDone: "",
    whatCanYouDo: ""
  },
  {
    id: ProblemTypes.WorldHunger,
    name: "world hunger",
    expl: "The world hunger...",
    wikiLink: "https://en.wikipedia.org/wiki/Malnutrition",
    whatIsDone: "",
    whatCanBeDone: "",
    whatCanYouDo: ""
  },
  {
    id: ProblemTypes.Epidemics,
    name: "Epidemics",
    expl: "The world hunger...",
    wikiLink: "https://en.wikipedia.org/wiki/epidemics",
    whatIsDone: "",
    whatCanBeDone: "",
    whatCanYouDo: ""
  },
  {
    id: ProblemTypes.Deforestation,
    name: "deforestation",
    expl: "The world hunger...",
    wikiLink: "https://en.wikipedia.org/wiki/Deforestation",
    whatIsDone: "",
    whatCanBeDone: "",
    whatCanYouDo: ""
  },
  {
    id: ProblemTypes.GenderInequality,
    name: "Gender inequality",
    expl: "The world hunger...",
    wikiLink: "https://en.wikipedia.org/wiki/Gender_inequality",
    whatIsDone: "",
    whatCanBeDone: "",
    whatCanYouDo: ""
  },
  {
    id: ProblemTypes.Racism,
    name: "racism",
    expl: "The world hunger...",
    wikiLink: "https://en.wikipedia.org/wiki/racism",
    whatIsDone: "",
    whatCanBeDone: "",
    whatCanYouDo: ""
  },
  {
    id: ProblemTypes.War,
    name: "war",
    expl: "War is one of our oldest problems",
    wikiLink: "https://en.wikipedia.org/wiki/war",
    whatIsDone: "",
    whatCanBeDone: "",
    whatCanYouDo: "",
  }
]

const getRandomProblemType = d3.randomInt(1, 10)
/**
 * Generating random data for dev purposes
 */
export const connections = Array.from(Array(45)).map((_, index) => {
  const target = getRandomProblemType()
  const source = getRandomProblemType()
  return {
    id: `${index}-${target}-${source}`,
    name: `${index}-${target}-${source}`,
    expl: "Imagine if we had just one type of rice, which would mean that..",
    target,
    source,
  }
})
