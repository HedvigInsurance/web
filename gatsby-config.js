const {
  NODE_ENV = 'development',
  SEGMENT_JS_WRITE_KEY_PRODUCTION,
  SEGMENT_JS_WRITE_KEY_TEST,
  BRANCH_KEY_PRODUCTION,
  BRANCH_KEY_TEST,
} = process.env;

const hasEnvConfig = [
  SEGMENT_JS_WRITE_KEY_PRODUCTION,
  SEGMENT_JS_WRITE_KEY_TEST,
  BRANCH_KEY_PRODUCTION,
  BRANCH_KEY_TEST,
].every((value) => !!value);

if (!hasEnvConfig) {
  throw new Error(
    `Export API keys for Segment and Branch from:
       - https://app.segment.com/hedvig/sources
       - https://dashboard.branch.io/account-settings/app
    `,
  );
}

const siteMetadata = {
  title: 'Hedvig | Insurance. Unbroken.',
  siteName: 'Hedvig',
  siteUrl: 'https://www.hedvig.com',
  siteLogo:
    'https://www.hedvig.com/assets/identity/hedvig-wordmark-color@2x.png',
  headline: 'Insurance. Unbroken.',
  description:
    'Hedvig är en ny typ av försäkring. Byggd på smart teknik, omtanke och sunt förnuft. Så att du kan få hjälp på sekunder, och ersättning på minuter.',
  locale: 'sv_SE',
  twitterUsername: '@hedvigers',
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
      resolve: 'netlify-branch',
    },
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        babel: false,
      },
    },
    {
      resolve: 'segment',
      options: {
        writeKey:
          NODE_ENV === 'production'
            ? SEGMENT_JS_WRITE_KEY_PRODUCTION
            : SEGMENT_JS_WRITE_KEY_TEST,
      },
    },
    {
      resolve: 'branch',
      options: {
        key:
          NODE_ENV === 'production' ? BRANCH_KEY_PRODUCTION : BRANCH_KEY_TEST,
      },
    },
    {
      resolve: 'utm-cookies',
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
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
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
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
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: siteMetadata.siteUrl,
      },
    },
  ],
};
