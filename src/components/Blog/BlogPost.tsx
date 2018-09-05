import Link from 'gatsby-link';
import kebabCase from 'lodash/kebabCase';
import * as React from 'react';
import styled from 'react-emotion';
import remark from 'remark';
import reactRenderer from 'remark-react';
import { Badge } from 'src/components/Badge';
import { BlogLink, BlogPostAuthor, PostContainer, PostHeader } from 'src/components/Blog';
import { Author } from 'src/components/Blog/types';


interface BlogPostProps {
  title: string,
  excerpt: string,
  topImage: string,
  date: string
  author?: Author,
  slug: string,
  tags: Array<string>
}

const TopImage = styled('img')({
  maxWidth: '100%'
})

const BlogPost: React.SFC<BlogPostProps> = ({ title, excerpt, topImage, date, author, slug, tags }) => (
  <PostContainer>
    {author && (
      <BlogPostAuthor
        author={author}
        date={date}
      />
    )}
    <TopImage src={topImage} alt="" />
    <BlogLink to={slug}>
      <PostHeader>
        {title}
      </PostHeader>
    </BlogLink>
    <div>
      {
        remark()
          .use(reactRenderer)
          .processSync(excerpt).contents
      }
    </div>
    <Link to={slug}>Read more</Link>
    <div>
      {tags.map((tag) => (
        <BlogLink key={tag} to={`/blog/tags/${kebabCase(tag)}`}><Badge>{tag}</Badge></BlogLink>
      ))}
    </div>
  </PostContainer>
)

export { BlogPost };

