import 'normalize.css';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import 'src/css/style.css';

class TemplateWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    location: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  static childContextTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  };

  getChildContext = () => {
    const { pathname } = this.props.location;
    return {
      location: {
        pathname,
      },
    };
  };

  render() {
    const { children, data } = this.props;

    const schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url: data.site.siteMetadata.siteUrl,
        name: data.site.siteMetadata.siteName,
        description: data.site.siteMetadata.description,
      },
      {
        '@context': 'http://schema.org',
        '@type': 'Organization',
        url: data.site.siteMetadata.siteUrl,
        logo: data.site.siteMetadata.siteLogo,
        name: data.site.siteMetadata.siteName,
        description: data.site.siteMetadata.description,
        address: {
          '@type': 'PostalAddress',
          streetAddress: data.site.siteMetadata.streetAddress,
          addressLocality: data.site.siteMetadata.addressLocality,
          postalCode: data.site.siteMetadata.postalCode,
          addressCountry: data.site.siteMetadata.addressCountry,
        },
        sameAs: [
          data.site.siteMetadata.facebookProfile,
          data.site.siteMetadata.twitterProfile,
          data.site.siteMetadata.instagramProfile,
          data.site.siteMetadata.linkedInProfile,
        ],
      },
    ];

    return (
      <React.Fragment>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta
            property="og:image"
            content="https://www.hedvig.com/assets/social/og-share-default.png"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            property="og:image"
            content="https://www.hedvig.com/assets/social/og-share-stories.png"
          />
          <meta property="og:image:width" content="750" />
          <meta property="og:image:height" content="750" />
          <meta
            property="og:description"
            content={data.site.siteMetadata.description}
          />
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
          <meta property="og:type" content="website" />
          <meta
            property="og:site_name"
            content={data.site.siteMetadata.siteName}
          />
          <meta property="og:locale" content={data.site.siteMetadata.locale} />
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgJSONLD)}
          </script>
        </Helmet>
        {children()}
      </React.Fragment>
    );
  }
}

TemplateWrapper.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default TemplateWrapper;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        siteName
        siteUrl
        headline
        description
        locale
        siteLogo
        facebookProfile
        twitterProfile
        linkedInProfile
        instagramProfile
        supportEmail
        streetAddress
        addressLocality
        postalCode
        addressCountry
      }
    }
  }
`;
