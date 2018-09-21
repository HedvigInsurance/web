import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StickyContainer } from 'react-sticky';

import Header, { headerPropTypes } from 'src/components/Header';
import Footer, { footerPropTypes } from 'src/components/Footer';
import { BlogContainer, BlogPost } from 'src/components/Blog';
import { Spacing } from 'src/components/Spacing';
import styled from 'react-emotion';
import { addIndex, filter, map, pathSatisfies, pipe, reverse } from 'ramda';
import { getBlogPostPropsFromEdge, sortBlogPosts } from '../utils/blog-posts';
import { notNullable } from '../utils/nullables';
import { kebabCaseTag } from '../utils/blog-tags';
import { Breadcrumb, Breadcrumbs } from '../components/Breadcrumbs';

const getBlogPosts = (posterEdges, postEdges, tag) =>
  pipe(
    sortBlogPosts,
    reverse,
    filter(
      pathSatisfies((tags) => tags.map(kebabCaseTag).includes(tag), [
        'node',
        'frontmatter',
        'tags',
      ]),
    ),
    map(getBlogPostPropsFromEdge(posterEdges)),
    addIndex(map)((postProps, index, originalArray) => (
      <BlogPost
        key={postProps.slug}
        {...postProps}
        isFirst={index === 0}
        isLast={index === notNullable(originalArray).length - 1}
      />
    )),
  )(postEdges);
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
  const { posters, posts, header, footer } = data;
  const { tag } = pathContext;
  const pageTitle = `Inlägg taggade med: ${tag} | Hedvig`;

  return (
    <main className="Site">
      <Helmet>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
      </Helmet>
      <StickyContainer>
        <Header data={header} langKey="se" />
        <BlogContainer verticalMargin>
          <Breadcrumbs>
            <Breadcrumb to="/blog">Blogg</Breadcrumb>
            <Breadcrumb>Taggar</Breadcrumb>
            <Breadcrumb>{tag}</Breadcrumb>
          </Breadcrumbs>
          <TagTemplateTitle>Inlägg taggade med: {tag}</TagTemplateTitle>
          <Spacing height={20} />
          {getBlogPosts(posters.edges, posts.edges, tag)}
        </BlogContainer>
        <Footer data={footer} langKey="se" />
      </StickyContainer>
    </main>
  );
};

TagTemplate.propTypes = {
  pathContext: PropTypes.shape({ tag: PropTypes.string.isRequired }).isRequired,
  data: PropTypes.shape({
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

    header: dataYaml(id: { regex: "/header/" }) {
      ...Header_data
    }

    footer: dataYaml(id: { regex: "/footer/" }) {
      ...Footer_data
    }
  }
`;

export default TagTemplate;
