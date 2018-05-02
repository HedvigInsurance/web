import React from 'react';
import { Helmet } from 'react-helmet';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import './Contact.css';

const Contact = () => (
  <main className="Contact">
    <Helmet>
      <title>Kontakt | Hedvig</title>
    </Helmet>
    <Header />
    <article className="">
      <div className="Container">
        <h1 className="u-fontFamilyHeader u-fontSize6 u-md-fontSize3 u-lg-fontSize2">
          Vill du komma i kontakt med oss?
        </h1>
        <section className="Grid">
          <div className="u-md-size1of3 u-lg-size1of3">
            <a
              className="Button u-backgroundPrimaryBlack
                     u-lg-fontSize9 u-colorWhite"
              href="mailto:hedvig@hedvig.com"
            >
              hedvig@hedvig.com
            </a>
          </div>
          <div className="u-md-size1of3 u-lg-size1of3">
            <a
              className="Button u-backgroundPrimaryBlack
                     u-lg-fontSize9 u-colorWhite"
              href="mailto:press@hedvig.com"
            >
              press@hedvig.com
            </a>
          </div>
          <div className="u-md-size1of3 u-lg-size1of3">
            <a
              className="Button u-backgroundPrimaryBlack
                     u-lg-fontSize9 u-colorWhite"
              href="mailto:careers@hedvig.com"
            >
              careers@hedvig.com
            </a>
          </div>
        </section>
      </div>
    </article>
    <Footer />
  </main>
);

export default Contact;
