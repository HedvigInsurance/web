import * as React from 'react'
import styled from 'react-emotion'
import { animated, config, Spring } from 'react-spring'

import { ReactComponent as PlayIcon } from 'assets/icons/play.svg'

const MissionTitle = styled(animated.span)({
  color: 'white',
  fontSize: '30px',
  lineHeight: '40px',
})

const Mission = styled(animated.h1)({
  color: 'white',
  fontSize: '40px',
  lineHeight: '55px',
  maxWidth: '80%',
  '@media (min-width: 500px)': {
    fontSize: '50px',
    lineHeight: '70px',
  },
  '@media (min-width: 700px)': {
    fontSize: '60px',
    lineHeight: '70px',
  },
  '@media (min-width: 1100px)': {
    fontSize: '90px',
    lineHeight: '100px',
  },
})

const PlayButtonContainer = styled('div')({
  display: 'inline-block',
  width: 140,
  transition: 'transform 350ms',
  ':active': {
    transform: 'scale(0.9)',
  },
})

const PlayButton = styled(animated.button)({
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'left',
  justifyContent: 'space-between',
  width: '100%',
  fontSize: 18,
  marginTop: 30,
  cursor: 'pointer',
  ':focus': {
    outline: 0,
  },
})

const DELAY = 500

interface TitleProps {
  clickedPlayButton: () => void
  headline: string
  title: string
  playButtonText: string
}

export const Title: React.SFC<TitleProps> = ({
  headline,
  title,
  playButtonText,
  clickedPlayButton,
}) => (
  <>
    <Spring
      native
      delay={DELAY + 200}
      config={config.slow}
      from={{ opacity: 0, transform: 'translateX(-300px)' }}
      to={{ opacity: 1, transform: 'translateX(0)' }}
    >
      {(styles) => <MissionTitle style={styles}>{headline}</MissionTitle>}
    </Spring>
    <Spring
      native
      delay={DELAY}
      config={config.slow}
      from={{ opacity: 0, transform: 'translateY(-300px)' }}
      to={{ opacity: 1, transform: 'translateY(0)' }}
    >
      {(styles) => <Mission style={styles}>{title}</Mission>}
    </Spring>
    <Spring
      native
      delay={DELAY + 900}
      config={config.slow}
      from={{ opacity: 0, transform: 'translateY(50px)' }}
      to={{ opacity: 1, transform: 'translateY(0)' }}
    >
      {(styles) => (
        <PlayButtonContainer>
          <PlayButton onClick={clickedPlayButton} style={styles}>
            <PlayIcon width={50} height={50} />
            {playButtonText}
          </PlayButton>
        </PlayButtonContainer>
      )}
    </Spring>
  </>
)
