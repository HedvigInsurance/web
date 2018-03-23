/* global require */
import React from "react"
import styled from "styled-components"
import Lottie from "react-lottie"

const NotFoundPage = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 72px;
  font-family: "Merriweather";
  color: ${props => props.theme.colors.purple};
`

const NotFound = () => (
  <NotFoundPage>
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
  </NotFoundPage>
)

export default NotFound
