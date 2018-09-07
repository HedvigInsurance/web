import * as React from 'react';
import styled from 'react-emotion';
import { colors } from '@hedviginsurance/brand';

const FactsContainer = styled('div')({
  backgroundColor: '#FFF3F2',
  padding: '70px 20px',
  color: colors.BLACK_PURPLE,
});

const MEDIA_QUERY_WIDTH = '650px';
const MEDIA_QUERY = `@media (min-width: ${MEDIA_QUERY_WIDTH})`;

const Title = styled('h3')({
  fontSize: 45,
  lineHeight: '50px',
  textAlign: 'center',
  fontFamily: 'SoRay',
  [MEDIA_QUERY]: {
    fontSize: 60,
    lineHeight: '65px',
  },
});

const Grid = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  width: '80%',
  maxWidth: 700,
  margin: '0 auto',
  flexDirection: 'column',
  [MEDIA_QUERY]: {
    flexDirection: 'row',
  },
});

const Fact = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 40,
});

const FactNumber = styled('span')({
  fontSize: 70,
  lineHeight: '75px',
  fontFamily: 'SoRay',
  [MEDIA_QUERY]: {
    fontSize: 90,
    lineHeight: '95px',
  },
});

const FactExplainer = styled('span')({
  fontSize: 14,
  lineHeight: '15px',
  textAlign: 'center',
  marginTop: 0,
  [MEDIA_QUERY]: {
    marginTop: 20,
    fontSize: 18,
    lineHeight: '19px',
  },
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
