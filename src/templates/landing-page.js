import React from 'react';
import PropTypes from 'prop-types';
import { LottieLoader } from 'src/components/LottieLoader';
import VisibilitySensor from 'react-visibility-sensor';
import { StickyContainer } from 'react-sticky';
import { Helmet } from 'react-helmet';

import Header, { headerPropTypes } from 'src/components/Header';
import Footer, { footerPropTypes } from 'src/components/Footer';
import AppLink from 'src/components/AppLink';

import { CTAWaypoint } from 'src/components/CTAWaypoint';
import { trackEvent } from 'src/utils/track-event';

import './Home.css';
import { GetStarted } from 'src/sections/landing/get-started';
import MediaQuery from 'react-responsive';
import ClaimOnPhone from '../components/Animations/ClaimOnPhone';
import InsuranceInMinutes from '../components/Animations/InsuranceInMinutes';
import PaidRightAway from '../components/Animations/PaidRightAway';
import { CustomerSources } from '../sections/landing/customer-sources';
import { PerilForest } from '../sections/landing/peril-forest';
import { MediaLogos } from '../sections/landing/media-logos';

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

  registerCustomerSourceClick = () => {
    trackEvent('Customer source clicked');
  };

  render() {
    const {
      mediaLogosDesktopFile,
      mediaLogosMobileFile,
      perilForestMobileFile,
      perilForestDesktopFile,
      noindex,
      title,
      landing,
      threeExplainers,
      perilForest,
      getStarted,
      getStartedImage,
      customerSources,
      header,
      footer,
      langKey,
    } = this.props;
    return (
      <main className="Site">
        <Helmet>
          <title>{title}</title>
          {noindex && <meta name="robots" content="noindex" />}
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

            <MediaQuery query="(max-width: 959px)">
              <MediaLogos image={mediaLogosMobileFile} />
            </MediaQuery>
            <MediaQuery query="(min-width: 960px)">
              <MediaLogos image={mediaLogosDesktopFile} />
            </MediaQuery>

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
            <PerilForest
              {...perilForest}
              perilForestDesktopFile={perilForestDesktopFile}
              perilForestMobileFile={perilForestMobileFile}
            />

            {/* Customer sources */}
            <CustomerSources
              headline={customerSources.headline}
              paragraph={customerSources.paragraph}
            />

            <GetStarted {...getStarted} image={getStartedImage} />

            {/* Media logos */}
            <MediaQuery query="(max-width: 959px)">
              <MediaLogos image={mediaLogosMobileFile} />
            </MediaQuery>
            <MediaQuery query="(min-width: 960px)">
              <MediaLogos image={mediaLogosDesktopFile} />
            </MediaQuery>
          </StickyContainer>
        </section>

        <Footer data={footer} langKey={langKey} />
      </main>
    );
  }
}

LandingTemplate.propTypes = {
  mediaLogosDesktopFile: PropTypes.objectOf(PropTypes.object).isRequired,
  mediaLogosMobileFile: PropTypes.objectOf(PropTypes.object).isRequired,
  perilForestMobileFile: PropTypes.objectOf(PropTypes.object).isRequired,
  perilForestDesktopFile: PropTypes.objectOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  noindex: PropTypes.bool,
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
  customerSources: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
  }).isRequired,
  header: PropTypes.shape(headerPropTypes).isRequired,
  footer: PropTypes.shape(footerPropTypes).isRequired,
  langKey: PropTypes.string.isRequired,
};

LandingTemplate.defaultProps = {
  noindex: false,
};

const Landing = ({ data, pathContext }) => {
  const copy = data.landingPage.frontmatter;
  return (
    <LandingTemplate
      chatDemoBgFile={data.chatDemoBgFile}
      mediaLogosDesktopFile={data.mediaLogosDesktopFile}
      mediaLogosMobileFile={data.mediaLogosMobileFile}
      perilForestMobileFile={data.perilForestMobileFile}
      perilForestDesktopFile={data.perilForestDesktopFile}
      getStartedImage={data.getStartedImage}
      noindex={copy.noindex}
      title={copy.title}
      landing={copy.landing}
      threeExplainers={copy.three_explainers}
      perilForest={copy.peril_forest}
      getStarted={copy.get_started}
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
    mediaLogosDesktopFile: file(
      relativePath: { eq: "home/media-logos_desktop@2x.png" }
    ) {
      image: childImageSharp {
        sizes(maxWidth: 759) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
    mediaLogosMobileFile: file(
      relativePath: { eq: "home/media-logos_mobile@2x.png" }
    ) {
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

    getStartedImage: file(relativePath: { eq: "home/get-started-image.png" }) {
      image: childImageSharp {
        sizes(maxWidth: 500) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }

    landingPage: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        noindex
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
          imageAltText
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
