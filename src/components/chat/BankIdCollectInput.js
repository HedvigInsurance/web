import React from "react"

export default class BankIdCollectInput extends React.Component {
  componentDidMount() {
    this.props.startCollecting(this.props.message.body.referenceId)
  }

  render() {
    return null
  }
}
