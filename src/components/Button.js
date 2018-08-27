import React from 'react';
import { colors } from '@hedviginsurance/brand';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const ButtonStyling = styled('button')({
  backgroundColor: colors.GREEN,
  padding: '15px 40px',
  borderRadius: 30,
  color: colors.WHITE,
  cursor: 'pointer',
});

export const Button = ({ children, onClick }) => (
  <ButtonStyling onClick={onClick}>{children}</ButtonStyling>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};
