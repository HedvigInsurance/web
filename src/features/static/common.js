import React from "react"
import { connect } from "react-redux"
import { SlideDownCtaButton } from "../../components/styles/button"

export const SayHi = connect(
  undefined,
  dispatch => ({
    registerCtaClick: () => dispatch({type: "ANALYTICS/CTA_CLICK", payload: {location: "header"}})
  })
)(({registerCtaClick}) => (
  <a href="https://hedvig.app.link" onClick={registerCtaClick}>
    <SlideDownCtaButton>
      Ladda ner appen
    </SlideDownCtaButton>
  </a>
))
