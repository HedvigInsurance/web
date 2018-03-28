import React from 'react';
import PropTypes from 'prop-types';
import {
  TurquoiseRoundedButtonStyled,
  PurpleRoundedButtonStyled,
  BlackPurpleRoundedButtonStyled,
  BlackPurpleRoundedButtonWhiteBorderStyled,
  WhiteRoundedButtonStyled,
  InactiveWhiteRoundedButtonStyled,
  AnimatedWhiteRoundedButtonStyled,
} from './styles/button';

const defaultOnClick = () => {};

// Regular rounded buttons

export const TurquoiseRoundedButton = ({ onClick, children, ...props }) => (
  <TurquoiseRoundedButtonStyled onClick={onClick} {...props}>
    {children}
  </TurquoiseRoundedButtonStyled>
);

TurquoiseRoundedButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

TurquoiseRoundedButton.defaultProps = {
  children: 'No Content',
  onClick: defaultOnClick,
};

export const BlackPurpleRoundedButton = ({ onClick, children }) => (
  <BlackPurpleRoundedButtonStyled onClick={onClick}>{children}</BlackPurpleRoundedButtonStyled>
);

BlackPurpleRoundedButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

BlackPurpleRoundedButton.defaultProps = {
  children: 'No Content',
  onClick: defaultOnClick,
};

export const BlackPurpleRoundedButtonWhiteBorder = ({ onClick, children, ...props }) => (
  <BlackPurpleRoundedButtonWhiteBorderStyled onClick={onClick} {...props}>
    {children}
  </BlackPurpleRoundedButtonWhiteBorderStyled>
);

BlackPurpleRoundedButtonWhiteBorder.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

BlackPurpleRoundedButtonWhiteBorder.defaultProps = {
  children: 'No Content',
  onClick: defaultOnClick,
};

export const PurpleRoundedButton = ({ onClick, children }) => (
  <PurpleRoundedButtonStyled onClick={onClick}>{children}</PurpleRoundedButtonStyled>
);

PurpleRoundedButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

PurpleRoundedButton.defaultProps = {
  children: 'No Content',
  onClick: defaultOnClick,
};

export const WhiteRoundedButton = ({ onClick, children, ...props }) => (
  <WhiteRoundedButtonStyled onClick={onClick} {...props}>
    {children}
  </WhiteRoundedButtonStyled>
);

WhiteRoundedButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

WhiteRoundedButton.defaultProps = {
  children: 'No Content',
  onClick: defaultOnClick,
};

export const AnimatedWhiteRoundedButton = ({ onClick, children }) => (
  <AnimatedWhiteRoundedButtonStyled onClick={onClick}>{children}</AnimatedWhiteRoundedButtonStyled>
);

AnimatedWhiteRoundedButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

AnimatedWhiteRoundedButton.defaultProps = {
  children: 'No Content',
  onClick: defaultOnClick,
};

export const InactiveWhiteRoundedButton = ({ onClick, children }) => (
  <InactiveWhiteRoundedButtonStyled onClick={onClick}>{children}</InactiveWhiteRoundedButtonStyled>
);

InactiveWhiteRoundedButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

InactiveWhiteRoundedButton.defaultProps = {
  children: 'No Content',
  onClick: defaultOnClick,
};
