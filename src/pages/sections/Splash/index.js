import React from 'react';

import { LottieLoader } from 'src/components/LottieLoader';
import { TurquoiseRoundedButtonStyled } from 'src/components/styles/button';
import './splash.css';

const animationSmall = require('src/bundledAssets/animations/hedvig_top-statement_animation_mobile_01.json');
const animationLarge = require('src/bundledAssets/animations/hedvig_top-statement_animation_desktop_02.json');

// Gatsby build
let width = 800;
if (typeof window !== 'undefined') {
  width = window.innerWidth;
}

const animation =
  width < 768 ? (
    <LottieLoader
      options={{
        loop: true,
        autoplay: true,
        animationData: animationSmall,
      }}
    />
  ) : (
    <LottieLoader
      options={{
        loop: true,
        autoplay: true,
        animationData: animationLarge,
      }}
    />
  );

const Splash = () => (
  <section className="pure-g pure-centered Splash">
    <div className="pure-u-1-1 pure-u-lg-7-8 Splash__full-height">
      <div className="pure-g pure-centered Splash__full-height">
        <div className="pure-u-1-1 pure-u-lg-2-5 Splash__full-height">
          <div className="Splash__text Splash__full-height">
            <h1 className="Splash__heading">Livet är lättare med Hedvig</h1>
            <a href="https://hedvig.app.link" id="cta-app-download">
              <TurquoiseRoundedButtonStyled>Ladda ner appen</TurquoiseRoundedButtonStyled>
            </a>
          </div>
        </div>
        <div className="pure-u-1-1 pure-u-lg-3-5 Splash__full-height Splash__hero-animation">
          {animation}
        </div>
      </div>
    </div>
  </section>
);

export default Splash;
