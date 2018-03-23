import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import { StyledMessage, MessageContainerStyled, StyledUserMessage } from "../styles/chat"
import EditMessageButton from "../../containers/chat/EditMessageButton"
import Avatar from "../../containers/chat/Avatar"
import LoadingIndicator from "../../containers/chat/LoadingIndicator"

const MessageContainer = styled.div`
  margin: 0 0 8px;
  display: flex;

  @media (min-width: 800px) {
    margin: 0 0 12px;
  }
`

const DefaultHedvigMessage = ({ message, textAlign }) => {
  return (
    <MessageContainerStyled>
      <StyledMessage style={{ textAlign }}>{message.body.text}</StyledMessage>
    </MessageContainerStyled>
  )
}

const DefaultUserMessageStyle = StyledUserMessage.extend`
  margin-right: ${props => (props.editAllowed ? "10px" : "0px")};
`

const DefaultUserMessage = ({ message, textAlign }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
      }}
    >
      <DefaultUserMessageStyle editAllowed={message.header.editAllowed}>
        {message.body.text}
      </DefaultUserMessageStyle>
      {message.header.editAllowed ? <EditMessageButton /> : null}
    </div>
  )
}

const UserMessageMapping = {}

const HedvigMessageMapping = {
  // hero: HeroMessage,
  bankid_collect: () => null // <-- This is how to not render certain types of messages from Hedvig
}

const renderMessage = function(message, idx, isLastMessage) {
  let fromMe = message.header.fromId !== 1
  let flexDirection = fromMe ? "row-reverse" : "row"
  let alignSelf = fromMe ? "flex-end" : "flex-start"
  let textAlign = fromMe ? "right" : "left"

  let MessageRenderComponent = fromMe
    ? DefaultUserMessage
    : DefaultHedvigMessage
  if (fromMe && UserMessageMapping.hasOwnProperty(message.body.type)) {
    MessageRenderComponent = UserMessageMapping[message.body.type]
  } else if (
    !fromMe &&
    HedvigMessageMapping.hasOwnProperty(message.body.type)
  ) {
    MessageRenderComponent = HedvigMessageMapping[message.body.type]
  }

  if (message.body.text !== "") {
    return (
      <React.Fragment key={message.globalId || idx}>
        {isLastMessage ? <Avatar messageIndex={idx} /> : null}
        <MessageContainer
          style={{
            flexDirection: flexDirection,
            alignSelf: alignSelf
          }}
        >
          <MessageRenderComponent message={message} textAlign={textAlign} />
        </MessageContainer>
      </React.Fragment>
    )
  } else {
    return null
  }
}

const renderMessages = function(messages) {
  return messages.map((msg, idx) =>
    renderMessage(msg, idx, idx === messages.length - 1)
  )
}

export default class MessageList extends React.Component {
  scrollToBottom = () => {
    if (this.messagesEnd) {
      const node = ReactDOM.findDOMNode(this.messagesEnd)
      node.scrollIntoView({ behavior: "smooth" })
    }
  }

  componentWillMount() {
    this.props.onScrollToBottomEvent(() => {
      setTimeout(() => this.scrollToBottom(), 200)
    })
  }

  // TODO: Deregister listener on componentWillUnmount

  render() {
    let messages = this.props.messages
    return (
      <React.Fragment>
        {renderMessages(messages)}
        <MessageContainerStyled>
          <LoadingIndicator messageIndex={messages.length - 1} />
        </MessageContainerStyled>
        {/* A div that comes at the bottom of the content, that we always scroll to */}
        <div
          style={{ float: "left", clear: "both" }}
          ref={el => {
            this.messagesEnd = el
          }}
        />
      </React.Fragment>
    )
  }
}
