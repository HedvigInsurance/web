import React from 'react';
import Link from 'gatsby-link';

import './header.css';

class Header extends React.Component {
  state = {
    isActive: false,
  };

  togglePopover = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    const nav = (
      <div>
        <Link to="/faq" className="Header__menu__link">
          FAQ
        </Link>
        <Link to="/about-us" className="Header__menu__link">
          Om Hedvig
        </Link>
      </div>
    );
    const cta = (
      <a href="https://hedvig.app.link" id="cta-app-download" className="Header__cta">
        Ladda ner appen
      </a>
    );

    return (
      <header style={{ position: 'fixed' }} className="Header">
        <div className="Header__container">
          <div className="Header__start">
            <Link to="/" className="Header__logo">
              <img
                className="Header__logo__inner"
                src="/assets/identity/hedvig_wordmark/hedvig_wordmark_black.svg"
                alt="Hedvig"
              />
            </Link>

            <nav className="Header__menu">{nav}</nav>
          </div>

          <div className="Header__end">
            <button
              className={['Header__burger', this.state.isActive && 'isActive'].join(' ')}
              onClick={this.togglePopover}
            >
              <span className="Header__burger__line" />
              <h2 className="Header__burger__line">Meny</h2>
              <span className="Header__burger__line" />
            </button>
            <nav className="Header__menu">{cta}</nav>
          </div>

          <div className={['Header__popover', this.state.isActive && 'isActive'].join(' ')}>
            {nav}
            {cta}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
