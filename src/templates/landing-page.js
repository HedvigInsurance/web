import React from 'react';
import PropTypes from 'prop-types';
import { LottieLoader } from 'src/components/LottieLoader';
import Img from 'gatsby-image';
import VisibilitySensor from 'react-visibility-sensor';
import { StickyContainer } from 'react-sticky';
import { Helmet } from 'react-helmet';

import Header, { headerPropTypes } from 'src/components/Header';
import Footer, { footerPropTypes } from 'src/components/Footer';
import AppLink from 'src/components/AppLink';

import { PriceSection } from 'src/sections/price';
import { CTAWaypoint } from 'src/components/CTAWaypoint';
import { trackEvent } from 'src/utils/track-event';

import './Home.css';
import { GetStarted } from 'src/sections/landing/get-started';
import ClaimOnPhone from '../components/Animations/ClaimOnPhone';
import InsuranceInMinutes from '../components/Animations/InsuranceInMinutes';
import PaidRightAway from '../components/Animations/PaidRightAway';
import { CustomerSources } from '../sections/landing/customer-sources';

const claimsAnimation = require('assets/animations/chat-demo/data.json');

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
    trackEvent('Peril forest clicked');
  };

  registerCustomerSourceClick = () => {
    trackEvent('Customer source clicked');
  };

  render() {
    const {
      reinsuredFile,
      authorisedFile,
      aaRatedFile,
      mediaLogosFile,
      perilForestMobileFile,
      perilForestDesktopFile,
      title,
      landing,
      threeExplainers,
      perilForest,
      getStarted,
      safety,
      pricing,
      customerSources,
      header,
      footer,
      langKey,
    } = this.props;
    return (
      <main className="Site">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <section className="Site-content">
          <StickyContainer>
            <Header data={header} langKey={langKey} />
            {/* Landing section */}
            <div className="u-backgroundAlmostWhite">
              <div className="Home-hero">
                <div className="Grid Container Container--withoutGutter u-lg-flexNoWrap">
                  <CTAWaypoint>
                    <div className="u-sizeFull u-lg-size3of5 u-md-spacePT5 u-md-spacePH10 u-lg-spacePT6 Home-hero-content">
                      <h1 className="Home-hero-title u-colorPrimaryBlue u-fontWeightBold u-fontSize2 u-md-fontSize2 u-lg-fontSize1 u-textCenter u-md-textLeft u-lg-textLeft u-fontFamilyHeader">
                        {landing.heading}
                      </h1>
                      <p className="Home-hero-subheading u-colorPrimaryBlue u-fontSize9 u-md-fontSize8 u-lg-fontSize8 u-textCenter u-md-textLeft u-lg-textLeft u-spaceMT11">
                        {landing.subheading}
                      </p>
                      <div className="Grid Grid--alignCenter u-lg-flexJustifyStart u-spaceMT8 u-lg-spaceMB2 u-textCenter">
                        <AppLink
                          tags={['home-hero']}
                          className="Button u-fontSize10 u-colorWhite u-backgroundPrimaryGreen u-md-spaceMR12 u-lg-spaceMR12 u-fontWeightBold"
                        >
                          {landing.cta_text}
                        </AppLink>
                      </div>
                    </div>
                  </CTAWaypoint>
                  <div className="u-sizeFull u-lg-size2of5">
                    <VisibilitySensor
                      partialVisibility
                      onChange={this.chatDemoOnVisibilityChange}
                    >
                      <div className="Home-chatDemo-phone u-spaceMV6 u-lg-spaceMT4">
                        <LottieLoader
                          ref={(anim) => {
                            this.chatAnim = anim;
                          }}
                          options={{
                            loop: true,
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
                      <InsuranceInMinutes
                        ref={(anim) => {
                          this.insuranceInMinutesAnim = anim;
                        }}
                        sideLength={THREE_EXPLAINER_WIDTH_HEIGHT}
                      />
                      <h4 className="u-fontSize8 u-md-fontSize7 u-lg-fontSize7 u-spaceMB12 u-lg-spaceMH10">
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
                      <ClaimOnPhone
                        ref={(anim) => {
                          this.claimOnPhoneAnimation = anim;
                        }}
                        sideLength={THREE_EXPLAINER_WIDTH_HEIGHT}
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
                      <PaidRightAway
                        ref={(anim) => {
                          this.paidRightAwayAnimation = anim;
                        }}
                        sideLength={THREE_EXPLAINER_WIDTH_HEIGHT}
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

            {/* Peril forest */}
            <div className="u-backgroundPrimaryDarkestPurple">
              <div className="Container u-spacePT2 u-spacePB4">
                <h2 className="u-colorWhite u-fontFamilyHeader u-textCenter u-fontSize4 u-md-fontSize2 u-lg-fontSize2">
                  {perilForest.heading}
                </h2>
                <figure // eslint-disable-line
                  className="u-spaceMV6"
                  onClick={this.registerPerilForestClick}
                >
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

            <PriceSection {...pricing} />

            <CustomerSources
              headline={customerSources.headline}
              paragraph={customerSources.paragraph}
            />

            <GetStarted {...getStarted} />

            {/* Safety */}
            <div className="u-backgroundPrimaryDarkestPurple Home-safety">
              <div className="Grid Grid--withGutter Grid--alignCenter">
                <div className="u-md-size1of3 u-spaceMB6 u-md-spaceMB0 u-lg-spaceMB0 u-lg-size1of3 u-flex u-flexCol u-flexAlignItemsCenter">
                  <figure>
                    {reinsuredFile && (
                      <Img
                        className="Home-safety-image"
                        sizes={reinsuredFile.image.sizes}
                        alt=""
                      />
                    )}
                  </figure>
                  <p className="Home-safety-image-text u-colorWhite u-textCenter u-maxWidth1of3 u-fontSize9 u-md-fontSize85 u-lg-fontSize85">
                    {safety.item1}
                  </p>
                </div>

                <div className="u-md-size1of3 u-spaceMB6 u-md-spaceMB0 u-lg-spaceMB0 u-lg-size1of3 u-flex u-flexCol u-flexAlignItemsCenter">
                  <figure>
                    {aaRatedFile && (
                      <Img
                        className="Home-safety-image"
                        sizes={aaRatedFile.image.sizes}
                        alt=""
                      />
                    )}
                  </figure>
                  <p className="Home-safety-image-text u-colorWhite u-textCenter u-maxWidth1of3 u-fontSize9 u-md-fontSize85 u-lg-fontSize85">
                    {safety.item2}
                  </p>
                </div>

                <div className="u-md-size1of3 u-lg-size1of3 u-flex u-flexCol u-flexAlignItemsCenter">
                  <figure>
                    {authorisedFile && (
                      <Img
                        className="Home-safety-image"
                        sizes={authorisedFile.image.sizes}
                        alt=""
                      />
                    )}
                  </figure>
                  <p className="Home-safety-image-text u-colorWhite u-textCenter u-maxWidth1of3 u-fontSize9 u-md-fontSize85 u-lg-fontSize85">
                    {safety.item3}
                  </p>
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

        <Footer data={footer} langKey={langKey} />
      </main>
    );
  }
}

LandingTemplate.propTypes = {
  reinsuredFile: PropTypes.objectOf(PropTypes.object).isRequired,
  authorisedFile: PropTypes.objectOf(PropTypes.object).isRequired,
  aaRatedFile: PropTypes.objectOf(PropTypes.object).isRequired,
  mediaLogosFile: PropTypes.objectOf(PropTypes.object).isRequired,
  perilForestMobileFile: PropTypes.objectOf(PropTypes.object).isRequired,
  perilForestDesktopFile: PropTypes.objectOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  landing: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    cta_text: PropTypes.string.isRequired,
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
  getStarted: PropTypes.shape({
    heading1: PropTypes.string.isRequired,
    heading2: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    buttontext: PropTypes.string.isRequired,
  }).isRequired,
  safety: PropTypes.shape({
    item1: PropTypes.string.isRequired,
    item2: PropTypes.string.isRequired,
    item3: PropTypes.string.isRequired,
  }).isRequired,
  pricing: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    monthlyLabel: PropTypes.string.isRequired,
    aroundLabel: PropTypes.string.isRequired,
    rentalTitle: PropTypes.string.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    ownedTitle: PropTypes.string.isRequired,
    ownedPrice: PropTypes.string.isRequired,
    bottomParagraph: PropTypes.string.isRequired,
  }).isRequired,
  customerSources: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
  }).isRequired,
  header: PropTypes.shape(headerPropTypes).isRequired,
  footer: PropTypes.shape(footerPropTypes).isRequired,
  langKey: PropTypes.string.isRequired,
};

