import * as React from 'react';
import styled from 'react-emotion';
import { Spring, config } from 'react-spring';

import { ReactComponent as PlayIcon } from 'assets/icons/play.svg';

const MissionTitle = styled('span')({
  color: 'white',
  fontSize: '30px',
  lineHeight: '40px',
});

const Mission = styled('h1')({
  color: 'white',
  fontSize: '100px',
  lineHeight: '120px',
  maxWidth: '60%',
  '@media (max-width: 700px)': {
    fontSize: '70px',
    lineHeight: '90px',
  },
  '@media (max-width: 1100px)': {
    fontSize: '80px',
    lineHeight: '100px',
  },
});

const PlayButton = styled('button')({
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'left',
  justifyContent: 'space-between',
  width: 140,
  fontSize: 18,
  marginTop: 30,
});

const DELAY = 500;

interface TitleProps {
  clickedPlayButton: () => void;
}

export const Title: React.SFC<TitleProps> = ({ clickedPlayButton }) => (
  <>
    <Spring
      delay={DELAY + 200}
      config={config.slow}
      from={{ opacity: 0, transform: 'translateX(-300px)' }}
      to={{ opacity: 1, transform: 'translateX(0)' }}
    >
      {(styles) => <MissionTitle style={styles}>Our mission:</MissionTitle>}
    </Spring>
    <Spring
      delay={DELAY}
      config={config.slow}
      from={{ opacity: 0, transform: 'translateY(-300px)' }}
      to={{ opacity: 1, transform: 'translateY(0)' }}
    >
      {(styles) => <Mission style={styles}>Making minds more peaceful</Mission>}
    </Spring>
    <Spring
      delay={DELAY + 900}
      config={config.slow}
      from={{ opacity: 0, transform: 'translateY(50px)' }}
      to={{ opacity: 1, transform: 'translateY(0)' }}
    >
      {(styles) => (
        <PlayButton onClick={clickedPlayButton} style={styles}>
          <PlayIcon width={50} height={50} /> Se filmen
        </PlayButton>
      )}
    </Spring>
  </>
);
