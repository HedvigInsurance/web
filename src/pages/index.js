import React from 'react';
import { Helmet } from 'react-helmet';

import Footer from 'src/components/Footer/index.js';
import Header from 'src/components/Header/index.js';
import Collaboration from './sections/Collaboration/index.js';
import Splash from './sections/Splash/index.js';
import ClaimDemo from './sections/ClaimDemo/index.js';
import ModelExplanation from './sections/ModelExplanation/index.js';
import WaterDamagePage from './sections/WaterDamage/index.js';
import CallToAction from './sections/CallToAction/index.js';

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
