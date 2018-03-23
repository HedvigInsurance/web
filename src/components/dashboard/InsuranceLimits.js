import React from "react"
import styled from "styled-components"

import { CenteredColumn } from "../styles/landing"
import {
  OfferComponentSection,
  OfferHeading2,
  PassiveText,

} from "../styles/offer"

const Col = styled.td`
  padding: 24px 16px 24px 16px;
  text-align: left;
  border-bottom: solid 1px ${props => props.theme.colors.offWhite};
`

const InsuranceLimits = () => {
  return (
    <OfferComponentSection style={{ marginTop: 80 }}>
      <CenteredColumn>
        <OfferHeading2 style={{ marginBottom: 16 }}>
          Vilka belopp jag är försäkrad till
        </OfferHeading2>
        <PassiveText style={{ lineHeight: "20px", marginBottom: 56 }}>
          Försäkringen gäller i Sverige och på dina resor var som helst i
          världen.
        </PassiveText>

        <table
          style={{ width: "100%", marginBottom: 128, backgroundColor: "white" }}
        >
          <tbody>
            <tr>
              <Col>
                Lägenheten: <PassiveText>Fullvärde</PassiveText>
              </Col>
              <Col>
                <img src="/assets/icons/info/info_green.svg" alt="clock" />
              </Col>
            </tr>
            <tr>
              <Col>
                Mina prylar totalt: <PassiveText>1,000,000 kr</PassiveText>
              </Col>
              <Col>
                <img src="/assets/icons/info/info_red.svg" alt="clock" />
              </Col>
            </tr>
            <tr>
              <Col>
                Drulle gäller för:{" "}
                <PassiveText>Prylar värda upp till 50,000 kr</PassiveText>
              </Col>
              <Col>
                <img src="/assets/icons/info/info_purple.svg" alt="clock" />
              </Col>
            </tr>
            <tr>
              <Col>
                Självrisk: <PassiveText>1,500 kr</PassiveText>
              </Col>
              <Col>
                <img src="/assets/icons/info/info_blue.svg" alt="clock" />
              </Col>
            </tr>
          </tbody>
        </table>
      </CenteredColumn>
    </OfferComponentSection>
  )
}

export default InsuranceLimits
