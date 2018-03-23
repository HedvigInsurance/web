import React from "react"
import Modal from "react-modal"

import {
  DialogContainerStyle,
  DialogTitleStyle,
  DialogParagraphStyle,
  DialogButtonsContainerStyle,
  DialogButtonStyle
} from "./styles/dialog"

Modal.setAppElement("#root")

export default class Dialog extends React.Component {
  close() {
    this.props.emptyDialog()
  }

  confirmButtonPressed() {
    this.props.confirmButtonPressed()
    this.close()
  }

  dismissButtonPressed() {
    this.props.dismissButtonPressed()
    this.close()
  }

  buttons() {
    let title = this.props.message.dismissButtonTitle
    if (
      this.props.message.confirmButtonTitle &&
      !this.props.message.dismissButtonTitle
    ) {
      title = "Ok"
    }
    let dismissButton = (
      <DialogButtonStyle
        position="left"
        onClick={() => this.dismissButtonPressed()}
      >
        {title}
      </DialogButtonStyle>
    )
    let confirmButton
    if (this.props.message.confirmButtonTitle) {
      confirmButton = (
        <DialogButtonStyle
          position="right"
          onClick={() => this.confirmButtonPressed()}
        >
          {this.props.message.confirmButtonTitle}
        </DialogButtonStyle>
      )
    }

    return (
      <DialogButtonsContainerStyle>
        {dismissButton}
        {confirmButton}
      </DialogButtonsContainerStyle>
    )
  }

  render() {
    return (
      <Modal
        isOpen={!!this.props.message.title}
        contentLabel="Dialog"
        onRequestClose={() => this.close()}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          content: {
            borderRadius: 8,
            padding: 0,
            minHeight: 200,
            maxWidth: "80%",
            position: "absolute",
          }
        }}
        className="__react_modal"
      >
        <DialogContainerStyle>
          <DialogTitleStyle>{this.props.message.title}</DialogTitleStyle>
          <DialogParagraphStyle>
            {this.props.message.paragraph}
          </DialogParagraphStyle>
          {this.buttons()}
        </DialogContainerStyle>
      </Modal>
    )
  }
}
