/* global require */
import React, { StyleSheet } from "react"
import Lottie from "react-lottie"

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: 72,
    fontFamily: 'Merriweather',
    color: '#651EFF',
  }
})

const NotFound = () => (
  <div style={styles.container}>
    <div>Not found</div>
    <div>
      <Lottie
        options={{
          loop: false,
          autoplay: true,
          animationData: require("../bundledAssets/animations/hedvig_sad_avatar.json")
        }}
        width={800}
        height={800}
        style={{margin: "auto"}}
      />
    </div>
  </div>
)

export default NotFound
