import * as React from 'react'
import Link from 'gatsby-link'
import remark from 'remark'
import reactRenderer from 'remark-react'

import { Card, CardHeader, CardBody } from 'src/components/Card';
import styled from 'react-emotion';
import { Spacing } from 'src/components/Spacing';
import { BlogLink } from 'src/components/Blog/BlogStyles';

interface Props {
  post?: {
    node: {
      fields: {
        slug: string
      },
      frontmatter: {
        title: string,
        topImage: string,
        excerpt: string
      }
    }
  }
}

const CustomCard = styled(Card)({
  width: 350,
  height: 300,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around'
})

const CardImage = styled('img')({
  maxWidth: '100%'
})

const CardTitle = styled('h3')({
  fontWeight: 'bold'
})

const PrevNextCard: React.SFC<Props> = ({ post }) => (
  post ? (
    <BlogLink to={post.node.fields.slug}>
      <CustomCard>
        <CardHeader>
          <CardImage src={post.node.frontmatter.topImage}></CardImage>
        </CardHeader>
        <CardBody>
          <CardTitle>{post.node.frontmatter.title}</CardTitle>
          <Spacing height={8} />
          <div>
            {remark().use(reactRenderer).processSync(post.node.frontmatter.excerpt).contents}
          </div>
          <Spacing height={8} />
          <p>Läs inlägget</p>
        </CardBody>
      </CustomCard>
    </BlogLink>
  ) : (
      <Spacing width={1000} />
    )
)

export { PrevNextCard }
