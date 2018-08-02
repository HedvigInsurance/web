import React from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

import { utmParamsToBranchLinkOptions } from 'src/services/utm-to-branch';
import { trackEvent } from 'src/utils/track-event';

const { NODE_ENV = 'development' } = process.env;

// Dynamically creating a link automatically copies over
// any utm tags sent from ad networks

class AppLink extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    channel: PropTypes.string,
    campaign: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    keywords: PropTypes.arrayOf(PropTypes.string),
    feature: PropTypes.string,
    stage: PropTypes.string,
  };

  static contextTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  };

  static defaultProps = {
    channel: 'hedvig',
    campaign: null,
    tags: null,
    feature: 'organic',
    stage: null,
    keywords: null,
  };

  state = {
    // Fallback if link creation fails (static channel and source)
    // Branch is blocked by adblockers (e.g. uBlock)
    // https://dashboard.branch.io/quick-links/qlc/config/514349583263033320
    link: 'https://hedvig.app.link/cD3ZL59gjN',
  };

  componentDidMount() {
    if (!window.branch || typeof window.branch.link !== 'function') return;

    const utmParams = Cookies.getJSON('utm-params') || {};
    const linkOptions = utmParamsToBranchLinkOptions(utmParams, this.props);

    const path =
      this.context && this.context.location && this.context.location.pathname; // eslint-disable-line

    const host =
      NODE_ENV === 'development' ? 'localhost:8000' : 'http://www.hedvig.com';

    window.branch.link(
      {
        ...linkOptions,
        data: {
          $desktop_url: `${host}/download`,
          path,
        },
      },
      (err, link) => {
        if (link) {
          this.setState({ link });
        }
      },
    );
  }

  trackClick = () => {
    trackEvent('Click app link', {
      label: this.props.tags && this.props.tags.join(', '), // eslint-disable-line
    });
  };

  render() {
    const { children, ...props } = this.props;
    const { link } = this.state;
    return (
      <a {...props} href={link} onClick={() => this.trackClick()}>
        {children}
      </a>
    );
  }
}

export default AppLink;
