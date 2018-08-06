import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const Container = styled('div')`
  margin: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Bubble = styled('div')`
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

const Title = styled('span')`
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

export const PriceBubble = ({ title, aroundLabel, monthlyLabel, price }) => (
  <Container>
    <Title className="u-fontWeightBold">{title}</Title>
    <Bubble className="u-backgroundPrimaryPurple">
      <AroundLabel>{aroundLabel}</AroundLabel>
      <PriceValue className="u-fontWeightBold">{price}</PriceValue>
      <MonthLabel>{monthlyLabel}</MonthLabel>
    </Bubble>
  </Container>
);

PriceBubble.propTypes = {
  title: PropTypes.string.isRequired,
  aroundLabel: PropTypes.string.isRequired,
  monthlyLabel: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
