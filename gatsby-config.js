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
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://f3942dffb4a14ed0ab23aa38b6ae73f0@sentry.io/284598',
      },
    },
  ],
};
