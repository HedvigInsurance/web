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
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const BlogPostTemplate = ({
  title,
  date,
  content,
  header,
  footer,
  topImage,
}) => (
  <main className="Site">
    <Helmet>
      <title>{title} | Hedvig</title>
    </Helmet>
    <StickyContainer>
      <Header data={header} />
      <article className="Site-content">
        <div className="u-backgroundSecondaryPink">
          <div className="Container">
            <h1 className="u-spaceMT2 u-spaceMB8 u-md-spaceMB6 u-lg-spaceMB6 u-fontFamilyHeader u-fontSize5 u-md-fontSize3 u-lg-fontSize2">
              {title}
            </h1>
          </div>
          <p>{date}</p>
        </div>
        <img src={topImage} alt="" />
        <div className="Container u-md-spaceMT10 u-lg-spaceMT10 u-spaceMB5 u-md-spaceMB3 u-lg-spaceMB3">
          <div className="u-maxWidth1of1">
            {
              remark()
                .use(reactRenderer)
                .processSync(content).contents
            }
          </div>
        </div>
      </article>
    </StickyContainer>
    <Footer data={footer} />
  </main>
);

BlogPostTemplate.propTypes = {
  ...pagePropTypes,
  header: PropTypes.shape(headerPropTypes).isRequired,
  footer: PropTypes.shape(footerPropTypes).isRequired,
};

const BlogPost = ({ data }) => (
  <BlogPostTemplate
    title={data.markdownRemark.frontmatter.title}
    date={data.markdownRemark.frontmatter.date}
    topImage={data.markdownRemark.frontmatter.topImage}
    content={data.markdownRemark.frontmatter.content}
    header={data.header}
    footer={data.footer}
  />
);

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape(pagePropTypes),
    }),
    header: headerPropTypes,
    footer: footerPropTypes,
  }).isRequired,
};

export const BlogPostQuery = graphql`
  query BlogPost($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date
        topImage
        content
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

export default BlogPost;
