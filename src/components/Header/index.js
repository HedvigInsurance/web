import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import "./header.css"

const Header = props => (
  <header style={{position: props.static ? "static" : "fixed"}} className="Header pure-g">
    <div className="pure-hidden-xs pure-hidden-sm pure-u-md-1-3 Header__child">
      <nav className="Header__links">
        <Link to="/">
          Hem
        </Link>
        <Link to="/about-us">
          Om&nbsp;Hedvig
        </Link>
        <Link to="/faq">
          FAQ
        </Link>
      </nav>
    </div>
    <div className="pure-u-1-3 pure-u-md-1-3 Header__child">
      <div className="Header__logo">
        <Link to="/">
          <img src="/assets/identity/hedvig_wordmark/hedvig_wordmark_black.svg" alt="Hedvig Logo" />
        </Link>
      </div>
    </div>
    { props.headerRight ? (
      <div className="pure-u-2-3 pure-u-md-1-3 Header__child">
        <div className="Header__right">
          {props.headerRight}
        </div>
      </div>
    ) : null }
  </header>
)

Header.propTypes = {
  static: PropTypes.bool,
  headerRight: PropTypes.node.isRequired
}

Header.defaultProps = {
  static: false
}

export default Header
