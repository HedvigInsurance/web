import * as React from 'react';
import styled from 'react-emotion';
import { Spring } from 'react-spring';

import { ReactComponent as CrossIcon } from 'assets/icons/cross-icon.svg';

const Button = styled('button')({
  position: 'absolute',
  top: 20,
  left: 20,
  cursor: 'pointer',
  transition: 'transform 350ms',
  ':focus': {
    outline: 0,
  },
  ':active': {
    transform: 'scale(0.9)',
  },
});

interface CloseButtonProps {
  onClick: () => void;
  hidden: boolean;
}

export const CloseButton: React.SFC<CloseButtonProps> = ({
  onClick,
  hidden,
}) => (
  <Spring
    from={{ opacity: 0 }}
    to={{
      opacity: hidden ? 0 : 1,
    }}
  >
    {(styles) => (
      <Button style={styles} onClick={onClick}>
        <CrossIcon width={40} height={40} />
      </Button>
    )}
  </Spring>
);
