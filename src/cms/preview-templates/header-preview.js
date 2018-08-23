import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'constate';
import { StickyContainer } from 'react-sticky';

import Header from 'src/components/Header';

const HeaderPreview = ({ entry }) => (
  <React.Fragment>
    <Provider initialState={{}}>
      <StickyContainer>
        <Header
          data={{
            se: entry.getIn(['data', 'se']).toJS(),
            en: entry.getIn(['data', 'en']).toJS(),
          }}
          langKey="se"
        />
      </StickyContainer>
    </Provider>
    <Provider initialState={{}}>
      <StickyContainer>
        <Header
          data={{
            se: entry.getIn(['data', 'se']).toJS(),
            en: entry.getIn(['data', 'en']).toJS(),
          }}
          langKey="en"
        />
      </StickyContainer>
    </Provider>
  </React.Fragment>
);

HeaderPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func.isRequired,
  }).isRequired,
};

export default HeaderPreview;
