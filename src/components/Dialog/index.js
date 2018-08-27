import React from 'react';
import { colors } from '@hedviginsurance/brand';
import styled from 'react-emotion';
import { Spring } from 'react-spring';
import Delayed from 'react-delayed';

import { Button } from 'src/components/Button';
import { Modal } from './modal';

const coverStyling = {
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
};

const Background = styled('div')({
  backgroundColor: 'rgba(0,0,0,0.25)',
  ...coverStyling,
  zIndex: 20000,
  cursor: 'pointer',
});

const ContentContainer = styled('div')({
  position: 'fixed',
  top: '50%',
  left: '50%',
  zIndex: 20001,
  transformOrigin: '0 0',
});

const InnerContent = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'column',
  backgroundColor: colors.WHITE,
  padding: '50px 30px',
  textAlign: 'center',
  borderRadius: 20,
  width: 450,
  maxWidth: '90%',
  height: 300,
  transform: 'translateX(-50%) translateY(-50%)',
});

const Spacing = styled('div')({
  width: 1,
  height: 10,
});

export const Dialog = ({ visible, onRequestClose }) => {
  const opacityFrom = { opacity: visible ? 0 : 1 };
  const opacityTo = { opacity: visible ? 1 : 0 };

  const transformFrom = {
    ...opacityFrom,
    transform: visible
      ? 'translateY(100px) scale(0.8)'
      : 'translateY(0) scale(1)',
  };
  const transformTo = {
    ...opacityTo,
    transform: visible
      ? 'translateY(0) scale(1)'
      : 'translateY(100px) scale(0.8)',
  };

  return (
    <Delayed mounted={visible} mountAfter={0} unmountAfter={500}>
      <Modal>
        <Spring from={opacityFrom} to={opacityTo}>
          {(styles) => <Background onClick={onRequestClose} style={styles} />}
        </Spring>
        <Spring from={transformFrom} to={transformTo}>
          {(styles) => (
            <ContentContainer style={styles}>
              <InnerContent>
                <h3>Vi jobbar på det!</h3>
                <Spacing />
                <p>
                  Du kan snart skaffa Hedvig på webben, tack för visat intresse!
                  🙌
                </p>
                <Spacing />
                <Button onClick={onRequestClose}>Okej</Button>
              </InnerContent>
            </ContentContainer>
          )}
        </Spring>
      </Modal>
    </Delayed>
  );
};
