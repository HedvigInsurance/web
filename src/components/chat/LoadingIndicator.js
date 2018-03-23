import React from "react"
import Lottie from "react-lottie"

export default class LoadingIndicator extends React.Component {
  render() {
    if (this.props.loadingMessages && this.props.avatar.data) {
      return (
        <div
          style={{
            height: this.props.avatar.height,
            width: this.props.avatar.width
            // borderWidth: 1,
            // borderColor: "black"
          }}
        >
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: this.props.avatar.data
            }}
            height={this.props.avatar.height}
            width={this.props.avatar.width}
          />
        </div>
      )
    } else {
      // TODO: Show a loader here if necessary?
      // return <Text>Loading...</Text>
      return null
    }
  }
}
