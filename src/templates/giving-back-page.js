import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import AppLink from 'src/components/AppLink';
import { ReactComponent as SosBarnbyarLogo } from 'assets/charity/sos-barnbyar-logo.svg';
import { ReactComponent as BarncancerfondenLogo } from 'assets/charity/barncancerfonden-logo.svg';
import { ReactComponent as CheckIcon } from 'assets/icons/check-icon.svg';

const propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  section1: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
  }).isRequired,
  section2: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    bullets: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  section3: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    bullet1: PropTypes.string.isRequired,
    bullet2: PropTypes.string.isRequired,
    bullet3: PropTypes.string.isRequired,
  }).isRequired,
  section4: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    sos_barnbyar: PropTypes.string.isRequired,
    barncancerfonden: PropTypes.string.isRequired,
  }).isRequired,
  ctaText: PropTypes.string.isRequired,
};

const GivingBackTemplate = ({
  title,
  heading,
  section1,
  section2,
  section3,
  section4,
  ctaText,
}) => (
  <main className="Site">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Header />
    <article className="Site-content">
      <div className="u-backgroundSecondaryPurple">
        <div className="Container">
          <h1 className="u-spaceMT2 u-spaceMB8 u-md-spaceMB6 u-lg-spaceMB6 u-fontFamilyHeader u-fontSize5 u-md-fontSize3 u-lg-fontSize2">
            {heading}
          </h1>
        </div>
      </div>

      <div className="Container u-md-spaceMT10 u-lg-spaceMT10 u-spaceMB5 u-md-spaceMB3 u-lg-spaceMB3">
        <div className="u-maxWidth1of1">
          <h2 className="u-spaceMT5 u-spaceMB10 u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
            {section1.heading}
          </h2>
          <p className="u-spaceMB9">{section1.paragraph}</p>

          <h2 className="u-spaceMT5 u-spaceMB10 u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
            {section2.heading}
          </h2>
          <p className="u-spaceMB9">{section2.paragraph}</p>

          <h3 className="u-spaceMT8 u-spaceMB10 u-fontSize11 u-md-fontSize10">
            {section2.subheading}
          </h3>

          <ul className="u-spaceMT10">
            {section2.bullets &&
              section2.bullets.map((bullet) => (
                <li
                  className="u-fontSize9 u-spaceMB10"
                  style={{ textIndent: '-2em', paddingLeft: '2em' }}
                >
                  <CheckIcon
                    style={{
                      width: 20,
                      marginRight: 10,
                      verticalAlign: 'text-bottom',
                    }}
                    className="u-inlineBlock u-spaceMR11"
                  />
                  {bullet}
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h2 className="u-spaceMT5 u-spaceMB10 u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
            {section3.heading}
          </h2>
          <div className="Grid Grid--withGutter">
            <div className="u-md-size1of3 u-lg-size1of3">
              <span className="NumberedIcon">1</span>
              <p className="u-spaceMB9">{section3.bullet1}</p>
            </div>
            <div className="u-md-size1of3 u-lg-size1of3">
              <span className="NumberedIcon">2</span>
              <p className="u-spaceMB9">{section3.bullet2}</p>
            </div>
            <div className="u-md-size1of3 u-lg-size1of3">
              <span className="NumberedIcon">3</span>
              <p className="u-spaceMB9">{section3.bullet3}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="u-spaceMT5 u-spaceMB10 u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
            {section4.heading}
          </h2>
          <div className="Grid Grid--withGutter">
            <div className="u-spaceMB8 u-md-size1of2 u-lg-size1of2 u-flex u-flexCol u-flexAlignItemsCenter">
              <figure
                className="u-flex u-flexCol u-flexJustifyCenter u-spaceMB7"
                style={{ height: 120 }}
              >
                <SosBarnbyarLogo />
              </figure>
              <p className="u-spaceMB9 u-textCenter u-maxWidth1of2">
                {section4.sos_barnbyar}
              </p>
            </div>
            <div className="u-spaceMB8 u-md-size1of2 u-lg-size1of2 u-flex u-flexCol u-flexAlignItemsCenter">
              <figure className="u-spaceMB7" style={{ height: 120 }}>
                <BarncancerfondenLogo />
              </figure>
              <p className="u-spaceMB9 u-textCenter u-maxWidth1of2">
                {section4.barncancerfonden}
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="Grid Grid--withGutter Grid--alignCenter u-spaceMT8">
            <AppLink className="Button u-colorWhite u-backgroundPrimaryGreen">
              {ctaText}
            </AppLink>
          </div>
        </div>
      </div>
    </article>
    <Footer />
  </main>
);

GivingBackTemplate.propTypes = propTypes;

const GivingBack = ({ data }) => (
  <GivingBackTemplate
    title={data.markdownRemark.frontmatter.title}
    heading={data.markdownRemark.frontmatter.heading}
    section1={data.markdownRemark.frontmatter.section1}
    section2={data.markdownRemark.frontmatter.section2}
    section3={data.markdownRemark.frontmatter.section3}
    section4={data.markdownRemark.frontmatter.section4}
    ctaText={data.markdownRemark.frontmatter.cta_text}
  />
);

GivingBack.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape(propTypes),
    }),
  }).isRequired,
};

export { GivingBackTemplate };

export default GivingBack;

export const givingBackPageQuery = graphql`
  query GivingBackPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        section1 {
          heading
          paragraph
        }
        section2 {
          heading
          paragraph
          subheading
          bullets
        }
        section3 {
          heading
          bullet1
          bullet2
          bullet3
        }
        section4 {
          heading
          sos_barnbyar
          barncancerfonden
        }
        cta_text
      }
    }
  }
`;
