// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.configureWebpack({
    // add config here
    watchOptions: {
      ignored: 'node_modules/**/*',
    },
  })
  api.loadSource(async (actions) => {
    const rawSkills = require('./src/data/skills.json');

    const Skills = actions.addCollection({
      typeName: 'Skill'
    })

    
    for (const skill of rawSkills) {
      Skills.addNode({
        ...skill,
        id: skill.label,
      });
    }
  })

  api.createPages(({ createPage, }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    createPage({
      path: '/blog/',
      component: './src/templates/allSanityPost.vue',
    })
  })
}
