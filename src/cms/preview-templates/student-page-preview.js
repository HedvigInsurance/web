import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'constate';
import { StudentTemplate } from 'src/templates/student-page';

const StudentPagePreview = ({ entry }) => (
  <Provider initialState={{}}>
    <StudentTemplate
      title={entry.getIn(['data', 'title'])}
      landing={entry.getIn(['data', 'landing']).toJS()}
      threeExplainers={entry.getIn(['data', 'three_explainers']).toJS()}
      perilForest={entry.getIn(['data', 'peril_forest']).toJS()}
      bottomCta={entry.getIn(['data', 'bottom_cta'])}
    />
  </Provider>
);

StudentPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func.isRequired,
  }).isRequired,
};

export default StudentPagePreview;
