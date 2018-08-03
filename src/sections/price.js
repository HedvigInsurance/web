import React from 'react';
import styled from 'react-emotion';

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
  bottom_paragraph,
  rental_price,
  rental_title,
  owned_price,
  owned_title,
  monthly,
}) => (
  <div className="u-backgroundWhite">
    <Container>
      <Title>
        <h2>{heading}</h2>
      </Title>
      <PriceBoxes>
        <PriceContainer>
          <PriceTitle className="u-fontWeightBold">{rental_title}</PriceTitle>
          <PriceBox className="u-backgroundPrimaryPurple">
            <PriceValue className="u-fontWeightBold">{rental_price}</PriceValue>
            <MonthLabel>{monthly}</MonthLabel>
          </PriceBox>
        </PriceContainer>
        <PriceContainer>
          <PriceTitle className="u-fontWeightBold">{owned_title}</PriceTitle>
          <PriceBox className="u-backgroundPrimaryPurple">
            <PriceValue className="u-fontWeightBold">{owned_price}</PriceValue>
            <MonthLabel>{monthly}</MonthLabel>
          </PriceBox>
        </PriceContainer>
      </PriceBoxes>
      <PriceSubline className="u-fontSize85">
        <span>{bottom_paragraph}</span>
      </PriceSubline>
    </Container>
  </div>
);
