import * as React from 'react';

import { Card, CardHeader, CardBody } from 'src/components/Card';
import styled from 'react-emotion';
import { Spacing } from 'src/components/Spacing';
import { BlogLink } from 'src/components/Blog/BlogStyles';
import { Markdown } from 'src/cms/utils/markdown';
import { colors } from '@hedviginsurance/brand';

interface Props {
  phoneCardDirection: string;
  background: string;
  post?: {
    node: {
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
        topImage: string;
        excerpt: string;
      };
    };
  };
}

const LINE_HEIGHT = 28;
const PHONE_UP = '@media (min-width: 480px)';

const CardLink = styled(BlogLink)(({ background }: { background: string }) => ({
  background,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: 18,
  [PHONE_UP]: {
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
}));

const CustomCard = styled(Card)({
  maxWidth: 350,
  display: 'none',
  justifyContent: 'space-between',
  [PHONE_UP]: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
});

const PhoneCard = styled('div')({
  [PHONE_UP]: {
    display: 'none',
  },
  display: 'flex',
  fontSize: 15,
});

const CardImage = styled('img')({
  maxWidth: '100%',
});

const CardTitle = styled('h3')({
  fontWeight: 'bold',
  maxHeight: LINE_HEIGHT,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});

const ReadMoreLink = styled('span')({
  color: colors.PURPLE,
});

const PhonelessSpacing = styled(Spacing)({
  display: 'none',
  [PHONE_UP]: {
    display: 'block',
  },
});

const PrevNextCard: React.SFC<Props> = ({
  post,
  phoneCardDirection,
  background,
}) =>
  post ? (
    <CardLink to={post.node.fields.slug} background={background}>
      <CustomCard>
        <div>
          <CardImage src={post.node.frontmatter.topImage} />

          <CardHeader>
            <CardTitle>{post.node.frontmatter.title}</CardTitle>
            <Spacing height={8} />
            <Markdown source={post.node.frontmatter.excerpt} />
          </CardHeader>
        </div>
        <CardBody>
          <ReadMoreLink>Läs inlägget</ReadMoreLink>
        </CardBody>
      </CustomCard>
      <PhoneCard>{phoneCardDirection}</PhoneCard>
    </CardLink>
  ) : (
    <PhonelessSpacing width={1000} />
  );

export { PrevNextCard };
