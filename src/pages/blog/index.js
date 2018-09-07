import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StickyContainer } from 'react-sticky';
import sortBy from 'lodash/sortBy';

import Header, { headerPropTypes } from 'src/components/Header';
import Footer, { footerPropTypes } from 'src/components/Footer';
import { BlogContainer, BlogPost } from 'src/components/Blog';
import { Spacing } from 'src/components/Spacing';

const Blog = ({ data }) => {
  const { posters, posts, page, header, footer } = data;
  return (
    <main className="Site">
      <Helmet>
        <title>{page.title}</title>
      </Helmet>
      <StickyContainer>
        <Header data={header} langKey="se" />
        <div className="Site-content">
          <BlogContainer>
            {sortBy(posts.edges, (p) => new Date(p.node.frontmatter.date))
              .reverse()
              .map(({ node: { frontmatter, fields } }) => {
                const { title, date, topImage, tags, excerpt } = frontmatter;
                const { slug } = fields;
                const author = posters.edges.filter(
                  (poster) => poster.node.name === frontmatter.author,
                )[0];
                return (
                  <React.Fragment key={slug}>
                    <BlogPost
                      title={title}
                      excerpt={excerpt}
                      date={date}
                      topImage={topImage}
                      slug={slug}
                      tags={tags}
                      author={
                        author && {
                          name: author.node.name,
                          image: author.node.picture.standard,
                        }
                      }
                    />
                    <Spacing height={75} />
                  </React.Fragment>
                );
              })}
          </BlogContainer>
        </div>
        <Footer data={footer} langKey="se" />
      </StickyContainer>
    </main>
  );
};

export const blogQuery = graphql`
  query BlogPage {
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
            author
            tags
            excerpt
          }
        }
      }
    }

    posters: allTeamtailorUser {
      edges {
        node {
          teamtailorId
          name
          picture {
            standard
            large
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
