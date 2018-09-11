import * as React from 'react';
import styled from 'react-emotion';
import { fonts } from '@hedviginsurance/brand';

interface Investor {
  image: string;
  name: string;
  type: string;
}

interface InverstorsProps {
  title: string;
  list: Investor[];
}

const InvestorsContainer = styled('div')({
  width: '80%',
  padding: '70px 0',
  maxWidth: '700px',
  margin: '0 auto',
});

const Title = styled('h3')({
  fontSize: 60,
  lineHeight: '65px',
  fontFamily: fonts.SORAY,
  marginBottom: 50,
  textAlign: 'center',
  '@media (max-width: 650px)': {
    fontSize: 45,
    lineHeight: '50px',
  },
});

const InvestorList = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  '@media (max-width: 650px)': {
    flexDirection: 'column',
  },
});

const InvestorContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@media (max-width: 650px)': {
    marginBottom: 30,
  },
});

const InvestorImage = styled('img')({
  width: '75px',
  height: '75px',
  objectFit: 'cover',
  borderRadius: 5,
});

const InvestorName = styled('span')({
  fontFamily: fonts.SORAY,
  fontSize: 18,
  lineHeight: '19px',
  marginTop: 15,
});

const InvestorType = styled('span')({
  fontSize: 15,
  lineHeight: '16px',
  marginTop: 5,
});

export const Investors: React.SFC<InverstorsProps> = ({ title, list }) => (
  <InvestorsContainer>
    <Title>{title}</Title>
    <InvestorList>
      {list.map(({ name, image, type }) => (
        <InvestorContainer key={name}>
          <InvestorImage src={image} />
          <InvestorName>{name}</InvestorName>
          <InvestorType>{type}</InvestorType>
        </InvestorContainer>
      ))}
    </InvestorList>
  </InvestorsContainer>
);
