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

const pricecardPropTypes = PropTypes.shape({
  heading: PropTypes.string.isRequired,
  price_from: PropTypes.number.isRequired,
  price_from_explainer: PropTypes.string.isRequired,
  price_to: PropTypes.number.isRequired,
  price_to_explainer: PropTypes.string.isRequired,
  cta_text: PropTypes.string.isRequired,
}).isRequired;

const claimsAnimation = require('assets/animations/chat-demo/data.json');
const heroAnimation = require('assets/animations/hero/data.json');

const WAIT_UNTIL_UNBREAK_HERO_MS = 1500;

class LandingTemplate extends React.Component {
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
    const {
      moneyModelFile,
      reinsuredFile,
      authorisedFile,
      aaRatedFile,
      chatDemoBgFile,
      planeBgFile,
      mediaLogosFile,
      section1,
      section2,
      section3,
      section4,
      section5,
      section6,
      section7,
      section8,
      section9,
    } = this.props;
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
                    {section1.subheading}
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
                      {section1.cta_text}
                    </AppLink>
                    <div className="u-spaceMT9 u-md-spaceMT9 u-lg-spaceMT8 u-colorWhite u-textCenter u-md-textLeft u-lg-textLeft">
                      {section1.paragraph}
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
              {mediaLogosFile && (
                <Img
                  style={{ maxWidth: 659 }}
                  sizes={mediaLogosFile.image.sizes}
                  alt=""
                />
              )}
            </div>
          </div>

          <div className="u-backgroundSecondaryPink">
            <div className="">
              <div className="Container">
                <h2 className="u-spaceMT5 u-md-spaceMT2 u-lg-spaceMT2 u-spaceMB7 u-md-spaceMB6 u-lg-spaceMB6 u-fontFamilyHeader u-fontSize6 u-md-fontSize3 u-lg-fontSize2">
                  {section2.heading}
                </h2>
                <p
                  style={{ maxWidth: 900 }}
                  className="u-spaceMB4 u-md-spaceMB3 u-lg-spaceMB2 u-fontWeightBold u-colorPrimaryPink
                             u-fontSize8 u-md-fontSize5 u-lg-fontSize4"
                >
                  <strike className="Home-strike">
                    {section2.strikethrough_paragraph}
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
                      {section3.heading}
                    </h2>
                    <div className="u-hidden u-md-block u-lg-block">
                      <p className="u-spaceMB7">{section3.paragraph}</p>

                      <AppLink
                        tags={['home-chat-demo']}
                        className="Button u-colorWhite
                              u-backgroundPrimaryDarkBlue"
                      >
                        {section3.cta_text}
                      </AppLink>
                    </div>
                  </div>
                  <div className="u-spaceMB5 u-md-size1of2 u-lg-size1of2">
                    <VisibilitySensor
                      partialVisibility
                      onChange={this.chatDemoOnVisibilityChange}
                    >
                      <div className="Home-chatDemo">
                        {chatDemoBgFile && (
                          <Img
                            className="Home-chatDemo-phone"
                            sizes={chatDemoBgFile.image.sizes}
                            alt=""
                          />
                        )}

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
                      {section3.cta_text}
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
                  {section4.heading}
                </h2>
              </div>
              <div className="Grid u-flexJustifyAround">
                <div className="Card u-md-size1of2 u-lg-size1of2 u-maxWidth1of2 u-spacePV8 u-spaceMB8 u-md-spaceMB0 u-lg-spaceMB0">
                  <div className="CardHeader u-spacePH8 u-spacePB8">
                    <h3 className="u-fontFamilyHeader u-fontSize7">
                      {section4.pricecard_rental.heading}
                    </h3>
                  </div>
                  <div className="u-spacePH8">
                    <div className="u-spacePT10">
                      <div>
                        <h4 className="u-fontSize8 u-fontWeightBook u-inline">
                          Från {section4.pricecard_rental.price_from} kr
                        </h4>
                        <span>/mån </span>
                      </div>
                      <p className="u-fontSize10 u-colorPrimaryDarkGrey">
                        {section4.pricecard_rental.price_from_explainer}
                      </p>
                    </div>
                    <div className="u-spacePV8">
                      <div>
                        <h4 className="u-fontSize8 u-fontWeightBook u-inline">
                          Till {section4.pricecard_rental.price_to} kr
                        </h4>
                        <span>/mån </span>
                      </div>
                      <p className="u-fontSize10 u-colorPrimaryDarkGrey">
                        {section4.pricecard_rental.price_to_explainer}
                      </p>
                    </div>
                    <div className="u-textCenter u-spaceMV8">
                      <AppLink
                        tags={['home-price-example-rent']}
                        className="Button u-backgroundPrimaryGreen u-colorWhite"
                      >
                        {section4.pricecard_rental.cta_text}
                      </AppLink>
                    </div>
                  </div>
                </div>
                <div className="Card u-md-size1of2 u-lg-size1of2 u-maxWidth1of2 u-spacePV8">
                  <div className="CardHeader u-spacePH8 u-spacePB8">
                    <h3 className="u-fontFamilyHeader u-fontSize7">
                      {section4.pricecard_brf.heading}
                    </h3>
                  </div>
                  <div className="u-spacePH8">
                    <div className="u-spacePT10">
                      <div>
                        <h4 className="u-fontSize8 u-fontWeightBook u-inline">
                          Från {section4.pricecard_brf.price_from} kr
                        </h4>
                        <span>/mån </span>
                      </div>
                      <p className="u-fontSize10 u-colorPrimaryDarkGrey">
                        {section4.pricecard_brf.price_from_explainer}
                      </p>
                    </div>
                    <div className="u-spacePV8">
                      <div>
                        <h4 className="u-fontSize8 u-fontWeightBook u-inline">
                          Till {section4.pricecard_brf.price_to} kr
                        </h4>
                        <span>/mån </span>
                      </div>
                      <p className="u-fontSize10 u-colorPrimaryDarkGrey">
                        {section4.pricecard_brf.price_to_explainer}
                      </p>
                    </div>
                    <div className="u-textCenter u-spaceMV8">
                      <AppLink
                        tags={['home-price-example-brf']}
                        className="Button u-backgroundPrimaryGreen u-colorWhite"
                      >
                        {section4.pricecard_brf.cta_text}
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
                  {section5.heading}
                </h2>
                <div className="Grid Grid--withGutter u-spaceMB6 u-md-spaceMB5 u-lg-spaceMB4 u-flexAlignItemsCenter">
                  <figure className="u-spaceMB6 u-md-size1of2 u-lg-size1of2 u-md-flexOrderLast u-lg-flexOrderLast u-textCenter">
                    {moneyModelFile && (
                      <Img
                        className="u-imageContain"
                        sizes={moneyModelFile.image.sizes}
                        alt=""
                      />
                    )}
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
                          {section5.bullet1.heading}
                        </h3>
                        <p className="u-spaceMB9">
                          {section5.bullet1.paragraph}
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
                          {section5.bullet2.heading}
                        </h3>
                        <p className="u-spaceMB9">
                          {section5.bullet2.paragraph}
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
                          {section5.bullet3.heading}
                        </h3>
                        <p className="u-spaceMB9">
                          {section5.bullet3.paragraph}
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
                  {section6.heading}
                </h2>

