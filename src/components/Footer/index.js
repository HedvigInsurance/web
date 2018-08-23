import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { ReactComponent as FacebookIcon } from 'assets/social/social-icon-facebook.svg';
import { ReactComponent as TwitterIcon } from 'assets/social/social-icon-twitter.svg';
import { ReactComponent as InstagramIcon } from 'assets/social/social-icon-instagram.svg';

export const footerPropTypes = {
  linkSection1: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, path: PropTypes.string }),
  ).isRequired,
  linkSection2: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, path: PropTypes.string }),
  ).isRequired,
  appStoreAlt: PropTypes.string.isRequired,
  playStoreAlt: PropTypes.string.isRequired,
  facebookAlt: PropTypes.string.isRequired,
  instagramAlt: PropTypes.string.isRequired,
  twitterAlt: PropTypes.string.isRequired,
  copyrightText: PropTypes.string.isRequired,
  legalText: PropTypes.string.isRequired,
};

const Footer = ({ data = {}, langKey }, { location }) => {
  const {
    linkSection1,
    linkSection2,
    appStoreAlt,
    playStoreAlt,
    facebookAlt,
    instagramAlt,
    twitterAlt,
    copyrightText,
    legalText,
  } = data[langKey];
  return (
    <div className="u-backgroundPrimaryDarkBlue u-flexNone">
      <div className="Container">
        <div className="u-md-flex u-lg-flex u-flexRow u-spaceMT5 u-spaceMB8">
          <div className="u-flexGrow1">
            <nav className="Grid">
              <div className="u-md-size1of2 u-lg-size1of2 u-maxWidth1of3">
                {linkSection1 &&
                  linkSection1.map((link) => (
                    <Link
                      className="u-spaceMB9 u-linkBlock u-colorWhite"
                      to={link.path}
                    >
                      {link.label}
                    </Link>
                  ))}
              </div>
              <div className="u-md-size1of2 u-lg-size1of2 u-maxWidth1of3">
                {linkSection2 &&
                  linkSection2.map((link) => (
                    <Link
                      className="u-spaceMB9 u-linkBlock u-colorWhite"
                      to={link.path}
                    >
                      {link.label}
                    </Link>
                  ))}
              </div>
            </nav>
          </div>
          {location &&
            location.pathname &&
            location.pathname.indexOf('/download') === -1 && (
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
                    alt={appStoreAlt}
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
                    alt={playStoreAlt}
                    height={54}
                  />
                </a>
              </div>
            )}
        </div>
        <div className="u-spaceMB7">
          <a
            href="https://www.fb.me/hedvigapp"
            target="_blank"
            rel="noopener noreferrer"
            className="u-spacePR10"
            aria-label={facebookAlt}
          >
            <FacebookIcon role="presentation" />
          </a>
          <a
            href="https://www.instagram.com/hedvig.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="u-spacePR9"
            aria-label={instagramAlt}
          >
            <InstagramIcon role="presentation" />
          </a>
          <a
            href="https://twitter.com/hedvigapp"
            target="_blank"
            rel="noopener noreferrer"
            className="u-spacePR10"
            aria-label={twitterAlt}
          >
            <TwitterIcon role="presentation" />
          </a>
        </div>
        <div>
          <Link to="/">
            <span role="img" aria-label="Swedish">
              🇸🇪
            </span>
          </Link>
          <Link to="/en">
            <span role="img" aria-label="English">
              🇬🇧
            </span>
          </Link>
        </div>
        <div className="u-spaceMB7">
          <p className="u-fontSize10 u-colorWhite u-spaceMB9">
            {copyrightText}
          </p>
          <p className="u-fontSize10 u-colorWhite u-spaceMB9">{legalText}</p>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  data: PropTypes.shape({ se: footerPropTypes, en: footerPropTypes })
    .isRequired,
  langKey: PropTypes.string.isRequired,
};

// Passed in from layouts/index
Footer.contextTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export const footerQuery = graphql`
  fragment Footer_data on DataYaml {
    en {
      linkSection1 {
        label
        path
      }
      linkSection2 {
        label
        path
      }
      appStoreAlt
      playStoreAlt
      facebookAlt
      instagramAlt
      twitterAlt
      copyrightText
      legalText
    }
    se {
      linkSection1 {
        label
        path
      }
      linkSection2 {
        label
        path
      }
      appStoreAlt
      playStoreAlt
      facebookAlt
      instagramAlt
      twitterAlt
      copyrightText
      legalText
    }
  }
`;

export default Footer;
