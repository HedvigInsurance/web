import { connect } from "react-redux"
import Dashboard from "../components/Dashboard"

import { insuranceActions, types } from "hedvig-redux"
import { perilSelected } from "../actions/peril"

const mapStateToProps = state => {
  return {
    insurance: state.insurance,
    peril: state.peril
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getInsurance: () => dispatch(insuranceActions.getInsurance()),
    checkout: () => {
      dispatch({
        type: types.CHECKOUT,
        payload: {}
      })
      ownProps.navigation.goBack()
    },
    closePerilModal: () => dispatch(perilSelected(null, null)),
    dispatch
  }
}

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(
  Dashboard
)

export default DashboardContainer
