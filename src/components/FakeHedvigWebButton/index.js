import React from 'react';
import styled from 'react-emotion';
import { Container } from 'constate';

import { trackEvent } from 'src/utils/track-event';
import { Dialog } from '../Dialog';
import { Button } from '../Button';

const OrText = styled('span')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 30,
  fontSize: 23,
  textAlign: 'center',
  fontWeight: 'bold',
});

const ButtonContainer = styled('div')({
  marginTop: 30,
  textAlign: 'center',
});

const actions = {
  setVisible: (visible) => () => ({
    visible,
  }),
};

const initialState = {
  visible: false,
};

export const FakeHedvigWebButton = () => (
  <Container actions={actions} initialState={initialState}>
    {({ setVisible, visible }) => (
      <React.Fragment>
        <OrText>Eller...</OrText>
        <ButtonContainer
          onClick={() => {
            setVisible(true);
            trackEvent('Click fake web button');
          }}
        >
          <Button>Skaffa hedvig på webben</Button>
        </ButtonContainer>
        <Dialog onRequestClose={() => setVisible(false)} visible={visible} />
      </React.Fragment>
    )}
  </Container>
);
