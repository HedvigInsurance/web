import React from 'react';
import { Helmet } from 'react-helmet';
import { LottieLoader } from 'src/components/LottieLoader';

import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Gatsby build
let width = 800;
if (typeof window !== 'undefined') {
  width = window.innerWidth;
}

const claimsAnimation = require('assets/animations/chat-demo/data.json');
const heroAnimation = require('assets/animations/hero/desktop/data.json');

const Landing = () => (
  <main>
    <Helmet title="Hedvig" />
    <div className="u-backgroundPrimaryBlack">
      <Header />
      <LottieLoader
        style={
          {
            // backgroundColor: '#fff',
            // width: '100%',
            // height: '100%',
            // display: 'block',
            // transform: 'translate3d(0,0,0)',
            // textAlign: 'center',
            // opacity: '1',
          }
        }
        options={{
          loop: false,
          autoplay: false,
          renderer: 'svg',
          animationData: heroAnimation,
        }}
        // height={width > 414 ? 610 : 450}
        // width={width > 414 ? 352 : 260}
      />
      <h1 className="u-colorWhite u-fontFamilyHero u-fontWeightSuper u-fontSize2 u-lg-fontSize1">
        Insurance.<br />Unbroken.
      </h1>
      <p className="u-colorWhite u-lg-fontSize9">
        Hedvig är en ny typ av försäkring. Byggd på smart teknik, omtanke och
        sunt förnuft. Så att du kan få hjälp på sekunder, och ersättning på
        minuter.
        <br />
        För dig, ditt hem och dina saker.
      </p>
      <div className="Grid Grid--alignCenter u-md-flexJustifyStart">
        <a
          className="u-linkClean u-colorPrimaryBlack u-block u-textCenter u-fontSize10
                     u-lg-fontSize9 u-backgroundWhite"
          href="https://hedvig.app.link/kZNtW0cT9L"
          id="cta-app-download"
          style={{ maxWidth: '200px' }}
        >
          Ladda ner appen
        </a>
      </div>
    </div>

    <div className="u-backgroundSecondaryPink">
      <h2 className="u-fontFamilyHeader u-fontSize6 u-md-fontSize3 u-lg-fontSize2">
        Ditt försäkringsbolag är trasigt
      </h2>
      <p className="u-fontWeightMedium u-colorPrimaryPink u-textLineThrough u-fontSize8 u-md-fontSize5 u-lg-fontSize4">
        Leta på hemsidan i en kvart efter mailen till kundtjänst utan att hitta
        den så du måste vänta i världens telefonkö bara för att få reda på att
        du tydligen ska skicka in femtioelva papper och sen får du vänta i tre
        veckor för att få betalt (ish)
      </p>

      <div className="Grid">
        <div className="u-md-size1of2 u-lg-size1of2">
          <h2 className="u-fontFamilyHeader u-fontSize6 u-md-fontSize3 u-lg-fontSize2">
            Hedvig är lösningen. Få hjälp på sekunder, ersättning på minuter
          </h2>
          <div className="u-hidden u-md-block u-lg-block">
            <p className="u-lg-fontSize9">
              Hedvig gör det enkelt när oturen varit framme. Bara spela in ett
              kort röstmeddelande där du berättar vad som hänt.
            </p>
          </div>
        </div>
        <div className="u-md-size1of2 u-lg-size1of2">
          <div>
            <LottieLoader
              options={{
                loop: false,
                autoplay: false,
                animationData: claimsAnimation,
              }}
              height={width > 414 ? 610 : 450}
              width={width > 414 ? 352 : 260}
            />
          </div>
        </div>
      </div>

      <div className="Grid Grid--alignCenter">
        <button
          className="u-colorWhite u-block u-textCenter u-fontSize10
                     u-lg-fontSize9 u-backgroundPrimaryDarkBlue"
          style={{ maxWidth: '200px' }}
        >
          Se alla fördelar
        </button>
      </div>
    </div>

    <div>
      <h2 className="u-fontFamilyHeader u-fontSize6 u-md-fontSize3 u-lg-fontSize2">
        Så funkar Hedvig
      </h2>

      <div className="Grid">
        <div className="u-md-size1of2 u-lg-size1of4">
          <p className="u-lg-fontSize9">
            Ladda ner Hedvig från din app store och registrera dig. Har du redan
            en hemförsäkring så hjälper Hedvig dig att byta.
          </p>
        </div>
        <div className="u-md-size1of2 u-lg-size1of4">
          <p className="u-lg-fontSize9">
            Välj en välgörenhetsorganisation som ska få eventuellt överskottet
            om skadeutbetalning-arna är lägre än vad vi räknat med
          </p>
        </div>
        <div className="u-md-size1of2 u-lg-size1of4">
          <p className="u-lg-fontSize9">
            När olyckan varit framme så anmäler du den genom att spela in ett
            röstmeddelande direkt i appen
          </p>
        </div>
        <div className="u-md-size1of2 u-lg-size1of4">
          <p className="u-lg-fontSize9">
            Hedvig betalar ut din ersättning blixtsnabbt. Vi har ingen anledning
            att smita från din ersättning eftersom det som inte betalas ut
            doneras till välgörenhet
          </p>
        </div>
      </div>
    </div>

    <div className="u-backgroundSecondaryGrey">
      <h2 className="u-fontFamilyHeader u-fontSize6 u-md-fontSize3 u-lg-fontSize2">
        Försäkringsbolag ska aldrig tjäna på att säga nej. Därför går vårt
        överskott till välgörenhet
      </h2>
      <div>image</div>
      <div className="Grid">
        <div className="u-md-size1of2 u-lg-size1of2">
          <h3 className="u-fontWeightBold u-lg-fontSize9">Hedvig</h3>
          <p className="u-lg-fontSize9">
            20% går till att driva och utveckla Hedvig med rimlig vinst.
          </p>
        </div>
        <div className="u-md-size1of2 u-lg-size1of2">
          <h3 className="u-fontWeightBold u-lg-fontSize9">
            Ersättning &amp; välgörenhet
          </h3>
          <p className="u-lg-fontSize9">
            80% är öronmärkt till skador och till Hedvigs globala
            försäkringspartner InterHannover som ger extra trygghet. Ett bra år
            med låga skador går överskottet till välgörenhet.
          </p>
        </div>
      </div>
    </div>

    <div className="u-backgroundSecondaryGrey">
      <h2 className="u-fontFamilyHeader u-fontSize6 u-md-fontSize3 u-lg-fontSize2">
        Våra välgörenhetspartners
      </h2>

      <div className="Grid">
        <div className="u-md-size1of2 u-lg-size1of2">
          <div>logo barncancerfonden</div>
        </div>

        <div className="u-md-size1of2 u-lg-size1of2">
          <div>logo sos barnbyar</div>
        </div>
      </div>

      <div className="Grid Grid--alignCenter">
        <a
          className="u-linkClean u-colorPrimaryBlack u-block u-textCenter u-fontSize10
                     u-lg-fontSize9 u-backgroundWhite"
          href="/"
          style={{ maxWidth: '200px' }}
        >
          Se alla fördelar
        </a>
      </div>
    </div>

    <div className="u-backgroundPrimaryGreen">
      <h2 className="u-colorWhite u-md-textCenter u-lg-textCenter">
        Självklart innehåller vår hemförsäkring allt vanliga hemförsäkringar
        innehåller. Förutom bindningstid då
      </h2>
      <p className="u-colorWhite u-lg-fontSize9 u-md-textCenter u-lg-textCenter">
        (tyvärr har vi fortfarande självrisk, men vi jobbar på det)
      </p>

      <div className="Grid Grid--alignCenter">
        <div className="u-md-size1of3 u-lg-size1of3">
          <p className="u-colorWhite u-lg-fontSize9 u-textCenter">
            Skydd för dig hemma och på resa
          </p>
          <figure>bild</figure>
        </div>

        <div className="u-md-size1of3 u-lg-size1of3">
          <p className="u-colorWhite u-lg-fontSize9 u-textCenter">
            Skydd för prylarna, inklusive drulle
          </p>
          <figure>bild</figure>
        </div>

        <div className="u-md-size1of3 u-lg-size1of3">
          <p className="u-colorWhite u-lg-fontSize9 u-textCenter">
            Skydd för eldsvåda, vattenläcka, inbrott och det mesta som kan hända
            ett hem
          </p>
          <figure>bild</figure>
        </div>
      </div>
    </div>

    <div>
      <div className="Grid Grid--alignCenter">
        <div className="u-md-size1of3 u-lg-size1of3">
          <figure>bild</figure>
          <p className="u-lg-fontSize9 u-textCenter">
            Hedvig är tryggat av InterHannover, del av en av världens största
            åter-försäkringskoncerner
          </p>
        </div>

        <div className="u-md-size1of3 u-lg-size1of3">
          <figure>bild</figure>
          <p className="u-lg-fontSize9 u-textCenter">
            AA-rating från Standard &amp; Poor&apos;s
          </p>
        </div>

        <div className="u-md-size1of3 u-lg-size1of3">
          <figure>bild</figure>
          <p className="u-lg-fontSize9 u-textCenter">
            Auktoriserade av Finansinspektionen
          </p>
        </div>
      </div>
    </div>

    <Footer />
  </main>
);

export default Landing;
