import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import AppLink from 'src/components/AppLink';
import { ReactComponent as Logo } from 'assets/identity/hedvig-wordmark-solid.svg';

import './Header.css';

class Header extends React.Component {
  state = {
    popoverIsActive: false,
  };

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
    // Prevent documentOnClickHandler immediately hiding the popover
    event.stopPropagation();

    const popoverIsActive = !this.state.popoverIsActive;
    if (popoverIsActive) {
      this.show();
    } else {
      this.dismiss();
    }
    this.setState({ popoverIsActive });
  };

  show() {
    this.setState({ popoverIsActive: true });
    document.addEventListener('click', this.documentOnClickHandler, false);
  }

  dismiss() {
    this.setState({ popoverIsActive: false });
    document.removeEventListener('click', this.documentOnClickHandler, false);
  }

  render() {
    const { isInverted } = this.props;
    const { popoverIsActive } = this.state;

    const mobileLogoClassNames = classNames({
      'Header-logo__inner': true,
      'u-md-hidden': true,
      'u-lg-hidden': true,
      'u-fillPrimaryDarkBlue': !isInverted,
      'u-fillWhite': isInverted && !popoverIsActive,
    });

    const desktopLogoClassNames = classNames({
      'Header-logo__inner': true,
      'u-hidden': true,
      'u-md-block': true,
      'u-lg-block': true,
      'u-fillPrimaryDarkBlue': !isInverted,
      'u-fillWhite': isInverted,
    });

    const burgerClassNames = classNames({
      'Header-burger': true,
      'u-md-hidden': true,
      'u-lg-hidden': true,
      'is-inverted': isInverted && !popoverIsActive,
      'is-active': popoverIsActive,
    });

    const popoverClassNames = classNames({
      'Header-popover': true,
      'u-md-hidden': true,
      'u-lg-hidden': true,
      'is-active': popoverIsActive,
    });

    const links = [
      {
        path: '/about-us',
        label: 'Om Hedvig',
      },
      {
        path: '/faq',
        label: 'Vanliga frågor',
      },
      {
        path: '/giving-back',
        label: 'Hur vi ger tillbaka',
      },
    ];

    const menuLinkClassNames = classNames({
      'Header-menu-link': true,
      'u-linkBlock': true,
      'u-colorWhite': isInverted,
    });

    return (
      <header className="Header" style={{ zIndex: 2 }}>
        <div className="Container">
          <div className="u-flex">
            <div className="u-flexGrow1">
              <Link to="/" className="Header-logo" aria-label="Hedvig hem">
                <Logo className={mobileLogoClassNames} alt="" />
                <Logo className={desktopLogoClassNames} alt="" />
              </Link>
            </div>

            <div>
              <nav className="Header-menu u-hidden u-md-block u-lg-block">
                <div className="u-flex u-flexRow">
                  {links.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={menuLinkClassNames}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </nav>
              <button className={burgerClassNames} onClick={this.togglePopover}>
                <span className="Header-burger-line" />
                <h2 className="Header-burger-line">Meny</h2>
                <span className="Header-burger-line" />
              </button>
            </div>

            <div
              className={popoverClassNames}
              ref={(popoverElem) => {
                this.popoverElem = popoverElem;
              }}
            >
              <div>
                {links.map((link) => (
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
                  Ladda ner appen
                </AppLink>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  isInverted: PropTypes.bool,
};

Header.defaultProps = {
  isInverted: false,
};

export default Header;
