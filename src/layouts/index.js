import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'normalize.css';
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

    return (
      <React.Fragment>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta
            property="og:image"
            content={data.site.siteMetadata.socialImage}
          />
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
        socialImage
        locale
      }
    }
  }
`;
