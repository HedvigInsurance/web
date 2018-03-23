import { connect } from "react-redux"
import Offer from "../components/Offer"

import { insuranceActions, eventActions, userActions } from "hedvig-redux"
import { perilSelected } from "../actions/peril"
import { navigateTo } from "../services/Navigation"

const mapStateToProps = state => {
  return {
    insurance: state.insurance,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getInsurance: () => dispatch(insuranceActions.getInsurance()),
    getUser: () => dispatch(userActions.getCurrentUser()),
    closePerilModal: () => dispatch(perilSelected(null, null)),
    closeModal: () => {
      dispatch(
        eventActions.event(
          {
            type: "MODAL_CLOSED",
            value: "quote"
          },
          {
            getMessagesAfter: true,
            showLoadingIndicator: true
          }
        )
      )
      navigateTo(dispatch, "/chat")
    },
    dispatch
  }
}

const OfferContainer = connect(mapStateToProps, mapDispatchToProps)(Offer)

export default OfferContainer
