import * as React from 'react';
import styled from 'react-emotion';
import { colors } from '@hedviginsurance/brand';

const FactsContainer = styled('div')({
  backgroundColor: '#FFF3F2',
  padding: '70px 20px',
  color: colors.BLACK_PURPLE,
});

const Title = styled('h3')({
  fontSize: 60,
  lineHeight: '65px',
  textAlign: 'center',
  fontFamily: 'SoRay',
});

const Grid = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  width: '80%',
  maxWidth: 700,
  margin: '0 auto',
  marginTop: 40,
});

const Fact = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const FactNumber = styled('span')({
  fontSize: 90,
  lineHeight: '95px',
  fontFamily: 'SoRay',
});

const FactExplainer = styled('span')({
  fontSize: 18,
  textAlign: 'center',
  marginTop: 20,
});

export const Facts = () => (
  <FactsContainer>
    <Title>Korta fakta</Title>
    <Grid>
      <Fact>
        <FactNumber>0</FactNumber>
        <FactExplainer>formulär ifyllda av våra medlemmar</FactExplainer>
      </Fact>
      <Fact>
        <FactNumber>0</FactNumber>
        <FactExplainer>minuters telefonkö</FactExplainer>
      </Fact>
      <Fact>
        <FactNumber>2.7</FactNumber>
        <FactExplainer>minuter att få svar i Hedvig-chatten</FactExplainer>
      </Fact>
    </Grid>
  </FactsContainer>
);
