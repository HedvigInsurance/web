import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StickyContainer } from 'react-sticky';
import remark from 'remark';
import reactRenderer from 'remark-react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

const propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({ section: PropTypes.string.isRequired }),
  ).isRequired,
};

const LegalTemplate = ({ title, heading, sections }) => (
  <main className="Site">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <StickyContainer>
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
                <section key={section.section}>
                  {
                    remark()
                      .use(reactRenderer)
                      .processSync(section.section).contents
                  }
                </section>
              ))}
          </div>
        </div>
      </article>
    </StickyContainer>
    <Footer />
  </main>
);

LegalTemplate.propTypes = propTypes;

const Legal = ({ data }) => (
  <LegalTemplate
    title={data.markdownRemark.frontmatter.title}
    heading={data.markdownRemark.frontmatter.heading}
    sections={data.markdownRemark.frontmatter.sections}
  />
);

Legal.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape(propTypes),
    }),
  }).isRequired,
};

export { LegalTemplate };

export const legalPageQuery = graphql`
  query LegalPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        sections {
          section
        }
      }
    }
  }
`;

export default Legal;
