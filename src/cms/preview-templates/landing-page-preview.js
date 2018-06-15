import React from 'react';
import PropTypes from 'prop-types';
import { LandingTemplate } from 'src/templates/landing-page';

const LandingPagePreview = ({ entry }) => {
  console.log(entry.getIn(['data']));
  return (
    <LandingTemplate
      section1={entry.getIn(['data', 'section1'])}
      section2={entry.getIn(['data', 'section2'])}
      section3={entry.getIn(['data', 'section3'])}
      section4={entry.getIn(['data', 'section4'])}
      section5={entry.getIn(['data', 'section5'])}
      section6={entry.getIn(['data', 'section6'])}
      section7={entry.getIn(['data', 'section7'])}
      section8={entry.getIn(['data', 'section8'])}
      section9={entry.getIn(['data', 'section9'])}
    />
  );
};

LandingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func.isRequired,
  }).isRequired,
};

export default LandingPagePreview;
