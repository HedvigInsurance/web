import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StickyContainer } from 'react-sticky';
import remark from 'remark';
import reactRenderer from 'remark-react';

import Header, { headerPropTypes } from 'src/components/Header';
import Footer, { footerPropTypes } from 'src/components/Footer';
import './Page.css';

const pagePropTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({ section: PropTypes.string.isRequired }),
  ).isRequired,
};

const PrivacyTemplate = ({
  title,
  heading,
  sections,
  header,
  footer,
  langKey,
}) => (
  <main className="Site">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <StickyContainer>
      <Header data={header} langKey={langKey} />
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
    <Footer data={footer} langKey={langKey} />
  </main>
);

PrivacyTemplate.propTypes = {
  ...pagePropTypes,
  header: PropTypes.shape(headerPropTypes).isRequired,
  footer: PropTypes.shape(footerPropTypes).isRequired,
  langKey: PropTypes.string.isRequired,
};

const Privacy = ({ data, pathContext }) => (
  <PrivacyTemplate
    title={data.markdownRemark.frontmatter.title}
    heading={data.markdownRemark.frontmatter.heading}
    sections={data.markdownRemark.frontmatter.sections}
    header={data.header}
    footer={data.footer}
    langKey={pathContext.langKey}
  />
);

Privacy.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape(pagePropTypes),
    }),
    header: headerPropTypes,
    footer: footerPropTypes,
  }).isRequired,
  pathContext: PropTypes.shape({ langKey: PropTypes.string }).isRequired,
};

export { PrivacyTemplate };

export const privacyPageQuery = graphql`
  query PrivacyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        sections {
          section
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

export default Privacy;
