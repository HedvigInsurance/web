import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import classNames from 'classnames';
import { Sticky } from 'react-sticky';

import { ReactComponent as Logo } from 'assets/identity/hedvig-wordmark-solid.svg';
import AppLink from 'src/components/AppLink';

import './Header.css';
import { CTALinkContainer } from './cta-link-container';

export const headerPropTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({ path: PropTypes.string, label: PropTypes.string }),
  ),
  ctaText: PropTypes.string.isRequired,
};

class Header extends React.Component {
  static propTypes = { data: headerPropTypes };

  static defaultProps = { data: {} };

  state = { popoverIsActive: false };

  componentWillUnmount() {
    this.dismiss();
  }

  documentOnClickHandler = (event) => {
    const { popoverIsActive } = this.state;
    const clickedOutside = !this.popoverElem.contains(event.target);

    if (popoverIsActive && clickedOutside) {
      this.dismiss();
    }
  };

  togglePopover = (event) => {
    event.stopPropagation();
    const { popoverIsActive } = this.state;
    if (!popoverIsActive) {
      this.show();
    } else {
      this.dismiss();
    }
  };

  dismiss() {
    this.setState({ popoverIsActive: false });
    document.removeEventListener('click', this.documentOnClickHandler, false);
  }

  show() {
    this.setState({ popoverIsActive: true });
    document.addEventListener('click', this.documentOnClickHandler, false);
  }

  render() {
    const {
      data: { links, ctaText },
    } = this.props;
    const { popoverIsActive } = this.state;

    const burgerClassNames = classNames({
      'Header-burger': true,
      'u-lg-hidden': true,
      'is-active': popoverIsActive,
    });

    const popoverClassNames = classNames({
      'Header-popover': true,
      'u-lg-hidden': true,
      'is-active': popoverIsActive,
    });

    return (
      <Sticky>
        {({ style }) => (
          <header className="Header" style={style}>
            <div className="u-flex">
              <div className="u-flexGrow1 Header-logo">
                <Link to="/" aria-label="Hedvig hem">
                  <Logo />
                </Link>
              </div>
              <div>
                <CTALinkContainer ctaText={ctaText}>
                  <nav className="Header-menu u-hidden u-lg-block">
                    <div className="u-flex u-flexRow">
                      {links &&
                        links.map((link) => (
                          <Link
                            key={link.path}
                            to={link.path}
                            className="Header-menu-link u-linkBlock"
                          >
                            {link.label}
                          </Link>
                        ))}
                    </div>
                  </nav>
                </CTALinkContainer>
              </div>
              <button
                type="button"
                className={burgerClassNames}
                onClick={this.togglePopover}
              >
                <span className="Header-burger-line" />
                <h2 className="Header-burger-line">Meny</h2>
                <span className="Header-burger-line" />
              </button>
              <div
                className={popoverClassNames}
                ref={(popoverElem) => {
                  this.popoverElem = popoverElem;
                }}
              >
                <div className="Popover-content">
                  <div>
                    {links &&
                      links.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className="u-spacePV11 u-linkBlock"
                        >
                          {link.label}
                        </Link>
                      ))}
                  </div>
                  <div className="u-textCenter u-spacePT10">
                    <AppLink
                      tags={['header']}
                      className="Button u-colorWhite u-backgroundPrimaryPurple"
                    >
                      {ctaText}
                    </AppLink>
                  </div>
                </div>
              </div>
            </div>
          </header>
        )}
      </Sticky>
    );
  }
}

export const headerQuery = graphql`
  fragment Header_data on DataYaml {
    links {
      path
      label
    }
    ctaText
  }
`;

export default Header;
