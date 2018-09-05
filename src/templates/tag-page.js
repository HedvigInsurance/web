import React from 'react';
import { Helmet } from 'react-helmet';
import { StickyContainer } from 'react-sticky';

import Header, { headerPropTypes } from 'src/components/Header';
import Footer, { footerPropTypes } from 'src/components/Footer';
import { BlogContainer, BlogPost, PostContainer } from 'src/components/Blog';
import { Spacing } from 'src/components/Spacing';

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
        <BlogContainer>
          <PostContainer>
            <h1>Posts tagged with: {tag}</h1>
          </PostContainer>
          <Spacing height={20} />
          {taggedPosts.map(({ node: { fields, frontmatter } }) => {
            const { title, date, topImage, tags, excerpt } = frontmatter;
            const { slug } = fields;
            const author = posters.edges.filter(
              (poster) => poster.node.name === frontmatter.author,
            )[0];
            return (
              <React.Fragment>
                <BlogPost
                  key={slug}
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
                <Spacing height={20} />
              </React.Fragment>
            );
          })}
        </BlogContainer>
        <Footer data={footer} langKey="se" />
      </StickyContainer>
    </main>
  );
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
