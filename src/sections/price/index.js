import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

import { PriceBubble } from './bubble';

const Container = styled('div')`
  padding: 50px 0;
  padding-bottom: 100px;
`;

const Title = styled('div')`
  text-align: center;
  padding: 50px 20px;
  padding-bottom: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: SoRay, sans-serif;

  @media (min-width: 500px) {
    padding-bottom: 30px;
  }
`;

const PriceBubbles = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const BottomParagraph = styled('div')`
  margin-top: 25px;
  text-align: center;
`;

export const PriceSection = ({
  heading,
  bottomParagraph,
  rentalPrice,
  rentalTitle,
  ownedPrice,
  ownedTitle,
  monthlyLabel,
  aroundLabel,
}) => (
  <div className="u-backgroundWhite">
    <Container>
      <Title>
        <h2 className="u-fontSize4 u-md-fontSize2 u-lg-fontSize2">{heading}</h2>
      </Title>
      <PriceBubbles>
        <PriceBubble
          title={rentalTitle}
          price={rentalPrice}
          monthlyLabel={monthlyLabel}
          aroundLabel={aroundLabel}
        />
        <PriceBubble
          title={ownedTitle}
          price={ownedPrice}
          monthlyLabel={monthlyLabel}
          aroundLabel={aroundLabel}
        />
      </PriceBubbles>
      <BottomParagraph className="u-fontSize85">
        <span>{bottomParagraph}</span>
      </BottomParagraph>
    </Container>
  </div>
);

PriceSection.propTypes = {
  heading: PropTypes.string.isRequired,
  bottomParagraph: PropTypes.string.isRequired,
  rentalPrice: PropTypes.string.isRequired,
  rentalTitle: PropTypes.string.isRequired,
  ownedPrice: PropTypes.string.isRequired,
  ownedTitle: PropTypes.string.isRequired,
  monthlyLabel: PropTypes.string.isRequired,
  aroundLabel: PropTypes.string.isRequired,
};
