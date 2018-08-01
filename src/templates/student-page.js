import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import VisibilitySensor from 'react-visibility-sensor';
import { StickyContainer } from 'react-sticky';
import { Helmet } from 'react-helmet';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import AppLink from 'src/components/AppLink';

import './Home.css';
import './Student.css';
import InsuranceInMinutes from 'src/components/Animations/InsuranceInMinutes';
import ClaimOnPhone from 'src/components/Animations/ClaimOnPhone';
import PaidRightAway from 'src/components/Animations/PaidRightAway';
import ChatDemo from 'src/components/Animations/ChatDemo';
import { ReactComponent as CheckIcon } from 'assets/icons/check-icon.svg';

const THREE_EXPLAINER_WIDTH_HEIGHT = 210;

class StudentTemplate extends React.Component {
  chatDemoOnVisibilityChange = (isVisible) => {
    if (!this.chatAnim) return;

    if (isVisible) {
      this.chatAnim.play();
    } else {
      this.chatAnim.stop();
    }
  };

  chatAnimRef = (anim) => {
    this.chatAnim = anim;
  };

  insuranceInMinutesRef = (anim) => {
    this.insuranceInMinutesAnim = anim;
  };

  claimOnPhoneRef = (anim) => {
    this.claimOnPhoneAnimation = anim;
  };

