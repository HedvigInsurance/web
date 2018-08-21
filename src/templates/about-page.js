import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StickyContainer } from 'react-sticky';

import Header, { headerPropTypes } from 'src/components/Header';
import Footer, { footerPropTypes } from 'src/components/Footer';

const pagePropTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  section1: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    paragraph1: PropTypes.string.isRequired,
    paragraph2: PropTypes.string.isRequired,
  }).isRequired,
  section2: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    paragraph1: PropTypes.string.isRequired,
    paragraph2: PropTypes.string.isRequired,
    paragraph3: PropTypes.string.isRequired,
  }).isRequired,
};

const AboutUsTemplate = ({
  title,
  heading,
  section1,
  section2,
  header,
  footer,
}) => (
  <main className="Site">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <StickyContainer>
      <Header data={header} />
      <article className="Site-content">
        <div className="u-backgroundSecondaryPink">
          <div className="Container">
            <h1 className="u-spaceMT2 u-spaceMB8 u-md-spaceMB6 u-lg-spaceMB6 u-fontFamilyHeader u-fontSize5 u-md-fontSize3 u-lg-fontSize2">
              {heading}
            </h1>
          </div>
        </div>

        <div className="Container u-md-spaceMT10 u-lg-spaceMT10 u-spaceMB5 u-md-spaceMB3 u-lg-spaceMB3">
          <div className="u-maxWidth1of1">
            <div>
              <h2 className="u-spaceMT5 u-spaceMB10 u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
                {section1.heading}
              </h2>
              <div>
                <p className="u-spaceMB9">{section1.paragraph1}</p>
                <p className="u-spaceMB9">{section1.paragraph2}</p>
              </div>
            </div>
          </div>
          <div className="u-maxWidth1of1">
            <div>
              <h2 className="u-spaceMT5 u-spaceMB10 u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
                {section2.heading}
              </h2>
              <div>
                <p className="u-spaceMB9">{section2.paragraph1}</p>
                <p className="u-spaceMB9">{section2.paragraph2}</p>
                <p className="u-spaceMB9">{section2.paragraph3}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </StickyContainer>
    <Footer data={footer} />
  </main>
);

AboutUsTemplate.propTypes = {
  ...pagePropTypes,
  header: headerPropTypes.isRequired,
};

const AboutUs = ({ data }) => (
  <AboutUsTemplate
    title={data.markdownRemark.frontmatter.title}
    heading={data.markdownRemark.frontmatter.heading}
    section1={data.markdownRemark.frontmatter.section1}
    section2={data.markdownRemark.frontmatter.section2}
    header={data.header}
    footer={data.footer}
  />
);

AboutUs.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape(pagePropTypes),
    }),
    header: PropTypes.shape(headerPropTypes),
    footer: PropTypes.shape(footerPropTypes),
  }).isRequired,
};

export { AboutUsTemplate };

export default AboutUs;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        section1 {
          heading
          paragraph1
          paragraph2
        }
        section2 {
          heading
          paragraph1
          paragraph2
          paragraph3
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
