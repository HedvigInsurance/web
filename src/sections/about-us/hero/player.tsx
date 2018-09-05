import * as React from 'react';
import styled, { keyframes } from 'react-emotion';

import heroVideo from 'assets/about-us-hero.mp4';
import heroVideoPoster from 'assets/about-us-hero-poster.png';

interface HeightContainerProps {
  isFullScreen: boolean;
}

const fadeInKeyframe = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const HeightContainer = styled('div')(
  {
    animation: `${fadeInKeyframe} 2000ms forwards`,
    transition: 'height 1500ms, padding 1500ms',
    height: 600,
    backgroundColor: 'black',
  },
  ({ isFullScreen }: HeightContainerProps) =>
    isFullScreen
      ? {
          height: 'calc(100vh - 70px)',
          padding: 'calc(15vh - 35px) 0',
        }
      : null,
);

const Video = styled('video')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'height 1500ms',
  overflow: 'hidden',
});

interface PlayerProps {
  isFullScreen: boolean;
  videoRef: React.RefObject<HTMLVideoElement>;
}

const restartVideo = (event: React.SyntheticEvent) => {
  const video = event.nativeEvent.target as HTMLVideoElement;

  if (!video.muted) {
    video.pause();
    video.currentTime = 0;
    video.play();
  }
};

export const Player: React.SFC<PlayerProps> = ({ isFullScreen, videoRef }) => (
  <HeightContainer isFullScreen={isFullScreen}>
    <Video
      poster={heroVideoPoster}
      innerRef={videoRef}
      onVolumeChange={restartVideo}
      playsInline
      autoPlay
      muted={!isFullScreen}
      loop={!isFullScreen}
    >
      <source src={heroVideo} type="video/mp4" />
    </Video>
  </HeightContainer>
);
