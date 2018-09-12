import Link from 'gatsby-link';
import kebabCase from 'lodash/kebabCase';
import * as React from 'react';
import styled from 'react-emotion';
import { Badge } from 'src/components/Badge';
import {
  BlogLink,
  BlogPostAuthor,
  PostContainer,
  PostHeader,
} from 'src/components/Blog';
import { Author } from 'src/components/Blog/types';
import { Spacing } from 'src/components/Spacing';
import { Markdown } from 'src/cms/utils/markdown';

interface BlogPostProps {
  title: string;
  excerpt: string;
  topImage: string;
  date: string;
  author?: Author;
  slug: string;
  tags: string[];
}

const TopImage = styled('img')({
  maxWidth: '100%',
  borderRadius: 8,
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
});

const BlogPost: React.SFC<BlogPostProps> = ({
  title,
  excerpt,
  topImage,
  date,
  author,
  slug,
  tags,
}) => (
  <PostContainer>
    <BlogPostAuthor author={author} date={date} />
    <TopImage src={topImage} alt="" />
    <Spacing height={22} />
    <BlogLink to={slug}>
      <PostHeader>{title}</PostHeader>
    </BlogLink>
    <div>
      <Markdown source={excerpt} />
    </div>
    <Link to={slug}>Read more</Link>
    <div>
      {tags.map((tag) => (
        <BlogLink key={tag} to={`/blog/tags/${kebabCase(tag)}`}>
          <Badge>{tag}</Badge>
        </BlogLink>
      ))}
    </div>
  </PostContainer>
);

export { BlogPost };
