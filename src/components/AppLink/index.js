import React from 'react';
import PropTypes from 'prop-types';

// Dynamically creating a link automatically copies over
// any utm tags sent from ad networks

class AppLink extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    channel: PropTypes.string,
    campaign: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    feature: PropTypes.string,
    stage: PropTypes.string,
  };

  static defaultProps = {
    channel: 'Web',
    campaign: 'App',
    tags: null,
    feature: null,
    stage: null,
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
    const linkOptions = [
      'channel',
      'campaign',
      'tags',
      'feature',
      'stage',
    ].reduce((acc, key) => {
      const value = this.props[key];
      if (value) {
        acc[key] = value;
      }
      return acc;
    }, {});

    const path =
      this.context && this.context.location && this.context.location.pathname;

    window.branch.link(
      {
        ...linkOptions,
        data: {
          $desktop_url: 'http://www.hedvig.com/download',
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
