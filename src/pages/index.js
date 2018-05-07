import React from 'react';
import PropTypes from 'prop-types';
import { LottieLoader } from 'src/components/LottieLoader';
import Img from 'gatsby-image';
import VisibilitySensor from 'react-visibility-sensor';

import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

import { ReactComponent as HeroHeader } from 'assets/headers/insurance-unbroken-hearo-header.svg';

import './Home.css';

const claimsAnimation = require('assets/animations/chat-demo/data.json');
const heroAnimation = require('assets/animations/hero/data.json');

const WAIT_UNTIL_UNBREAK_HERO_MS = 1500;

class Landing extends React.Component {
  componentWillUnmount() {
    if (this.heroAnimTimer) {
      clearTimeout(this.heroAnimTimer);
      this.heroAnimTimer = null;
    }
  }

  heroAnimOnLoad = () => {
    if (!this.heroAnim) return;

    this.heroAnimTimer = setTimeout(() => {
      this.heroAnim.play();
    }, WAIT_UNTIL_UNBREAK_HERO_MS);
  };

  chatDemoOnVisibilityChange = (isVisible) => {
    if (!this.chatAnim) return;

    if (isVisible) {
      this.chatAnim.play();
    } else {
      this.chatAnim.stop();
    }
  };

  render() {
    const { data } = this.props;
    return (
      <main className="Site">
        <section className="Site-content">
          <div className="u-backgroundPrimaryBlack">
            <Header isInverted />
            <div className="u-posRelative u-nbfc">
              <div className="u-posRelative" style={{ zIndex: 1 }}>
                <div className="Container u-md-spacePT7 u-lg-spacePT6">
                  <h1
                    className="u-spaceMT2 u-spaceMB10 u-md-spaceMB8 u-lg-spaceMB8"
                    aria-label="Insurance. Unbroken."
                  >
                    <HeroHeader alt="" className="Home-heroHeaderSvg" />
                  </h1>
                  <p
                    style={{ maxWidth: 600 }}
                    className="u-colorWhite u-spaceMT10 u-spaceMB10 u-lg-fontSize9"
                  >
                    Hedvig är en ny typ av försäkring. Byggd på smart teknik,
                    omtanke och sunt förnuft. Så att du kan få hjälp på
                    sekunder, och ersättning på minuter.
                  </p>
                  <p className="u-colorWhite u-spaceMT10 u-spaceMB10 u-lg-fontSize9">
                    För dig, ditt hem och dina saker.
                  </p>
                  <div className="Grid Grid--alignCenter u-md-flexJustifyStart u-lg-flexJustifyStart u-spaceMT6 u-spaceMB5 u-md-spaceMB3 u-lg-spaceMB2">
                    <a
                      className="Button u-colorPrimaryBlack
                            u-lg-fontSize9 u-backgroundWhite"
                      href="https://hedvig.app.link/kZNtW0cT9L"
                      data-cta-app-download="home-hero"
                    >
                      Try it!
                    </a>
                  </div>
                </div>
              </div>

              <div className="u-posFit" style={{ zIndex: 0 }}>
                <LottieLoader
                  ref={(anim) => {
                    this.heroAnim = anim;
                  }}
                  options={{
                    loop: false,
                    autoplay: false,
                    renderer: 'svg',
                    animationData: heroAnimation,
                    rendererSettings: {
                      progressiveLoad: true,
                      preserveAspectRatio: 'xMidYMid slice',
                      className: 'Home-heroBackgroundSvg',
                    },
                  }}
                  eventListeners={[
                    {
                      eventName: 'DOMLoaded',
                      callback: this.heroAnimOnLoad,
                    },
                  ]}
                  height={null}
                  width={null}
                />
              </div>
            </div>
          </div>

          <div className="u-backgroundSecondaryPink">
            <div className="">
              <div className="Container">
                <h2 className="u-spaceMT5 u-md-spaceMT2 u-lg-spaceMT2 u-spaceMB7 u-md-spaceMB6 u-lg-spaceMB6 u-fontFamilyHeader u-fontSize6 u-md-fontSize3 u-lg-fontSize2">
                  Ditt försäkrings&shy;bolag är trasigt
                </h2>
                <p
                  style={{ maxWidth: 900 }}
                  className="u-spaceMB4 u-md-spaceMB3 u-lg-spaceMB2 u-fontWeightMedium u-colorPrimaryPink
                             u-fontSize8 u-md-fontSize5 u-lg-fontSize4"
                >
                  <strike className="Home-strike">
                    Leta på hemsidan för att hitta numret till kundtjänst vänta
                    i telefonkön tills du kommer fram endast för att bli
                    vidarekopplad till någon annan som vill att du fyller i
                    femtioelva papper som du sedan ska skicka in innan väntan
                    börjar på att någon ska återkoppla så att du någon gång kan
                    få betalt-ish
                  </strike>
                </p>
              </div>

              <div className="Container Container--withoutGutter">
                <div className="Grid u-nbfc">
                  <div
                    className="Container u-md-size1of2 u-lg-size1of2"
                    style={{ zIndex: 1 }}
                  >
                    <h2 className="u-md-spaceMB8 u-lg-spaceMB8 u-fontFamilyHeader u-fontSize6 u-md-fontSize3 u-lg-fontSize2">
                      Hedvig är lösningen. Få hjälp på sekunder, ersättning på
                      minuter
                    </h2>
                    <div className="u-hidden u-md-block u-lg-block">
                      <p className="u-lg-fontSize9 u-spaceMB7">
                        Hedvig gör det enkelt när oturen varit framme. Bara
                        spela in ett kort röstmeddelande där du berättar vad som
                        hänt.
                      </p>

                      <a
                        className="Button u-colorWhite
                              u-lg-fontSize9 u-backgroundPrimaryDarkBlue"
                        href="https://hedvig.app.link/kZNtW0cT9L"
                        data-cta-app-download="home-chat-demo"
                      >
                        Kom igång direkt
                      </a>
                    </div>
                  </div>
                  <div className="u-spaceMB5 u-md-size1of2 u-lg-size1of2">
                    <VisibilitySensor
                      partialVisibility
                      onChange={this.chatDemoOnVisibilityChange}
                    >
                      <div className="Home-chatDemo">
                        <Img
                          className="Home-chatDemo-phone"
                          sizes={data.chatDemoBgFile.image.sizes}
                          alt=""
                        />

                        <LottieLoader
                          ref={(anim) => {
                            this.chatAnim = anim;
                          }}
                          options={{
                            loop: false,
                            autoplay: false,
                            renderer: 'svg',
                            animationData: claimsAnimation,
                            rendererSettings: {
                              progressiveLoad: true,
                              preserveAspectRatio: 'xMaxYMin meet',
                              className: 'Home-chatDemo-animation',
                            },
                          }}
                        />
                      </div>
                    </VisibilitySensor>
                  </div>
                </div>

                <div className="Container u-md-hidden u-lg-hidden">
                  <div className="Grid Grid--alignCenter u-spaceMB4">
                    <a
                      className="Button u-colorWhite
                          u-lg-fontSize9 u-backgroundPrimaryDarkBlue"
                      href="https://hedvig.app.link/kZNtW0cT9L"
                      data-cta-app-download="home-chat-demo"
                    >
                      Kom igång direkt
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="Container">
              <h2
                style={{ maxWidth: 900 }}
                className="u-spaceMT5 u-md-spaceMT2 u-lg-spaceMT2 u-spaceMB6 u-fontFamilyHeader u-fontSize6 u-md-fontSize3 u-lg-fontSize2"
              >
                Vanliga försäkrings&shy;bolag tjänar mer när du får mindre. Men
                Hedvig är inget vanligt försäkrings&shy;bolag
              </h2>
              <div className="Grid Grid--withGutter u-spaceMB6 u-md-spaceMB5 u-lg-spaceMB4 u-flexAlignItemsCenter">
                <figure className="u-spaceMB6 u-md-size1of2 u-lg-size1of2 u-md-flexOrderLast u-lg-flexOrderLast u-textCenter">
                  <Img
                    className="u-imageContain"
                    sizes={data.moneyModelFile.image.sizes}
                    alt=""
                  />
                </figure>
                <div className="u-md-size1of2 u-lg-size1of2">
                  <div>
                    <div className="">
                      <h3
                        className="u-spaceMB12 u-fontWeightBold u-lg-fontSize9"
                        style={{ textIndent: '-1.5em', paddingLeft: '1.5em' }}
                      >
                        <span
                          style={{ width: 12, height: 12, borderRadius: 6 }}
                          className="u-backgroundPrimaryGreen u-inlineBlock u-spaceMR12"
                        />{' '}
                        En fast avgift för att ge dig bra service
                      </h3>
                      <p className="u-spaceMB9 u-lg-fontSize9">
                        20% går till att driva och utveckla Hedvig med rimlig
                        vinst
                      </p>
                    </div>
                    <div className="">
                      <h3
                        className="u-spaceMB12 u-fontWeightBold u-lg-fontSize9"
                        style={{ textIndent: '-1.5em', paddingLeft: '1.5em' }}
                      >
                        <span
                          style={{ width: 12, height: 12, borderRadius: 6 }}
                          className="u-backgroundPrimaryDarkBlue u-inlineBlock u-spaceMR12"
                        />{' '}
                        Resten öronmärks till ersättningar
                      </h3>
                      <p className="u-spaceMB9 u-lg-fontSize9">
                        80% är öronmärkt till skador och till Hedvigs globala
                        försäkringspartner Inter Hannover som ger extra trygghet
                      </p>
                    </div>
                    <div className="">
                      <h3
                        className="u-spaceMB12 u-fontWeightBold u-lg-fontSize9"
                        style={{ textIndent: '-1.5em', paddingLeft: '1.5em' }}
                      >
                        <span
                          style={{ width: 12, height: 12, borderRadius: 6 }}
                          className="u-backgroundPrimaryPink u-inlineBlock u-spaceMR12"
                        />{' '}
                        Det som inte går till ersättning går till välgörenhet
                      </h3>
                      <p className="u-spaceMB9 u-lg-fontSize9">
                        Överskottet skänks till ett gott ändamål istället för
                        att gå till extra vinst
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="u-backgroundSecondaryGrey">
            <div className="Container Home-howItWorks">
              <h2 className="u-spaceMT5 u-md-spaceMT2 u-lg-spaceMT2 u-spaceMB10 u-md-spaceMB6 u-lg-spaceMB6 u-fontFamilyHeader u-fontSize6 u-md-fontSize3 u-lg-fontSize2">
                Så funkar Hedvig
              </h2>

              <div className="Grid Grid--withGutter u-spaceMB6 u-md-spaceMB4 u-lg-spaceMB4">
                <div className="u-spaceMB9 u-md-size1of2 u-lg-size1of4">
                  <span className="NumberedIcon">1</span>
                  <p className="u-lg-fontSize9">
                    Ladda ner Hedvig från din app store och registrera dig
                  </p>
                </div>
                <div className="u-spaceMB9 u-md-size1of2 u-lg-size1of4">
                  <span className="NumberedIcon">2</span>
                  <p className="u-lg-fontSize9">
                    Välj en välgörenhets&shy;organisation som ska få eventuellt
                    överskott om skadeutbetalningarna är lägre än vad vi räknat
                    med
                  </p>
                </div>
                <div className="u-spaceMB9 u-md-size1of2 u-lg-size1of4">
                  <span className="NumberedIcon">3</span>
                  <p className="u-lg-fontSize9">
                    När olyckan varit framme så anmäler du den genom att spela
                    in ett röstmeddelande direkt i appen
                  </p>
                </div>
                <div className="u-spaceMB9 u-md-size1of2 u-lg-size1of4">
                  <span className="NumberedIcon">4</span>
                  <p className="u-lg-fontSize9">
                    Hedvig betalar ut din ersättning blixtsnabbt. Vi tjänar
                    inget på att smita från din ersättning eftersom vi donerar
                    överskottet till välgörenhet istället för att behålla det
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="Container">
              <h2 className="u-spaceMT5 u-md-spaceMT2 u-lg-spaceMT2 u-spaceMB6 u-textCenter u-fontFamilyHeader u-fontSize6 u-md-fontSize3 u-lg-fontSize2">
                Redan försäkrad? Byt på 2 minuter
              </h2>

              <div className="Grid Grid--alignCenter u-spaceMB4 u-md-spaceMB3 u-lg-spaceMB3">
                <a
                  className="Button u-backgroundPrimaryBlack
                        u-lg-fontSize9 u-colorWhite"
                  href="https://hedvig.app.link/kZNtW0cT9L"
                  data-cta-app-download="home-already-insured"
                >
                  Skaffa Hedvig
                </a>
              </div>
            </div>
          </div>

          <div className="u-backgroundPrimaryGreen">
            <div className="Container">
              <h2
                style={{ maxWidth: 1000 }}
                className="u-spaceMT5 u-md-spaceMT2 u-lg-spaceMT2 u-spaceMB8 u-fontFamilyHeader u-fontSize6 u-md-fontSize3
                          u-lg-fontSize2 u-colorWhite u-md-textCenter u-lg-textCenter u-flexExpand"
              >
                Självklart innehåller vår hemförsäkring allt vanliga
                hemförsäkringar innehåller. Förutom bindningstid då
              </h2>
              <p className="u-spaceMB8 u-md-spaceMB6 u-lg-spaceMB6 u-colorWhite u-lg-fontSize9 u-md-textCenter u-lg-textCenter">
                (tyvärr har vi fortfarande självrisk, men vi jobbar på det)
              </p>

              <div className="u-spaceMB4 u-md-spaceMB3 u-lg-spaceMB3 u-textCenter">
                <a
                  className="Button u-colorPrimaryBlack
                              u-lg-fontSize9 u-backgroundWhite"
                  href="https://hedvig.app.link/kZNtW0cT9L"
                  data-cta-app-download="home-comparison"
                >
                  Läs mer i appen
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="Container">
              <div className="Grid Grid--withGutter Grid--alignCenter u-spaceMT9 u-md-spaceMT5 u-lg-spaceMT5 u-spaceMB4 u-md-spaceMB3 u-lg-spaceMB3">
                <div className="u-md-size1of3 u-lg-size1of3 u-flex u-flexCol u-flexAlignItemsCenter">
                  <figure className="u-spaceMB9 u-spaceMT6">
                    <Img
                      style={{ width: 120 }}
                      sizes={data.reinsuredFile.image.sizes}
                      alt=""
                    />
                  </figure>
                  <p className="u-lg-fontSize9 u-textCenter u-maxWidth1of3">
                    Hedvig är tryggat av Inter Hannover, del av en av världens
                    största försäkringsgrupper
                  </p>
                </div>

                <div className="u-md-size1of3 u-lg-size1of3 u-flex u-flexCol u-flexAlignItemsCenter">
                  <figure className="u-spaceMB9 u-spaceMT6">
                    <Img
                      style={{ width: 120 }}
                      sizes={data.aaRatedFile.image.sizes}
                      alt=""
                    />
                  </figure>
                  <p className="u-lg-fontSize9 u-textCenter u-maxWidth1of3">
                    Med AA-rating från Standard &amp; Poor&apos;s
                  </p>
                </div>

                <div className="u-md-size1of3 u-lg-size1of3 u-flex u-flexCol u-flexAlignItemsCenter">
                  <figure className="u-spaceMB9 u-spaceMT6">
                    <Img
                      style={{ width: 120 }}
                      sizes={data.authorisedFile.image.sizes}
                      alt=""
                    />
                  </figure>
                  <p className="u-lg-fontSize9 u-textCenter u-maxWidth1of3">
                    Hedvig är auktoriserat av Finansinspektionen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    );
  }
}

Landing.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Landing;

export const query = graphql`
  query HomeMoneyExplainerQuery {
    moneyModelFile: file(relativePath: { eq: "home/money-model@2x.png" }) {
      image: childImageSharp {
        sizes(maxWidth: 514) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
    reinsuredFile: file(relativePath: { eq: "home/reinsured@2x.png" }) {
      image: childImageSharp {
        sizes(maxWidth: 120) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
    authorisedFile: file(relativePath: { eq: "home/authorised@2x.png" }) {
      image: childImageSharp {
        sizes(maxWidth: 120) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
    aaRatedFile: file(relativePath: { eq: "home/aa-rated@2x.png" }) {
      image: childImageSharp {
        sizes(maxWidth: 120) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
    chatDemoBgFile: file(relativePath: { eq: "home/chat-demo-bg@2x.png" }) {
      image: childImageSharp {
        sizes(maxWidth: 650) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
  }
`;
