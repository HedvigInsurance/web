import styled from "styled-components"
import { Heading2 } from "./typography"

export const OfferHeading2 = Heading2.extend`
  color: ${props => props.theme.colors.black};
`

export const PassiveText = styled.span`
  font-size: 14px;
  color: ${props => props.theme.colors.passiveText};
`

export const Divider = styled.div`
  width: 100%;
  border-bottom: solid 1px ${props => props.theme.colors.offWhite};
`

export const OfferComponentSection = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: 576px) {
    padding-left: 18px;
    padding-right: 18px;
  }
  @media (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media (min-width: 992px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1200px) {
    padding-left: 114px;
    padding-right: 114px;
  }
`
