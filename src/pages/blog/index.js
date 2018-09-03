/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StickyContainer } from 'react-sticky';
import remark from 'remark';
import reactRenderer from 'remark-react';

import Header, { headerPropTypes } from 'src/components/Header';
import Footer, { footerPropTypes } from 'src/components/Footer';
import Link from 'gatsby-link';

const Blog = ({ data }) => {
  const { posts, page, header, footer } = data;
  return (
    <main className="Site">
      <Helmet>
        <title>{page.title}</title>
      </Helmet>
      <StickyContainer>
        <Header data={header} />
        <div className="Site-content">
          {/* {posts.edges.map(({ node: { frontmatter, fields } }) => (
            <article>
              <h2>
                <Link to={fields.slug}>{frontmatter.title}</Link>
              </h2>
              <img src={frontmatter.topImage} alt="" />
              <div>
                {
                  remark()
                    .use(reactRenderer)
                    .processSync(frontmatter.content).contents
                }
              </div>
            </article>
          ))} */}
        </div>
        <Footer data={footer} />
      </StickyContainer>
    </main>
  );
};

export const blogQuery = graphql`
  query BlogQuery {
    posts: allMarkdownRemark(filter: { id: { regex: "/blog/" } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            topImage
            content
          }
        }
      }
    }

    page: dataYaml(id: { regex: "/blog/" }) {
      title
    }

    header: dataYaml(id: { regex: "/header/" }) {
      ...Header_data
    }

    footer: dataYaml(id: { regex: "/footer/" }) {
      ...Footer_data
    }
  }
`;

export default Blog;
