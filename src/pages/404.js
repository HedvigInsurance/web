import React from 'react';
import PropTypes from 'prop-types';
import { StickyContainer } from 'react-sticky';

import Header, { headerPropTypes } from 'src/components/Header';
import { LottieLoader } from 'src/components/LottieLoader';

const styles = {
  container: {
    height: '100%',
  },
};

const sadAnimation = require('assets/animations/hedvig-sad-avatar/data.json');

const NotFound = ({ data: { header } }) => (
  <div style={styles.container}>
    <StickyContainer>
      <Header data={header} />
      <div
        style={styles.container}
        className="u-flex u-flexJustifyCenter u-flexCol u-flexAlignItemsCenter u-spacePH10 u-spacePV10"
      >
        <h1 className="u-textHeading u-textCenter u-fontSize4 u-md-fontSize3 u-lg-fontSize2 u-colorPrimaryBlue">
          Oj! Här fanns inget
        </h1>

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
    </StickyContainer>
  </div>
);

NotFound.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.shape(headerPropTypes),
  }).isRequired,
};

export const notFoundQuery = graphql`
  query NotFound {
    header: dataYaml(id: { regex: "/header/" }) {
      ...Header_data
    }
  }
`;

export default NotFound;
