import React from "react"
import { Link } from "react-router-dom"
import Modal from "react-modal"

import TabBar from "./TabBar"
import Category from "../containers/dashboard/Category"
import MyInsurance from "./dashboard/MyInsurance"
import InsuranceLimits from "./dashboard/InsuranceLimits"
import PerilDetails from "./dashboard/PerilDetails"
import Footer from "../components/Footer"

export default class Dashboard extends React.Component {
  categories() {
    return this.props.insurance.categories.map(c => {
      return <Category key={c.title} data={c} />
    })
  }

  render() {
    return (
      <div>
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
          <PerilDetails
            category={this.props.peril.selectedCategory}
            initialPerilIndex={this.props.peril.selectedPerilIndex}
          />
        </Modal>
        <TabBar />
        <Link to="/chat">Chat</Link>
        <MyInsurance />
        {this.categories()}
        <InsuranceLimits />
        <MyInsurance showHeading={false} />
        <Footer />
      </div>
    )
  }
}
