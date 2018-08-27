import React from 'react';
import styled from 'react-emotion';
import { Container } from 'constate';

import { trackEvent } from 'src/utils/track-event';
import { Dialog } from '../Dialog';
import { Button } from '../Button';

const ButtonContainer = styled('div')({
  marginTop: 50,
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
