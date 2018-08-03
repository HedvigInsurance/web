import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const Container = styled('div')`
  padding: 50px 0;
`;

const Title = styled('div')`
  text-align: center;
  margin-bottom: 30px;
`;

const PriceBoxes = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const PriceContainer = styled('div')`
  margin: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const PriceBox = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 65px;
  height: 130px;
  width: 130px;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2);
  font-size: 25px;
  flex-direction: column;
`;

const PriceTitle = styled('span')`
  margin-bottom: 15px;
  font-size: 22px;
`;

const PriceValue = styled('span')`
  font-size: 30px;
  color: white;
`;

const AroundLabel = styled('span')`
  color: white;
  font-size: 15px;
`;

const MonthLabel = styled('span')`
  color: white;
  font-size: 15px;
`;

const PriceSubline = styled('div')`
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
        <h2>{heading}</h2>
      </Title>
      <PriceBoxes>
        <PriceContainer>
          <PriceTitle className="u-fontWeightBold">{rentalTitle}</PriceTitle>
          <PriceBox className="u-backgroundPrimaryPurple">
            <AroundLabel>{aroundLabel}</AroundLabel>
            <PriceValue className="u-fontWeightBold">{rentalPrice}</PriceValue>
            <MonthLabel>{monthlyLabel}</MonthLabel>
          </PriceBox>
        </PriceContainer>
        <PriceContainer>
          <PriceTitle className="u-fontWeightBold">{ownedTitle}</PriceTitle>
          <PriceBox className="u-backgroundPrimaryPurple">
            <AroundLabel>{aroundLabel}</AroundLabel>
            <PriceValue className="u-fontWeightBold">{ownedPrice}</PriceValue>
            <MonthLabel>{monthlyLabel}</MonthLabel>
          </PriceBox>
        </PriceContainer>
      </PriceBoxes>
      <PriceSubline className="u-fontSize85">
        <span>{bottomParagraph}</span>
      </PriceSubline>
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
