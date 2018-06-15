import React from 'react';
import PropTypes from 'prop-types';
import { ContactTemplate } from 'src/templates/contact-page';

const ContactPagePreview = ({ entry }) => (
  <ContactTemplate
    title={entry.getIn(['data', 'title'])}
    heading={entry.getIn(['data', 'heading'])}
  />
);

ContactPagePreview.propTypes = {
  entry: PropTypes.func.isRequired,
};

export default ContactPagePreview;
