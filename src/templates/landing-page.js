import React from 'react';
import PropTypes from 'prop-types';
import { LottieLoader } from 'src/components/LottieLoader';
import Img from 'gatsby-image';
import VisibilitySensor from 'react-visibility-sensor';
import { StickyContainer } from 'react-sticky';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import AppLink from 'src/components/AppLink';

import './Home.css';

const claimsAnimation = require('assets/animations/chat-demo/data.json');
const insuranceInMinutesAnimation = require('assets/animations/three-explainers/insurance-in-minutes.json');

const insuranceInMinutesOptions = {
  loop: false,
  autoplay: false,
  renderer: 'svg',
  animationData: insuranceInMinutesAnimation,
  rendererSettings: {
    progressiveLoad: true,
    preserveAspectRatio: 'xMaxYMin meet',
  },
};
const claimOnPhoneAnimation = require('assets/animations/three-explainers/claim-on-your-phone.json');

const claimOnPhoneOptions = {
  loop: true,
  autoplay: false,
  renderer: 'svg',
  animationData: claimOnPhoneAnimation,
  rendererSettings: {
    progressiveLoad: true,
    preserveAspectRatio: 'xMaxYMin meet',
  },
};

const paidRightAwayAnimation = require('assets/animations/three-explainers/paid-right-away.json');

const paidRightAwayOptions = {
  loop: false,
  autoplay: false,
  renderer: 'svg',
  animationData: paidRightAwayAnimation,
  rendererSettings: {
    progressiveLoad: true,
    preserveAspectRatio: 'xMaxYMin meet',
  },
};

const THREE_EXPLAINER_WIDTH_HEIGHT = 210;

class LandingTemplate extends React.Component {
  chatDemoOnVisibilityChange = (isVisible) => {
    if (!this.chatAnim) return;

    if (isVisible) {
      this.chatAnim.play();
    } else {
      this.chatAnim.stop();
    }
  };

  threeExplainersVisbilityChanged = (isVisible) => {
    if (!this.insuranceInMinutesAnim) {
      return;
    }
    if (isVisible) {
      this.insuranceInMinutesAnim.play();
      this.claimOnPhoneAnimation.play();
      this.paidRightAwayAnimation.play();
    } else {
      this.insuranceInMinutesAnim.stop();
      this.paidRightAwayAnimation.stop();
    }
  };

  registerPerilForestClick = () => {
    if (window && window.analytics) {
      window.analytics.track('Peril forest clicked');
    }
  };

  registerCustomerSourceClick = () => {
    if (window && window.analytics) {
      window.analytics.track('Customer source clicked');
    }
  };

