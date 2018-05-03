import React from 'react';
import { Helmet } from 'react-helmet';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import './contact.css';

const Contact = () => (
  <main className="Contact">
    <Helmet>
      <title>Kontakt | Hedvig</title>
    </Helmet>
    <Header />
    <article className="pure-g Contact__article">
      <h1 className="pure-u-1-1 Contact__header">
        Vill du komma i kontakt med oss?
      </h1>
      <section className="pure-u-1-1 Contact__text">
        <a href="mailto:hedvig@hedvig.com">hedvig@hedvig.com</a>
        <br />
        <a href="mailto:press@hedvig.com">press@hedvig.com</a>
        <br />
        <a href="mailto:careers@hedvig.com">careers@hedvig.com</a>
        <br />
      </section>
    </article>
    <Footer />
  </main>
);

export default Contact;
