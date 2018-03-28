/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';

// Stub Lottie for Gatsby static builds where there is no window
// Lottie animations are only rendered on the client so the first time the
// static build is rendered there is no animation which will later be added
// Creating a dummy element with the same dimensions as the future animation
// makes the first render less jumpy
const NoopLottieLoaderForBuilds = ({ height, width, style }) => (
  <span style={{ height, width, ...style }} />
);

NoopLottieLoaderForBuilds.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.node,
};

NoopLottieLoaderForBuilds.defaultProps = {
  width: null,
  height: null,
  style: null,
};

let MaybeLottie;
if (typeof window !== 'undefined') {
  MaybeLottie = require('react-lottie').default;
} else {
  MaybeLottie = NoopLottieLoaderForBuilds;
}

export const LottieLoader = MaybeLottie;
