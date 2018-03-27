import React from "react"
import { Helmet } from "react-helmet"

import Header from "../../../components/Header";
import Footer from "../../../components/Footer"
import Hero from "../../../components/Hero"
import { SayHi } from "../common"
import "./contact.css"

export default () => (
  <main className="Contact">
    <Helmet>
      <title>Kontakt | Hedvig</title>
    </Helmet>
    <Header headerRight={<SayHi/>}/>
    <Hero
      imageUrl="/assets/web/Images/map.png"
      alt="Map centered on Hedvigs Office at Norrsken"
    />
    <article className="pure-g Contact__article">
      <h1 className="pure-u-1-1 Contact__header">Vill du komma i kontakt med oss?</h1>
      <section className="pure-u-1-1 Contact__text">
        <a href="mailto:hedvig@hedvig.com">hedvig@hedvig.com</a><br/>
        <a href="mailto:press@hedvig.com">press@hedvig.com</a><br/>
        <a href="mailto:careers@hedvig.com">careers@hedvig.com</a><br/>
      </section>
    </article>
    <Footer />
  </main>
)
