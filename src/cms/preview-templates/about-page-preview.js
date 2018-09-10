import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'constate';
import { AboutUsTemplate } from 'src/templates/about-page';

const AboutPagePreview = ({ entry }) => (
  <Provider initialState={{}}>
    <AboutUsTemplate
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      body={entry.getIn(['data', 'body']).toJS()}
      press={entry.getIn(['data', 'press']).toJS()}
      investors={entry.getIn(['data', 'investors']).toJS()}
    />
  </Provider>
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }).isRequired,
};

export default AboutPagePreview;
