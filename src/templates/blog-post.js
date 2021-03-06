import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Helmet } from 'react-helmet';
import { StickyContainer } from 'react-sticky';

import Header, { headerPropTypes } from 'src/components/Header';
import Footer, { footerPropTypes } from 'src/components/Footer';

import { colors, fonts } from '@hedviginsurance/brand';

import {
  BlogPostAuthor,
  BlogContainer,
  PostContainer,
  PostHeader,
  PrevNextCard,
  BlogLink,
} from 'src/components/Blog';
import { Badge } from 'src/components/Badge';
import { Markdown } from 'src/cms/utils/markdown';
import { kebabCaseTag } from 'src/utils/blog-tags';
import { Button } from 'src/components/Button';
import {
  authorOrDefault,
  getAuthorField,
  sortBlogPosts,
} from '../utils/blog-posts';
import { truncate } from '../utils/truncate';
import { Breadcrumb, Breadcrumbs } from '../components/Breadcrumbs';

const pagePropTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

const PHONE_UP = '@media (min-width: 480px)';

const TopImage = styled('img')({
  width: '100%',
  maxHeight: '40vh',
  objectFit: 'cover',
  objectPosition: 'center center',
});

const AuthorContainer = styled('div')({
  padding: '35px 0',
});

const PrevNextContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  maxWidth: 787,
  margin: 'auto',
  [PHONE_UP]: {
    paddingLeft: 24,
    paddingRight: 24,
  },
});

const PrevNextSection = styled('div')({
  backgroundColor: colors.LIGHT_GRAY,
  [PHONE_UP]: {
    paddingTop: 80,
    paddingBottom: 80,
  },
});

const BlogParagraph = styled('p')({
  marginBottom: 20,
  lineHeight: 1.5,
});

const BlogImage = styled('img')({
  maxWidth: '100%',
  marginTop: 20,
  marginBottom: 20,
});

const BlogQuote = styled('blockquote')({
  backgroundColor: '#FFF3F2',
  borderRadius: 10,
  padding: 24,
  fontFamily: fonts.SORAY,
  fontSize: 30,
  lineHeight: 1.5,
  margin: '50px 0',

  '@media (min-width: 797px)': {
    fontSize: 40,
    padding: 48,
  },

  p: {
    marginBottom: 0,
    lineHeight: 'inherit',
  },
});

const CtaContainer = styled('div')({
  padding: '30px 0',
  textAlign: 'center',
  [PHONE_UP]: {
    padding: '60px 0',
  },
});

const Cta = styled(Button)({
  '&&': {
    display: 'inline-block',
    textDecoration: 'none',
    fontSize: 16,
    color: colors.WHITE,
  },
}).withComponent('a');

const BlogPostTemplate = ({
  title,
  date,
  author,
  content,
  excerpt,
  header,
  footer,
  topImage,
  prevPost,
  nextPost,
  tags,
  cta,
}) => (
  <main className="Site">
    <Helmet>
      <title>{title} | Hedvig</title>
      <meta property="og:title" content={`${title} | Hedvig`} />
      <meta property="og:description" content={excerpt} />
      <meta property="og:type" content="article" />
      {topImage && [
        <meta
          key={0}
          property="og:image"
          content={process.env.URL + topImage}
        />,
        <meta key={1} property="og:image:width" content="" />,
        <meta key={2} property="og:image:height" content="" />,
        <meta
          key={3}
          property="twitter:image"
          content={process.env.URL + topImage}
        />,
      ]}
    </Helmet>
    <StickyContainer>
      <Header data={header} langKey="se" />
      <article className="Site-content">
        {topImage && <TopImage src={topImage} />}
        <BlogContainer verticalMargin>
          <Breadcrumbs>
            <Breadcrumb href="/blog">Blogg</Breadcrumb>
            <Breadcrumb>{truncate(25)(title)}</Breadcrumb>
          </Breadcrumbs>
          <PostContainer isFirst isLast>
            <PostHeader size="lg">{title}</PostHeader>
            <AuthorContainer>
              <BlogPostAuthor author={author} date={date} />
            </AuthorContainer>
            <Markdown
              renderers={{
                paragraph: BlogParagraph,
                image: BlogImage,
                blockquote: BlogQuote,
              }}
              source={content}
            />
            {cta &&
              cta.show && (
                <CtaContainer>
                  <Cta href={cta.target} size="sm">
                    {cta.label}
                  </Cta>
                </CtaContainer>
              )}
            <div>
              {tags &&
                tags.filter((tag) => tag.trim() !== '').map((tag) => (
                  <BlogLink key={tag} href={`/blog/tags/${kebabCaseTag(tag)}`}>
                    <Badge>{tag}</Badge>
                  </BlogLink>
                ))}
            </div>
          </PostContainer>
        </BlogContainer>
        <PrevNextSection>
          <PrevNextContainer>
            <PrevNextCard
              post={prevPost}
              phoneCardDirection="Föregånde inlägg"
              background="#f9fafc"
            />
            <PrevNextCard
              post={nextPost}
              phoneCardDirection="Nästa inlägg"
              background="#f3f4f7"
            />
          </PrevNextContainer>
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
  const sortedPosts = sortBlogPosts(data.posts.edges);
  const currentPostIndex = sortedPosts.findIndex(
    (p) => p.node.frontmatter.date === data.post.frontmatter.date,
  );
  const prevPost = sortedPosts[currentPostIndex - 1];
  const nextPost = sortedPosts[currentPostIndex + 1];
  return (
    <BlogPostTemplate
      title={data.post.frontmatter.title}
      date={data.post.frontmatter.date}
      topImage={data.post.frontmatter.topImage}
      author={authorOrDefault(
        getAuthorField({ node: data.post }),
        data.posters.edges,
      )}
      content={data.post.frontmatter.content}
      excerpt={data.post.frontmatter.excerpt}
      header={data.header}
      footer={data.footer}
      prevPost={prevPost}
      nextPost={nextPost}
      tags={data.post.frontmatter.tags}
      cta={data.post.frontmatter.cta}
    />
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape(pagePropTypes),
    }),
    header: PropTypes.shape(headerPropTypes).isRequired,
    footer: PropTypes.shape(footerPropTypes).isRequired,
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
        excerpt
        tags
        cta {
          show
          label
          target
        }
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

export { BlogPostTemplate };
export default BlogPost;
