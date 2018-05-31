import React from 'react';
import { Helmet } from 'react-helmet';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

const Press = () => (
  <main className="Site">
    <Helmet>
      <title>Press | Hedvig</title>
    </Helmet>
    <Header />
    <article className="Site-content">
      <div className="u-backgroundSecondaryPurple">
        <div className="Container">
          <h1 className="u-spaceMT2 u-spaceMB8 u-md-spaceMB6 u-lg-spaceMB6 u-fontFamilyHeader u-fontSize5 u-md-fontSize3 u-lg-fontSize2">
            Press
          </h1>
        </div>
      </div>
      <div className="Container u-md-spaceMT10 u-lg-spaceMT10 u-spaceMB5 u-md-spaceMB3 u-lg-spaceMB3">
        <div className="u-maxWidth1of1">
          <div className="">
            <h2 className="u-spaceMT5 u-spaceMB10 u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
              Vill du komma i kontakt med oss?
            </h2>
          </div>
          <div className="u-spaceMB6 u-md-size1of3 u-lg-size1of3">
            <a
              className="Button u-backgroundPrimaryDarkBlue u-colorWhite"
              href="mailto:press@hedvig.com"
            >
              press@hedvig.com
            </a>
          </div>

          <div className="">
            <h2 className="u-spaceMT5 u-spaceMB10 u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
              Downloads
            </h2>
          </div>
          <div className="u-spaceMB6">
            <a
              className="Button u-backgroundPrimaryDarkBlue u-colorWhite"
              href="/assets/press/hedvig-press-assets.zip"
              download
            >
              Press assets
            </a>
          </div>
        </div>
      </div>
    </article>
    <Footer />
  </main>
);

export default Press;
