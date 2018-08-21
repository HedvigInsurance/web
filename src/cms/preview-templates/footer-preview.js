import React from 'react';
import PropTypes from 'prop-types';
import Footer from 'src/components/Footer';

const FooterPreview = ({ entry }) => (
  <Footer
    data={{
      linkSection1: entry.getIn(['data', 'linkSection1']).toJS(),
      linkSection2: entry.getIn(['data', 'linkSection2']).toJS(),
      appStoreAlt: entry.getIn(['data', 'appStoreAlt']),
      playStoreAlt: entry.getIn(['data', 'playStoreAlt']),
      facebookAlt: entry.getIn(['data', 'facebookAlt']),
      instagramAlt: entry.getIn(['data', 'instagramAlt']),
      twitterAlt: entry.getIn(['data', 'twitterAlt']),
      copyrightText: entry.getIn(['data', 'copyrightText']),
      legalText: entry.getIn(['data', 'legalText']),
    }}
  />
);

FooterPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func.isRequired,
  }).isRequired,
};

export default FooterPreview;
