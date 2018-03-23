import React from "react"
import {
  TurquoiseRoundedButtonStyled,
  PurpleRoundedButtonStyled,
  BlackPurpleRoundedButtonStyled,
  BlackPurpleRoundedButtonWhiteBorderStyled,
  WhiteRoundedButtonStyled,
  InactiveWhiteRoundedButtonStyled,
  AnimatedWhiteRoundedButtonStyled
} from "./styles/button"

const defaultOnClick = () => {}

// Regular rounded buttons

export const TurquoiseRoundedButton = ({ onClick, children, ...props }) => (
  <TurquoiseRoundedButtonStyled onClick={onClick || defaultOnClick} {...props}>
    {children || "No Content"}
  </TurquoiseRoundedButtonStyled>
)

export const BlackPurpleRoundedButton = ({ onClick, children }) => (
  <BlackPurpleRoundedButtonStyled onClick={onClick || defaultOnClick}>
    {children || "No Content"}
  </BlackPurpleRoundedButtonStyled>
)

export const BlackPurpleRoundedButtonWhiteBorder = ({ onClick, children, ...props }) => (
  <BlackPurpleRoundedButtonWhiteBorderStyled
    onClick={onClick || defaultOnClick}
    {...props}
  >
    {children || "No Content"}
  </BlackPurpleRoundedButtonWhiteBorderStyled>
)

export const PurpleRoundedButton = ({ onClick, children }) => (
  <PurpleRoundedButtonStyled onClick={onClick || defaultOnClick}>
    {children || "No Content"}
  </PurpleRoundedButtonStyled>
)

export const WhiteRoundedButton = ({ onClick, children, ...props }) => (
  <WhiteRoundedButtonStyled
    onClick={onClick || defaultOnClick}
    {...props}
  >
    {children || "No Content"}
  </WhiteRoundedButtonStyled>
)

export const AnimatedWhiteRoundedButton = ({ onClick, children }) => (
  <AnimatedWhiteRoundedButtonStyled onClick={onClick || defaultOnClick}>
    {children || "No content"}
  </AnimatedWhiteRoundedButtonStyled>
)

export const InactiveWhiteRoundedButton = ({ onClick, children }) => (
  <InactiveWhiteRoundedButtonStyled onClick={onClick || defaultOnClick}>
    {children || "No Content"}
  </InactiveWhiteRoundedButtonStyled>
)

// For storybook

export const ButtonsExample = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: 40
    }}
  >
    <TurquoiseRoundedButton>TurquoiseRoundedButton</TurquoiseRoundedButton>
    <br />

    <PurpleRoundedButton>PurpleRoundedButton</PurpleRoundedButton>
    <br />

    <BlackPurpleRoundedButton>
      BlackPurpleRoundedButton
    </BlackPurpleRoundedButton>
    <br />

    <BlackPurpleRoundedButtonWhiteBorder>
      BlackPurpleRoundedButtonWhiteBorder
    </BlackPurpleRoundedButtonWhiteBorder>
    <br />

    <WhiteRoundedButton>WhiteRoundedButton</WhiteRoundedButton>
    <br />

    <InactiveWhiteRoundedButton>
      InactiveWhiteRoundedButton
    </InactiveWhiteRoundedButton>
    <br />
  </div>
)
