import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Footer = (props, { location }) => (
  <div className="u-backgroundPrimaryDarkBlue u-flexNone">
    <div className="Container">
      <div className="u-md-flex u-lg-flex u-flexRow u-spaceMT5 u-spaceMB7">
        <div className="u-flexGrow1">
          <nav className="Grid">
            <div className="u-md-size1of2 u-lg-size1of2 u-maxWidth1of3">
              <Link className="u-spaceMB9 u-linkBlock u-colorWhite" to="/faq">
                Vanliga frågor
              </Link>
              <Link
                className="u-spaceMB9 u-linkBlock u-colorWhite"
                to="/about-us"
              >
                Om Hedvig
              </Link>
              <Link
                className="u-spaceMB9 u-linkBlock u-colorWhite"
                to="/contact"
              >
                Kontakt
              </Link>
            </div>
            <div className="u-md-size1of2 u-lg-size1of2 u-maxWidth1of3">
              <Link className="u-spaceMB9 u-linkBlock u-colorWhite" to="/press">
                Press
              </Link>
              <Link
                className="u-spaceMB9 u-linkBlock u-colorWhite"
                to="/privacy"
              >
                Personuppgifter
              </Link>
              <Link className="u-spaceMB9 u-linkBlock u-colorWhite" to="/legal">
                Legal information
              </Link>
            </div>
          </nav>
        </div>
        {location.pathname.indexOf('/download') === -1 && (
          <div className="u-md-textRight u-lg-textRight">
            <a
              href="https://itunes.apple.com/se/app/hedvig/id1303668531?mt=8"
              target="_blank"
              rel="noopener noreferrer"
              className="u-block u-spaceMB11"
              id="cta-footer-download-apple-store"
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
              id="cta-footer-download-play-store"
            >
              <img
                src="/assets/appstores/google-play-badge@2x.png"
                alt="Ladda ner på Google Play"
                height={54}
              />
            </a>
          </div>
        )}
      </div>
      <div className="u-spaceMB7">
        <p className="u-fontSize10 u-colorWhite u-spaceMB9">
          © Hedvig AB. Huvudkontor: Artillerigatan 10, 114 51, Stockholm. Org.
          nr. 559093-0334.
        </p>
        <p className="u-fontSize10 u-colorWhite u-spaceMB9">
          Exklusiv försäkringsgivare för Hedvigs försäkringar är International
          Insurance Company of Hannover SE, Sverige filial, org. nr.
          516402-6345. Hedvig står under Finansinspektionens tillsyn.
        </p>
      </div>
    </div>
  </div>
);

// Passed in from layouts/index
Footer.contextTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Footer;
