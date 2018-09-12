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
import {
  ReadMoreLink,
  PostContainerProps,
} from 'src/components/Blog/BlogStyles';

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

const Tags = styled('div')({
  marginTop: 20,
  marginBottom: 20,
});

const ReadMoreContainer = styled('div')({
  marginTop: 35,
});

const BlogPost: React.SFC<BlogPostProps & PostContainerProps> = ({
  title,
  excerpt,
  topImage,
  date,
  author,
  slug,
  tags,
  isFirst,
  isLast,
}) => (
  <PostContainer isFirst={isFirst} isLast={isLast}>
    <BlogPostAuthor author={author} date={date} />
    <TopImage src={topImage} alt="" />
    <Spacing height={22} />
    <BlogLink to={slug}>
      <PostHeader>{title}</PostHeader>
    </BlogLink>
    <div>
      <Markdown source={excerpt} />
    </div>
    <Tags>
      {tags.map((tag) => (
        <BlogLink key={tag} to={`/blog/tags/${kebabCase(tag)}`}>
          <Badge>{tag}</Badge>
        </BlogLink>
      ))}
    </Tags>
    <ReadMoreContainer>
      <ReadMoreLink to={slug}>Läs inlägget</ReadMoreLink>
    </ReadMoreContainer>
  </PostContainer>
);

export { BlogPost };
