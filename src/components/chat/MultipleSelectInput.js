import React from "react"
import {
  StyledOptionContainer,
  OptionsContainerStyled,
  WrappedOptionsContainerStyled
} from "../styles/chat"
import {
  PurpleRoundedButton,
  SendIconButton,
  InactiveSendIconButton,
  AnimatedWhiteRoundedButton
} from "../Button"
const R = require("ramda")

const MultipleSelectInput = ({ message, onChoiceSelected, done }) => {
  let opts = message.body.choices.map(choice => {
    let ButtonComponent = choice.selected
      ? PurpleRoundedButton
      : AnimatedWhiteRoundedButton
    return (
      <StyledOptionContainer key={choice.value}>
        <ButtonComponent
          key={choice.text}
          onClick={() => {
            onChoiceSelected(message, choice)
          }}
        >
          {choice.text}
        </ButtonComponent>
      </StyledOptionContainer>
    )
  })
  let Container =
    opts.length <= 4 ? OptionsContainerStyled : WrappedOptionsContainerStyled
  let SendButton = R.any(choice => choice.selected, message.body.choices) ? (
    <SendIconButton onClick={() => done(message)} />
  ) : (
    <InactiveSendIconButton />
  )
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end"
      }}
    >
      <Container>{opts}</Container>
      {SendButton}
    </div>
  )
}

export default MultipleSelectInput
