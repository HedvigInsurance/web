import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'constate';

import Header from 'src/components/Header';

const HeaderPreview = ({ entry }) => (
  <Provider initialState={{}}>
    <Header
      data={{
        links: entry.getIn(['data', 'links']).toJS(),
        ctaText: entry.getIn(['data', 'ctaText']),
      }}
    />
  </Provider>
);

HeaderPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func.isRequired,
  }).isRequired,
};

export default HeaderPreview;
