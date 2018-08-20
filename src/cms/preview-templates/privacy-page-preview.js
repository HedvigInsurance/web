import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'constate';
import { PrivacyTemplate } from 'src/templates/privacy-page';

const PrivacyPagePreview = ({ entry }) => (
  <Provider initialState={{}}>
    <PrivacyTemplate
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      sections={entry.getIn(['data', 'sections']).toJS()}
    />
  </Provider>
);

PrivacyPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }).isRequired,
};

export default PrivacyPagePreview;
