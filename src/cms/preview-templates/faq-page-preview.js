import React from 'react';
import PropTypes from 'prop-types';
import { FAQTemplate } from 'src/templates/faq-page';

const FAQPagePreview = ({ entry }) => (
  <FAQTemplate
    title={entry.getIn(['data', 'title'])}
    heading={entry.getIn(['data', 'heading'])}
    sections={entry.getIn(['data', 'sections']).toJS()}
  />
);

FAQPagePreview.propTypes = {
  entry: PropTypes.shape({ getIn: PropTypes.func.isRequired }).isRequired,
};

export default FAQPagePreview;
