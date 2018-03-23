import React from "react"
import { Link } from "react-router-dom"
import Modal from "react-modal"

import TabBar from "./TabBar"
import Footer from "./Footer"
import CashbackAlternativeDetails from "../containers/CashbackAlternativeDetails"
import styled from "styled-components"

const Row = styled.div`
  padding: 10px;
  border-bottom: solid 1px black;
`

export default class Profile extends React.Component {
  constructor() {
    super()
    this.state = {
      cashbackModalShowing: false
    }
  }

  componentWillMount() {
    this.props.getUser()
    this.props.getCashbackAlternatives()
  }

  closeCashbackModal() {
    this.setState({ cashbackModalShowing: false })
  }

  render() {
    let { user } = this.props
    return (
      <div>
        <Modal
          isOpen={this.state.cashbackModalShowing}
          contentLabel="Cashback alternatives"
          onRequestClose={() => this.closeCashbackModal()}
        >
          <div
            style={{ cursor: "pointer" }}
            onClick={() => this.closeCashbackModal()}
          >
            Close
          </div>
          <CashbackAlternativeDetails />
        </Modal>
        <TabBar />
        <Link to="/chat">DEBUG: Chat</Link>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#F9FAFC",
            padding: 10,
            cursor: "pointer"
          }}
          onClick={() => this.setState({ cashbackModalShowing: true })}
        >
          <div>Din del av överskottet går till</div>
          <img
            src={user.selectedCashbackImageUrl}
            alt={user.selectedCashback}
            style={{ width: 375, height: 208 }}
          />
          <div>{user.selectedCashbackParagraph}</div>
          <div>{user.selectedCashbackSignature}</div>
        </div>
        <Row>
          <div>Välgörenhet</div>
          <div>{user.selectedCashback}</div>
        </Row>
        <Row>
          <div>Personlig info</div>
          <div>
            {user.age} år · {user.address}
          </div>
          <div>{user.familyMembers.join(", ")}</div>
        </Row>
        <Row>
          <div>Trygghetshöjare</div>
          <div>{user.safetyIncreasers.join(", ")}</div>
        </Row>
        <Row>
          <div>Bankkonto</div>
          <div>{user.maskedBankAccountNumber}</div>
        </Row>
        <Footer />
      </div>
    )
  }
}
