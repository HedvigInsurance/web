import React from 'react';
import { LottieLoader } from 'src/components/LottieLoader';

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    width: '100%',
    padding: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: '50px',
    lineHeight: '75px',
    fontFamily: 'CircularStd',
    color: '#651EFF',
  },
};

const sadAnimation = require('assets/animations/hedvig-sad-avatar/data.json');

const NotFound = () => (
  <div style={styles.container}>
    <div>Not found</div>

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