const Landing = ({ data, pathContext }) => {
  const copy = data.landingPage.frontmatter;
  return (
    <LandingTemplate
      reinsuredFile={data.reinsuredFile}
      authorisedFile={data.authorisedFile}
      aaRatedFile={data.aaRatedFile}
      chatDemoBgFile={data.chatDemoBgFile}
      mediaLogosFile={data.mediaLogosFile}
      perilForestMobileFile={data.perilForestMobileFile}
      perilForestDesktopFile={data.perilForestDesktopFile}
      title={copy.title}
      landing={copy.landing}
      threeExplainers={copy.three_explainers}
      perilForest={copy.peril_forest}
      getStarted={copy.get_started}
      safety={copy.safety}
      pricing={{
        heading: copy.pricing.heading,
        rentalTitle: copy.pricing.rental_title,
        rentalPrice: copy.pricing.rental_price,
        ownedTitle: copy.pricing.owned_title,
        ownedPrice: copy.pricing.owned_price,
        bottomParagraph: copy.pricing.bottom_paragraph,
        monthlyLabel: copy.pricing.monthly_label,
        aroundLabel: copy.pricing.around_label,
      }}
      customerSources={copy.customerSources}
      header={data.header}
      footer={data.footer}
      langKey={pathContext.langKey}
    />
  );
};

Landing.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  pathContext: PropTypes.shape({ langKey: PropTypes.string }).isRequired,
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
          cta_text
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
        customerSources {
          headline
          paragraph
        }
        get_started {
          heading1
          heading2
          paragraph
          buttontext
        }
        safety {
          item1
          item2
          item3
        }
        pricing {
          heading
          monthly_label
          around_label
          rental_title
          rental_price
          owned_title
          owned_price
          bottom_paragraph
        }
      }
    }

    header: dataYaml(id: { regex: "/header/" }) {
      ...Header_data
    }

    footer: dataYaml(id: { regex: "/footer/" }) {
      ...Footer_data
    }
  }
`;
