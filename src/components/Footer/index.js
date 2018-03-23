import React from "react"
import { Link } from "react-router-dom"

import "./footer.css"

const Footer = () => (
  <footer className="pure-g Footer">
    <div className="pure-u-1-1 pure-u-md-1-3">
      <div className="pure-g Footer__links">
        <div className="pure-u-1-2">
          <div role="img" className="Footer__icon" aria-label="Hedvig logo" />
        </div>
        <nav className="pure-u-1-2">
          <Link className="Footer__link" to="/contact">
            Kontakt
          </Link>
          <Link className="Footer__link" to="/legal">
            Legal&nbsp;information
          </Link>
        </nav>
      </div>
    </div>
  </footer>
)

export default Footer
