import React from 'react';
import { Container } from 'constate';
import styled, { css } from 'react-emotion';
import PropTypes from 'prop-types';

import AppLink from 'src/components/AppLink';
import { Mount } from 'react-lifecycle-components';

const PositionAnimation = styled('div')(
  ({ animate, width, isVisible }) => `
  ${animate && 'transition: transform 250ms;'}
  margin-right: 15px;
  transform: ${isVisible ? 'translateY(0)' : 'translateY(-150px)'};

  @media (min-width: 960px) {
    margin-right: 0;
    transform: ${
      isVisible
        ? `translateX(-25px);`
        : `translateX(${width ? width + 15 : -25}px)`
    };
  }
`,
);
const nowrap = css({
  whiteSpace: 'nowrap',
});

export const CTALinkContainer = ({ ctaText, children }) => (
  <div className="u-md-inlineBlock u-lg-inlineBlock">
    <Container
      context="CTAWaypoint"
      initialState={{ buttonRef: React.createRef(), hasMounted: false }}
      actions={{ mount: () => () => ({ hasMounted: true }) }}
    >
      {({ CTAWaypointReached, buttonRef, mount, hasMounted }) => (
        <PositionAnimation
          isVisible={CTAWaypointReached}
          width={
            (buttonRef && buttonRef.current && buttonRef.current.scrollWidth) ||
            0
          }
          animate={hasMounted}
        >
          <Mount
            on={() => {
              setTimeout(() => {
                mount();
              }, 1);
            }}
          >
            {null}
          </Mount>
          <div>
            {children}
            <AppLink
              tags={['header']}
              className={`Button Header-cta-button u-colorWhite u-backgroundPrimaryGreen u-fontWeightBold ${nowrap}`}
              innerRef={buttonRef}
              style={{
                position:
                  buttonRef && buttonRef.current ? 'relative' : 'absolute',
                left: buttonRef && buttonRef.current ? 0 : '100%',
              }}
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
