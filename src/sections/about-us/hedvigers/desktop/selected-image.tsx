import * as React from 'react';
import styled, { keyframes } from 'react-emotion';
import { TransitionGroup, Transition } from 'react-transition-group';
import {
  ENTERING,
  ENTERED,
  EXITING,
  EXITED,
  UNMOUNTED,
} from 'react-transition-group/Transition';

type TransitionStatus =
  | typeof ENTERING
  | typeof ENTERED
  | typeof EXITING
  | typeof EXITED
  | typeof UNMOUNTED;

interface SelectedImageProps {
  images: Array<string>;
  selectedImage: string;
}

const Container = styled('div')({
  width: '50%',
  overflow: 'hidden',
  position: 'relative',
});

interface ImageContainerProps {
  status: TransitionStatus;
}

const enter = keyframes({
  from: {
    transform: 'translateX(100%)',
  },
  to: {
    transform: 'translateX(0)',
  },
});

const exit = keyframes({
  from: {
    transform: 'translateX(0)',
  },
  to: {
    transform: 'translateX(-100%)',
  },
});

const getTransform = (status: TransitionStatus) => {
  switch (status) {
    case ENTERED:
      return {
        animation: `${enter} 0ms ease forwards`,
      };
    case ENTERING:
      return {
        animation: `${enter} 800ms ease forwards`,
      };
    default:
      return {
        animation: `${exit} 800ms ease forwards`,
      };
  }
};

const ImageContainer = styled('div')(
  {
    position: 'absolute',
    top: '-5%',
    left: '-5%',
    width: '110%',
    height: '110%',
    willChange: 'transform',
  },
  ({ status }: ImageContainerProps) => ({
    ...getTransform(status),
  }),
);

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const SelectedImage: React.SFC<SelectedImageProps> = ({
  images,
  selectedImage,
}) => (
  <Container>
    <TransitionGroup>
      {images.filter((image) => image === selectedImage).map((image) => (
        <Transition key={image} timeout={{ exit: 850, enter: 850 }}>
          {(status) => (
            <ImageContainer status={status}>
              <Image src={image} />
            </ImageContainer>
          )}
        </Transition>
      ))}
    </TransitionGroup>
  </Container>
);
