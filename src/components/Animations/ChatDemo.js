import React from 'react';
import PropTypes from 'prop-types';

import { LottieLoader } from 'src/components/LottieLoader';

const chatDemoAnimation = require('assets/animations/chat-demo/data.json');

const chatDemoOptions = {
  loop: true,
  autoplay: false,
  renderer: 'svg',
  animationData: chatDemoAnimation,
  rendererSettings: {
    progressiveLoad: true,
    preserveAspectRatio: 'xMaxYMin meet',
  },
};

const ChatDemo = React.forwardRef(({ width }, ref) => (
  <LottieLoader ref={ref} options={chatDemoOptions} width={width} />
));

ChatDemo.propTypes = {
  ref: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
};

export default ChatDemo;
