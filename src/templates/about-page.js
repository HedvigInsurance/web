import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

const propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      paragraphs: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
};

const AboutUsTemplate = ({ title, heading, sections }) => (
  <main className="Site">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Header />
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
          {sections &&
            sections.map((section) => (
              <div key={section.heading} className="">
                <h2 className="u-spaceMT5 u-spaceMB10 u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
                  {section.heading}
                </h2>
                <div>
                  {section.paragraphs &&
                    section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="u-spaceMB9">
                        {paragraph}
                      </p>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </article>
    <Footer />
  </main>
);

AboutUsTemplate.propTypes = propTypes;

const AboutUs = ({ data }) => (
  <AboutUsTemplate
    title={data.markdownRemark.frontmatter.title}
    heading={data.markdownRemark.frontmatter.heading}
    sections={data.markdownRemark.frontmatter.sections}
  />
);

AboutUs.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape(propTypes),
    }),
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
        sections {
          heading
          paragraphs
        }
      }
    }
  }
`;
