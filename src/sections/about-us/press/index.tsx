import * as React from 'react';
import styled from 'react-emotion';

import { PressItem } from './press-item';

const PressContainer = styled('div')({
  padding: '70px 0',
  width: '80%',
  margin: '0 auto',
  maxWidth: 700,
});

const Title = styled('h3')({
  fontSize: 60,
  lineHeight: '65px',
  fontFamily: 'SoRay',
  marginBottom: 40,
});

const Footnote = styled('span')({
  display: 'block',
  fontSize: 18,
  lineHeight: '20px',
  marginTop: 40,
  textAlign: 'center',
});

export const Press = () => (
  <PressContainer>
    <Title>Press</Title>
    <PressItem title="" image="" text="" />
    <Footnote>
      Vi finns på press@hedvig.com och våra presskit finns att ladda ner här.
    </Footnote>
  </PressContainer>
);
