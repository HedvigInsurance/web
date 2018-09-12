import * as React from 'react';
import { Helmet } from 'react-helmet';
import { StickyContainer } from 'react-sticky';
import sortBy from 'lodash/sortBy';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import { BlogContainer, BlogPost } from 'src/components/Blog';
import { Spacing } from 'src/components/Spacing';

interface BlogPost {
  fields: { slug: string };
  frontmatter: {
    title: string;
    date: string;
    topImage: string;
    author: string;
    tags: string[];
    excerpt: string;
  };
}

interface Poster {
  teamtailorId: string;
  name: string;
  picture: {
    standard: string;
    large: string;
  };
}

interface BlogProps {
  data: {
    posts: { edges: { node: BlogPost }[] };
    posters: { edges: { node: Poster }[] };
    page: { title: string };
    footer: any; // TODO add proper props when footer is typescript
    header: any; // TODO add proper props when header is typescript
  };
}

const Blog: React.SFC<BlogProps> = ({ data }) => {
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
                const author = posters.edges.find(
                  (poster) => poster.node.name === frontmatter.author,
                );
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
