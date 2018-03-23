import React from "react"

import MessageList from "../containers/chat/MessageList"
import ChatNumberInput from "../containers/chat/ChatNumberInput"
import ChatTextInput from "../containers/chat/ChatTextInput"
//import DateInput from "../containers/chat/DateInput"
import MultipleSelectInput from "../containers/chat/MultipleSelectInput"
import SingleSelectInput from "../containers/chat/SingleSelectInput"
import BankIdCollectInput from "../containers/chat/BankIdCollectInput"
import ParagraphInput from "../containers/chat/ParagraphInput"
import FileInput from "../containers/chat/FileInput"
import Header from "../components/Header"

import "./chat.css"

const getInputComponent = function(messages) {
  if (messages.length === 0) {
    return null
  }
  let lastIndex = messages.length - 1
  let lastMessage = messages[lastIndex]
  let lastMessageType = lastMessage.body.type
  return {
    multiple_select: <MultipleSelectInput messageIndex={lastIndex} />,
    text: <ChatTextInput messageIndex={lastIndex} />,
    number: <ChatNumberInput messageIndex={lastIndex} />,
    single_select: <SingleSelectInput messageIndex={lastIndex} />,
    //date_picker: <DateInput messageIndex={lastIndex} />,
    bankid_collect: <BankIdCollectInput messageIndex={lastIndex} />,
    paragraph: <ParagraphInput messageIndex={lastIndex} />,
    file: <FileInput messageIndex={lastIndex} />
  }[lastMessageType]
}

export default class Chat extends React.Component {
  componentDidMount() {
    this.props.startWebChat()
  }

  render() {
    return (
      <main className="Chat">
        <Header
          static
          headerRight={
            <React.Fragment/>
          }
        />
        <div className="pure-g pure-centered">
          <div className="pure-u-1-1 pure-u-lg-2-3">
            <div className="Chat__chat-area">
              <MessageList />
            </div>

            <div className="pure-u-1-1">
              <div className="Chat__input-container">
                {getInputComponent(this.props.messages)}
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
