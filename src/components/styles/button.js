import React from "react"
import "./button.css"

export const ButtonStyled = ({children, ...props}) => (
  <button
    className="Button"
    {...props}
  >
    {children}
  </button>
)

export const RoundedButtonStyled = ({children, ...props}) => (
  <button
    className="Button Button--rounded"
    {...props}
  >
    {children}
  </button>
)

export const TurquoiseRoundedButtonStyled = ({children, ...props}) => (
  <button
    className="Button__turquoise-round"
    {...props}
  >
    {children}
  </button>
)

export const PurpleRoundedButtonStyled = ({children, ...props}) => (
  <button
    className="Button Button--rounded Button--purple"
    {...props}
  >
    {children}
  </button>
)

export const BlackPurpleRoundedButtonStyled = ({children, ...props}) => (
  <button
    className="Button Button--rounded Button--blackPurple"
    {...props}
  >
    {children}
  </button>
)

export const BlackPurpleRoundedButtonWhiteBorderStyled = ({children, ...props}) => (
  <button
    className="Button__black-purple-round"
    {...props}
  >
    {children}
  </button>
)

export const WhiteRoundedButtonStyled = ({children, ...props}) => (
  <button
    className="Button__white-round"
    {...props}
  >
    {children}
  </button>
)

export const AnimatedWhiteRoundedButtonStyled = ({children, ...props}) => (
  <button
    className="Button__white-round Button__slideFromRight"
    {...props}
  >
    {children}
  </button>
)

export const InactiveWhiteRoundedButtonStyled = ({children, ...props}) => (
  <button
    className="Button__white-round Button__inactive"
    {...props}
  >
    {children}
  </button>
)

export const SlideDownCtaButton = ({children, ...props}) => (
  <button
    className="Button__turquoise-round Button__slideDown"
  >
    {children}
  </button>
)
