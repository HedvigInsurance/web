import React from 'react'
import { Helmet } from 'react-helmet'
import { StickyContainer } from 'react-sticky'

import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

const Terms = () => (
  <main className="Site">
    <Helmet>
      <title>Villkor | Hedvig</title>
    </Helmet>
    <StickyContainer>
      <Header />
      <article className="Site-content">
        <div className="u-backgroundSecondaryPurple">
          <div className="Container">
            <h1 className="u-spaceMT2 u-spaceMB8 u-md-spaceMB6 u-lg-spaceMB6 u-fontFamilyHeader u-fontSize5 u-md-fontSize3 u-lg-fontSize2">
              Våra villkor
            </h1>
          </div>
        </div>
        <div className="Container u-md-spaceMT10 u-lg-spaceMT10 u-spaceMB5 u-md-spaceMB3 u-lg-spaceMB3">
          <div className="u-maxWidth1of1">
            <section className="u-spaceMT7">
              <p className="u-spaceMB9">
                Här hittar du våra olika försäkringsvillkor. Där i står det vad
                din försäkring gäller för. Vi har gjort vårt allra bästa för att
                de ska vara enkla att läsa, men har du några frågor är det bara
                att kontakta Hedvig direkt via din app eller maila
                <a href="mailto:hedvig@hedvig.com"> hedvig@hedvig.com</a>. I
                appen hittar du en tydlig översikt över allt din försäkring
                omfattar, och hur den gäller för olika saker.
              </p>
              <p className="u-spaceMB9">
                Det är viktigt att du läser villkoret och ditt försäkringsbrev.
                Skador ersätts alltid enligt det villkor som gäller när en skada
                inträffar.
              </p>
              <p className="u-spaceMB9">
                Här nedanför hittar du också något som heter förköpsinformation.
                Det är en sammanfattning av vad försäkringen täcker. Där i finns
                också några viktiga begränsningar. Förköpsinformation är sådan
                information som du har rätt att få innan du köper en försäkring.
                Informationen finns så klart tillgänglig i appen också.
              </p>
            </section>
            <section className="">
              <div className="">
                <h2 className="u-spaceMT5 u-spaceMB10 u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
                  Försäkringsvillkor
                </h2>
              </div>
              <div className="">
                <p className="u-spaceMB9">
                  <a href="https://s3.eu-central-1.amazonaws.com/com-hedvig-web-content/F%C3%B6rs%C3%A4kringsvillkor+-+Bostadsr%C3%A4tt+(Februari+2018).pdf">
                    För dig som äger bostadsrätt
                  </a>
                </p>
                <p className="u-spaceMB9">
                  <a href="https://s3.eu-central-1.amazonaws.com/com-hedvig-web-content/F%C3%B6rs%C3%A4kringsvillkor+-+Hyresr%C3%A4tt+(Februari+2018).pdf">
                    För dig som hyr hyresrätt
                  </a>
                </p>
                <p className="u-spaceMB9">
                  <span>
                    <a href="https://s3.eu-central-1.amazonaws.com/com-hedvig-web-content/F%C3%B6rs%C3%A4kringsvillkor+-+Andrahandshyrare+(Februari+2018).pdf">
                      För dig som hyr hyresrätt i andra hand
                    </a>{' '}
                    och vill att din hyresvärds saker ska täckas av försäkringen
                  </span>
                </p>
                <p className="u-spaceMB9">
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
                <h2 className="u-spaceMT5 u-spaceMB10 u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
                  Förköpsinformation
                </h2>
              </div>
              <div className="">
                <p className="u-spaceMB9">
                  <a href="https://s3.eu-central-1.amazonaws.com/com-hedvig-web-content/F%C3%B6rk%C3%B6psinformation+-+Bostadsr%C3%A4tt+(Februari+2018).pdf">
                    För dig som äger bostadsrätt
                  </a>
                </p>
                <p className="u-spaceMB9">
                  <a href="https://s3.eu-central-1.amazonaws.com/com-hedvig-web-content/F%C3%B6rk%C3%B6psinformation+-+Hyresr%C3%A4tt+(Februari+2018).pdf">
                    För dig som hyr hyresrätt
                  </a>
                </p>
                <p className="u-spaceMB9">
                  <span>
                    <a href="https://s3.eu-central-1.amazonaws.com/com-hedvig-web-content/F%C3%B6rk%C3%B6psinformation+-+Andrahandshyrare+(Februari+2018).pdf">
                      För dig som hyr hyresrätt i andra hand
                    </a>{' '}
                    och vill att din hyresvärds saker ska täckas av försäkringen
                  </span>
                </p>
                <p className="u-spaceMB9">
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
        </div>
      </article>
    </StickyContainer>
    <Footer />
  </main>
)

export default Terms
