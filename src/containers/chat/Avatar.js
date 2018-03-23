import { connect } from "react-redux"
import Avatar from "../../components/chat/Avatar"

const mapStateToProps = (state, ownProps) => {
  if (state.chat.messages.length > 0) {
    let message = state.chat.messages[ownProps.messageIndex]
    return {
      avatar: state.chat.avatars[message.header.avatarName] || {}
    }
  } else {
    return {
      avatar: {}
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    animationEnded: () => {}
    // dispatch(
    //   eventActions.event({
    //     type: "ANIMATION_COMPLETE"
    //   })
    // )
  }
}

const AvatarContainer = connect(mapStateToProps, mapDispatchToProps)(Avatar)

export default AvatarContainer
