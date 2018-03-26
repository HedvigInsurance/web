import React from "react"
import { connect } from "react-redux"
import { TurquoiseRoundedButton } from "../../../../components/Button";

import "./calltoaction.css"

class CallToAction extends React.Component {
  render() {
    return (
      <section className="pure-g pure-centered CallToAction">
        <div className="pure-u-1-1 pure-u-lg-7-8">
          <h1 className="CallToAction__heading">
            Redan försäkrad?<br/>
            Inga problem, Hedvig sköter&nbsp;bytet
          </h1>
          <a href="https://hedvig.app.link" onClick={this.props.registerCtaClick}>
            <TurquoiseRoundedButton style={{minWidth: "120px"}}>
              Ladda ner appen
            </TurquoiseRoundedButton>
          </a>
        </div>
      </section>
    )
  }
}

export default connect(
  undefined,
  dispatch => ({
    registerCtaClick: () => dispatch({type: "ANALYTICS/CTA_CLICK", payload: {location: "cta section"}})
  })
)(CallToAction)
