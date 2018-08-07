import React from 'react';
import { Container } from 'constate';
import styled from 'react-emotion';

import AppLink from 'src/components/AppLink';

const PositionAnimation = styled('div')`
  opacity: 0;
  transition: opacity 250ms;
  ${({ isVisible }) => isVisible && `opacity: 1;`} margin-right: 15px;

  @media (min-width: 960px) {
    margin-right: 0;
    opacity: 1;
    transition: transform 250ms;
    transform: translateX(150px);
    ${({ isVisible }) => isVisible && `transform: translateX(0);`};
  }
`;

export const CTALinkContainer = ({ children }) => (
  <div className="u-md-inlineBlock u-lg-inlineBlock">
    <Container context="CTAWaypoint">
      {({ CTAWaypointReached }) => (
        <PositionAnimation isVisible={CTAWaypointReached}>
          <div>
            {children}
            <AppLink
              tags={['header']}
              className="Button Header-cta-button u-colorWhite u-backgroundPrimaryGreen u-fontWeightBold"
            >
              Kom igång
            </AppLink>
          </div>
        </PositionAnimation>
      )}
    </Container>
  </div>
);