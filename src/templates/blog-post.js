import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Helmet } from 'react-helmet';
import { StickyContainer } from 'react-sticky';
import remark from 'remark';
import reactRenderer from 'remark-react';

import Header, { headerPropTypes } from 'src/components/Header';
import Footer, { footerPropTypes } from 'src/components/Footer';

import {
  BlogPostAuthor,
  BlogContainer,
  PostContainer,
  PostHeader,
} from 'src/components/Blog';
import { Spacing } from 'src/components/Spacing';

const pagePropTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const HeroImage = styled('img')({
  maxWidth: '100%',
});

const BlogPostTemplate = ({
  title,
  date,
  author,
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
        <BlogContainer>
          <HeroImage src={topImage} alt="" />
          <PostContainer>
            <PostHeader>{title}</PostHeader>
            <Spacing height={44} />
            <BlogPostAuthor author={author} date={date} />
            <Spacing height={44} />
            <div>
              {
                remark()
                  .use(reactRenderer)
                  .processSync(content).contents
              }
            </div>
          </PostContainer>
        </BlogContainer>
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

const BlogPost = ({ data }) => {
  const author = data.posters.edges.filter(
    (poster) => poster.node.name === data.post.frontmatter.author,
  )[0];
  return (
    <BlogPostTemplate
      title={data.post.frontmatter.title}
      date={data.post.frontmatter.date}
      topImage={data.post.frontmatter.topImage}
      author={{ name: author.node.name, image: author.node.picture.standard }}
      content={data.post.frontmatter.content}
      header={data.header}
      footer={data.footer}
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
