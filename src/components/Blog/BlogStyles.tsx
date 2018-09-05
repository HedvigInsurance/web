import styled from 'react-emotion'
import Link from 'gatsby-link'

const BlogContainer = styled('div')({
  marginTop: 80,
  marginBottom: 80,
});

const PostContainer = styled('article')({
  maxWidth: 800,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 20,
  paddingRight: 20
});

const PostHeader = styled('h2')({
  fontSize: 48,
  display: 'block',
  marginBottom: 18,
  lineHeight: 1
});

const BlogLink = styled(Link)({
  textDecoration: 'none',
});

export { BlogContainer, PostContainer, PostHeader, BlogLink }
