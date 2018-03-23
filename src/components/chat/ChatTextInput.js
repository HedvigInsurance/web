import React from "react"

import {
  SendIconButton,
  InactiveSendIconButton,
} from "../Button"
import { TextInputStyled } from "../styles/chat"

export default class ChatTextInput extends React.Component {
  componentDidMount() {
    if (this.input) {
      this.input.focus()
    }
  }

  componentDidUpdate() {
    if (this.input) {
      this.input.focus()
    }
  }

  render() {
    const { message, onChange, send, type = "text" } = this.props

    let SendButton = message._inputValue ? (
      <SendIconButton type="submit" />
    ) : (
      <InactiveSendIconButton />
    )
    return (
      <form
        onSubmit={e => {
          e.preventDefault()
          send(message)
        }}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end"
        }}
      >
        <TextInputStyled
          type={type}
          placeholder="Skriv här..."
          innerRef={input => (this.input = input)}
          value={message._inputValue || ""}
          onChange={event => {
            onChange(message, event.target.value)
          }}
          style={{ marginBottom: "10px" }}
        />
        <div style={{ display: "flex", marginBottom: "10px", marginLeft: "10px" }}>
          {SendButton}
        </div>
      </form>
    )
  }
}
