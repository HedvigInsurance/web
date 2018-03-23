import { connect } from "react-redux"
import ChatTextInput from "../../components/chat/ChatTextInput"
import { chatActions } from "hedvig-redux"

const mapStateToProps = (state, ownProps) => {
  let message = state.chat.messages[ownProps.messageIndex]
  return {
    message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: (message, value) =>
      dispatch(chatActions.setResponseValue(message, value)),
    send: message =>
      dispatch(
        chatActions.sendChatResponse(message, {
          text: message._inputValue
        })
      )
  }
}

const ChatTextInputContainer = connect(mapStateToProps, mapDispatchToProps)(
  ChatTextInput
)

export default ChatTextInputContainer
