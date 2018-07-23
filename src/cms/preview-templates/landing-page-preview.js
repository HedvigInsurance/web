import React from 'react';
import PropTypes from 'prop-types';
import { LandingTemplate } from 'src/templates/landing-page';

const LandingPagePreview = ({ entry }) => (
  <LandingTemplate
    title={entry.getIn(['data', 'title'])}
    landing={entry.getIn(['data', 'landing']).toJS()}
    threeExplainers={entry.getIn(['data', 'three_explainers']).toJS()}
    perilForest={entry.getIn(['data', 'peril_forest']).toJS()}
    philosophy={entry.getIn(['data', 'philosophy']).toJS()}
    customerSource={entry.getIn(['data', 'customer_source']).toJS()}
    safety={entry.getIn(['data', 'safety']).toJS()}
  />
);

LandingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func.isRequired,
  }).isRequired,
};

export default LandingPagePreview;
