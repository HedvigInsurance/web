import React from 'react';
import Link from 'gatsby-link';

import './Footer.css';

const Footer = () => (
  <footer className="u-backgroundPrimaryDarkBlue">
    <div className="Container u-flexRow">
      <div className="u-flexGrow1">
        <div className="u-flexAlignItemsCenter u-flexJustifyStart">
          <nav className="Grid">
            <div className="u-md-size1of2 u-lg-size1of2">
              <Link
                className="Footer__link u-linkBlock u-lg-fontSize9 u-colorWhite"
                to="/about-us"
              >
                Om hedvig
              </Link>
              <Link
                className="Footer__link u-linkBlock u-lg-fontSize9 u-colorWhite"
                to="/faq"
              >
                Vanliga frågor
              </Link>
            </div>
            <div className="u-md-size1of2 u-lg-size1of2">
              <Link
                className="Footer__link u-linkBlock u-lg-fontSize9 u-colorWhite"
                to="/contact"
              >
                Kontakt
              </Link>
              <Link
                className="Footer__link u-linkBlock u-lg-fontSize9 u-colorWhite"
                to="/legal"
              >
                Legal information
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
