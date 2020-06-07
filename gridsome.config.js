// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Studio Sanstream',
  titleTemplate: '%s — Studio Sanstream',
  plugins: [
    {
      use: 'gridsome-source-sanity',
      options: {
        projectId: 'he47alh5',
        dataset: 'production',
        // Token is only required if dataset is private
        // or `overlayDrafts` is set to true
        token: 'sk1FRzimfBFiL6PeKN33ezXwj5ekgRXBMNv2MMHDRop5jVtOQp6tCp46mnPS9xpv7XRnwziEEFDXBeR8sbGgVw3x4lqbp9piMSlJ8dMcRRpewEbcw3iWCknAr59nTRtEitX4SfCNzN239rUeNr7AGARupJP0BX6ZpJr37rWEOxK2oT1dLgEO',
        overlayDrafts: false,
        watchMode: false,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
  ],
}
