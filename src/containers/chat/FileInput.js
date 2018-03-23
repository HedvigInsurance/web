import { connect } from "react-redux"
import FileInput from "../../components/chat/FileInput"
import { chatActions, uploadActions } from "hedvig-redux"

const mapStateToProps = (state, ownProps) => {
  let message = state.chat.messages[ownProps.messageIndex]
  return {
    message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    upload: (message, file) =>
      dispatch(
        uploadActions.upload({
          fileList: file,
          successActionCreator: url =>
            chatActions.sendChatResponse(message, {
              type: "file",
              text: url
            })
        })
      )
  }
}

const FileInputContainer = connect(mapStateToProps, mapDispatchToProps)(
  FileInput
)

export default FileInputContainer
