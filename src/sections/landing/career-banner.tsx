import * as React from 'react';
import styled, { keyframes } from 'react-emotion';
import { colors, fonts } from '@hedviginsurance/brand';
import VisibilitySensor from 'react-visibility-sensor';
import { LottieLoader } from 'src/components/LottieLoader';

const typingAnimation = require('assets/animations/hedvig/hedvig-typing.json');

interface Props {
  message1: string;
  message2: string;
  ctaLabel: string;
  ctaTarget: string;
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
  '@media (min-width: 480px)': {
    paddingTop: 80,
    paddingBottom: 90,
    paddingLeft: 50,
    paddingRight: 50,
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

const HedvigLogo = styled('img')(
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
    width: 60,
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
      color: '#fff',
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
class CareerBanner extends React.PureComponent<Props, { hasMounted: boolean }> {
  state: { hasMounted: boolean } = { hasMounted: false };
  render() {
    return (
      <CareerBannerContainer className="Container">
        <VisibilitySensor
          onChange={(isVisible: boolean) => {
            this.setState(({ hasMounted }) => ({
              hasMounted: hasMounted || isVisible,
            }));
          }}
        >
          {() => (
            <>
              <HedvigLogo
                animationDelay={0}
                src="/assets/identity/hedvig-symbol-color.svg"
                isVisible={this.state.hasMounted}
              />
              <Row>
                <TypingAnimation
                  isVisible={this.state.hasMounted}
                  exitDelay={900}
                >
                  <LottieLoader
                    options={{
                      loop: true,
                      autoplay: true,
                      renderer: 'svg',
                      animationData: typingAnimation,
                    }}
                  />
                </TypingAnimation>
                <ChatMessage
                  animationDelay={1_100}
                  isVisible={this.state.hasMounted}
                >
                  {this.props.message1}
                </ChatMessage>
              </Row>
              <Row>
                <HiddenContainer
                  isVisible={this.state.hasMounted}
                  animationDelay={1_100}
                >
                  <TypingAnimation
                    isVisible={this.state.hasMounted}
                    exitDelay={1_900}
                  >
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
                <ChatMessage
                  animationDelay={1_900}
                  isVisible={this.state.hasMounted}
                >
                  {this.props.message2}
                </ChatMessage>
              </Row>
              <Row align="right">
                <Button
                  href={this.props.ctaTarget}
                  animationDelay={2_300}
                  isVisible={this.state.hasMounted}
                >
                  {this.props.ctaLabel}
                </Button>
              </Row>
            </>
          )}
        </VisibilitySensor>
      </CareerBannerContainer>
    );
  }
}

export { CareerBanner };
