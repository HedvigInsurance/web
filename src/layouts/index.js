import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'normalize.css';
import 'purecss/build/base.css';
import 'purecss/build/grids.css';
import 'purecss/build/grids-responsive.css';
import './index.css';

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
