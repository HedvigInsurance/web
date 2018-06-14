import React from 'react';
import PropTypes from 'prop-types';
import { AboutPageTemplate } from 'src/templates/about-page';

const AboutPagePreview = ({ entry }) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    heading={entry.getIn(['data', 'heading'])}
    sections={entry.getIn(['data', 'sections'])}
  />
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }).isRequired,
};

export default AboutPagePreview;
