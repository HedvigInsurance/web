const siteMetadata = {
  title: 'Hedvig | Insurance. Unbroken.',
  siteName: 'Hedvig',
  siteUrl: 'https://www.hedvig.com',
  siteLogo:
    'https://www.hedvig.com/assets/identity/hedvig-wordmark-color@2x.png',
  headline: 'Insurance. Unbroken.',
  description:
    'Hedvig är en ny typ av försäkring. Byggd på smart teknik, omtanke och sunt förnuft. Så att du kan få hjälp på sekunder, och ersättning på minuter.',
  socialImage: 'https://www.hedvig.com/assets/social/hedvig-social@2x.png',
  locale: 'sv_SE',
  facebookProfile: 'https://www.facebook.com/hedvigers/',
  twitterProfile: 'https://twitter.com/hedvigers',
  linkedInProfile: 'https://www.linkedin.com/company/hedvig/',
  instagramProfile: 'https://www.instagram.com/hedvigers/',
  supportEmail: 'help@hedvig.com',
  pressEmail: 'press@hedvig.com',
  contactEmail: 'hedvig@hedvig.com',
  jobsEmail: 'careers@hedvig.com',
  streetAddress: 'Artillerigatan 10',
  addressLocality: 'Stockholm',
  postalCode: '11451',
  addressCountry: 'SE',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.hedvig.app',
  itunesStoreUrl: 'https://itunes.apple.com/se/app/hedvig/id1303668531?mt=8',
};

module.exports = {
  siteMetadata,
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteMetadata.siteName,
        short_name: siteMetadata.siteName,
        start_url: '/',
        background_color: '#fff',
        theme_color: '#651eff',
        icon: 'src/img/favicon.png',
        related_applications: [
          {
            platform: 'play',
            url: siteMetadata.playStoreUrl,
            id: 'com.hedvig.app',
          },
          {
            platform: 'itunes',
            url: siteMetadata.itunesStoreUrl,
          },
        ],
      },
    },
  ],
};
