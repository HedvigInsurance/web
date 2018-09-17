import * as React from 'react';
import { Helmet } from 'react-helmet';
import { StickyContainer } from 'react-sticky';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import { BlogContainer, BlogPost } from 'src/components/Blog';
import {
  OverviewHeroProps,
  OverviewHero,
} from 'src/components/Blog/OverviewHero';
import { GatsbyImageProps } from 'gatsby-image';
import { sortBlogPosts, getBlogPostPropsFromEdge } from 'src/utils/blog-posts';
import { pipe, reverse, map, addIndex, pathOr } from 'ramda';
import { BlogPostProps } from 'src/components/Blog/BlogPost';
import { notNullable } from 'src/utils/nullables';

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

interface BlogPage {
  title: string;
  hero: OverviewHeroProps;
}

interface BlogProps {
  data: {
    teamImageFile: { image: GatsbyImageProps };
    posts: { edges: { node: BlogPost }[] };
    posters: { edges: { node: Poster }[] };
    page: BlogPage;
    footer: any; // TODO add proper props when footer is typescript
    header: any; // TODO add proper props when header is typescript
  };
}

const Blog: React.SFC<BlogProps> = ({ data }) => {
  const { teamImageFile, posters, posts, page, header, footer } = data;
  const teamImageSrc = pathOr('', ['image', 'sizes', 'src'], teamImageFile);
  return (
    <main className="Site">
      <Helmet>
        <title>{page.title}</title>
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={data.page.hero.text} />
        <meta property="og:image" content={process.env.URL + page.hero.image} />
        <meta property="og:image:width" content="" />
        <meta property="og:image:height" content="" />
      </Helmet>
      <StickyContainer>
        <Header data={header} langKey="se" />
        <OverviewHero {...data.page.hero} image={teamImageSrc} />
        <div className="Site-content">
          <BlogContainer verticalMargin>
            {pipe(
              sortBlogPosts,
              reverse as { (list: any[]): any[] },
              map(getBlogPostPropsFromEdge(posters.edges)),
              addIndex<BlogPostProps>(map)(
                (
                  props: BlogPostProps,
                  index: number,
                  originalArray: BlogPostProps[] | undefined,
                ) => (
                  <BlogPost
                    key={props.slug}
                    {...props}
                    isFirst={index === 0}
                    isLast={index === notNullable(originalArray).length - 1}
                  />
                ),
              ),
            )(posts.edges)}
          </BlogContainer>
        </div>
        <Footer data={footer} langKey="se" />
      </StickyContainer>
    </main>
  );
};

export const blogQuery = graphql`
  query BlogPage {
    teamImageFile: file(relativePath: { eq: "blog/team.jpg" }) {
      image: childImageSharp {
        sizes(maxWidth: 2500) {
          ...GatsbyImageSharpSizes
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
      hero {
        title
        text
        image
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

export default Blog;
