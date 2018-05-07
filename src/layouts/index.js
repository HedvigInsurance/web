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
    const { children } = this.props;

    return (
      <div>
        <Helmet>
          <title>Hedvig | Insurance. Unbroken.</title>
        </Helmet>
        <div>{children()}</div>
      </div>
    );
  }
}

export default TemplateWrapper;

// ToDo fix me
export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
