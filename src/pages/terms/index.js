import React from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import './Terms.css';

const Terms = () => (
  <main className="">
    <Header />
    <article className="">
      <div className="u-backgroundSecondaryPurple">
        <div className="Container">
          <h1 className="u-fontFamilyHeader u-fontSize6 u-md-fontSize3 u-lg-fontSize2">
            Våra villkor
          </h1>
        </div>
      </div>
      <div className="Container">
        <section>
          <p className="u-lg-fontSize9">
            Här hittar du våra olika försäkringsvillkor. Där i står det vad din
            försäkring gäller för. Vi har gjort vårt allra bästa för att de ska
            vara enkla att läsa, men har du några frågor är det bara att
            kontakta Hedvig direkt via din app eller maila
            <a href="mailto:hedvig@hedvig.com"> hedvig@hedvig.com</a>. I appen
            hittar du en tydlig översikt över allt din försäkring omfattar, och
            hur den gäller för olika saker.
          </p>
          <p className="u-lg-fontSize9">
            Det är viktigt att du läser villkoret och ditt försäkringsbrev.
            Skador ersätts alltid enligt det villkor som gäller när en skada
            inträffar.
          </p>
          <p className="u-lg-fontSize9">
            Här nedanför hittar du också något som heter förköpsinformation. Det
            är en sammanfattning av vad försäkringen täcker. Där i finns också
            några viktiga begränsningar. Förköpsinformation är sådan information
            som du har rätt att få innan du köper en försäkring. Informationen
            finns så klart tillgänglig i appen också.
          </p>
        </section>
        <section className="">
          <div className="">
            <h1>Försäkringsvillkor</h1>
          </div>
          <div className="">
            <p className="u-lg-fontSize9">
              <a href="https://s3.eu-central-1.amazonaws.com/com-hedvig-web-content/F%C3%B6rs%C3%A4kringsvillkor+-+Bostadsr%C3%A4tt+(Februari+2018).pdf">
                För dig som äger bostadsrätt
              </a>
            </p>
            <p className="u-lg-fontSize9">
              <a href="https://s3.eu-central-1.amazonaws.com/com-hedvig-web-content/F%C3%B6rs%C3%A4kringsvillkor+-+Hyresr%C3%A4tt+(Februari+2018).pdf">
                För dig som hyr hyresrätt
              </a>
            </p>
            <p className="u-lg-fontSize9">
              <span>
                <a href="https://s3.eu-central-1.amazonaws.com/com-hedvig-web-content/F%C3%B6rs%C3%A4kringsvillkor+-+Andrahandshyrare+(Februari+2018).pdf">
                  För dig som hyr hyresrätt i andra hand
                </a>{' '}
                och vill att din hyresvärds saker ska täckas av försäkringen
              </span>
            </p>
            <p className="u-lg-fontSize9">
              <span>
                <a href="https://s3.eu-central-1.amazonaws.com/com-hedvig-web-content/F%C3%B6rs%C3%A4kringsvillkor+-+Andrahandshyrare+(Februari+2018).pdf">
                  För dig som hyr bostadsrätt i andra hand
                </a>{' '}
                och vill att din hyresvärds saker och lägenhet ska täckas av
                försäkringen
              </span>
            </p>
          </div>
        </section>
        <section className="">
          <div className="">
            <h1>Förköpsinformation</h1>
          </div>
          <div className="">
            <p className="u-lg-fontSize9">
              <a href="https://s3.eu-central-1.amazonaws.com/com-hedvig-web-content/F%C3%B6rk%C3%B6psinformation+-+Bostadsr%C3%A4tt+(Februari+2018).pdf">
                För dig som äger bostadsrätt
              </a>
            </p>
            <p className="u-lg-fontSize9">
              <a href="https://s3.eu-central-1.amazonaws.com/com-hedvig-web-content/F%C3%B6rk%C3%B6psinformation+-+Hyresr%C3%A4tt+(Februari+2018).pdf">
                För dig som hyr hyresrätt
              </a>
            </p>
            <p className="u-lg-fontSize9">
              <span>
                <a href="https://s3.eu-central-1.amazonaws.com/com-hedvig-web-content/F%C3%B6rk%C3%B6psinformation+-+Andrahandshyrare+(Februari+2018).pdf">
                  För dig som hyr hyresrätt i andra hand
                </a>{' '}
                och vill att din hyresvärds saker ska täckas av försäkringen
              </span>
            </p>
            <p className="u-lg-fontSize9">
              <span>
                <a href="https://s3.eu-central-1.amazonaws.com/com-hedvig-web-content/F%C3%B6rk%C3%B6psinformation+-+Andrahandshyrare+(Februari+2018).pdf">
                  För dig som hyr bostadsrätt i andra hand
                </a>{' '}
                och vill att din hyresvärds saker och lägenhet ska täckas av
                försäkringen
              </span>
            </p>
          </div>
        </section>
      </div>
    </article>
    <Footer />
  </main>
);

export default Terms;
