import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StickyContainer } from 'react-sticky';
import remark from 'remark';
import reactRenderer from 'remark-react';

import Header, { headerPropTypes } from 'src/components/Header';
import Footer, { footerPropTypes } from 'src/components/Footer';

const pagePropTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const FAQTemplate = ({
  title,
  heading,
  questions,
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
        <div className="u-backgroundSecondaryGreen">
          <div className="Container">
            <h1 className="u-spaceMT2 u-spaceMB8 u-md-spaceMB6 u-lg-spaceMB6 u-fontFamilyHeader u-fontSize5 u-md-fontSize3 u-lg-fontSize2">
              {heading}
            </h1>
          </div>
        </div>
        <div className="Container u-md-spaceMT10 u-lg-spaceMT10 u-spaceMB5 u-md-spaceMB3 u-lg-spaceMB3">
          {questions &&
            questions.map((question) => (
              <div key={question.question} className="u-maxWidth1of1">
                <div>
                  <h2 className="u-spaceMT5 u-spaceMB10 u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
                    {question.question}
                  </h2>
                  <div className="u-spaceMB9">
                    {
                      remark()
                        .use(reactRenderer)
                        .processSync(question.answer).contents
                    }
                  </div>
                </div>
              </div>
            ))}
        </div>
      </article>
    </StickyContainer>
    <Footer data={footer} langKey={langKey} />
  </main>
);

FAQTemplate.propTypes = {
  ...pagePropTypes,
  header: headerPropTypes.isRequired,
};

const FAQ = ({ data, pathContext }) => (
  <FAQTemplate
    title={data.markdownRemark.frontmatter.title}
    heading={data.markdownRemark.frontmatter.heading}
    questions={data.markdownRemark.frontmatter.questions}
    header={data.header}
    footer={data.footer}
    langKey={pathContext.langKey}
  />
);

FAQ.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape(pagePropTypes),
    }),
    header: headerPropTypes,
    footer: footerPropTypes,
  }).isRequired,
  pathContext: PropTypes.shape({ langKey: PropTypes.string }).isRequired,
};

export { FAQTemplate };

export const faqPageQuery = graphql`
  query FaqPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        questions {
          question
          answer
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

export default FAQ;
