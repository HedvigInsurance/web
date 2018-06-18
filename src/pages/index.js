import React from 'react';
import PropTypes from 'prop-types';
import { LottieLoader } from 'src/components/LottieLoader';
import Img from 'gatsby-image';
import VisibilitySensor from 'react-visibility-sensor';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import AppLink from 'src/components/AppLink';

import { ReactComponent as HeroHeader } from 'assets/headers/insurance-unbroken-hero-header.svg';

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
          <div className="u-backgroundPrimaryDarkBlue">
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
                    className="u-colorWhite u-spaceMT8 u-fontSize8 u-fontWeightBold u-textCenter u-md-textLeft u-lg-textLeft"
                  >
                    Blixtsnabb hemförsäkring med&nbsp;stort&nbsp;hjärta.
                  </p>
                  <div className="Grid Grid--alignCenter u-md-flexJustifyStart u-lg-flexJustifyStart u-spaceMT5 u-spaceMB4 u-md-spaceMB3 u-lg-spaceMB2">
                    <AppLink
                      tags={['home-hero']}
                      className="Button u-colorPrimaryDarkBlue u-backgroundWhite"
                      style={{
                        boxShadow:
                          '0 4px 25px 3px rgba(255, 255, 255, 0.35), 0 1px 10px 0 rgba(0, 0, 0, 0.1)',
                        padding: '1.5em 2.5em',
                      }}
                    >
                      Se ditt pris i appen
                    </AppLink>
                    <div className="u-spaceMT9 u-md-spaceMT9 u-lg-spaceMT8 u-colorWhite u-textCenter u-md-textLeft u-lg-textLeft">
                      Redan försäkrad? Vi sköter bytet
                    </div>
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

          <div>
            <div className="Container">
              <Img
                style={{ maxWidth: 659 }}
                sizes={data.mediaLogosFile.image.sizes}
                alt=""
              />
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
                  className="u-spaceMB4 u-md-spaceMB3 u-lg-spaceMB2 u-fontWeightBold u-colorPrimaryPink
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
                      <p className="u-spaceMB7">
                        Hedvig gör det enkelt när oturen varit framme. Bara
                        spela in ett kort röstmeddelande där du berättar vad som
                        hänt.
                      </p>

                      <AppLink
                        tags={['home-chat-demo']}
                        className="Button u-colorWhite
                              u-backgroundPrimaryDarkBlue"
                      >
                        Kom igång direkt
                      </AppLink>
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
                    <AppLink
                      tags={['home-chat-demo']}
                      className="Button u-colorWhite
                        u-backgroundPrimaryDarkBlue"
                    >
                      Kom igång direkt
                    </AppLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="u-backgroundSecondaryGrey u-spacePT5 u-md-spacePT2 u-lg-spacePT2 u-spacePB5 u-md-spacePB2 u-lg-spacePB2">
            <div className="Container">
              <div>
                <h2 className="u-textCenter u-spaceMB7 u-md-spaceMB6 u-lg-spaceMB6 u-fontFamilyHeader u-fontSize6 u-md-fontSize3 u-lg-fontSize2">
                  Månadsvis betalning. Ingen bindningstid
                </h2>
              </div>
              <div className="Grid u-flexJustifyAround">
                <div className="Card u-md-size1of2 u-lg-size1of2 u-maxWidth1of2 u-spacePV8 u-spaceMB8 u-md-spaceMB0 u-lg-spaceMB0">
                  <div className="CardHeader u-spacePH8 u-spacePB8">
                    <h3 className="u-fontFamilyHeader u-fontSize7">
                      Hemförsäkring för hyresrätt
                    </h3>
                  </div>
                  <div className="u-spacePH8">
                    <div className="u-spacePT10">
                      <div>
                        <h4 className="u-fontSize8 u-fontWeightBook u-inline">
                          Från 99 kr
                        </h4>
                        <span>/mån</span>
                      </div>
                      <p className="u-fontSize10 u-colorPrimaryDarkGrey">
                        (en person, liten lägenhet)
                      </p>
                    </div>
                    <div className="u-spacePV8">
                      <div>
                        <h4 className="u-fontSize8 u-fontWeightBook u-inline">
                          Till 799 kr
                        </h4>
                        <span>/mån</span>
                      </div>
                      <p className="u-fontSize10 u-colorPrimaryDarkGrey">
                        (sex personer, stor lägenhet)
                      </p>
                    </div>
                    <div className="u-textCenter u-spaceMV8">
                      <AppLink
                        tags={['home-price-example-rent']}
                        className="Button u-backgroundPrimaryGreen u-colorWhite"
                      >
                        Se ditt pris i appen
                      </AppLink>
                    </div>
                  </div>
                </div>
                <div className="Card u-md-size1of2 u-lg-size1of2 u-maxWidth1of2 u-spacePV8">
                  <div className="CardHeader u-spacePH8 u-spacePB8">
                    <h3 className="u-fontFamilyHeader u-fontSize7">
                      Hemförsäkring för bostadsrätt
                    </h3>
                  </div>
                  <div className="u-spacePH8">
                    <div className="u-spacePT10">
                      <div>
                        <h4 className="u-fontSize8 u-fontWeightBook u-inline">
                          Från 129 kr
                        </h4>
                        <span>/mån</span>
                      </div>
                      <p className="u-fontSize10 u-colorPrimaryDarkGrey">
                        (en person, liten lägenhet)
                      </p>
                    </div>
                    <div className="u-spacePV8">
                      <div>
                        <h4 className="u-fontSize8 u-fontWeightBook u-inline">
                          Till 999 kr
                        </h4>
                        <span>/mån</span>
                      </div>
                      <p className="u-fontSize10 u-colorPrimaryDarkGrey">
                        (sex personer, stor lägenhet)
                      </p>
                    </div>
                    <div className="u-textCenter u-spaceMV8">
                      <AppLink
                        tags={['home-price-example-brf']}
                        className="Button u-backgroundPrimaryGreen u-colorWhite"
                      >
                        Se ditt pris i appen
                      </AppLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ overflowX: 'hidden' }}>
            <div className="u-posRelative" style={{ zIndex: 1 }}>
              <div className="Container">
                <h2
                  style={{ maxWidth: 900 }}
                  className="u-spaceMT5 u-md-spaceMT2 u-lg-spaceMT2 u-spaceMB6 u-fontFamilyHeader u-fontSize6 u-md-fontSize3 u-lg-fontSize2"
                >
                  Vanliga försäkrings&shy;bolag tjänar mer när du får mindre.
                  Men Hedvig är inget vanligt försäkrings&shy;bolag
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
                          className="u-spaceMB12 u-fontWeightBold"
                          style={{ textIndent: '-1.5em', paddingLeft: '1.5em' }}
                        >
                          <span
                            style={{
                              width: 12,
                              height: 12,
                              marginRight: 14,
                              borderRadius: 6,
                            }}
                            className="u-backgroundPrimaryGreen u-inlineBlock"
                          />{' '}
                          En fast avgift för att ge dig bra service
                        </h3>
                        <p className="u-spaceMB9">
                          20% går till att driva och utveckla Hedvig med rimlig
                          vinst
                        </p>
                      </div>
                      <div className="">
                        <h3
                          className="u-spaceMB12 u-fontWeightBold"
                          style={{ textIndent: '-1.5em', paddingLeft: '1.5em' }}
                        >
                          <span
                            style={{
                              width: 12,
                              height: 12,
                              marginRight: 14,
                              borderRadius: 6,
                            }}
                            className="u-backgroundPrimaryDarkBlue u-inlineBlock"
                          />{' '}
                          Resten öronmärks till ersättningar
                        </h3>
                        <p className="u-spaceMB9">
                          80% är öronmärkt till skador och till Hedvigs globala
                          försäkringspartner Inter Hannover som ger extra
                          trygghet
                        </p>
                      </div>
                      <div className="">
                        <h3
                          className="u-spaceMB12 u-fontWeightBold"
                          style={{ textIndent: '-1.5em', paddingLeft: '1.5em' }}
                        >
                          <span
                            style={{
                              width: 12,
                              height: 12,
                              marginRight: 14,
                              borderRadius: 6,
                            }}
                            className="u-backgroundPrimaryPink u-inlineBlock"
                          />{' '}
                          Det som inte går till ersättning går till välgörenhet
                        </h3>
                        <p className="u-spaceMB9">
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
              <div className="Container u-posRelative" style={{ zIndex: 1 }}>
                <h2 className="u-spaceMT5 u-md-spaceMT2 u-lg-spaceMT2 u-spaceMB10 u-md-spaceMB6 u-lg-spaceMB6 u-fontFamilyHeader u-fontSize6 u-md-fontSize3 u-lg-fontSize2">
                  Så kommer du igång
                </h2>

                <div className="Grid Grid--withGutter u-spaceMB8 u-md-spaceMB4 u-lg-spaceMB4">
                  <div className="u-spaceMB9 u-lg-size1of3">
                    <span className="NumberedIcon u-floatLeft">1</span>
                    <h3 className="u-spaceMT10 u-spaceML10 u-fontWeightBold u-floatLeft">
                      Ladda ner appen
                    </h3>
                    <p />
                  </div>
                  <div className="u-spaceMB9 u-lg-size1of3">
                    <span className="NumberedIcon u-floatLeft">2</span>
                    <h3 className="u-spaceMT10 u-spaceML10 u-fontWeightBold u-floatLeft">
                      Se ditt pris
                    </h3>
                    <p />
                  </div>
                  <div className="u-spaceMB9 u-lg-size1of3">
                    <span className="NumberedIcon u-floatLeft">3</span>
                    <h3 className="u-spaceMT10 u-spaceML10 u-fontWeightBold u-floatLeft">
                      Signera med BankID
                    </h3>
                    <p />
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="Container">
                <h2
                  style={{ zIndex: 0 }}
                  className="u-posRelative u-spaceMT5 u-md-spaceMT2 u-lg-spaceMT2 u-spaceMB6 u-textCenter u-fontFamilyHeader u-fontSize6 u-md-fontSize3 u-lg-fontSize2"
                >
                  Hedvig sköter bytet
                </h2>

                <div className="Grid Grid--alignCenter u-spaceMB4 u-md-spaceMB3 u-lg-spaceMB3">
                  <AppLink
                    tags={['home-already-insured']}
                    className="Button u-backgroundPrimaryDarkBlue
                    u-colorWhite u-posRelative"
                  >
                    <div
                      className="u-posAbsolute"
                      style={{
                        bottom: 8,
                        left: 0,
                        zIndex: 0,
                        pointerEvents: 'none',
                      }}
                    >
                      <Img
                        style={{ width: 430 }}
                        className=""
                        sizes={data.planeBgFile.image.sizes}
                        alt=""
                      />
                    </div>
                    Se ditt pris i appen
                  </AppLink>
                </div>
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
              <p className="u-spaceMB4 u-md-spaceMB3 u-lg-spaceMB3  u-colorWhite u-md-textCenter u-lg-textCenter">
                (tyvärr har vi fortfarande självrisk, men vi jobbar på det)
              </p>
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
                  <p className="u-textCenter u-maxWidth1of3">
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
                  <p className="u-textCenter u-maxWidth1of3">
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
                  <p className="u-textCenter u-maxWidth1of3">
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
    planeBgFile: file(relativePath: { eq: "home/plane-bg.png" }) {
      image: childImageSharp {
        sizes(maxWidth: 430) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
    mediaLogosFile: file(relativePath: { eq: "home/media-logos@2x.png" }) {
      image: childImageSharp {
        sizes(maxWidth: 659) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
  }
`;