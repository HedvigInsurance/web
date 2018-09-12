import * as React from 'react';
import styled from 'react-emotion';
import { colors, fonts } from '@hedviginsurance/brand';
import { Markdown } from 'src/cms/utils/markdown';

const TABLET_UP = '@media (min-width: 797px)';

const HeroWrapper = styled('div')((props: { image: string }) => ({
  padding: '100px 0',
  [TABLET_UP]: {
    backgroundImage: [
      'linear-gradient(90deg, rgba(0, 0, 0, 0.1) 36.82%, rgba(0, 0, 0, 0.3) 61.71%)',
      'radial-gradient(circle, rgba(0, 0, 0, 0) 13%, rgba(0, 0, 0, .3) 100%)',
      `url(${props.image})`,
    ].join(),
  },
  backgroundImage: [
    'linear-gradient(187.73deg, rgba(0, 0, 0, 0.0001) 9.73%, rgba(0, 0, 0, 0.5) 51.23%)',
    `url(${props.image})`,
  ].join(),
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
}));
const HeroTextWrapper = styled('div')({
  [TABLET_UP]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  width: '100%',
  padding: '0 24px',
  maxWidth: 1200,
  margin: 'auto',
  color: colors.WHITE,
});
const Headline = styled('h1')({
  [TABLET_UP]: {
    marginBottom: 20,
    fontSize: 72,
  },
  fontSize: 60,
  lineHeight: 1,
  fontFamily: fonts.SORAY,
});
const TextContent = styled(Markdown)({
  maxWidth: 600,
  flex: 0,
  flexGrow: 0,
});

interface OverviewHeroProps {
  title: string;
  text: string;
  image: string;
}

const OverviewHero: React.SFC<OverviewHeroProps> = ({ title, text, image }) => (
  <HeroWrapper image={image}>
    <HeroTextWrapper>
      <Headline>{title}</Headline>
      <TextContent source={text} />
    </HeroTextWrapper>
  </HeroWrapper>
);

export { OverviewHeroProps, OverviewHero };
