import React from 'react';
import PropTypes from 'prop-types';

import { LottieLoader } from 'src/components/LottieLoader';

const paidRightAwayAnimation = require('assets/animations/three-explainers/paid-right-away.json');

const paidRightAwayOptions = {
  loop: false,
  autoplay: false,
  renderer: 'svg',
  animationData: paidRightAwayAnimation,
  rendererSettings: {
    progressiveLoad: true,
    preserveAspectRatio: 'xMaxYMin meet',
  },
};

const PaidRightAway = React.forwardRef(({ sideLength }, ref) => (
  <LottieLoader
    ref={ref}
    options={paidRightAwayOptions}
    width={sideLength}
    height={sideLength}
  />
));

PaidRightAway.propTypes = {
  ref: PropTypes.func.isRequired,
  sideLength: PropTypes.number.isRequired,
};

export default PaidRightAway;
