import React from 'react';
import PropTypes from 'prop-types';
import { LandingTemplate } from 'src/templates/landing-page';

const LandingPagePreview = ({ entry }) => (
  <LandingTemplate
    section1={entry.getIn(['data', 'section1']).toJS()}
    section2={entry.getIn(['data', 'section2']).toJS()}
    section3={entry.getIn(['data', 'section3']).toJS()}
    section4={entry.getIn(['data', 'section4']).toJS()}
    section5={entry.getIn(['data', 'section5']).toJS()}
    section6={entry.getIn(['data', 'section6']).toJS()}
    section7={entry.getIn(['data', 'section7']).toJS()}
    section8={entry.getIn(['data', 'section8']).toJS()}
    section9={entry.getIn(['data', 'section9']).toJS()}
  />
);

LandingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func.isRequired,
  }).isRequired,
};

export default LandingPagePreview;
