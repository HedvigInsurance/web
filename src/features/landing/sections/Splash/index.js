import React from "react"
import Lottie from "react-lottie"
import { connect } from "react-redux"

import { TurquoiseRoundedButtonStyled } from "../../../../components/styles/button"
import "./splash.css"

const width = window.innerWidth

const animation = width < 768 ? (
  <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData: require("../../../../bundledAssets/animations/hedvig_top-statement_animation_mobile_01.json")
    }}
  />
) : (
  <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData: require("../../../../bundledAssets/animations/hedvig_top-statement_animation_desktop_02.json")
    }}
  />
)

class Splash extends React.Component {
  render() {
    return (
      <section className="pure-g pure-centered Splash">
        <div className="pure-u-1-1 pure-u-lg-7-8 Splash__full-height">
          <div className="pure-g pure-centered Splash__full-height">
            <div className="pure-u-1-1 pure-u-lg-2-5 Splash__full-height">
              <div className="Splash__text Splash__full-height">
                <h1 className="Splash__heading">Livet är lättare med Hedvig</h1>
                <a href="https://hedvig.app.link" onClick={this.props.registerCtaClick}>
                  <TurquoiseRoundedButtonStyled>
                    Ladda ner appen
                  </TurquoiseRoundedButtonStyled>
                </a>
              </div>
            </div>
            <div className="pure-u-1-1 pure-u-lg-3-5 Splash__full-height Splash__hero-animation">
              {animation}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default connect(
  undefined,
  dispatch => ({
    registerCtaClick: () => dispatch({type: "ANALYTICS/CTA_CLICK", payload: {location: "splash"}})
  })
)(Splash)
