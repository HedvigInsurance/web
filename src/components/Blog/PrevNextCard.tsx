import * as React from 'react'

import { colors } from '@hedviginsurance/brand'
import styled from 'react-emotion'
import { Markdown } from 'src/cms/utils/markdown'
import { BlogLink } from 'src/components/Blog/BlogStyles'
import { Card, CardBody, CardHeader } from 'src/components/Card'
import { Spacing } from 'src/components/Spacing'
import { truncate } from 'src/utils/truncate'

interface Props {
  phoneCardDirection: string
  background: string
  post?: {
    node: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
        topImage: string
        excerpt: string
      }
    }
  }
}

const PHONE_UP = '@media (min-width: 480px)'

const CardLink = styled(BlogLink)(({ background }: { background: string }) => ({
  background,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: 18,
  width: '100%',
  [PHONE_UP]: {
    width: '50%',
    background: 'transparent',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: 0,
    '&:first-child': {
      paddingRight: 12,
    },
    '&:last-child': {
      paddingLeft: 12,
    },
  },
}))

const CustomCard = styled(Card)({
  maxWidth: 350,
  display: 'none',
  justifyContent: 'space-between',
  [PHONE_UP]: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
})

const CardDirection = styled('div')({
  [PHONE_UP]: {
    paddingBottom: 20,
  },
  fontSize: 15,
})

const CardImage = styled('img')({
  maxWidth: '100%',
})

const ImagePlaceholder = styled('div')({
  width: '100%',
  paddingTop: '60%',
  background: '#f3f4f7',
})

const CardTitle = styled('h3')({
  fontWeight: 'bold',
})

const ReadMoreLink = styled('span')({
  color: colors.PURPLE,
})

const PhonelessSpacing = styled(Spacing)({
  display: 'none',
  [PHONE_UP]: {
    display: 'block',
  },
})

const PrevNextCard: React.SFC<Props> = ({
  post,
  phoneCardDirection,
  background,
}) =>
  post ? (
    <CardLink to={post.node.fields.slug} background={background}>
      <CardDirection>{phoneCardDirection}</CardDirection>
      <CustomCard>
        <div>
          {post.node.frontmatter.topImage ? (
            <CardImage src={post.node.frontmatter.topImage} />
          ) : (
            <ImagePlaceholder />
          )}

          <CardHeader>
            <CardTitle>{truncate(25)(post.node.frontmatter.title)}</CardTitle>
            <Spacing height={8} />
            <Markdown source={post.node.frontmatter.excerpt} />
          </CardHeader>
        </div>
        <CardBody>
          <ReadMoreLink>Läs inlägget</ReadMoreLink>
        </CardBody>
      </CustomCard>
    </CardLink>
  ) : (
    <PhonelessSpacing width="50%" />
  )

export { PrevNextCard }