  paidRightAwayRef = (anim) => {
    this.paidRightAwayAnimation = anim;
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

  registerPriceRentClick = () => {
    if (window && window.analytics) {
      window.analytics.track('Student price, rent clicked');
    }
  };

  registerPriceBrfClick = () => {
    if (window && window.analytics) {
      window.analytics.track('Student price, brf clicked');
    }
  };

  render() {
    const {
      mediaLogosFile,
      perilForestMobileFile,
      perilForestDesktopFile,
      heartFile,
      title,
      landing,
      threeExplainers,
      perilForest,
      bottomCta,
    } = this.props;
    return (
      <main className="Site">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <section className="Site-content">
          <StickyContainer>
            <Header />
            {/* Landing section */}
            <div className="u-backgroundWhite">
              <div className="">
                <div className="">
                  <div className="Grid Container Container--withoutGutter u-lg-flexNoWrap">
                    <div className="u-sizeFull u-lg-size3of5 u-md-spacePT7 u-md-spacePH10 u-lg-spacePT12">
                      <h1 className="u-spaceMT8 u-md-spaceMT5 u-lg-spaceMT5 u-spaceMB12 u-colorBlack u-fontWeightBold u-fontSize3 u-md-fontSize2 u-lg-fontSize2 u-textLeft u-spaceML10 u-md-spaceML0 u-lg-spaceML0 u-fontFamilyHeader">
                        {landing.heading}
                      </h1>
                      <p className="u-colorBlack u-spaceMB8 u-fontSize9 u-md-fontSize8 u-lg-fontSize8 u-textCenter u-md-textLeft u-lg-textLeft">
                        {landing.subheading}{' '}
                        <span className="u-colorPrimaryGreen">
                          {landing.subheading_emphasis}
                        </span>
                      </p>
                      <div className="u-flex u-lg-spaceMT8 u-spaceMB3 u-lg-spaceML6 u-flexJustifyCenter">
                        <div // eslint-disable-line
                          onClick={this.registerPriceRentClick}
                          className="Student-price-circle u-colorWhite u-backgroundPrimaryPurple u-flex u-flexAlignCenter u-flexJustifyCenter u-flexCol"
                        >
                          <h3 className="u-fontSize4 u-md-fontSize2 u-lg-fontSize2">
                            {landing.bubble1.price}
                          </h3>
                          <p className="u-size5of6 u-flexExpandLeft u-flexExpandRight u-textCenter u-fontSize10">
                            {landing.bubble1.explainer}
                          </p>
                        </div>
                        <div // eslint-disable-line
                          onClick={this.registerPriceBrfClick}
                          className="Student-price-circle Student-price-circle-second u-colorWhite u-backgroundPrimaryPink u-flex u-flexAlignCenter u-flexJustifyCenter u-flexCol"
                        >
                          <h3 className="u-fontSize4 u-md-fontSize2 u-lg-fontSize2">
                            {landing.bubble2.price}
                          </h3>
                          <p className="u-fontSize10">
                            {landing.bubble2.explainer}
                          </p>
                        </div>
                      </div>
                      <div className="Grid Grid--alignCenter u-lg-flexJustifyStart u-spaceMT6 u-spaceMB4 u-md-spaceMB3 u-lg-spaceMB2 u-textCenter">
                        <AppLink
                          tags={['student-hero']}
                          className="Button Student-cta u-colorWhite u-backgroundPrimaryGreen u-spaceMB12 u-md-spaceMB10 u-lg-spaceMB10 u-fontWeightBold"
                        >
                          {landing.cta_text}
                        </AppLink>
                        <p className="u-colorBlack u-textCenter u-md-textLeft u-lg-textLeft u-fontSize9">
                          {landing.paragraph}
                        </p>
                      </div>
                    </div>
                    <div className="u-sizeFull u-lg-size2of5">
                      <VisibilitySensor
                        partialVisibility
                        onChange={this.chatDemoOnVisibilityChange}
                      >
                        <div className="u-spaceMV6 u-lg-spaceMT4">
                          <ChatDemo ref={this.chatAnimRef} width={307} />
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
                      <InsuranceInMinutes
                        ref={this.insuranceInMinutesRef}
                        sideLength={THREE_EXPLAINER_WIDTH_HEIGHT}
                      />
                      <h4 className="u-fontSize8 u-spaceMB12 u-lg-spaceMH10">
                        {
                          threeExplainers.three_explainers.insurance_in_minutes
                            .title
                        }
                      </h4>
                      <p className="u-lg-spaceMH8 u-fontSize9">
                        {
                          threeExplainers.three_explainers.insurance_in_minutes
                            .paragraph
                        }
                      </p>
                    </div>
                    <div className="u-lg-size1of3">
                      <ClaimOnPhone
                        ref={this.claimOnPhoneRef}
                        sideLength={THREE_EXPLAINER_WIDTH_HEIGHT}
                      />
                      <h4 className="u-fontSize8 u-spaceMB12">
                        {threeExplainers.three_explainers.claim_on_phone.title}
                      </h4>
                      <p className="u-lg-spaceMH8 u-fontSize9">
                        {
                          threeExplainers.three_explainers.claim_on_phone
                            .paragraph
                        }
                      </p>
                    </div>
                    <div className="u-lg-size1of3">
                      <PaidRightAway
                        ref={this.paidRightAwayRef}
                        sideLength={THREE_EXPLAINER_WIDTH_HEIGHT}
                      />
                      <h4 className="u-fontSize8 u-spaceMB12">
                        {threeExplainers.three_explainers.paid_right_away.title}
                      </h4>
                      <p className="u-lg-spaceMH8 u-fontSize9">
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
            <div className="u-backgroundWhite">
              <div className="Container u-spacePT2 u-spacePB4">
                <h2 className="u-colorBlack u-fontFamilyHeader u-textCenter u-fontSize4 u-md-fontSize2 u-lg-fontSize2">
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
                <div className="u-flex u-flexJustifyCenter u-lg-size4of5 u-flexExpand">
                  <div className="Grid u-flexJustifyAround u-sizeFull">
                    <div className="u-flex u-flexRow u-lg-size1of4">
                      <CheckIcon className="Student-checkmark" />
                      <div>
                        <h4>{perilForest.bullet1.title}</h4>
                        <p>{perilForest.bullet1.paragraph}</p>
                      </div>
                    </div>
                    <div className="u-flex u-flexRow u-lg-size1of4">
                      <CheckIcon className="Student-checkmark" />
                      <div>
                        <h4>{perilForest.bullet2.title}</h4>
                        <p>{perilForest.bullet2.paragraph}</p>
                      </div>
                    </div>
                    <div className="u-flex u-flexRow u-lg-size1of4">
                      <CheckIcon className="Student-checkmark" />
                      <div>
                        <h4>{perilForest.bullet3.title}</h4>
                        <p>{perilForest.bullet3.paragraph}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="u-colorBlack u-spaceMT6 u-textCenter u-fontSize9 u-md-fontSize85 u-lg-fontSize85">
                  {perilForest.bottom_paragraph}
                </p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="u-backgroundWhite">
              <div className="Container u-flex u-flexJustifyCenter">
                <AppLink
                  tags={['student-bottom']}
                  className="Button Student-cta u-colorWhite u-backgroundPrimaryGreen u-spaceMB10 u-md-spaceMR12 u-lg-spaceMR12 u-fontWeightBold"
                >
                  {bottomCta}
                </AppLink>
              </div>
            </div>

            {/* Heart slide */}
            <div className="u-backgroundPrimaryPurple u-flex u-flexJustifyCenter u-flexAlignCenter u-spacePV8">
              {heartFile && (
                <Img
                  className="Student-heart"
                  sizes={heartFile.image.sizes}
                  alt="Hedvig loves students"
                />
              )}
            </div>
          </StickyContainer>
        </section>

        <Footer />
      </main>
    );
  }
}

StudentTemplate.propTypes = {
  mediaLogosFile: PropTypes.objectOf(PropTypes.object).isRequired,
  perilForestMobileFile: PropTypes.objectOf(PropTypes.object).isRequired,
  perilForestDesktopFile: PropTypes.objectOf(PropTypes.object).isRequired,
  heartFile: PropTypes.objectOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
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
  bottomCta: PropTypes.string.isRequired,
};

const Student = ({ data }) => {
  const copy = data.studentPage.frontmatter;
  return (
    <StudentTemplate
      chatDemoBgFile={data.chatDemoBgFile}
      mediaLogosFile={data.mediaLogosFile}
      perilForestMobileFile={data.perilForestMobileFile}
      perilForestDesktopFile={data.perilForestDesktopFile}
      heartFile={data.heartFile}
      title={copy.title}
      landing={copy.landing}
      threeExplainers={copy.three_explainers}
      perilForest={copy.peril_forest}
      bottomCta={copy.bottom_cta}
    />
  );
};

Student.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export { StudentTemplate };

export default Student;

export const query = graphql`
  query StudentPage($id: String!) {
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
    heartFile: file(relativePath: { eq: "student/heart.png" }) {
      image: childImageSharp {
        sizes(maxWidth: 80) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
    studentPage: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        landing {
          heading
          subheading
          subheading_emphasis
          cta_text
          paragraph
          bubble1 {
            price
            explainer
          }
          bubble2 {
            price
            explainer
          }
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
          bullet1 {
            title
            paragraph
          }
          bullet2 {
            title
            paragraph
          }
          bullet3 {
            title
            paragraph
          }
        }
        bottom_cta
      }
    }
  }
`;