                <div className="Grid Grid--withGutter u-spaceMB8 u-md-spaceMB4 u-lg-spaceMB4">
                  <div className="u-spaceMB9 u-lg-size1of3">
                    <span className="NumberedIcon u-floatLeft">1 </span>
                    <h3 className="u-spaceMT10 u-spaceML10 u-fontWeightBold u-floatLeft">
                      {section6.bullet1}
                    </h3>
                    <p />
                  </div>
                  <div className="u-spaceMB9 u-lg-size1of3">
                    <span className="NumberedIcon u-floatLeft">2 </span>
                    <h3 className="u-spaceMT10 u-spaceML10 u-fontWeightBold u-floatLeft">
                      {section6.bullet2}
                    </h3>
                    <p />
                  </div>
                  <div className="u-spaceMB9 u-lg-size1of3">
                    <span className="NumberedIcon u-floatLeft">3 </span>
                    <h3 className="u-spaceMT10 u-spaceML10 u-fontWeightBold u-floatLeft">
                      {section6.bullet3}
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
                  {section7.heading}
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
                      {planeBgFile && (
                        <Img
                          style={{ width: 430 }}
                          className=""
                          sizes={planeBgFile.image.sizes}
                          alt=""
                        />
                      )}
                    </div>
                    {section7.cta_text}
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
                {section8.heading}
              </h2>
              <p className="u-spaceMB4 u-md-spaceMB3 u-lg-spaceMB3  u-colorWhite u-md-textCenter u-lg-textCenter">
                {section8.paragraph}
              </p>
            </div>
          </div>

          <div>
            <div className="Container">
              <div className="Grid Grid--withGutter Grid--alignCenter u-spaceMT9 u-md-spaceMT5 u-lg-spaceMT5 u-spaceMB4 u-md-spaceMB3 u-lg-spaceMB3">
                <div className="u-md-size1of3 u-lg-size1of3 u-flex u-flexCol u-flexAlignItemsCenter">
                  <figure className="u-spaceMB9 u-spaceMT6">
                    {reinsuredFile && (
                      <Img
                        style={{ width: 120 }}
                        sizes={reinsuredFile.image.sizes}
                        alt=""
                      />
                    )}
                  </figure>
                  <p className="u-textCenter u-maxWidth1of3">
                    {section9.item1}
                  </p>
                </div>

