import React from "react"
import { connect } from "react-redux"
import { types } from "hedvig-redux"

class Logout extends React.Component {
  componentWillMount() {
    this.props.dispatch({ type: types.LOGOUT })
  }

  render() {
    return null
  }
}

const LogoutContainer = connect()(Logout)

export default LogoutContainer
