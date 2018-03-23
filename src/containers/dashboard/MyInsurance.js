import { connect } from "react-redux"
import MyInsurance from "../../components/dashboard/MyInsurance"
import { types } from "hedvig-redux"
import { navigateTo } from "../../services/Navigation"

const mapStateToProps = state => {
  return {
    price: state.insurance.currentTotalPrice,
    address: state.user.currentUser.address
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkout: () => {
      dispatch({
        type: types.CHECKOUT,
        payload: {}
      })
      navigateTo(dispatch, "/chat")
    }
  }
}

const MyInsuranceContainer = connect(mapStateToProps, mapDispatchToProps)(
  MyInsurance
)

export default MyInsuranceContainer
