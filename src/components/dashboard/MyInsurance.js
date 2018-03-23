import React from "react"
import styled from "styled-components"

import { CenteredColumn } from "../styles/landing"
import {
  OfferComponentSection,
  OfferHeading2,
  PassiveText,
  Divider
} from "../styles/offer"
import { TurquoiseRoundedButtonStyled } from "../styles/button"

const Container = OfferComponentSection.extend`
  background-color: ${props => props.theme.colors.purple};
  padding: 38px 15px 38px 15px;
`

const MyCenteredColumn = CenteredColumn.extend`
  background-color: white;
  width: 100%;

  max-width: 350px;
  @media (min-width: 576px) and (max-width: 992px) {
    max-width: 470px;
  }
  @media (min-width: 993px) {
    max-width: 555px;
  }
`

const PriceText = styled.div`
  color: ${props => props.theme.colors.purple};
  font-size: 20px;
`

const BindingTimeText = styled.div`
  color: ${props => props.theme.colors.hedvigMessageText};
  font-size: 16px;
`

const PassiveTextWithImage = PassiveText.extend`
  display: flex;
  align-items: center;
  justify-content: center;
`

const MyInsurance = ({ showHeading = true, price, address, checkout }) => {
  let maybeHeading
  if (showHeading) {
    maybeHeading = (
      <div style={{ width: "100%" }}>
        <div style={{ margin: "17px 0px" }}>
          <OfferHeading2>Min hemförsäkring</OfferHeading2>
          <PassiveText style={{ display: "block", marginBottom: 23 }}>
            {address}
          </PassiveText>
        </div>
        <Divider />
      </div>
    )
  }

  return (
    <Container>
      <MyCenteredColumn>
        {maybeHeading}
        <div style={{ width: "100%", padding: "24px" }}>
          <PriceText>{price} kr/mån</PriceText>
          <BindingTimeText>Ingen bindningstid</BindingTimeText>
        </div>
        <Divider />
        <div style={{ width: "100%", padding: "24px" }}>
          <PassiveTextWithImage>
            <img
              style={{ marginRight: 5 }}
              src="/assets/icons/my_insurance/startdatum.svg"
              alt="clock"
            />
            Startdatum: När din nuvarande går ut
          </PassiveTextWithImage>
          <PassiveTextWithImage>
            <img
              style={{ marginRight: 5 }}
              src="/assets/icons/my_insurance/worldwide.svg"
              alt="world"
            />
            Gäller i hela världen
          </PassiveTextWithImage>
        </div>
        <TurquoiseRoundedButtonStyled onClick={() => checkout()}>
          Bli försäkrad
        </TurquoiseRoundedButtonStyled>
        <div style={{ marginTop: 24, marginBottom: 40 }}>
          <PassiveTextWithImage style={{ cursor: "pointer" }}>
            Försäkringsvillkor (PDF){" "}
            <img
              style={{ marginLeft: 5 }}
              src="/assets/icons/my_insurance/right-arrow.svg"
              alt="arrow"
            />
          </PassiveTextWithImage>
        </div>
      </MyCenteredColumn>
    </Container>
  )
}

export default MyInsurance