  render() {
    const {
      reinsuredFile,
      authorisedFile,
      aaRatedFile,
      mediaLogosFile,
      modelFixedFile,
      modelClaimPoolFile,
      modelCharityFile,
      perilForestMobileFile,
      perilForestDesktopFile,
      customerSourceDesktopFile,
      customerSourceMobileFile,
      landing,
      threeExplainers,
      perilForest,
      philosophy,
      customerSource,
      safety,
    } = this.props;
    return (
      <main className="Site">
        <section className="Site-content">
          <StickyContainer>
            <Header />
            {/* Landing section */}
            <div className="u-backgroundWhite">
              <div className="Home-hero-desktop">
                <div className="Home-hero">
                  <div className="Grid Container Container--withoutGutter u-lg-flexNoWrap">
                    <div className="u-sizeFull u-lg-size3of5 u-md-spacePT7 u-md-spacePH10 u-lg-spacePT6 Home-hero-mobile">
                      <h1 className="u-spaceMT5 u-spaceMB10 u-md-spaceMB8 u-lg-spaceMB8 u-colorWhite u-fontWeightBold u-fontSize3 u-md-fontSize2 u-lg-fontSize1 u-textCenter u-md-textLeft u-lg-textLeft u-fontFamilyHeader">
                        {landing.heading}
                      </h1>
                      <p className="u-colorWhite u-spaceMT8 u-fontSize9 u-md-fontSize8 u-lg-fontSize8 u-textCenter u-md-textLeft u-lg-textLeft">
                        {landing.subheading}
                      </p>
                      <div className="Grid Grid--alignCenter u-lg-flexJustifyStart u-spaceMT8 u-spaceMB4 u-md-spaceMB3 u-lg-spaceMB2 u-textCenter">
                        <AppLink
                          tags={['home-hero-1']}
                          className="Button Home-cta u-colorWhite u-backgroundPrimaryGreen u-spaceMB10 u-md-spaceMR12 u-lg-spaceMR12 u-fontWeightBold"
                        >
                          {landing.cta_text1}
                        </AppLink>
                        <AppLink
                          tags={['home-hero-2']}
                          className="Button Home-cta u-colorWhite u-backgroundPrimaryGreen u-md-spaceMB10 u-lg-spaceMB10 u-fontWeightBold"
                        >
                          {landing.cta_text2}
                        </AppLink>
                        <div className="u-spaceMT9 u-md-spaceMT9 u-lg-spaceMT8 u-colorWhite u-textCenter u-md-textLeft u-lg-textLeft u-fontSize9 u-md-fontSize8 u-lg-fontSize8">
                          {landing.paragraph}
                        </div>
                      </div>
                    </div>
                    <div className="u-sizeFull u-lg-size2of5">
                      <VisibilitySensor
                        partialVisibility
                        onChange={this.chatDemoOnVisibilityChange}
                      >
                        <div className="u-spaceMV6 u-lg-spaceMT4">
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
                              },
                            }}
                            width={307}
                          />
                        </div>
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Media logos on desktop */}
            <div>
              <div className="Container u-hidden u-lg-block">
                {mediaLogosFile && (
                  <Img
                    className="Home-media"
                    sizes={mediaLogosFile.image.sizes}
                    alt=""
                  />
                )}
              </div>
            </div>

            {/* Three explainers */}
            <div className="u-backgroundSecondaryGrey">
              <div className="Container u-spacePV2">
                <h2 className="u-textCenter u-fontSize5 u-md-fontSize2 u-lg-fontSize2 u-fontFamilyHeader">
                  {threeExplainers.heading}
                </h2>
                <VisibilitySensor
                  partialVisibility
                  onChange={this.threeExplainersVisbilityChanged}
                >
                  <div className="u-flex u-flexCol u-lg-flexRow u-textCenter">
                    <div className="u-lg-size1of3">
                      <LottieLoader
                        ref={(anim) => {
                          this.insuranceInMinutesAnim = anim;
                        }}
                        options={insuranceInMinutesOptions}
                        width={THREE_EXPLAINER_WIDTH_HEIGHT}
                        height={THREE_EXPLAINER_WIDTH_HEIGHT}
                      />
                      <h4 className="u-fontSize8 u-md-fontSize7 u-lg-fontSize7 u-spaceMB12">
                        {
                          threeExplainers.three_explainers.insurance_in_minutes
                            .title
                        }
                      </h4>
                      <p className="u-lg-spaceMH8 u-fontSize9 u-md-fontSize85 u-lg-fontSize85">
                        {
                          threeExplainers.three_explainers.insurance_in_minutes
                            .paragraph
                        }
                      </p>
                    </div>
                    <div className="u-lg-size1of3">
                      <LottieLoader
                        ref={(anim) => {
                          this.claimOnPhoneAnimation = anim;
                        }}
                        options={claimOnPhoneOptions}
                        width={THREE_EXPLAINER_WIDTH_HEIGHT}
                        height={THREE_EXPLAINER_WIDTH_HEIGHT}
                      />
                      <h4 className="u-fontSize8 u-md-fontSize7 u-lg-fontSize7 u-spaceMB12">
                        {threeExplainers.three_explainers.claim_on_phone.title}
                      </h4>
                      <p className="u-lg-spaceMH8 u-fontSize9 u-md-fontSize85 u-lg-fontSize85">
                        {
                          threeExplainers.three_explainers.claim_on_phone
                            .paragraph
                        }
                      </p>
                    </div>
                    <div className="u-lg-size1of3">
                      <LottieLoader
                        ref={(anim) => {
                          this.paidRightAwayAnimation = anim;
                        }}
                        options={paidRightAwayOptions}
                        width={THREE_EXPLAINER_WIDTH_HEIGHT}
                        height={THREE_EXPLAINER_WIDTH_HEIGHT}
                      />
                      <h4 className="u-fontSize8 u-md-fontSize7 u-lg-fontSize7 u-spaceMB12">
                        {threeExplainers.three_explainers.paid_right_away.title}
                      </h4>
                      <p className="u-lg-spaceMH8 u-fontSize9 u-md-fontSize85 u-lg-fontSize85">
                        {
                          threeExplainers.three_explainers.paid_right_away
                            .paragraph
                        }
                      </p>
                    </div>
                  </div>
                </VisibilitySensor>
              </div>
            </div>

            {/* Model */}
            <div className="u-backgroundWhite">
              <div className="Container u-spacePV2">
                <h2 className="u-fontFamilyHeader u-textCenter u-fontSize5 u-md-fontSize2 u-lg-fontSize2">
                  {philosophy.heading}
                </h2>
                <div className="u-flex u-flexCol u-lg-flexRow u-md-flexAlignItemsCenter u-lg-flexJustifyBetween">
                  <div className="u-md-size3of5 u-lg-size1of3 u-lg-spacePH10">
                    <div className="Card u-spaceMT6 Home-model">
                      <figure className="Home-model-figure u-backgroundPrimaryBlackPurple u-spacePV6">
                        {modelFixedFile && (
                          <Img
                            className="Home-model-image"
                            sizes={modelFixedFile.image.sizes}
                            alt=""
                          />
                        )}
                      </figure>
                      <div className="Home-model-paragraph u-flex u-flexJustifyCenter u-flexAlignItemsCenter">
                        <p className="u-textCenter u-spaceMV8 u-spacePH11 u-fontSize9 u-md-fontSize85 u-lg-fontSize85">
                          {philosophy.cards.card1_paragraph}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="u-md-size3of5 u-lg-size1of3 u-lg-spacePH10">
                    <div className="Card u-spaceMT6 Home-model">
                      <figure className="Home-model-figure u-backgroundPrimaryPurple u-spacePV6">
                        {modelClaimPoolFile && (
                          <Img
                            className="Home-model-image"
                            sizes={modelClaimPoolFile.image.sizes}
                            alt=""
                          />
                        )}
                      </figure>
                      <div className="Home-model-paragraph u-flex u-flexJustifyCenter u-flexAlignItemsCenter">
                        <p className="u-textCenter u-spaceMV8 u-spacePH11 u-fontSize9 u-md-fontSize85 u-lg-fontSize85">
                          {philosophy.cards.card2_paragraph}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="u-md-size3of5 u-lg-size1of3 u-lg-spacePH10">
                    <div className="Card u-spaceMT6 Home-model">
                      <figure className="Home-model-figure u-backgroundPrimaryPink u-spacePV6">
                        {modelCharityFile && (
                          <Img
                            className="Home-model-image Home-model-image-charity"
                            sizes={modelCharityFile.image.sizes}
                            alt=""
                          />
                        )}
                      </figure>
                      <div className="Home-model-paragraph u-flex u-flexJustifyCenter u-flexAlignItemsCenter">
                        <p className="u-textCenter u-spaceMV8 u-spacePH11 u-fontSize9 u-md-fontSize85 u-lg-fontSize85">
                          {philosophy.cards.card3_paragraph}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Peril forest */}
            <div className="u-backgroundPrimaryDarkestPurple">
              <div className="Container u-spacePT2 u-spacePB4">
                <h2 className="u-colorWhite u-fontFamilyHeader u-textCenter u-fontSize4 u-md-fontSize2 u-lg-fontSize2">
                  {perilForest.heading}
                </h2>
                <figure
                  className="u-spaceMV6"
                  onClick={this.registerPerilForestClick}
                >
                  {' '}
                  {/* eslint-disable-line */}
                  {perilForestMobileFile && (
                    <Img
                      className="Home-perilForest-image-mobile u-lg-hidden"
                      sizes={perilForestMobileFile.image.sizes}
                      alt=""
                    />
                  )}
                  {perilForestDesktopFile && (
                    <Img
                      className="Home-perilForest-image-desktop u-hidden u-lg-block"
                      sizes={perilForestDesktopFile.image.sizes}
                      alt=""
                    />
                  )}
                </figure>
                <p className="u-colorWhite u-textCenter u-fontSize9 u-md-fontSize85 u-lg-fontSize85">
                  {perilForest.bottom_paragraph}
                </p>
              </div>
            </div>

            {/* Customer source */}
            <div className="u-backgroundSecondaryGrey">
              <div className="Container u-spacePT2 u-spacePB5">
                <h1 className="u-textCenter u-fontFamilyHeader u-fontSize4 u-md-fontSize2 u-lg-fontSize2">
                  {customerSource.heading}
                </h1>
                <p className="u-spaceMT8 u-textCenter u-fontSize9 u-md-fontSize85 u-lg-fontSize85">
                  {customerSource.paragraph}
                </p>
                <figure
                  className="u-spaceMT8"
                  onClick={this.registerCustomerSourceClick}
                >
                  {' '}
                  {/* eslint-disable-line */}
                  {customerSourceDesktopFile && (
                    <Img
                      className="Home-customerSource-image-desktop u-hidden u-lg-block"
                      sizes={customerSourceDesktopFile.image.sizes}
                      alt={customerSource.image_alt}
                    />
                  )}
                  {customerSourceMobileFile && (
                    <Img
                      className="Home-customerSource-image-mobile u-lg-hidden"
                      sizes={customerSourceMobileFile.image.sizes}
                      alt={customerSource.image_alt}
                    />
                  )}
                </figure>
              </div>
            </div>

            {/* Safety */}
            <div>
              <div className="Container u-spacePT2">
                <h2 className="u-textCenter u-fontFamilyHeader u-fontSize4 u-md-fontSize2 u-lg-fontSize2">
                  {safety.heading}
                </h2>
                <div className="Grid Grid--withGutter Grid--alignCenter u-spaceMT9 u-md-spaceMT5 u-lg-spaceMT5 u-spaceMB4 u-md-spaceMB3 u-lg-spaceMB3">
                  <div className="u-md-size1of3 u-lg-size1of3 u-flex u-flexCol u-flexAlignItemsCenter">
                    <figure className="u-spaceMB9 u-spaceMT6">
                      {reinsuredFile && (
                        <Img
                          className="Home-safety-image"
                          sizes={reinsuredFile.image.sizes}
                          alt=""
                        />
                      )}
                    </figure>
                    <p className="u-textCenter u-maxWidth1of3 u-fontSize9 u-md-fontSize85 u-lg-fontSize85">
                      {safety.item1}
                    </p>
                  </div>

                  <div className="u-md-size1of3 u-lg-size1of3 u-flex u-flexCol u-flexAlignItemsCenter">
                    <figure className="u-spaceMB9 u-spaceMT6">
                      {aaRatedFile && (
                        <Img
                          className="Home-safety-image"
                          sizes={aaRatedFile.image.sizes}
                          alt=""
                        />
                      )}
                    </figure>
                    <p className="u-textCenter u-maxWidth1of3 u-fontSize9 u-md-fontSize85 u-lg-fontSize85">
                      {safety.item2}
                    </p>
                  </div>

                  <div className="u-md-size1of3 u-lg-size1of3 u-flex u-flexCol u-flexAlignItemsCenter">
                    <figure className="u-spaceMB9 u-spaceMT6">
                      {authorisedFile && (
                        <Img
                          className="Home-safety-image"
                          sizes={authorisedFile.image.sizes}
                          alt=""
                        />
                      )}
                    </figure>
                    <p className="u-textCenter u-maxWidth1of3 u-fontSize9 u-md-fontSize85 u-lg-fontSize85">
                      {safety.item3}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Media logos on mobile */}
            <div>
              <div className="Container u-lg-hidden">
                {mediaLogosFile && (
                  <Img
                    className="Home-media"
                    sizes={mediaLogosFile.image.sizes}
                    alt=""
                  />
                )}
              </div>
            </div>
          </StickyContainer>
        </section>

        <Footer />
      </main>
    );
  }
}

