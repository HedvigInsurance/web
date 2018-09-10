import * as React from 'react';
import Img from 'gatsby-image';
import styled from 'react-emotion';

interface GatsbyImageSizes {
  sizes: any;
}

interface GatsbyImage {
  image: GatsbyImageSizes;
}

interface FoundersProps {
  imageFile: GatsbyImage;
}

const FoundersContainer = styled('div')({
  maxHeight: 500,
  position: 'relative',
});

const ImgWithMaxHeight = styled(Img)({
  maxHeight: 500,
});

const Shadow = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  backgroundImage:
    'linear-gradient(transparent, transparent 20%, rgba(0,0,0,0.85))',
  color: 'white',
  display: 'flex',
  alignItems: 'flex-end',
  paddingBottom: 20,
  '@media(min-width: 900px)': {
    backgroundImage:
      'linear-gradient(transparent, transparent 60%, rgba(0,0,0,0.85))',
  },
});

const FounderName = styled('span')({
  fontSize: 14,
  textAlign: 'center',
  margin: '0 auto',
  maxWidth: '80%',
});

export const Founders: React.SFC<FoundersProps> = ({ imageFile }) => (
  <FoundersContainer role="presentation">
    {imageFile && <ImgWithMaxHeight sizes={imageFile.image.sizes} />}
    <Shadow>
      <FounderName>
        Fredrik Fors, (COO & Co-founder), John Ardelius (CTO & Co-founder),
        Lucas Carlsén (CEO & Co-founder)
      </FounderName>
    </Shadow>
  </FoundersContainer>
);
