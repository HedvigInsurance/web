import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'constate';
import { AboutUsTemplate } from 'src/templates/about-page';
import { CSSInjector } from '../css-injector';

const AboutPagePreview = ({ entry }) => (
  <CSSInjector>
    <Provider initialState={{}}>
      <AboutUsTemplate
        title={entry.getIn(['data', 'title'])}
        heading={entry.getIn(['data', 'heading'])}
        hero={entry.getIn(['data', 'hero']).toJS()}
        mainSection={entry.getIn(['data', 'mainSection']).toJS()}
        hedvigers={entry.getIn(['data', 'hedvigers']).toJS()}
        press={entry.getIn(['data', 'press']).toJS()}
        investors={entry.getIn(['data', 'investors']).toJS()}
        teamtailorUsers={[]}
      />
    </Provider>
  </CSSInjector>
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }).isRequired,
};

export default AboutPagePreview;
