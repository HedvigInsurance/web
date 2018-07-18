import React from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';
import { Sticky } from 'react-sticky';

import { ReactComponent as Logo } from 'assets/identity/hedvig-wordmark-solid.svg';
import AppLink from 'src/components/AppLink';

import './Header.css';

class Header extends React.Component {
  links = [
    {
      path: '/giving-back',
      label: 'Hur vi ger tillbaka',
    },
    {
      path: '/faq',
      label: 'Vanliga frågor',
    },
    {
      path: '/about-us',
      label: 'Om Hedvig',
    },
  ];

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
                <nav className="Header-menu u-hidden u-lg-block">
                  <div className="u-flex u-flexRow">
                    {this.links.map((link) => (
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
                <AppLink
                  tags={['header']}
                  className="Button Header-cta-button u-colorWhite u-backgroundPrimaryGreen u-md-inlineBlock u-lg-inlineBlock"
                >
                  Kom igång
                </AppLink>
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
                <div>
                  {this.links.map((link) => (
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
          </header>
        )}
      </Sticky>
    );
  }
}

export default Header;
