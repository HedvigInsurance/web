import * as React from 'react';
import styled from 'react-emotion';
import { Container, ActionMap } from 'constate';
import isIOS from 'is-ios';

declare module '*.mp4' {
  const content: any;
  export default content;
}

import { Title } from './title';
import { Player } from './player';
import { CloseButton } from './close-button';

const HeroContainer = styled('div')({
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
});

interface ShadowProps {
  hidden: boolean;
}

const Shadow = styled('div')(
  {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    transition: 'opacity 1000ms',
  },
  ({ hidden }: ShadowProps) => ({
    opacity: hidden ? 0 : 1,
  }),
);

interface State {
  isFullScreen: boolean;
  videoRef: React.RefObject<HTMLVideoElement>;
}

interface Actions {
  setFullScreen: (isFullScreen: boolean) => void;
  setVideoRef: (videoRef: React.RefObject<HTMLVideoElement>) => void;
}

const actions: ActionMap<State, Actions> = {
  setFullScreen: (isFullScreen) => () => ({
    isFullScreen,
  }),
  setVideoRef: (videoRef) => () => ({
    videoRef,
  }),
};

const onPlay = ({
  videoRef,
  setFullScreen,
}: {
  videoRef: React.RefObject<HTMLVideoElement>;
  setFullScreen: (isFullScreen: boolean) => void;
}) => () => {
  if (videoRef.current && isIOS) {
    const video = videoRef.current;
    video.muted = false;
    video.pause();
    video.currentTime = 0;
    video.play();
    video.webkitEnterFullscreen();
    return;
  }

  setFullScreen(true);
};

export const Hero = () => (
  <Container
    actions={actions}
    initialState={{
      isFullScreen: false,
      videoRef: React.createRef<HTMLVideoElement>(),
    }}
  >
    {({ isFullScreen, setFullScreen, videoRef }) => (
      <HeroContainer>
        <Player isFullScreen={isFullScreen} videoRef={videoRef} />
        <Shadow hidden={isFullScreen}>
          <Title clickedPlayButton={onPlay({ videoRef, setFullScreen })} />
        </Shadow>
        <CloseButton
          onClick={() => setFullScreen(false)}
          hidden={!isFullScreen}
        />
      </HeroContainer>
    )}
  </Container>
);
