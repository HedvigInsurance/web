import React from "react"
import { Link } from "react-router-dom"
import Lazyload from "react-lazyload"

import "./footer.css"

const Footer = () => (
  <footer>
    <div className="Footer">
      <div className="Footer__start">
        <div className="Footer__links">
          <div className="Footer__logo">
            <a href="/">
              <div role="img" className="Footer__icon" aria-label="Hedvig logo" />
            </a>
          </div>
          <nav className="">
            <Link className="Footer__link" to="/contact">
              Kontakt
            </Link>
            <Link className="Footer__link" to="/legal">
              Legal&nbsp;information
            </Link>
          </nav>
        </div>
      </div>
      <div className="Footer__end">
        <a href="https://itunes.apple.com/se/app/hedvig/id1303668531?mt=8"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__appLink">
          <Lazyload
            height={46}
            offset={200}>
            <img
              src="/assets/web/appstores/app-store-badge@2x.png"
              alt="Ladda ner på App Store"
              height={54} />
          </Lazyload>
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.hedvig.app"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__appLink">
          <Lazyload
            height={46}
            offset={200}>
            <img
              src="/assets/web/appstores/google-play-badge@2x.png"
              alt="Ladda ner på Google Play"
              height={54} />
          </Lazyload>
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
