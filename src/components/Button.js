import React from "react"
import {
  TurquoiseRoundedButtonStyled,
  PurpleRoundedButtonStyled,
  BlackPurpleRoundedButtonStyled,
  BlackPurpleRoundedButtonWhiteBorderStyled,
  WhiteRoundedButtonStyled,
  InactiveWhiteRoundedButtonStyled,
  IconButtonStyled,
  InactiveIconButtonStyled,
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

// Icon buttons

const IconButton = ({ onClick, iconUrl, size, ...props }) => (
  <IconButtonStyled
    iconUrl={iconUrl}
    size={size}
    onClick={onClick || defaultOnClick}
    {...props}
  />
)

const InactiveIconButton = ({ onClick, iconUrl, size }) => (
  <InactiveIconButtonStyled iconUrl={iconUrl} size={size} />
)

export const SendIconButton = ({ onClick, ...props }) =>
  IconButton({ iconUrl: "/assets/icons/chat/send.svg", onClick, ...props})

export const InactiveSendIconButton = ({ onClick }) =>
  InactiveIconButton({ iconUrl: "/assets/icons/chat/send_idle.svg", onClick })

export const ExitIconButton = ({ onClick, ...props }) =>
  IconButton({ iconUrl: "/assets/icons/chat/exit.svg", onClick, ...props })

export const ResetIconButton = ({ onClick, ...props }) =>
  IconButton({ iconUrl: "/assets/icons/chat/restart.svg", onClick, ...props})

export const EditIconButton = ({ onClick }) =>
  IconButton({
    iconUrl: "/assets/icons/chat/edit_last_message.svg",
    size: "medium",
    onClick
  })

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

    <h4>SendIconButton</h4>
    <SendIconButton />
    <br />

    <h4>InactiveSendIconButton</h4>
    <InactiveSendIconButton />
    <br />

    <h4>ExitIconButton</h4>
    <ExitIconButton />
    <br />

    <h4>ResetIconButton</h4>
    <ResetIconButton />
    <br />

    <h4>EditIconButton</h4>
    <EditIconButton />
  </div>
)
