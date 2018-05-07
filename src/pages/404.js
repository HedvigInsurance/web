import React from 'react';
import { LottieLoader } from 'src/components/LottieLoader';

const styles = {
  container: {
    height: '100%',
  },
};

const sadAnimation = require('assets/animations/hedvig-sad-avatar/data.json');

const NotFound = () => (
  <div
    style={styles.container}
    className="u-flex u-flexJustifyCenter u-flexCol u-flexAlignItemsCenter u-spacePH10 u-spacePV10"
  >
    <h1 className="u-textHeading u-fontSize2 u-colorPrimaryBlue">Not found</h1>

    <LottieLoader
      options={{
        loop: false,
        autoplay: true,
        animationData: sadAnimation,
      }}
      width={300}
      height={300}
      style={{ margin: 'auto' }}
    />
  </div>
);

export default NotFound;