                <div className="u-md-size1of3 u-lg-size1of3 u-flex u-flexCol u-flexAlignItemsCenter">
                  <figure className="u-spaceMB9 u-spaceMT6">
                    {aaRatedFile && (
                      <Img
                        style={{ width: 120 }}
                        sizes={aaRatedFile.image.sizes}
                        alt=""
                      />
                    )}
                  </figure>
                  <p className="u-textCenter u-maxWidth1of3">
                    {section9.item2}
                  </p>
                </div>

                <div className="u-md-size1of3 u-lg-size1of3 u-flex u-flexCol u-flexAlignItemsCenter">
                  <figure className="u-spaceMB9 u-spaceMT6">
                    {authorisedFile && (
                      <Img
                        style={{ width: 120 }}
                        sizes={authorisedFile.image.sizes}
                        alt=""
                      />
                    )}
                  </figure>
                  <p className="u-textCenter u-maxWidth1of3">
                    {section9.item3}
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

LandingTemplate.propTypes = {
  moneyModelFile: PropTypes.objectOf(PropTypes.object).isRequired,
  reinsuredFile: PropTypes.objectOf(PropTypes.object).isRequired,
  authorisedFile: PropTypes.objectOf(PropTypes.object).isRequired,
  aaRatedFile: PropTypes.objectOf(PropTypes.object).isRequired,
  chatDemoBgFile: PropTypes.objectOf(PropTypes.object).isRequired,
  planeBgFile: PropTypes.objectOf(PropTypes.object).isRequired,
  mediaLogosFile: PropTypes.objectOf(PropTypes.object).isRequired,
  section1: PropTypes.shape({
    subheading: PropTypes.string.isRequired,
    cta_text: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
  }).isRequired,
  section2: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    strikethrough_paragraph: PropTypes.string.isRequired,
  }).isRequired,
  section3: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    cta_text: PropTypes.string.isRequired,
  }).isRequired,
  section4: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    pricecard_rental: pricecardPropTypes,
    pricecard_brf: pricecardPropTypes,
  }).isRequired,
  section5: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    bullet1: PropTypes.shape({
      heading: PropTypes.string.isRequired,
      paragraph: PropTypes.string.isRequired,
    }),
    bullet2: PropTypes.shape({
      heading: PropTypes.string.isRequired,
      paragraph: PropTypes.string.isRequired,
    }),
    bullet3: PropTypes.shape({
      heading: PropTypes.string.isRequired,
      paragraph: PropTypes.string.isRequired,
    }),
  }).isRequired,
  section6: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    bullet1: PropTypes.string.isRequired,
    bullet2: PropTypes.string.isRequired,
    bullet3: PropTypes.string.isRequired,
  }).isRequired,
  section7: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    cta_text: PropTypes.string.isRequired,
  }).isRequired,
  section8: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
  }).isRequired,
  section9: PropTypes.shape({
    item1: PropTypes.string.isRequired,
    item2: PropTypes.string.isRequired,
    item3: PropTypes.string.isRequired,
  }).isRequired,
};

const Landing = ({ data }) => (
  <LandingTemplate
    moneyModelFile={data.moneyModelFile}
    reinsuredFile={data.reinsuredFile}
    authorisedFile={data.authorisedFile}
    aaRatedFile={data.aaRatedFile}
    chatDemoBgFile={data.chatDemoBgFile}
    planeBgFile={data.planeBgFile}
    mediaLogosFile={data.mediaLogosFile}
    section1={data.landingPage.frontmatter.section1}
    section2={data.landingPage.frontmatter.section2}
    section3={data.landingPage.frontmatter.section3}
    section4={data.landingPage.frontmatter.section4}
    section5={data.landingPage.frontmatter.section5}
    section6={data.landingPage.frontmatter.section6}
    section7={data.landingPage.frontmatter.section7}
    section8={data.landingPage.frontmatter.section8}
    section9={data.landingPage.frontmatter.section9}
  />
);

Landing.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export { LandingTemplate };

export default Landing;

export const query = graphql`
  query LandingPage($id: String!) {
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
    landingPage: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        section1 {
          subheading
          cta_text
          paragraph
        }
        section2 {
          heading
          strikethrough_paragraph
        }
        section3 {
          heading
          paragraph
          cta_text
        }
        section4 {
          heading
          pricecard_rental {
            heading
            price_from
            price_from_explainer
            price_to
            price_to_explainer
            cta_text
          }
          pricecard_brf {
            heading
            price_from
            price_from_explainer
            price_to
            price_to_explainer
            cta_text
          }
        }
        section5 {
          heading
          bullet1 {
            heading
            paragraph
          }
          bullet2 {
            heading
            paragraph
          }
          bullet3 {
            heading
            paragraph
          }
        }
        section6 {
          heading
          bullet1
          bullet2
          bullet3
        }
        section7 {
          heading
          cta_text
        }
        section8 {
          heading
          paragraph
        }
        section9 {
          item1
          item2
          item3
        }
      }
    }
  }
`;
