import * as React from 'react';
import styled, { keyframes } from 'react-emotion';
import { colors, fonts } from '@hedviginsurance/brand';
import VisibilitySensor from 'react-visibility-sensor';
import { LottieLoader } from 'src/components/LottieLoader';
import { ReactComponent as LogoSvg } from 'assets/identity/hedvig-symbol-color.svg';
import { Container } from 'constate';

const typingAnimation = require('assets/animations/hedvig/hedvig-typing.json');

interface Props {
  message1: string;
  message2: string;
  ctaLabel: string;
  ctaTarget: string;
}

interface State {
  hasMounted: boolean;
}
interface Actions {
  mount: () => void;
}

interface WithVisibility {
  isVisible: boolean;
}

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});
const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});
const fadeSlideIn = keyframes({
  from: {
    opacity: 0,
    transform: `translateY(50%)`,
  },
  to: {
    opacity: 1,
    transform: 'translateY(0%)',
  },
});

const CareerBannerContainer = styled('div')({
  paddingTop: 30,
  paddingBottom: 20,
  paddingLeft: 20,
  paddingRight: 20,
  maxWidth: 900,
  margin: '0 auto',
  '@media (min-width: 480px)': {
    paddingTop: 40,
    paddingBottom: 40,
  },
});

const Row = styled('div')(
  ({ align = 'left' }: { align?: 'left' | 'right' }) => ({
    position: 'relative',
    paddingBottom: 15,
    fontSize: 16,
    textAlign: align,
    '@media (max-width: 480px)':
      align === 'right'
        ? {
            paddingTop: 30,
          }
        : {},
  }),
);

const HedvigLogo = styled(LogoSvg)(
  ({
    animationDelay,
    isVisible,
  }: { animationDelay: number } & WithVisibility) => ({
    width: 30,
    marginBottom: 10,
    opacity: 0,
    animation: isVisible ? `${fadeIn} 400ms forwards` : 'none',
    animationDelay: `${animationDelay}ms`,
  }),
);
const TypingAnimation = styled('div')(
  ({ exitDelay, isVisible }: { exitDelay: number } & WithVisibility) => ({
    position: 'absolute',
    borderRadius: 8,
    animation: isVisible ? `${fadeOut} 400ms forwards` : 'none',
    animationDelay: `${exitDelay}ms`,
  }),
);
const HiddenContainer = styled(`div`)(
  ({
    animationDelay,
    isVisible,
  }: { animationDelay: number } & WithVisibility) => ({
    opacity: 0,
    animation: isVisible ? `${fadeIn} 400ms forwards` : 'none',
    animationDelay: `${animationDelay}ms`,
  }),
);
const ChatMessage = styled('div')(
  ({
    animationDelay,
    isVisible,
  }: { animationDelay: number } & WithVisibility) => ({
    opacity: 0,
    animation: isVisible ? `${fadeSlideIn} 400ms forwards` : 'none',
    animationDelay: `${animationDelay}ms`,

    display: 'inline-block',
    padding: '10px 15px',
    borderRadius: 8,
    backgroundColor: '#F9FAFC',
    fontFamily: fonts.MERRIWEATHER,
    color: colors.BLACK_PURPLE,
  }),
);

const Button = styled('a')(
  ({
    animationDelay,
    isVisible,
  }: { animationDelay: number } & WithVisibility) => ({
    '&&': {
      display: 'inline-block',
      marginLeft: 'auto',
      background: colors.PURPLE,
      padding: '10px 25px',
      fontSize: 16,
      color: colors.WHITE,
      textDecoration: 'none',
      borderRadius: '50px',
      transition: 'background 400ms',
      '&:hover, &:focus': {
        background: '#752EFF',
        textDecoration: 'none',
      },

      opacity: 0,
      animation: isVisible ? `${fadeIn} 400ms forwards` : 'none',
      animationDelay: `${animationDelay}ms`,
    },
  }),
);

const actions = {
  mount: () => (_: State): Partial<State> => ({ hasMounted: true }),
};

const CareerBanner: React.SFC<Props> = (props) =>
  props.message1 && props.message2 ? (
    <CareerBannerContainer>
      <Container<State, Actions>
        actions={actions}
        initialState={{ hasMounted: false }}
      >
        {({ hasMounted, mount }: State & Actions) => (
          <VisibilitySensor
            onChange={(isVisible: boolean) => {
              if (isVisible) {
                mount();
              }
            }}
          >
            {() => (
              <>
                <HedvigLogo
                  animationDelay={0}
                  width={60}
                  isVisible={hasMounted}
                />
                <Row>
                  <TypingAnimation isVisible={hasMounted} exitDelay={900}>
                    <LottieLoader
                      options={{
                        loop: true,
                        autoplay: true,
                        renderer: 'svg',
                        animationData: typingAnimation,
                      }}
                    />
                  </TypingAnimation>
                  <ChatMessage animationDelay={1_100} isVisible={hasMounted}>
                    {props.message1}
                  </ChatMessage>
                </Row>
                <Row>
                  <HiddenContainer
                    isVisible={hasMounted}
                    animationDelay={1_100}
                  >
                    <TypingAnimation isVisible={hasMounted} exitDelay={1_900}>
                      <LottieLoader
                        options={{
                          loop: true,
                          autoplay: true,
                          renderer: 'svg',
                          animationData: typingAnimation,
                        }}
                      />
                    </TypingAnimation>
                  </HiddenContainer>
                  <ChatMessage animationDelay={1_900} isVisible={hasMounted}>
                    {props.message2}
                  </ChatMessage>
                </Row>
                <Row align="right">
                  <Button
                    href={props.ctaTarget}
                    animationDelay={2_300}
                    isVisible={hasMounted}
                  >
                    {props.ctaLabel}
                  </Button>
                </Row>
              </>
            )}
          </VisibilitySensor>
        )}
      </Container>
    </CareerBannerContainer>
  ) : null;

export { CareerBanner };
