import React from "react"
import Lottie from "react-lottie"
import { BlackPurpleRoundedButtonWhiteBorder } from "../../../../components/Button"

import "./claimdemo.css"

const width = window.innerWidth

export default class ClaimDemo extends React.Component {
  state = {
    expanded: false
  }

  maybeExpanded() {
    return (
      <div>
        <div className="ClaimDemo__expandable">
          <BlackPurpleRoundedButtonWhiteBorder
            onClick={() => this.setState({ expanded: !this.state.expanded })}
            style={{minWidth: "200px", color: this.state.expanded ? "#0F007A" : "white", backgroundColor: this.state.expanded ? "white" : "#0F007A"}}
          >
            { this.state.expanded ? "Mindre om appen" : "Mer om appen" }
          </BlackPurpleRoundedButtonWhiteBorder>
        </div>
        { this.state.expanded ? (
          <div className="ClaimDemo__fade-in-paragraph">
            <p>
              När din dator blir stulen behöver du en ny snabbt. Det förstår Hedvig.
              Det sista du vill är att lägga veckor på att krångla med försäkringsbolaget.
              Med Hedvig pratar du in ett kort röstmeddelande och berättar vad som hänt.
              Behöver vi något mer för att kunna betala ersättning så löser vi det enkelt i chatten.
            </p>
            <p>
              Om din lägenhet blir vattenskadad behöver du mer än snabb ersättning.
              Då behöver du hjälp. Tryck på en knapp så ringer vi upp dig på direkten.
            </p>
          </div>
        ) : null }
      </div>
    )
  }

  render() {
    return (
      <section className="pure-g pure-centered ClaimDemo">
        <div className="pure-u-1-1 pure-u-lg-7-8">
          <div className="pure-g pure-centered">
            <div className="pure-u-1-1 pure-u-md-1-2 pure-u-lg-1-2">
              <div className="ClaimDemo__text">
                <h1 className="ClaimDemo__heading">Anmäl en skada på sekunder, få betalt på&nbsp;minuter</h1>
                {this.maybeExpanded()}
              </div>
            </div>
            <div className="pure-u-1-1 pure-u-lg-1-2">
              <div className="ClaimDemo__phone">
                <div>
                  <Lottie
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData: require("../../../../bundledAssets/animations/claims_demo.json")
                    }}
                    height={width > 414 ? 610 : 450}
                    width={width > 414 ? 352 : 260}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
