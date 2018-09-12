import styled from 'react-emotion';
import Link from 'gatsby-link';
import { colors } from '@hedviginsurance/brand';

const BlogContainer = styled('div')({
  width: '100%',
  maxWidth: 787,
  margin: '80px auto',
  paddingLeft: 20,
  paddingRight: 20,
});

interface PostContainerProps {
  isFirst?: boolean;
  isLast?: boolean;
}
const PostContainer = styled('article')((props: PostContainerProps) => ({
  paddingTop: props.isFirst ? 0 : 55,
  paddingBottom: props.isLast ? 0 : 55,
  borderBottom: props.isLast ? 'none' : `1px solid ${colors.LIGHT_GRAY}`,
  width: '100%',
}));

const PostHeader = styled('h2')({
  fontSize: 48,
  display: 'block',
  marginBottom: 18,
  lineHeight: 1,
});

const BlogLink = styled(Link)({
  textDecoration: 'none',
});

const ReadMoreLink = styled(Link)({
  '&&': {
    color: colors.PURPLE,
    textDecoration: 'none',
  },
});

export {
  BlogContainer,
  PostContainerProps,
  PostContainer,
  PostHeader,
  BlogLink,
  ReadMoreLink,
};
