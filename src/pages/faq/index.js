import React from 'react';
import { Helmet } from 'react-helmet';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import './Faq.css';

const FAQ = () => (
  <main>
    <Helmet>
      <title>FAQ | Hedvig</title>
    </Helmet>
    <Header />
    <article className="">
      <div className="u-backgroundSecondaryGreen">
        <h1 className="u-fontFamilyHeader u-fontSize6 u-md-fontSize3 u-lg-fontSize2">
          Frågor och svar
        </h1>
      </div>
      <div className="">
        <div>
          <h2 className="u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
            Vilka typer av försäkringar har Hedvig?
          </h2>
          <p className="u-lg-fontSize9">
            Just nu försäkrar jag dig som äger eller hyr en lägenhet.
            Försäkringen täcker inte bara din lägenhet utan också dig – till
            exempel när du reser. Självklart ingår även ”drulleförsäkring” för
            alla dina prylar – så länge de inte kostar mer än 50&nbsp;000 kronor
            styck.
          </p>
        </div>
        <div>
          <h2 className="u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
            Jag vill byta till Hedvig men har redan en försäkring, hur gör jag?
          </h2>
          <p className="u-lg-fontSize9">
            Det är inga problem, jag sköter bytet åt dig. Allt du behöver göra
            är att signera med Mobilt BankID. Jag aktiverar din Hedvigförsäkring
            så fort bindningstiden går ut på din gamla. Du blir aldrig utan
            försäkring och behöver inte krångla med uppsägningen – det löser
            jag.
          </p>
        </div>
        <div>
          <h2 className="u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
            Hur lång är bindningstiden?
          </h2>
          <p className="u-lg-fontSize9">
            Det finns ingen bindningstid! Hedvig är Sveriges enda hemförsäkring
            utan. Det betyder att du kan säga upp din försäkring precis när du
            vill, utan anledning.
          </p>
        </div>
        <div>
          <h2 className="u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
            Är Hedvig tryggt?
          </h2>
          <p className="u-lg-fontSize9">
            Hedvig tryggas av ett globalt försäkringsbolag som heter
            International Insurance Company of Hannover. De är del av en av
            världens största försäkringsgrupper. Tryggare kan det nog inte bli!
          </p>
        </div>
        <div>
          <h2 className="u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
            Varför samarbetar Hedvig med välgörenhets&shy;organisationer?
          </h2>
          <p className="u-lg-fontSize9">
            Vissa år är skadorna låga, och då blir det pengar över. Ett vanligt
            försäkringsbolag hade tagit pengarna som extra vinst. Det gör inte
            jag. När det blir pengar över skänks de istället till ett gott
            ändamål. Du bestämmer vilket!
          </p>
        </div>
        <div>
          <h2 className="u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
            Är Hedvig icke-vinstdrivande?
          </h2>
          <p className="u-lg-fontSize9">
            Nej, Hedvig är ett vanligt bolag. Jag tar en fast avgift på 20% av
            det du betalar varje månad för att kunna ge dig bra service. Men jag
            tar aldrig mer än så! Jag tycker det är schysstare med en fast
            avgift. Då kan du känna dig trygg med att jag behandlar dig rättvist
            när du har en skada, eftersom jag aldrig vinner något på att hålla
            inne med dina pengar.
          </p>
        </div>
        <div>
          <h2 className="u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
            Hur vet jag vad min försäkring täcker?
          </h2>
          <p className="u-lg-fontSize9">
            Det ser du tydligt i appen, men om du är intresserad finns så klart
            hela försäkringsvillkor också! De hittar du här:
          </p>
          <p className="u-lg-fontSize9">
            <a href="https://s3.eu-central-1.amazonaws.com/com-hedvig-web-content/F%C3%B6rs%C3%A4kringsvillkor+-+Hyresr%C3%A4tt+(Februari+2018).pdf">
              För dig som hyr din lägenhet
            </a>
          </p>
          <p className="u-lg-fontSize9">
            <a href="https://s3.eu-central-1.amazonaws.com/com-hedvig-web-content/F%C3%B6rs%C3%A4kringsvillkor+-+Bostadsr%C3%A4tt+(Februari+2018).pdf">
              För dig som äger din lägenhet
            </a>
          </p>
          <p className="u-lg-fontSize9">
            Vill du inte läsa hela villkoren finns sammanfattningar här:
          </p>
          <p className="u-lg-fontSize9">
            <a href="https://s3.eu-central-1.amazonaws.com/com-hedvig-web-content/F%C3%B6rk%C3%B6psinformation+-+Hyresr%C3%A4tt+(Februari+2018).pdf">
              Förköpsinformation för dig som hyr lägenhet
            </a>
          </p>
          <p className="u-lg-fontSize9">
            <a href="https://s3.eu-central-1.amazonaws.com/com-hedvig-web-content/F%C3%B6rk%C3%B6psinformation+-+Bostadsr%C3%A4tt+(Februari+2018).pdf">
              Förköpsinformation för dig som äger lägenhet
            </a>
          </p>
        </div>
        <div>
          <h2 className="u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
            Vad kostar Hedvig?
          </h2>
          <p className="u-lg-fontSize9">
            Ditt pris beror på lite olika saker, till exempel hur du bor, var du
            bor och hur många du bor med. Så för att kunna ge dig ett pris
            behöver jag lära känna dig lite först. Ladda ner appen, så tar vi
            det därifrån!
          </p>
        </div>
        <div>
          <h2 className="u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
            Hur betalar jag för min försäkring?
          </h2>
          <p className="u-lg-fontSize9">
            Eftersom du inte har någon bindningstid betalar du per månad. Jag
            har valt det smidigaste betalsättet jag kunde hitta, och det är ett
            digitalt autogiro som kopplas till ditt bankkonto. Det sätts upp
            direkt i appen när du blir medlem, allt du behöver göra är att
            signera en gång med Mobilt BankID.
          </p>
        </div>
        <div>
          <h2 className="u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
            Hur kommer jag i kontakt med Hedvig?
          </h2>
          <p className="u-lg-fontSize9">
            Du kan fråga mig vad som helst när som helst direkt i appen. Du kan
            självklart också be en av mina kollegor att ringa upp dig. Om du
            gillar att maila når du mig på{' '}
            <a href="mailto:hedvig@hedvig.com">hedvig@hedvig.com</a>!
          </p>
        </div>
      </div>
    </article>
    <Footer />
  </main>
);

export default FAQ;
