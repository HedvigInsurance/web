import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StickyContainer } from 'react-sticky';

import Header, { headerPropTypes } from 'src/components/Header';
import Footer, { footerPropTypes } from 'src/components/Footer';
import { BlogContainer, BlogPost } from 'src/components/Blog';
import { Spacing } from 'src/components/Spacing';
import styled from 'react-emotion';

const pagePropTypes = {
  title: PropTypes.string.isRequired,
};
const postPropTypes = {
  node: PropTypes.shape({
    fields: PropTypes.shape({ slug: PropTypes.string.isRequired }).isRequired,
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      topImage: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      excerpt: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
const posterPropTypes = {
  node: PropTypes.shape({
    teamtailorId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.shape({
      standard: PropTypes.string.isRequired,
      large: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const TagTemplateTitle = styled('h1')({
  lineHeight: 1.2,
});

const TagTemplate = ({ data, pathContext }) => {
  const { posters, posts, page, header, footer } = data;
  const { tag } = pathContext;
  const taggedPosts = posts.edges.filter(
    (post) =>
      post.node.frontmatter.tags && post.node.frontmatter.tags.includes(tag),
  );

  return (
    <main className="Site">
      <Helmet>
        <title>{page.title}</title>
      </Helmet>
      <StickyContainer>
        <Header data={header} langKey="se" />
        <BlogContainer verticalMargin>
          <TagTemplateTitle>Inlägg taggade med: {tag}</TagTemplateTitle>
          <Spacing height={20} />

          {taggedPosts.map(
            ({ node: { fields, frontmatter } }, index, origin) => {
              const { title, date, topImage, tags, excerpt } = frontmatter;
              const { slug } = fields;
              const author = posters.edges.filter(
                (poster) => poster.node.name === frontmatter.author,
              )[0];
              return (
                <BlogPost
                  key={slug}
                  title={title}
                  excerpt={excerpt}
                  date={date}
                  topImage={topImage}
                  slug={slug}
                  tags={tags}
                  author={
                    author
                      ? {
                          name: author.node.name,
                          image: author.node.picture.standard,
                        }
                      : { name: frontmatter.author }
                  }
                  isFirst={index === 0}
                  isLast={index === origin.length - 1}
                />
              );
            },
          )}
        </BlogContainer>
        <Footer data={footer} langKey="se" />
      </StickyContainer>
    </main>
  );
};

TagTemplate.propTypes = {
  pathContext: PropTypes.shape({ tag: PropTypes.string.isRequired }).isRequired,
  data: PropTypes.shape({
    page: PropTypes.shape(pagePropTypes).isRequired,
    posts: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape(postPropTypes)).isRequired,
    }).isRequired,
    posters: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape(posterPropTypes)).isRequired,
    }).isRequired,
    header: PropTypes.shape(headerPropTypes).isRequired,
    footer: PropTypes.shape(footerPropTypes).isRequired,
  }).isRequired,
};

export const tagQuery = graphql`
  query TagQuery {
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

export default TagTemplate;
