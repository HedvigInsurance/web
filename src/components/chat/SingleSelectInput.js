import React from "react"
import { Link } from "react-router-dom"
import {
  OptionsContainerStyled,
  WrappedOptionsContainerStyled,
  StyledOptionContainer
} from "../styles/chat"
import { WhiteRoundedButton } from "../Button"

const ViewUrlMapping = {
  Offer: "/offer"
}

const SingleSelectInput = ({ message, selectChoice, done }) => {
  let opts = message.body.choices.map(choice => {
    let content
    if (choice.type === "link" && choice.webUrl !== null) {
      content = (
        <a href={choice.webUrl} target="_blank">
          {choice.text}
        </a>
      )
    } else if (choice.type === "link" && choice.appUrl !== null) {
      content = <a href={choice.appUrl}>{choice.text}</a>
    } else if (choice.type === "link" && choice.view !== null) {
      content = <Link to={ViewUrlMapping[choice.view]}>{choice.text}</Link>
    } else {
      content = choice.text
    }
    return (
      <StyledOptionContainer key={choice.value}>
        <WhiteRoundedButton
          key={choice.text}
          style={{ cursor: "pointer" }}
          onClick={() => {
            selectChoice(message, choice)
            done(message)
          }}
        >
          {content}
        </WhiteRoundedButton>
      </StyledOptionContainer>
    )
  })
  let Container =
    opts.length <= 4 ? OptionsContainerStyled : WrappedOptionsContainerStyled
  return <Container>{opts}</Container>
}

export default SingleSelectInput
