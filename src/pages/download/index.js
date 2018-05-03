import React from 'react';
import { Helmet } from 'react-helmet';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import './Download.css';

const Download = () => (
  <main className="Site">
    <Helmet>
      <title>Ladda ner appen | Hedvig</title>
    </Helmet>
    <Header />
    <article className="Site-content">
      <div className="Container">
        <div className="u-textCenter">
          <h1 className="u-spaceMT2 u-spaceMB8 u-md-spaceMB7 u-lg-spaceMB7 u-fontFamilyHeader u-fontSize5 u-md-fontSize3 u-lg-fontSize2">
            Ladda ner appen
          </h1>
          <h2 className="u-spaceMB10 u-md-spaceMB7 u-lg-spaceMB7 u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
            Sök efter Hedvig i din Store för att komma&nbsp;igång.
          </h2>
        </div>
        <div className="u-spaceMB5">
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
      </div>
    </article>
    <Footer />
  </main>
);

export default Download;
