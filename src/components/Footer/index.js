import React from 'react';
import Link from 'gatsby-link';

import './Footer.css';

const Footer = () => (
  <footer className="u-backgroundPrimaryDarkBlue">
    <div className="Container">
      <div className="u-md-flex u-lg-flex u-flexRow u-spaceMT5 u-spaceMB7">
        <div className="u-flexGrow1">
          <nav className="Grid">
            <div
              style={{ maxWidth: 250 }}
              className="u-md-size1of2 u-lg-size1of2"
            >
              <Link
                className="u-spaceMB9 u-linkBlock u-lg-fontSize9 u-colorWhite"
                to="/about-us"
              >
                Om oss
              </Link>
              <Link
                className="u-spaceMB9 u-linkBlock u-lg-fontSize9 u-colorWhite"
                to="/faq"
              >
                Vanliga frågor
              </Link>
              <Link
                className="u-spaceMB9 u-linkBlock u-lg-fontSize9 u-colorWhite"
                to="/legal"
              >
                Legal information
              </Link>
            </div>
            <div
              style={{ maxWidth: 250 }}
              className="u-md-size1of2 u-lg-size1of2"
            >
              <Link
                className="u-spaceMB9 u-linkBlock u-lg-fontSize9 u-colorWhite"
                to="/contact"
              >
                Kontakt
              </Link>
              <Link
                className="u-spaceMB9 u-linkBlock u-lg-fontSize9 u-colorWhite"
                to="/press"
              >
                Press
              </Link>
            </div>
          </nav>
        </div>
        <div className="u-md-textRight u-lg-textRight">
          <a
            href="https://itunes.apple.com/se/app/hedvig/id1303668531?mt=8"
            target="_blank"
            rel="noopener noreferrer"
            className="u-block u-spaceMB11"
          >
            <img
              src="/assets/appstores/app-store-badge@2x.png"
              alt="Ladda ner på App Store"
              height={54}
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.hedvig.app"
            target="_blank"
            rel="noopener noreferrer"
            className="u-block u-spaceMB11"
          >
            <img
              src="/assets/appstores/google-play-badge@2x.png"
              alt="Ladda ner på Google Play"
              height={54}
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
