import React from 'react';
import { TurquoiseRoundedButton } from 'src/components/Button';

import './calltoaction.css';

const CallToAction = () => (
  <section className="pure-g pure-centered CallToAction">
    <div className="pure-u-1-1 pure-u-lg-7-8">
      <h1 className="CallToAction__heading">
        Redan försäkrad?<br />
        Inga problem, Hedvig sköter&nbsp;bytet
      </h1>
      <a href="https://hedvig.app.link/kZNtW0cT9L" id="cta-app-download">
        <TurquoiseRoundedButton style={{ minWidth: '120px' }}>
          Ladda ner appen
        </TurquoiseRoundedButton>
      </a>
    </div>
  </section>
);

export default CallToAction;
