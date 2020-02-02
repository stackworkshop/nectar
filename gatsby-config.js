module.exports = {
  siteMetadata: {
    title: `Dose`,
    description: `E-commerce client app based on Gatsby.`,
    author: `@ashsidhu`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dose`,
        short_name: `Dose`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-theme-ui`,
    {
      resolve: 'gatsby-source-graphql', // <- Configure plugin
      options: {
        typeName: 'HASURA',
        fieldName: 'hasura', // <- fieldName under which schema will be stitched
        url: process.env.HASURA_URL
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
