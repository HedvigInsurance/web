import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'constate';
import { LandingTemplate } from 'src/templates/landing-page';

const LandingPagePreview = ({ entry }) => (
  <Provider initialState={{}}>
    <LandingTemplate
      title={entry.getIn(['data', 'title'])}
      landing={entry.getIn(['data', 'landing']).toJS()}
      threeExplainers={entry.getIn(['data', 'three_explainers']).toJS()}
      perilForest={entry.getIn(['data', 'peril_forest']).toJS()}
      getStarted={entry.getIn(['data', 'get_started']).toJS()}
      customerSources={entry.getIn(['data', 'customerSources']).toJS()}
      safety={entry.getIn(['data', 'safety']).toJS()}
    />
  </Provider>
);

LandingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func.isRequired,
  }).isRequired,
};

export default LandingPagePreview;
