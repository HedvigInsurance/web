import { colors } from '@hedviginsurance/brand'
import Link from 'gatsby-link'
import styled from 'react-emotion'

const TABLET_UP = '@media (min-width: 797px)'

const BlogContainer = styled('div')((props: { verticalMargin?: boolean }) => ({
  width: '100%',
  maxWidth: 787,
  margin: props.verticalMargin ? '48px auto' : 'auto',
  paddingLeft: 24,
  paddingRight: 24,

  [TABLET_UP]: {
    margin: props.verticalMargin ? '80px auto' : 'auto',
  },
}))

interface PostContainerProps {
  isFirst?: boolean
  isLast?: boolean
}
const PostContainer = styled('article')((props: PostContainerProps) => ({
  paddingTop: props.isFirst ? 0 : 55,
  paddingBottom: props.isLast ? 0 : 55,
  borderBottom: props.isLast ? 'none' : `1px solid ${colors.LIGHT_GRAY}`,
  width: '100%',
}))

const postHeaderFontSizes = {
  sm: {
    fontSize: 40,
  },
  lg: {
    [TABLET_UP]: {
      fontSize: 60,
    },
    fontSize: 40,
  },
}
interface PostHeaderProps {
  size?: keyof typeof postHeaderFontSizes
}

const PostHeader = styled('h2')((props: PostHeaderProps) => ({
  ...postHeaderFontSizes[props.size || 'sm'],
  display: 'block',
  marginBottom: 10,
  lineHeight: 1.2,
}))

const BlogLink = styled(Link)({
  textDecoration: 'none',
})

const ReadMoreLink = styled(Link)({
  '&&': {
    color: colors.PURPLE,
    textDecoration: 'none',
  },
})

export {
  BlogContainer,
  PostContainerProps,
  PostContainer,
  PostHeader,
  BlogLink,
  ReadMoreLink,
}
