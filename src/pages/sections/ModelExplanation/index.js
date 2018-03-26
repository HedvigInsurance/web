import React from 'react';
import Lazyload from 'react-lazyload';

import './modelexplanation.css';

const ModelExplanation = () => (
  <section className="pure-g pure-centered ModelExplanation">
    <div className="pure-u-1-1 pure-u-md-5-6">
      <div className="pure-g pure-centered ModelExplanation__text">
        <div className="pure-u-1-1">
          <h1 className="ModelExplanation__heading">För ett gott ändamål</h1>
          <p className="pure-u-5-6 ModelExplanation__paragraph">
            Hedvig betalar dig blixtsnabbt och har inget intresse av att säga nej, eftersom allt
            överskott skänks till ett gott ändamål. Du&nbsp;väljer&nbsp;vilket!
          </p>
        </div>
      </div>
      <div className="pure-g pure-centered ModelExplanation__icons">
        <div className="pure-u-1-1 pure-u-md-1-3 ModelExplanation__icon">
          <Lazyload height={166} offset={200}>
            <img
              width={166}
              height={166}
              src="/assets/icons/profil/personlig_info.svg"
              alt="Hedvig Logo"
            />
          </Lazyload>
          <p>Hedvig tar en fast avgift för att ge dig blixtsnabb&nbsp;service</p>
        </div>
        <div className="pure-u-1-1 pure-u-md-1-3 ModelExplanation__icon">
          <Lazyload height={166} offset={200}>
            <img
              width={166}
              height={166}
              src="/assets/icons/perils/mina_prylar/drulle.svg"
              alt="Skadad telefon"
            />
          </Lazyload>
          <p>Resten av din månadskostnad går till att täcka&nbsp;skador</p>
        </div>
        <div className="pure-u-1-1 pure-u-md-1-3 ModelExplanation__icon">
          <Lazyload height={166} offset={200}>
            <img width={166} height={166} src="/assets/icons/profil/valgorenhet.svg" alt="Hjärta" />
          </Lazyload>
          <p>
            Ett bra år med lite skador blir det pengar över, det skänker vi till ett
            gott&nbsp;ändamål
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ModelExplanation;
