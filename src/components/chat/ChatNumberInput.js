import React from "react"
import ChatTextInput from "./ChatTextInput"

const ChatNumberInput = ({ message, onChange, send }) => (
  <ChatTextInput
    message={message}
    onChange={onChange}
    send={send}
    type="tel"
  />
)

export default ChatNumberInput
