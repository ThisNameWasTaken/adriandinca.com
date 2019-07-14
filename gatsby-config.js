module.exports = {
  siteMetadata: {
    title: `Adrian Dinca`,
    description: `A website for those looking for maintaining, updatinig, optimising or creating a website. Available services include progressive web app conversion, SEO (search engine optimisation), website auditing and more.`,
    author: `@ThisNameWasTaken`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      // options: {
      //   rule: {
      //     include: /inline/,
      //   },
      // },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['node_modules'],
        postCssPlugins: [
          require('cssnano')({
            preset: [
              'advanced',
              {
                autoprefixer: false,
                zindex: false,
                reduceIdents: false,
                discardComments: {
                  removeAll: true,
                },
              },
            ],
          }),
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
