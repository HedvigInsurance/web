import { connect } from "react-redux"
import Chat from "../components/Chat"
import { chatActions, dialogActions } from "hedvig-redux"

const mapStateToProps = state => {
  return {
    messages: state.chat.messages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startWebChat: () => dispatch({type: "CHAT/START_WEB_CHAT"}),
    getMessages: () => dispatch(chatActions.getMessages()),
    resetConversation: () =>
      dispatch(
        dialogActions.showDialog({
          title: "Återställ konversation?",
          paragraph: "Är du säker på att du vill återställa konverstationen?",
          confirmButtonTitle: "Ja",
          dismissButtonTitle: "Nej",
          onConfirm: () => dispatch(chatActions.resetConversation()),
          onDismiss: () =>
            console.log("User didn't wan't to reset conversation.")
        })
      ),
    editLastResponse: () => dispatch(chatActions.editLastResponse())
  }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat)

export default ChatContainer
