module.exports = {
  siteMetadata: {
    title: 'Hedvig',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
    { resolve: 'gatsby-plugin-netlify' },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-KNR4PZT',
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      },
    },
    {
      resolve: 'svgr',
      options: {
        babel: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-transformer-json',
    },
    {
      resolve: 'gatsby-plugin-offline',
    },
  ],
};