LandingTemplate.propTypes = {
  reinsuredFile: PropTypes.objectOf(PropTypes.object).isRequired,
  authorisedFile: PropTypes.objectOf(PropTypes.object).isRequired,
  aaRatedFile: PropTypes.objectOf(PropTypes.object).isRequired,
  mediaLogosFile: PropTypes.objectOf(PropTypes.object).isRequired,
  modelFixedFile: PropTypes.objectOf(PropTypes.object).isRequired,
  modelClaimPoolFile: PropTypes.objectOf(PropTypes.object).isRequired,
  modelCharityFile: PropTypes.objectOf(PropTypes.object).isRequired,
  perilForestMobileFile: PropTypes.objectOf(PropTypes.object).isRequired,
  perilForestDesktopFile: PropTypes.objectOf(PropTypes.object).isRequired,
  customerSourceDesktopFile: PropTypes.objectOf(PropTypes.object).isRequired,
  customerSourceMobileFile: PropTypes.objectOf(PropTypes.object).isRequired,
  landing: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    cta_text1: PropTypes.string.isRequired,
    cta_text2: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
  }).isRequired,
  threeExplainers: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    three_explainers: PropTypes.shape({
      insurance_in_minutes: PropTypes.shape({
        title: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired,
      }).isRequired,
      claim_on_phone: PropTypes.shape({
        title: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired,
      }).isRequired,
      paid_right_away: PropTypes.shape({
        title: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired,
      }).isRequired,
    }),
  }).isRequired,
  perilForest: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    bottom_paragraph: PropTypes.string.isRequired,
  }).isRequired,
  philosophy: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    cards: PropTypes.shape({
      card1_paragraph: PropTypes.string.isRequired,
      card2_paragraph: PropTypes.string.isRequired,
      card3_paragraph: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  customerSource: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    image_alt: PropTypes.string.isRequired,
  }).isRequired,
  safety: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    item1: PropTypes.string.isRequired,
    item2: PropTypes.string.isRequired,
    item3: PropTypes.string.isRequired,
  }).isRequired,
};

