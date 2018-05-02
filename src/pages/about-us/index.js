import React from 'react';
import { Helmet } from 'react-helmet';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import './AboutUs.css';

const AboutUs = () => (
  <main className="AboutUs">
    <Helmet>
      <title>Om Hedvig | Hedvig</title>
    </Helmet>
    <Header />
    <article className="">
      <div className="Container">
        <div className="">
          <h1 className="u-fontFamilyHeader u-fontSize6 u-md-fontSize3 u-lg-fontSize2">
            Vår historia
          </h1>
          <div>
            <p className="u-lg-fontSize9">
              Hedvig grundades i Stockholm i början av 2016. När vi satte igång
              kunde vi ungefär lika mycket om försäkring som du, vilket var
              toppen. Det betydde nämligen att vi ställde oss en massa frågor
              och utmanade alla gamla sanningar som finns i branschen. Vårt mål
              var enkelt. Att göra försäkring schysst, enkelt och blixtsnabbt.
            </p>
            <p className="u-lg-fontSize9">
              Även om vi idag kan nästan allt om försäkringar har vi ändå valt
              att samarbeta med en av världens största återförsäkringskoncerner.
              Vi backas dessutom av investerare som har investerat i, byggt upp
              och gett dig några av Sveriges bästa tjänster – som Spotify,
              Avanza och Klarna.
            </p>
          </div>
        </div>
        <div className="">
          <h1 className="u-fontFamilyHeader u-fontSize6 u-md-fontSize3 u-lg-fontSize2">
            Varför vi finns
          </h1>
          <div>
            <p className="u-lg-fontSize9">
              Om sanningen ska fram är det få som gillar att betala sin
              försäkring. Fullt förståeligt, om man tänker på hur försäkringar
              fungerar idag. Du betalar dina räkningar år efter år, utan att
              veta riktigt vart pengarna tar vägen. När du väl behöver den hjälp
              du betalat för så får du känslan av att bli lite motarbetad eller
              kanske till och med misstrodd. Varför är det så?
            </p>
            <p className="u-lg-fontSize9">
              Problemet med vanliga försäkringsbolag är att de tjänar mer när de
              betalar dig mindre. Hedvig är inget vanligt försäkringsbolag. Vi
              behandlar nämligen dina pengar som dina och tar bara ut en fast
              avgift för att driva och utveckla tjänsten. Resten av det du
              betalar öronmärks för att ersätta skador. Dina pengar är aldrig
              våra pengar. Istället ligger dom på att separat konto och kan
              endast användas för att betala ersättning till dig eller någon
              annan av våra medlemmar. När alla skador har betalats skänks
              överskottet till organisationer som gör världen bättre. Du väljer
              själv vad ditt hjärta klappar för.
            </p>
            <p className="u-lg-fontSize9">
              Allt vi bryr oss om är att ge dig hjälp när du behöver det. Och
              när du inte gör det, så hjälper vi dig hjälpa andra. Vi tycker att
              det är så försäkring borde fungera.
            </p>
          </div>
        </div>
      </div>
    </article>
    <Footer />
  </main>
);

export default AboutUs;
