import React from 'react';
import PropTypes from 'prop-types';

import { LottieLoader } from 'src/components/LottieLoader';

const insuranceInMinutesAnimation = require('assets/animations/three-explainers/insurance-in-minutes.json');

const insuranceInMinutesOptions = {
  loop: false,
  autoplay: false,
  renderer: 'svg',
  animationData: insuranceInMinutesAnimation,
  rendererSettings: {
    progressiveLoad: true,
    preserveAspectRatio: 'xMaxYMin meet',
  },
};

const InsuranceInMinutes = React.forwardRef(({ sideLength }, ref) => (
  <LottieLoader
    ref={ref}
    options={insuranceInMinutesOptions}
    width={sideLength}
    height={sideLength}
  />
));

InsuranceInMinutes.propTypes = {
  ref: PropTypes.func.isRequired,
  sideLength: PropTypes.number.isRequired,
};

export default InsuranceInMinutes;
