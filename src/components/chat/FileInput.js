import React from "react"
import ReactFileReader from "react-file-reader"
import { WhiteRoundedButton } from "../Button"

export default class FileInput extends React.Component {
  handleFiles(file) {
    this.props.upload(this.props.message, file)
  }

  render() {
    return (
      <div>
        <ReactFileReader handleFiles={this.handleFiles.bind(this)}>
          <WhiteRoundedButton
            style={{
              cursor: "pointer",
              backgroundColor: "green",
              color: "white",
              padding: 5
            }}
          >
            Välj fil
          </WhiteRoundedButton>
        </ReactFileReader>
      </div>
    )
  }
}
