import React from 'react';

import { LottieLoader } from 'src/components/LottieLoader';
import './waterdamage.css';

// Gatsby build
let width = 800;
if (typeof window !== 'undefined') {
  width = window.innerWidth;
}

const getAnimationDimensions = () => {
  if (width < 576) {
    return {
      height: 520,
      width: 347,
    };
  }
  return {
    height: 615,
    width: 410,
  };
};
const animationDimensions = getAnimationDimensions();

const desktopAnimation = require('src/bundledAssets/animations/desktop.json');
const drawerAnimation = require('src/bundledAssets/animations/drawer.json');

const WaterDamage = () => (
  <section className="pure-g WaterDamage">
    <div className="pure-u-1-1">
      <div className="WaterDamage__relative-container">
        <div className="WaterDamage__animations">
          <LottieLoader
            options={{
              loop: true,
              autoplay: true,
              animationData: desktopAnimation,
            }}
            height={animationDimensions.height}
            width={animationDimensions.width}
          />
          {width > 1024 ? (
            <LottieLoader
              options={{
                loop: true,
                autoplay: true,
                animationData: drawerAnimation,
              }}
              height={animationDimensions.height}
              width={animationDimensions.width}
            />
          ) : null}
        </div>
        <div className="WaterDamage__text">
          <h1 className="WaterDamage__heading">
            Hemförsäkring för dig<br /> som bor i lägenhet
          </h1>
          <p className="WaterDamage__subtext">Självklart utan bindningstid och uppsägningstid</p>
        </div>
      </div>
    </div>
  </section>
);

export default WaterDamage;
