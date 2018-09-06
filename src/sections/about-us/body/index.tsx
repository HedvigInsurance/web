import * as React from 'react';
import styled from 'react-emotion';
import remark from 'remark';
import reactRenderer from 'remark-react';

const BodyContainer = styled('div')({
  padding: '70px 0',
  width: '80%',
  maxWidth: '800px',
  margin: '0 auto',
});

const Title = styled('h1')({
  fontSize: 60,
  fontFamily: 'SoRay',
  lineHeight: '65px',
  '@media (max-width: 600px)': {
    fontSize: 48,
    lineHeight: '53px',
  },
});

const BodyText = styled('div')({
  marginTop: 20,
  fontSize: 16,
  lineHeight: '24px',
  fontFamily: 'CircularStd',
  'div > p': {
    marginTop: 25,
  },
});

interface BodyProps {
  title: string;
  text: string;
}

export const Body: React.SFC<BodyProps> = ({ title, text }) => (
  <BodyContainer>
    <Title>{title}</Title>
    <BodyText>
      {
        remark()
          .use(reactRenderer)
          .processSync(text).contents
      }
    </BodyText>
  </BodyContainer>
);
