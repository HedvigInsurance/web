import React from 'react';
import styled, { css } from 'react-emotion';
import Img from 'gatsby-image';

const MARGIN = 35;

const mediaQuery = (styles = css`
  @media (min-width: 650px) {
    ${styles};
  }
`);

const Container = styled('div')`
  padding-top: 70px;
  padding-bottom: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  flex-direction: column;

  ${mediaQuery(`flex-direction: row;`)} @media (min-width: 650px) {
    flex-direction: row;
  }
`;

const Wordmark = styled(Img)`
  width: 150px;
  margin-bottom: ${MARGIN}px;

  @media (min-width: 650px) {
    margin-right: ${MARGIN}px;
    margin-bottom: 0;
  }
`;

const Text = styled('span')`
  font-size: 45px;
  color: white;
  font-weight: 600;
  margin-top: ${MARGIN}px;

  @media (min-width: 650px) {
    margin-left: ${MARGIN}px;
    margin-top: 0;
  }
`;

export const StudentHeart = ({ heartFile, wordmarkFile }) => (
  <Container className="u-backgroundPrimaryPurple">
    {wordmarkFile && (
      <Wordmark sizes={wordmarkFile.image.sizes} alt="Hedvig logotyp" />
    )}
    {heartFile && (
      <Img
        className="Student-heart"
        sizes={heartFile.image.sizes}
        alt="Hedvig loves students"
      />
    )}
    <Text>Studenter</Text>
  </Container>
);
