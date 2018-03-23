import { connect } from "react-redux"
import MessageList from "../../components/chat/MessageList"
import { listenerActions, types } from "hedvig-redux"

const mapStateToProps = (state, ownProps) => {
  return {
    messages: state.chat.messages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onScrollToBottomEvent: callback =>
      dispatch(listenerActions.addListener(types.LOADED_MESSAGES, callback))
  }
}

const MessageListContainer = connect(mapStateToProps, mapDispatchToProps)(
  MessageList
)

export default MessageListContainer
