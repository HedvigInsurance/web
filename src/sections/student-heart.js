import React from 'react';
import styled, { css } from 'react-emotion';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const mediaQuery = (styles) => css`
  @media (min-width: 650px) {
    ${styles};
  }
`;

const MARGIN = 35;

const Container = styled('div')`
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  flex-direction: row;

  ${mediaQuery(`
    padding-top: 70px;
    padding-bottom: 70px;
  `)};
`;

const Wordmark = styled(Img)`
  width: 80px;
  margin-right: ${MARGIN}px;

  ${mediaQuery(`
    width: 150px;
  `)};
`;

const Heart = styled(Img)`
  width: 40px;

  ${mediaQuery(`
    width: 80px;
  `)};
`;

const Text = styled('span')`
  font-size: 23px;
  color: white;
  font-weight: 600;
  margin-left: ${MARGIN}px;

  ${mediaQuery(`
    font-size: 45px;
  `)};
`;

export const StudentHeart = ({ heartFile, wordmarkFile }) => (
  <Container className="u-backgroundPrimaryPurple">
    {wordmarkFile && (
      <Wordmark sizes={wordmarkFile.image.sizes} role="presentation" />
    )}
    {heartFile && (
      <Heart sizes={heartFile.image.sizes} alt="Hedvig älskar studenter" />
    )}
    <Text role="presentation">studenter</Text>
  </Container>
);

StudentHeart.propTypes = {
  heartFile: PropTypes.object.isRequired,
  wordmarkFile: PropTypes.object.isRequired,
};
