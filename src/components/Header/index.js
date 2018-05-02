import React from 'react';
import Link from 'gatsby-link';
import { ReactComponent as Logo } from 'assets/identity/hedvig-wordmark-solid.svg';

import './Header.css';

class Header extends React.Component {
  state = {
    isActive: false,
  };

  togglePopover = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    const nav = (
      <div className="u-flex u-flexRow">
        <Link
          to="/about-us"
          className="Header__menu__link u-linkBlock u-colorWhite u-lg-fontSize9"
        >
          Om Hedvig
        </Link>
        <Link
          to="/faq"
          className="Header__menu__link u-linkBlock u-colorWhite u-lg-fontSize9"
        >
          Vanliga frågor
        </Link>
        <Link
          to="/contact"
          className="Header__menu__link u-linkBlock u-colorWhite u-lg-fontSize9"
        >
          Kontakt
        </Link>
      </div>
    );
    const cta = (
      <a
        href="https://hedvig.app.link/kZNtW0cT9L"
        id="cta-app-download"
        className="Button Header__cta"
      >
        Ladda ner appen
      </a>
    );

    return (
      <div className="u-flex u-flexJustifyCenter">
        <header className="Header Container">
          <div className="u-flex u-flexRow">
            <div className="u-flexGrow1">
              <Link to="/" className="Header__logo">
                <Logo
                  className="Header__logo__inner u-fillWhite"
                  alt="Hedvig"
                />
              </Link>
            </div>

            <div className="">
              <nav className="Header__menu">{nav}</nav>
              <button
                className={[
                  'Header__burger',
                  this.state.isActive && 'isActive',
                ].join(' ')}
                onClick={this.togglePopover}
              >
                <span className="Header__burger__line" />
                <h2 className="Header__burger__line">Meny</h2>
                <span className="Header__burger__line" />
              </button>
            </div>

            <div
              className={[
                'Header__popover',
                this.state.isActive && 'isActive',
              ].join(' ')}
            >
              {nav}
              {cta}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
