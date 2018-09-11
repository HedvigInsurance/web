import * as React from 'react';
import Img, { GatsbyImageProps } from 'gatsby-image';
import styled from 'react-emotion';

interface ImageFile {
  image: GatsbyImageProps;
}

interface FoundersProps {
  imageFile: ImageFile;
  imageText: string;
}

const FoundersContainer = styled('div')({
  maxHeight: 500,
  maxWidth: 1500,
  margin: '0 auto',
  position: 'relative',
});

const ImgWithMaxHeight = styled(Img)({
  maxHeight: 500,
});

const PlaceholderImage = styled('div')({
  height: 500,
  backgroundColor: 'black',
  width: '100%',
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

export const Founders: React.SFC<FoundersProps> = ({
  imageFile,
  imageText,
}) => (
  <FoundersContainer role="presentation">
    {imageFile ? (
      <ImgWithMaxHeight {...imageFile.image} />
    ) : (
      <PlaceholderImage />
    )}
    <Shadow>
      <FounderName>{imageText}</FounderName>
    </Shadow>
  </FoundersContainer>
);
