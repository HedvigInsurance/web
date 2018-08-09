import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'constate';
import { ContactTemplate } from 'src/templates/contact-page';

const ContactPagePreview = ({ entry }) => (
  <Provider initialState={{}}>
    <ContactTemplate
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
    />
  </Provider>
);

ContactPagePreview.propTypes = {
  entry: PropTypes.func.isRequired,
};

export default ContactPagePreview;
