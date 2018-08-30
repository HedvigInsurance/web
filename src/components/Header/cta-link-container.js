import React from 'react';
import { Container } from 'constate';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

import AppLink from 'src/components/AppLink';

const PositionAnimation = styled('div')`
  transition: transform 250ms;
  transform: translateY(-150px);
  margin-right: 15px;
  ${({ isVisible }) => isVisible && `transform: translateY(0);`};

  @media (min-width: 960px) {
    margin-right: 0;
    transform: translateX(155px);
    ${({ isVisible }) => isVisible && `transform: translateX(0);`};
  }
`;

export const CTALinkContainer = ({ ctaText, children }) => (
  <div className="u-md-inlineBlock u-lg-inlineBlock">
    <Container context="CTAWaypoint" initialState={{}}>
      {({ CTAWaypointReached }) => (
        <PositionAnimation isVisible={CTAWaypointReached}>
          <div>
            {children}
            <AppLink
              tags={['header']}
              className="Button Header-cta-button u-colorWhite u-backgroundPrimaryGreen u-fontWeightBold"
            >
              {ctaText}
            </AppLink>
          </div>
        </PositionAnimation>
      )}
    </Container>
  </div>
);

CTALinkContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  ctaText: PropTypes.string.isRequired,
};

CTALinkContainer.defaultProps = {
  children: undefined,
};