const Landing = ({ data }) => {
  const copy = data.landingPage.frontmatter;
  return (
    <LandingTemplate
      reinsuredFile={data.reinsuredFile}
      authorisedFile={data.authorisedFile}
      aaRatedFile={data.aaRatedFile}
      chatDemoBgFile={data.chatDemoBgFile}
      mediaLogosFile={data.mediaLogosFile}
      modelFixedFile={data.modelFixedFile}
      modelClaimPoolFile={data.modelClaimPoolFile}
      modelCharityFile={data.modelCharityFile}
      perilForestMobileFile={data.perilForestMobileFile}
      perilForestDesktopFile={data.perilForestDesktopFile}
      customerSourceDesktopFile={data.customerSourceDesktopFile}
      customerSourceMobileFile={data.customerSourceMobileFile}
      landing={copy.landing}
      threeExplainers={copy.three_explainers}
      perilForest={copy.peril_forest}
      philosophy={copy.philosophy}
      customerSource={copy.customer_source}
      safety={copy.safety}
    />
  );
};

Landing.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export { LandingTemplate };

export default Landing;

export const query = graphql`
  query LandingPage($id: String!) {
    mediaLogosFile: file(relativePath: { eq: "home/media-logos@2x.png" }) {
      image: childImageSharp {
        sizes(maxWidth: 759) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
    modelFixedFile: file(relativePath: { eq: "home/model-fixed@2x.png" }) {
      image: childImageSharp {
        sizes(maxWidth: 120) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
    modelClaimPoolFile: file(
      relativePath: { eq: "home/model-claim-pool@2x.png" }
    ) {
      image: childImageSharp {
        sizes(maxWidth: 120) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
    modelCharityFile: file(relativePath: { eq: "home/model-charity@2x.png" }) {
      image: childImageSharp {
        sizes(maxWidth: 120) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
    perilForestMobileFile: file(
      relativePath: { eq: "home/peril-forest-mobile@2x.png" }
    ) {
      image: childImageSharp {
        sizes(maxWidth: 300) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
    perilForestDesktopFile: file(
      relativePath: { eq: "home/peril-forest-desktop@2x.png" }
    ) {
      image: childImageSharp {
        sizes(maxWidth: 754) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
    customerSourceDesktopFile: file(
      relativePath: { eq: "home/customer-source-desktop@2x.png" }
    ) {
      image: childImageSharp {
        sizes(maxWidth: 679) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
    customerSourceMobileFile: file(
      relativePath: { eq: "home/customer-source-mobile@2x.png" }
    ) {
      image: childImageSharp {
        sizes(maxWidth: 276) {
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
    landingPage: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        landing {
          heading
          subheading
          cta_text1
          cta_text2
          paragraph
        }
        three_explainers {
          heading
          three_explainers {
            insurance_in_minutes {
              title
              paragraph
            }
            claim_on_phone {
              title
              paragraph
            }
            paid_right_away {
              title
              paragraph
            }
          }
        }
        peril_forest {
          heading
          bottom_paragraph
        }
        philosophy {
          heading
          cards {
            card1_paragraph
            card2_paragraph
            card3_paragraph
          }
        }
        customer_source {
          heading
          image_alt
          paragraph
        }
        safety {
          heading
          item1
          item2
          item3
        }
      }
    }
  }
`;
