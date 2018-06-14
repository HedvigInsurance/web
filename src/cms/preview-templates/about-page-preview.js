import React from 'react';
import PropTypes from 'prop-types';
import { AboutUsTemplate } from 'src/templates/about-page';

const AboutPagePreview = ({ entry }) => (
  <AboutUsTemplate
    title={entry.getIn(['data', 'title'])}
    heading={entry.getIn(['data', 'heading'])}
    sections={entry.getIn(['data', 'sections'])}
    location={{ pathname: '/about-us' }}
  />
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }).isRequired,
};

export default AboutPagePreview;
