import React from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

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

  static defaultProps = {
    channel: 'Web',
    campaign: 'App',
    tags: null,
    feature: null,
    stage: null,
    keywords: null,
  };

  static contextTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  };

  state = {
    // Fallback if link creation fails (static channel and source)
    // Branch is blocked by adblockers (e.g. uBlock)
    // https://dashboard.branch.io/quick-links/qlc/config/514349583263033320
    link: 'https://hedvig.app.link/kZNtW0cT9L',
  };

  componentDidMount() {
    if (!window.branch || typeof window.branch.link !== 'function') return;

    // utm-params get set in plugins/utm-params
    // utm params are passed in from ads (fb, adwords, twitter)
    // Object structure:
    // https://github.com/segmentio/utm-params
    // {
    //   "source": "google",
    //   "medium": "medium",
    //   "term": "keyword",
    //   "content": "some content",
    //   "name": "some campaign"
    // }
    const utmParams = Cookies.getJSON('utm-params') || {};

    // Branch param to UTM param
    // https://support.branch.io/support/solutions/articles/6000127549-utm-parameters-and-the-branch-dashboard
    const mapBranchToUtmParams = {
      channel: 'source',
      feature: 'medium',
      campaign: 'name',
      tags: 'content',
      keywords: 'term',
    };

    const linkOptions = [
      'channel',
      'campaign',
      'tags',
      'feature',
      'keywords',
      'stage',
    ].reduce((acc, key) => {
      const value = this.props[key];
      const utmValue = utmParams[mapBranchToUtmParams[key]];
      // utm param values always take precedent over static values
      // This enables ad attribution in app
      const linkValue = utmValue || value;

      if (linkValue) {
        acc[key] = linkValue;
      }

      return acc;
    }, {});

    const path =
      this.context && this.context.location && this.context.location.pathname;

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

  render() {
    return (
      <a {...this.props} href={this.state.link}>
        {this.props.children}
      </a>
    );
  }
}

export default AppLink;
