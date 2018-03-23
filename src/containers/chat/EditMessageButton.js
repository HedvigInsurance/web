import { connect } from "react-redux"

import { EditIconButton } from "../../components/Button"
import { dialogActions, chatActions } from "hedvig-redux"

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: () =>
      dispatch(
        dialogActions.showDialog({
          title: "Är du säker?",
          paragraph: "Om du trycker ja så tas detta meddelande bort.",
          confirmButtonTitle: "Ja",
          dismissButtonTitle: "Nej",
          onConfirm: () => dispatch(chatActions.editLastResponse()),
          onDismiss: () => console.log("User didn't want to edit conversation.")
        })
      )
  }
}

const EditIconButtonContainer = connect(mapStateToProps, mapDispatchToProps)(
  EditIconButton
)

export default EditIconButtonContainer
