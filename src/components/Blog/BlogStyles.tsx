import styled from 'react-emotion';
import Link from 'gatsby-link';

const BlogContainer = styled('div')({
  width: '100%',
  maxWidth: 787,
  margin: '80px auto',
  paddingLeft: 20,
  paddingRight: 20,
});

const PostContainer = styled('article')({
  width: '100%',
});

const PostHeader = styled('h2')({
  fontSize: 48,
  display: 'block',
  marginBottom: 18,
  lineHeight: 1,
});

const BlogLink = styled(Link)({
  textDecoration: 'none',
});

export { BlogContainer, PostContainer, PostHeader, BlogLink };
