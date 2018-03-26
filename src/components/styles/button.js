import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const ButtonStyled = ({ children, ...props }) => (
  <button className="Button" {...props}>
    {children}
  </button>
);

ButtonStyled.propTypes = {
  children: PropTypes.node.isRequired,
};

export const RoundedButtonStyled = ({ children, ...props }) => (
  <button className="Button Button--rounded" {...props}>
    {children}
  </button>
);

RoundedButtonStyled.propTypes = {
  children: PropTypes.node.isRequired,
};

export const TurquoiseRoundedButtonStyled = ({ children, ...props }) => (
  <button className="Button__turquoise-round" {...props}>
    {children}
  </button>
);

TurquoiseRoundedButtonStyled.propTypes = {
  children: PropTypes.node.isRequired,
};

export const PurpleRoundedButtonStyled = ({ children, ...props }) => (
  <button className="Button Button--rounded Button--purple" {...props}>
    {children}
  </button>
);

PurpleRoundedButtonStyled.propTypes = {
  children: PropTypes.node.isRequired,
};

export const BlackPurpleRoundedButtonStyled = ({ children, ...props }) => (
  <button className="Button Button--rounded Button--blackPurple" {...props}>
    {children}
  </button>
);

BlackPurpleRoundedButtonStyled.propTypes = {
  children: PropTypes.node.isRequired,
};

export const BlackPurpleRoundedButtonWhiteBorderStyled = ({ children, ...props }) => (
  <button className="Button__black-purple-round" {...props}>
    {children}
  </button>
);

BlackPurpleRoundedButtonWhiteBorderStyled.propTypes = {
  children: PropTypes.node.isRequired,
};

export const WhiteRoundedButtonStyled = ({ children, ...props }) => (
  <button className="Button__white-round" {...props}>
    {children}
  </button>
);

WhiteRoundedButtonStyled.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AnimatedWhiteRoundedButtonStyled = ({ children, ...props }) => (
  <button className="Button__white-round Button__slideFromRight" {...props}>
    {children}
  </button>
);

AnimatedWhiteRoundedButtonStyled.propTypes = {
  children: PropTypes.node.isRequired,
};

export const InactiveWhiteRoundedButtonStyled = ({ children, ...props }) => (
  <button className="Button__white-round Button__inactive" {...props}>
    {children}
  </button>
);

InactiveWhiteRoundedButtonStyled.propTypes = {
  children: PropTypes.node.isRequired,
};

export const SlideDownCtaButton = ({ children }) => (
  <button className="Button__turquoise-round Button__slideDown">{children}</button>
);

SlideDownCtaButton.propTypes = {
  children: PropTypes.node.isRequired,
};
