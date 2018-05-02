import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'normalize.css';
import '../css/style.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Hedvig" />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
};

export default TemplateWrapper;
