import React from 'react';
import { Helmet } from 'react-helmet';

import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Collaboration from './sections/Collaboration';
import Splash from './sections/Splash';
import ClaimDemo from './sections/ClaimDemo';
import ModelExplanation from './sections/ModelExplanation';
import WaterDamagePage from './sections/WaterDamage';
import CallToAction from './sections/CallToAction';

const Landing = () => (
  <main>
    <Helmet title="Hedvig" />
    <Header />
    <Splash />
    <WaterDamagePage />
    <ClaimDemo />
    <ModelExplanation />
    <CallToAction />
    <Collaboration />
    <Footer />
  </main>
);

export default Landing;
