import React from 'react';
import { Helmet } from 'react-helmet';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import './download.css';

const Download = () => (
  <main className="Download">
    <Helmet>
      <title>Ladda ner appen | Hedvig</title>
    </Helmet>
    <Header />
    <article className="pure-g pure-centered Download__article">
      <div className="pure-u-1-1">
        <h1 className="Download__page-header">Ladda ner appen</h1>
        <h2 className="Download__section-header">
          Sök efter Hedvig i din Store för att komma&nbsp;igång.
        </h2>
      </div>
      <div className="pure-u-1-1">
        <section className="pure-g pure-centered">
          <a
            href="https://itunes.apple.com/se/app/hedvig/id1303668531?mt=8"
            target="_blank"
            rel="noopener noreferrer"
            className="Download__social-icon"
          >
            <img
              src="/assets/appstores/app-store-badge@2x.png"
              alt="Ladda ner på App Store"
              height={54}
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.hedvig.app"
            target="_blank"
            rel="noopener noreferrer"
            className="Download__social-icon"
          >
            <img
              src="/assets/appstores/google-play-badge@2x.png"
              alt="Ladda ner på Google Play"
              height={54}
            />
          </a>
        </section>
      </div>
    </article>
    <Footer />
  </main>
);

export default Download;
