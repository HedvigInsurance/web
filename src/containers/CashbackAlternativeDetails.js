import { connect } from "react-redux"
import CashbackAlternativeDetails from "../components/CashbackAlternativeDetails"
import { cashbackActions } from "hedvig-redux"

const mapStateToProps = state => {
  return {
    cashbackAlternatives: state.cashback.alternatives
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCashback: selectedCashback =>
      dispatch(cashbackActions.updateCashback(selectedCashback))
  }
}

const CashbackAlternativeDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CashbackAlternativeDetails)

export default CashbackAlternativeDetailsContainer
