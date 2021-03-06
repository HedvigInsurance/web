import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Sticky } from 'react-sticky';

import { ReactComponent as Logo } from 'assets/identity/hedvig-wordmark-solid.svg';
import AppLink from 'src/components/AppLink';

import './Header.css';
import { CTALinkContainer } from './cta-link-container';

const propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({ path: PropTypes.string, label: PropTypes.string }),
  ),
  ctaTextDesktop: PropTypes.string.isRequired,
  ctaTextMobile: PropTypes.string.isRequired,
  logoLink: PropTypes.shape({
    path: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
  }).isRequired,
};

export const headerPropTypes = {
  se: PropTypes.shape(propTypes),
  en: PropTypes.shape(propTypes),
};

class Header extends React.Component {
  static propTypes = {
    data: PropTypes.shape(headerPropTypes),
    langKey: PropTypes.string.isRequired,
  };

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
    const { data, langKey } = this.props;

    const dataForLanguage = data[langKey || 'se'];

    if (!dataForLanguage) return null;

    const { links, ctaTextDesktop, ctaTextMobile, logoLink } = dataForLanguage;
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
                <a href={logoLink.path} aria-label={logoLink.altText}>
                  <Logo />
                </a>
              </div>
              <div>
                <CTALinkContainer ctaText={ctaTextDesktop}>
                  <nav className="Header-menu u-hidden u-lg-block">
                    <div className="u-flex u-flexRow">
                      {links &&
                        links.map((link) => (
                          <a
                            key={link.path}
                            href={link.path}
                            className="Header-menu-link u-linkBlock"
                          >
                            {link.label}
                          </a>
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
                        <a
                          key={link.path}
                          href={link.path}
                          className="u-spacePV11 u-linkBlock"
                        >
                          {link.label}
                        </a>
                      ))}
                  </div>
                  <div className="u-textCenter u-spacePT10">
                    <AppLink
                      tags={['header']}
                      className="Button u-colorWhite u-backgroundPrimaryPurple"
                    >
                      {ctaTextMobile}
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
    se {
      links {
        path
        label
      }
      ctaTextDesktop
      ctaTextMobile
      logoLink {
        path
        altText
      }
    }

    en {
      links {
        path
        label
      }
      ctaTextDesktop
      ctaTextMobile
      logoLink {
        path
        altText
      }
    }
  }
`;

export default Header;
