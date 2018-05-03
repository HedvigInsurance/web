import React from 'react';
import { Helmet } from 'react-helmet';
import { LottieLoader } from 'src/components/LottieLoader';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import { ReactComponent as SOSBarnbyarLogo } from 'assets/charity/sos-barnbyar-logo.svg';
import { ReactComponent as BarncancerfondenLogo } from 'assets/charity/barncancerfonden-logo.svg';

import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Gatsby build
let width = 800;
if (typeof window !== 'undefined') {
  width = window.innerWidth;
}

const claimsAnimation = require('assets/animations/chat-demo/data.json');
const heroAnimation = require('assets/animations/hero/desktop/data.json');

const Landing = ({ data }) => (
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
      <div className="Container">
        <h1 className="u-colorWhite u-fontFamilyHero u-fontWeightSuper u-fontSize2 u-lg-fontSize1">
          Insurance.<br />Unbroken.
        </h1>
        <p className="u-colorWhite u-lg-fontSize9">
          Hedvig är en ny typ av försäkring. Byggd på smart teknik, omtanke och
          sunt förnuft. Så att du kan få hjälp på sekunder, och ersättning på
          minuter.
          <br />
          <br />
          För dig, ditt hem och dina saker.
        </p>
        <div className="Grid Grid--alignCenter u-md-flexJustifyStart">
          <a
            className="Button u-colorPrimaryBlack
                      u-lg-fontSize9 u-backgroundWhite"
            href="https://hedvig.app.link/kZNtW0cT9L"
            id="cta-app-download"
          >
            Ladda ner appen
          </a>
        </div>
      </div>
    </div>

    <div className="u-backgroundSecondaryPink">
      <div className="Container">
        <h2 className="u-fontFamilyHeader u-fontSize6 u-md-fontSize3 u-lg-fontSize2">
          Ditt försäkringsbolag är trasigt
        </h2>
        <p className="u-fontWeightMedium u-colorPrimaryPink u-textLineThrough u-fontSize8 u-md-fontSize5 u-lg-fontSize4">
          Leta på hemsidan för att hitta numret till kundtjänst vänta i
          telefonkön tills du kommer fram endast för att bli vidarekopplad till
          någon annan som vill att du fyller i femtioelva papper som du sedan
          ska skicka in innan väntan börjar på att någon ska återkoppla så att
          du någon gång kan få betalt-ish
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

            <div className="Grid Grid--alignCenter">
              <button
                className="Button u-colorWhite
                     u-lg-fontSize9 u-backgroundPrimaryDarkBlue"
              >
                Skaffa Hedvig
              </button>
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
      </div>
    </div>

    <div className="u-backgroundSecondaryGrey">
      <div className="Container">
        <h2 className="u-fontFamilyHeader u-fontSize6 u-md-fontSize3 u-lg-fontSize2">
          Vanliga försäkringsbolag tjänar mer när du får mindre. Men Hedvig är
          inget vanligt försäkringsbolag
        </h2>
        <div className="Grid">
          <figure className="u-lg-size1of2 u-lg-flexOrderLast u-textCenter">
            <Img
              className="u-imageContain"
              sizes={data.file.moneyExplainer.sizes}
              alt=""
            />
          </figure>
          <div className="Grid u-lg-size1of2">
            <div className="u-md-size1of2">
              <h3 className="u-fontWeightBold u-lg-fontSize9">
                En fast avgift för att ge dig bra service
              </h3>
              <p className="u-lg-fontSize9">
                20% går till att driva och utveckla Hedvig med rimlig vinst
              </p>
            </div>
            <div className="u-md-size1of2">
              <h3 className="u-fontWeightBold u-lg-fontSize9">
                Resten öronmärks till ersättningar
              </h3>
              <p className="u-lg-fontSize9">
                80% är öronmärkt till skador och till Hedvigs globala
                försäkringspartner InterHannover som ger extra trygghet
              </p>
            </div>
            <div className="u-md-size1of2">
              <h3 className="u-fontWeightBold u-lg-fontSize9">
                Det som inte går till ersättning går till välgörenhet
              </h3>
              <p className="u-lg-fontSize9">
                Överskottet skänks till ett gott ändamål istället för att gå
                till extra vinst
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="Container">
        <h2 className="u-fontFamilyHeader u-fontSize6 u-md-fontSize3 u-lg-fontSize2">
          Så funkar Hedvig
        </h2>

        <div className="Grid">
          <div className="u-md-size1of2 u-lg-size1of4">
            <p className="u-lg-fontSize9">
              Ladda ner Hedvig från din app store och registrera dig.
            </p>
          </div>
          <div className="u-md-size1of2 u-lg-size1of4">
            <p className="u-lg-fontSize9">
              Välj en välgörenhetsorganisation som ska få eventuellt överskott
              om skadeutbetalningarna är lägre än vad vi räknat med
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
              Hedvig betalar ut din ersättning blixtsnabbt. Vi har ingen
              anledning att smita från din ersättning eftersom det som inte
              betalas ut doneras till välgörenhet
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="">
      <div className="Container">
        <h2 className="u-textCenter u-fontFamilyHeader u-fontSize6 u-md-fontSize3 u-lg-fontSize2">
          Redan försäkrad? Byt på 2 minuter
        </h2>

        <div className="Grid Grid--alignCenter">
          <a
            className="Button u-backgroundPrimaryBlack
                     u-lg-fontSize9 u-colorWhite"
            href="/"
          >
            Skaffa Hedvig
          </a>
        </div>
      </div>
    </div>

    <div className="u-backgroundSecondaryGrey">
      <div className="Container">
        <h2 className="u-fontFamilyHeader u-fontSize6 u-md-fontSize3 u-lg-fontSize2">
          Våra välgörenhetspartners
        </h2>

        <div className="Grid">
          <div className="u-md-size1of2 u-lg-size1of2 u-textCenter">
            <BarncancerfondenLogo />
          </div>

          <div className="u-md-size1of2 u-lg-size1of2 u-textCenter">
            <SOSBarnbyarLogo />
          </div>
        </div>

        <div className="Grid Grid--alignCenter">
          <a
            className="Button u-backgroundPrimaryBlack
                     u-lg-fontSize9 u-colorWhite"
            href="/"
          >
            Läs mer
          </a>
        </div>
      </div>
    </div>

    <div className="u-backgroundPrimaryGreen">
      <div className="Container">
        <h2 className="u-fontFamilyHeader u-fontSize6 u-md-fontSize3 u-lg-fontSize2 u-colorWhite u-md-textCenter u-lg-textCenter">
          Självklart innehåller vår hemförsäkring allt vanliga hemförsäkringar
          innehåller. Förutom bindningstid då.
        </h2>
        <p className="u-colorWhite u-lg-fontSize9 u-md-textCenter u-lg-textCenter">
          (tyvärr har vi fortfarande självrisk, men vi jobbar på det)
        </p>

        <div className="Grid Grid--alignCenter">
          <div className="u-md-size1of3 u-lg-size1of3 u-flex u-flexCol u-flexAlignItemsCenter">
            <p className="u-colorWhite u-lg-fontSize9 u-textCenter">
              Skydd för dig hemma och på resa
            </p>
            <figure>
              <img
                width="120"
                src="/assets/graphics/inter-hannover@2x.png"
                alt=""
              />
            </figure>
          </div>

          <div className="u-md-size1of3 u-lg-size1of3 u-flex u-flexCol u-flexAlignItemsCenter">
            <p className="u-colorWhite u-lg-fontSize9 u-textCenter">
              Skydd för prylarna, inklusive drulle
            </p>
            <figure>
              <img width="120" src="/assets/graphics/aa-rating@2x.png" alt="" />
            </figure>
          </div>

          <div className="u-md-size1of3 u-lg-size1of3 u-flex u-flexCol u-flexAlignItemsCenter">
            <p className="u-colorWhite u-lg-fontSize9 u-textCenter">
              Skydd för eldsvåda, vattenläcka, inbrott och det mesta som kan
              hända ett hem
            </p>
            <figure>
              <img
                width="120"
                src="/assets/graphics/finansinspektionen@2x.png"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="Container">
        <div className="Grid Grid--alignCenter">
          <div className="u-md-size1of3 u-lg-size1of3 u-flex u-flexCol u-flexAlignItemsCenter">
            <figure>
              <img
                width="120"
                src="/assets/graphics/inter-hannover@2x.png"
                alt=""
              />
            </figure>
            <p className="u-lg-fontSize9 u-textCenter">
              Hedvig är tryggat av InterHannover, del av en av världens största
              åter-försäkringskoncerner
            </p>
          </div>

          <div className="u-md-size1of3 u-lg-size1of3 u-flex u-flexCol u-flexAlignItemsCenter">
            <figure>
              <img width="120" src="/assets/graphics/aa-rating@2x.png" alt="" />
            </figure>
            <p className="u-lg-fontSize9 u-textCenter">
              AA-rating från Standard &amp; Poor&apos;s
            </p>
          </div>

          <div className="u-md-size1of3 u-lg-size1of3 u-flex u-flexCol u-flexAlignItemsCenter">
            <figure>
              <img
                width="120"
                src="/assets/graphics/finansinspektionen@2x.png"
                alt=""
              />
            </figure>
            <p className="u-lg-fontSize9 u-textCenter">
              Auktoriserade av Finansinspektionen
            </p>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </main>
);

Landing.propTypes = {
  data: PropTypes.isRequired,
};

export default Landing;

export const query = graphql`
  query HomeMoneyExplainerQuery {
    file(relativePath: { eq: "money-model@2x.png" }) {
      moneyExplainer: childImageSharp {
        sizes(maxWidth: 514) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
  }
`;
