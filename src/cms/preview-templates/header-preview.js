import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'constate';
import { StickyContainer } from 'react-sticky';

import Header from 'src/components/Header';

const HeaderPreview = ({ entry }) => (
  <Provider initialState={{}}>
    <StickyContainer>
      <Header
        data={{
          links: entry.getIn(['data', 'links']).toJS(),
          ctaText: entry.getIn(['data', 'ctaText']),
        }}
      />
    </StickyContainer>
  </Provider>
);

HeaderPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func.isRequired,
  }).isRequired,
};

export default HeaderPreview;
