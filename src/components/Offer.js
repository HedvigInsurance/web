import React from "react"
import Modal from "react-modal"
import styled from "styled-components"
import { ResetIconButton } from "./Button"

import { CenteredColumn } from "./styles/landing"
import {
  OfferComponentSection,
  OfferHeading2,
  PassiveText
} from "./styles/offer"

import Header from "./Header"
import Category from "../containers/dashboard/Category"
import MyInsurance from "../containers/dashboard/MyInsurance"
import InsuranceLimits from "./dashboard/InsuranceLimits"
import PerilDetailsCarousel from "./dashboard/PerilDetailsCarousel"
import Footer from "../components/Footer"

const Container = styled.div`
  background-color: ${props => props.theme.colors.offWhite};
  color: ${props => props.theme.colors.black};
`

const MyCenteredColumn = CenteredColumn.extend`
  max-width: 630px;
`

export default class Offer extends React.Component {
  componentWillMount() {
    this.props.getInsurance()
    this.props.getUser()
  }

  categories() {
    return this.props.insurance.categories.map(c => {
      return (
        <Category
          key={c.title}
          data={c}
          category={this.props.peril.selectedCategory}
          initialPerilIndex={this.props.peril.selectedPerilIndex}
        />
      )
    })
  }

  categoryWrapper() {
    return (
      <OfferComponentSection>
        <MyCenteredColumn>
          <OfferHeading2 style={{ marginTop: 80, marginBottom: 16 }}>
            Vad försäkringen täcker
          </OfferHeading2>
          <PassiveText style={{ lineHeight: "20px", marginBottom: 80 }}>
            Klicka på ikonerna för mer info.
          </PassiveText>
          {this.categories()}
        </MyCenteredColumn>
      </OfferComponentSection>
    )
  }

  modal() {
    return (
      <Modal
        isOpen={!!this.props.peril.selectedCategory}
        contentLabel="Peril Details"
        onRequestClose={this.props.closePerilModal}
      >
        <div
          style={{ cursor: "pointer" }}
          onClick={() => this.props.closePerilModal()}
        >
          Close
        </div>
        <PerilDetailsCarousel
          category={this.props.peril.selectedCategory}
          initialPerilIndex={this.props.peril.selectedPerilIndex}
        />
      </Modal>
    )
  }

  render() {
    return (
      <Container>
        {/* {this.modal()} */}
        <Header
          headerRight={
            <ResetIconButton onClick={() => this.props.closeModal()} />
          }
        />
        <MyInsurance />
        {this.categoryWrapper()}
        <InsuranceLimits />
        <MyInsurance showHeading={false} />
        <Footer />
      </Container>
    )
  }
}
