import React from "react"
import { Helmet } from "react-helmet";
import Lazyload from "react-lazyload"

import { SayHi } from "../common"
import Header from "../../../components/Header";
import Footer from "../../../components/Footer"
import "./download.css"

export default class Download extends React.Component {
  render() {
    return (
      <main className="Download">
        <Helmet>
          <title>Ladda ner appen | Hedvig</title>
        </Helmet>
        <Header headerRight={<SayHi/>}/>
        <article className="pure-g pure-centered Download__article">
          <div className="pure-u-1-1">
            <h1 className="Download__page-header">Ladda ner appen</h1>
            <h2 class="Download__section-header">Sök efter Hedvig i din Store för att komma&nbsp;igång.</h2>
          </div>
          <div className="pure-u-1-1">
            <section className="pure-g pure-centered">
              <a
                href="https://itunes.apple.com/se/app/hedvig/id1303668531?mt=8"
                target="_blank"
                rel="noopener noreferrer"
                className="Download__social-icon"
              >
                <Lazyload
                  height={46}
                  offset={200}
                >
                  <img
                    src="/assets/web/appstores/app-store-badge@2x.png"
                    alt="Ladda ner på App Store"
                    height={54}
                  />
                </Lazyload>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.hedvig.app"
                target="_blank"
                rel="noopener noreferrer"
                className="Download__social-icon"
              >
                <Lazyload
                  height={46}
                  offset={200}
                >
                  <img
                    src="/assets/web/appstores/google-play-badge@2x.png"
                    alt="Ladda ner på Google Play"
                    height={54}
                  />
                </Lazyload>
              </a>
            </section>
          </div>
        </article>
        <Footer />
      </main>
    )
  }
}
