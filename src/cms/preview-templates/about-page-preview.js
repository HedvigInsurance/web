import React from 'react';
import PropTypes from 'prop-types';
import { AboutUsTemplate } from 'src/templates/about-page';

const AboutPagePreview = ({ entry }) => (
  <AboutUsTemplate
    title={entry.getIn(['data', 'title'])}
    heading={entry.getIn(['data', 'heading'])}
    section1={entry.getIn(['data', 'section1']).toJS()}
    section2={entry.getIn(['data', 'section2'])}
  />
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }).isRequired,
};

export default AboutPagePreview;
