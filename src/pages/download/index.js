import React from 'react';
import { Helmet } from 'react-helmet';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import './Download.css';

const Download = () => (
  <main className="">
    <Helmet>
      <title>Ladda ner appen | Hedvig</title>
    </Helmet>
    <Header />
    <article className="">
      <div className="u-textCenter">
        <h1 className="u-fontFamilyHeader u-fontSize6 u-md-fontSize3 u-lg-fontSize2">
          Ladda ner appen
        </h1>
        <h2 className="u-fontWeightBold u-fontSize9 u-md-fontSize7 u-lg-fontSize6">
          Sök efter Hedvig i din Store för att komma&nbsp;igång.
        </h2>
      </div>
      <div className="">
        <div className="u-textCenter">
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
        </div>
      </div>
    </article>
    <Footer />
  </main>
);

export default Download;
