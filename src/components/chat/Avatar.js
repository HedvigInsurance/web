import React from "react"
import Lottie from "react-lottie"

export default class Avatar extends React.Component {
  render() {
    if (this.props.avatar.data) {
      return (
        <div
          style={{
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 50,
            height: this.props.avatar.height,
            width: this.props.avatar.width
          }}
        >
          <Lottie
            options={{
              loop: false,
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
