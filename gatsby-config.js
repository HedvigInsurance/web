module.exports = {
  siteMetadata: {
    title: 'Hedvig | Insurance. Unbroken.',
    siteName: 'Hedvig',
    siteUrl: 'https://www.hedvig.com',
    headline: 'Insurance. Unbroken.',
    description:
      'Hedvig är en ny typ av försäkring. Byggd på smart teknik, omtanke och sunt förnuft. Så att du kan få hjälp på sekunder, och ersättning på minuter.',
    socialImage: 'https://www.hedvig.com/assets/social/hedvig-social@2x.png',
    locale: 'sv_SE',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/img/`,
      },
    },
    {
      resolve: 'gatsby-transformer-sharp',
    },
    {
      resolve: 'gatsby-plugin-sharp',
    },
    {
      resolve: 'gatsby-transformer-json',
    },
    {
      resolve: 'gatsby-plugin-catch-links',
    },
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    {
      resolve: 'gatsby-plugin-netlify',
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#651eff',
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/img/favicon.png',
        injectHTML: true,
        icons: {
          android: false,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
  ],
};
