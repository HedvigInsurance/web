import React from "react"
import styled from "styled-components"
import "./button.css"


export const ButtonStyled = styled.button`
  font-family: "Circular Std Book";
  font-size: 18px;
  line-height: 22px;
  padding: 12px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  border: 1px solid transparent;

  > a {
    color: inherit;
    text-decoration: none;
    &:visited,
    &:active,
    &:hover,
    &:link {
      color: inherit;
      text-decoration: none;
    }
  }
`

export const RoundedButtonStyled = ButtonStyled.extend`
  border-radius: 24px;
`

export const TurquoiseRoundedButtonStyled = ({children, ...props}) => (
  <button
    className="Button__turquoise-round"
    {...props}
  >
    {children}
  </button>
)

export const PurpleRoundedButtonStyled = RoundedButtonStyled.extend`
  background-color: ${props => props.theme.colors.purple};
  color: white;
`

export const BlackPurpleRoundedButtonStyled = RoundedButtonStyled.extend`
  background-color: ${props => props.theme.colors.blackPurple};
  color: white;
`

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

const iconSizes = {
  medium: 24,
  big: 40
}
export const IconButtonStyled = RoundedButtonStyled.extend`
  border: none;
  padding: 0px;
  width: ${props => iconSizes[props.size || "big"]}px;
  height: ${props => iconSizes[props.size || "big"]}px;
  background-image: url(${props => props.iconUrl});
  margin-left: auto;
`

export const InactiveIconButtonStyled = IconButtonStyled.extend`
  cursor: default;
`
