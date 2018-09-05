import * as React from 'react';
import styled from 'react-emotion';
import { Spring } from 'react-spring';

const Button = styled('button')({
  position: 'absolute',
  top: 20,
  left: 20,
  color: 'white',
});

interface CloseButtonProps {
  onClick: () => void;
  hidden: boolean;
}

export const CloseButton: React.SFC<CloseButtonProps> = ({
  onClick,
  hidden,
}) => (
  <Spring from={{ opacity: 0 }} to={{ opacity: hidden ? 0 : 1 }}>
    {(styles) => (
      <Button style={styles} onClick={onClick}>
        Stoppa
      </Button>
    )}
  </Spring>
);
