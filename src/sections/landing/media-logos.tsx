import * as React from 'react';
import Img from 'gatsby-image';
import styled from 'react-emotion';

interface Props {
  image: {
    image: {
      sizes: {
        sizes: string;
      };
    };
  };
}

const Image = styled(Img)({
  '@media (min-width: 745px)': {
    margin: '0 auto',
    maxWidth: '759px',
  },
});

const MediaLogos: React.SFC<Props> = (props) =>
  props.image ? <Image sizes={props.image.image.sizes} alt="" /> : null;

export { MediaLogos };
