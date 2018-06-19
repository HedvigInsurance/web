import React from 'react';
import PropTypes from 'prop-types';
import { GivingBackTemplate } from 'src/templates/giving-back-page';

const GivingBackPagePreview = ({ entry }) => (
  <GivingBackTemplate
    title={entry.getIn(['data', 'title'])}
    heading={entry.getIn(['data', 'heading'])}
    section1={entry.getIn('data', 'section1').toJS()}
    section2={entry.getIn('data', 'section2').toJS()}
    section3={entry.getIn('data', 'section3').toJS()}
    section4={entry.getIn('data', 'section4').toJS()}
    ctaText={entry.getIn('data', 'cta_text')}
  />
);

GivingBackPagePreview.propTypes = {
  entry: PropTypes.shape({ getIn: PropTypes.func.isRequired }).isRequired,
};

export default GivingBackPagePreview;
