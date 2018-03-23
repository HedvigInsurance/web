import React from "react"

export default class ParagraphInput extends React.Component {
  componentDidMount() {
    this.props.startPolling(this.props.message.header.pollingInterval)
  }

  componentDidUpdate() {
    this.props.startPolling(this.props.message.header.pollingInterval)
  }

  componentWillUnmount() {
    this.props.stopPolling()
  }

  render() {
    return null
  }
}
