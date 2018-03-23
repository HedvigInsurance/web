import { connect } from "react-redux"
import Category from "../../components/dashboard/Category"
import { perilSelected } from "../../actions/peril"

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    perilSelected: (peril, category) => dispatch(perilSelected(peril, category))
  }
}

const CategoryContainer = connect(mapStateToProps, mapDispatchToProps)(Category)

export default CategoryContainer
