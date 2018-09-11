import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { ReactComponent as FacebookIcon } from 'assets/social/social-icon-facebook.svg';
import { ReactComponent as TwitterIcon } from 'assets/social/social-icon-twitter.svg';
import { ReactComponent as InstagramIcon } from 'assets/social/social-icon-instagram.svg';
import { ReactComponent as FlagSe } from 'assets/flags/se.svg';
import { ReactComponent as FlagEn } from 'assets/flags/en.svg';

const propTypes = {
  linkSection1: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      path: PropTypes.string,
      external: PropTypes.bool,
    }),
  ).isRequired,
  linkSection2: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      path: PropTypes.string,
      external: PropTypes.bool,
    }),
  ).isRequired,
  appStoreAlt: PropTypes.string.isRequired,
  playStoreAlt: PropTypes.string.isRequired,
  facebookAlt: PropTypes.string.isRequired,
  instagramAlt: PropTypes.string.isRequired,
  twitterAlt: PropTypes.string.isRequired,
  copyrightText: PropTypes.string.isRequired,
  legalText: PropTypes.string.isRequired,
};

export const footerPropTypes = {
  se: PropTypes.shape(propTypes),
  en: PropTypes.shape(propTypes),
};

const renderLink = (link) => {
  if (link.external) {
    return (
      <a
        key={link.path}
        className="u-spaceMB9 u-linkBlock u-colorWhite"
        href={link.path}
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link
      key={link.path}
      className="u-spaceMB9 u-linkBlock u-colorWhite"
      to={link.path}
    >
      {link.label}
    </Link>
  );
};

const Footer = ({ data = {}, langKey }, { location }) => {
  const dataForLanguage = data[langKey || 'se'];

  if (!dataForLanguage) return null;

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
  } = dataForLanguage;

  return (
    <div className="u-backgroundPrimaryDarkBlue u-flexNone">
      <div className="Container">
        <div className="u-md-flex u-lg-flex u-flexRow u-spaceMT5 u-spaceMB8">
          <div className="u-flexGrow1">
            <nav className="Grid">
              <div className="u-md-size1of2 u-lg-size1of2 u-maxWidth1of3">
                {linkSection1 && linkSection1.map(renderLink)}
              </div>
              <div className="u-md-size1of2 u-lg-size1of2 u-maxWidth1of3">
                {linkSection2 && linkSection2.map(renderLink)}
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
        <div className="u-spaceMB8">
          <Link to="/" className="u-spaceMR12" aria-label="Svenska">
            <FlagSe role="presentation" width={40} height={25} />
          </Link>
          <Link to="/en" aria-label="English">
            <FlagEn role="presentation" width={40} height={25} />
          </Link>
        </div>
        <div className="u-spaceMB10">
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
  data: PropTypes.shape(footerPropTypes).isRequired,
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
        external
      }
      linkSection2 {
        label
        path
        external
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
        external
      }
      linkSection2 {
        label
        path
        external
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
