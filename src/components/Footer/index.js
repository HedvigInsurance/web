import React from 'react';
import Link from 'gatsby-link';
import { ReactComponent as Logo } from 'assets/identity/hedvig_wordmark/hedvig_wordmark_white.svg';

import './footer.css';

const Footer = () => (
  <footer>
    <div className="Footer">
      <div className="Footer__start">
        <div className="Footer__links">
          <div className="Footer__logo">
            <a href="/">
              <Logo role="img" ariaLabel="Hedvig logo" />
            </a>
          </div>
          <nav className="">
            <Link className="Footer__link" to="/contact">
              Kontakt
            </Link>
            <Link className="Footer__link" to="/legal">
              Legal&nbsp;information
            </Link>
          </nav>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
