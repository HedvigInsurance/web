import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Helmet } from 'react-helmet';
import { StickyContainer } from 'react-sticky';
import remark from 'remark';
import reactRenderer from 'remark-react';
import sortBy from 'lodash/sortBy';
import kebabCase from 'lodash/kebabCase';

import Header, { headerPropTypes } from 'src/components/Header';
import Footer, { footerPropTypes } from 'src/components/Footer';

import { colors } from '@hedviginsurance/brand';

import {
  BlogPostAuthor,
  BlogContainer,
  PostContainer,
  PostHeader,
  PrevNextCard,
  BlogLink,
} from 'src/components/Blog';
import { Badge } from 'src/components/Badge';

const pagePropTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const HeroImage = styled('img')({
  maxWidth: '100%',
});

const PrevNextContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const PrevNextSection = styled('div')({
  backgroundColor: colors.LIGHT_GRAY,
  paddingTop: 20,
  paddingBottom: 20,
});

const BlogPostTemplate = ({
  title,
  date,
  author,
  content,
  header,
  footer,
  topImage,
  prevPost,
  nextPost,
  tags,
}) => (
  <main className="Site">
    <Helmet>
      <title>{title} | Hedvig</title>
    </Helmet>
    <StickyContainer>
      <Header data={header} langKey="se" />
      <article className="Site-content">
        <BlogContainer>
          <PostContainer>
            <HeroImage src={topImage} alt="" />
            <PostHeader>{title}</PostHeader>
            <BlogPostAuthor author={author} date={date} />
            <div>
              {
                remark()
                  .use(reactRenderer)
                  .processSync(content).contents
              }
            </div>
            <div>
              {tags &&
                tags.map((tag) => (
                  <BlogLink key={tag} to={`/blog/tags/${kebabCase(tag)}`}>
                    <Badge>{tag}</Badge>
                  </BlogLink>
                ))}
            </div>
          </PostContainer>
        </BlogContainer>
        <PrevNextSection>
          <PostContainer>
            <PrevNextContainer>
              <PrevNextCard post={prevPost} />
              <PrevNextCard post={nextPost} />
            </PrevNextContainer>
          </PostContainer>
        </PrevNextSection>
      </article>
    </StickyContainer>
    <Footer data={footer} langKey="se" />
  </main>
);

BlogPostTemplate.propTypes = {
  ...pagePropTypes,
  header: PropTypes.shape(headerPropTypes).isRequired,
  footer: PropTypes.shape(footerPropTypes).isRequired,
};

const BlogPost = ({ data }) => {
  const author = data.posters.edges.filter(
    (poster) => poster.node.name === data.post.frontmatter.author,
  )[0];
  const sortedPosts = sortBy(
    data.posts.edges,
    (p) => new Date(p.node.frontmatter.date),
  );
  const currentPostIndex = sortedPosts.findIndex(
    (p) => p.node.frontmatter.date === data.post.frontmatter.date,
  );
  const prevPost = currentPostIndex > 0 && sortedPosts[currentPostIndex - 1];
  const nextPost =
    currentPostIndex !== sortedPosts.length &&
    sortedPosts[currentPostIndex + 1];
  return (
    <BlogPostTemplate
      title={data.post.frontmatter.title}
      date={data.post.frontmatter.date}
      topImage={data.post.frontmatter.topImage}
      author={
        author && {
          name: author.node.name,
          image: author.node.picture.standard,
        }
      }
      content={data.post.frontmatter.content}
      header={data.header}
      footer={data.footer}
      prevPost={prevPost}
      nextPost={nextPost}
      tags={data.post.frontmatter.tags}
    />
  );
};

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
    post: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date
        topImage
        author
        content
        tags
      }
    }

    posts: allMarkdownRemark(filter: { id: { regex: "/blog/" } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            topImage
            title
            excerpt
          }
        }
      }
    }

    posters: allTeamtailorUser {
      edges {
        node {
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

export default BlogPost;
