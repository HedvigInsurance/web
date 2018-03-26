import React from "react"
import { Helmet } from "react-helmet";

import Collaboration from "./sections/Collaboration"
import Splash from "./sections/Splash"
import ClaimDemo from "./sections/ClaimDemo"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ModelExplanation from "./sections/ModelExplanation"
import WaterDamagePage from "./sections/WaterDamage";
import CallToAction from "./sections/CallToAction"

const Landing = () => { // Fragment is used as a quick hack to render nothing in place of a better solution right now
  return (
    <main>
      <Helmet>
        <title>Hedvig</title>
      </Helmet>
      <Header/>
      <Splash />
      <WaterDamagePage />
      <ClaimDemo />
      <ModelExplanation />
      <CallToAction />
      <Collaboration />
      <Footer />
    </main>
  )
}

export default Landing
