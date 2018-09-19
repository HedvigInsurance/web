import * as React from 'react';
import styled, { keyframes } from 'react-emotion';
import { colors, fonts } from '@hedviginsurance/brand';
import VisibilitySensor from 'react-visibility-sensor';

interface WithVisibility {
  isVisible: boolean;
}

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
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
  paddingTop: 80,
  paddingBottom: 90,
});

const Row = styled('div')(
  ({ align = 'left' }: { align?: 'left' | 'right' }) => ({
    paddingBottom: 10,
    textAlign: align,
  }),
);

const HedvigLogo = styled('img')(
  ({
    animationDelay,
    isVisible,
  }: { animationDelay: number } & WithVisibility) => ({
    width: 30,
    opacity: 0,
    animation: isVisible ? `${fadeIn} 500ms forwards` : 'none',
    animationDelay: `${animationDelay}ms`,
  }),
);
const ChatMessage = styled('div')(
  ({
    animationDelay,
    isVisible,
  }: { animationDelay: number } & WithVisibility) => ({
    opacity: 0,
    animation: isVisible ? `${fadeSlideIn} 500ms forwards` : 'none',
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
      transition: 'background 300ms',
      '&:hover, &:focus': {
        background: '#752EFF',
        textDecoration: 'none',
      },

      opacity: 0,
      animation: isVisible ? `${fadeIn} 500ms forwards` : 'none',
      animationDelay: `${animationDelay}ms`,
    },
  }),
);
class CareerBanner extends React.PureComponent<{}, { hasMounted: boolean }> {
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
                animationDelay={500}
                src="/assets/identity/hedvig-symbol-color.svg"
                isVisible={this.state.hasMounted}
              />
              <Row>
                <ChatMessage
                  animationDelay={1_500}
                  isVisible={this.state.hasMounted}
                >
                  Hedvig reste nyligen 30 MSEK för att expandera och utöka
                  teamet
                </ChatMessage>
              </Row>
              <Row>
                <ChatMessage
                  animationDelay={3_500}
                  isVisible={this.state.hasMounted}
                >
                  Vill du vara med på resan?
                </ChatMessage>
              </Row>
              <Row align="right">
                <Button
                  href="https://join.hedvig.com"
                  animationDelay={5_000}
                  isVisible={this.state.hasMounted}
                >
                  Se lediga tjänster
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
