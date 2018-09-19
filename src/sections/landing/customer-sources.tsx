import * as React from 'react';
import Measure from 'react-measure';
import styled from 'react-emotion';
import Animated from 'animated';
import { colors } from '@hedviginsurance/brand';
import { Container } from 'constate';
import { Mount, Unmount } from 'react-lifecycle-components';

interface CustomerSourcesProps {
  headline: string;
  paragraph: string;
}

interface BarProps {
  color: string;
}

const AnimatedDiv = Animated.createAnimatedComponent('div');

const Table = styled('div')({
  position: 'relative',
  display: 'table',
  width: '100%',
});

const BackgroundImage = styled('img')({
  position: 'absolute',
  width: '82%',
  left: '5%',
  top: '-7%',
  zIndex: -1,
  '@media (max-width: 600px)': {
    left: '10%',
    height: '75%',
    width: 'auto',
  },
});

const TableRow = styled('div')({
  display: 'table-row',
  '@media (max-width: 600px)': {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
});

const TableCellName = styled('div')({
  display: 'table-cell',
  paddingRight: 25,
  paddingBottom: 30,
});
const TableCellBar = styled(AnimatedDiv)({
  display: 'table-cell',
  width: '100%',
  position: 'relative',
});

const HeadlineSection = styled('div')({
  textAlign: 'center',
  display: 'inline',
});

const Headline = styled('h2')({
  paddingBottom: 30,
});

const Paragraph = styled('p')({
  fontSize: 20,
  lineHeight: '23px',
  paddingBottom: 60,
});

const PercentageText = styled(AnimatedDiv)({
  fontSize: 18,
  color: colors.DARK_GRAY,
  textAlign: 'right',
  display: 'inline-block',
  position: 'absolute',
  left: 0,
  top: -8,
  willChange: 'transform',
  '@media (max-width: 600px)': {
    fontSize: 16,
    top: 17,
  },
});

const Section = styled('div')({
  paddingTop: 120,
  '@media (max-width: 600px)': {
    overflow: 'hidden',
    paddingTop: 60,
  },
});

const CompanyName = styled('div')({
  fontSize: 18,
  fontWeight: 'bold',
  lineHeight: 1,
  '@media (max-width: 600px)': {
    fontSize: 16,
  },
});

const BarsContainer = styled('div')({
  width: '100%',
});

const Bar = styled(AnimatedDiv)((props: BarProps) => ({
  backgroundColor: props.color,
  height: 12,
  display: 'inline-block',
  borderRadius: 10,
  transformOrigin: 'top left',
  willChange: 'transform',
  position: 'absolute',
  left: 0,
  top: 0,
  '@media (max-width: 600px)': {
    top: 25,
  },
}));

const COMPANIES = [
  {
    name: 'Länsförsäkringar',
    percent: 29,
    color: colors.BLACK_PURPLE,
    offset: 200,
  },
  {
    name: 'If',
    percent: 25,
    color: colors.PURPLE,
    offset: 350,
  },
  {
    name: 'TryggHansa',
    percent: 18,
    color: colors.PINK,
    offset: 400,
  },
  {
    name: 'Folksam',
    percent: 11,
    color: colors.GREEN,
    offset: 450,
  },
  {
    name: 'Övrigt',
    percent: 17,
    color: colors.DARK_GRAY,
    offset: 475,
  },
];

const MAX_WEIGHT = 29;

interface GetStyle {
  animatedValue: Animated.Value;
  offsetTop: number;
  offset: number;
  percent: number;
}

const getWindowInnerHeight = () => {
  if (typeof window !== 'undefined') {
    return window.innerHeight;
  }

  return 0;
};

const getSectionPosition = ({ offsetTop }: { offsetTop: number }) =>
  offsetTop - getWindowInnerHeight();

const getTableCellStyle = ({
  animatedValue,
  offsetTop = 0,
  offset,
}: GetStyle) => {
  const sectionPosition = getSectionPosition({ offsetTop });

  const opacity = animatedValue.interpolate({
    inputRange: [sectionPosition + offset, sectionPosition + offset * 2],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return {
    opacity,
  };
};

const getBarStyle = ({
  animatedValue,
  offsetTop = 0,
  offset,
  percent,
}: GetStyle) => {
  const sectionPosition = getSectionPosition({ offsetTop });

  const transform = animatedValue.interpolate({
    inputRange: [sectionPosition + offset, sectionPosition + offset * 2],
    outputRange: ['scaleX(0)', `scaleX(1)`],
    extrapolate: 'clamp',
  });

  return {
    width: `calc(${(100 / MAX_WEIGHT) * percent}% - 50px)`,
    transform,
  };
};

const getPercentageTextStyle = ({
  animatedValue,
  offsetTop = 0,
  offset,
  percent,
}: GetStyle) => {
  const sectionPosition = getSectionPosition({ offsetTop });

  const transform = animatedValue.interpolate({
    inputRange: [sectionPosition + offset, sectionPosition + offset * 2],
    outputRange: [`translateX(-90%)`, `translateX(0%)`],
    extrapolate: 'clamp',
  });

  return {
    transform,
    width: `${(100 / MAX_WEIGHT) * percent}%`,
  };
};

interface State {
  animatedValue: Animated.Value;
  eventHandler: (...args: any[]) => void;
}

const getInitialState: () => State = () => {
  const animatedValue = new Animated.Value(0);

  return {
    animatedValue,
    eventHandler: Animated.event([
      { target: { scrollingElement: { scrollTop: animatedValue } } },
    ]),
  };
};

export const CustomerSources: React.SFC<CustomerSourcesProps> = ({
  headline,
  paragraph,
}) => (
  <Container<State> initialState={getInitialState()}>
    {({ animatedValue, eventHandler }) => (
      <Unmount on={() => window.removeEventListener('scroll', eventHandler)}>
        <Mount
          on={() =>
            window.addEventListener('scroll', eventHandler, {
              passive: true,
            })
          }
        >
          <Measure offset bounds>
            {({ measureRef, contentRect }) => (
              <Section className={'Container'}>
                <HeadlineSection>
                  <Headline className="u-md-fontSize2 u-lg-fontSize2">
                    {headline}
                  </Headline>
                  <Paragraph>{paragraph}</Paragraph>
                </HeadlineSection>
                <Table innerRef={measureRef}>
                  <BackgroundImage src={'/assets/backgrounds/mesh@2x.png'} />
                  <BarsContainer>
                    {COMPANIES.map((company, index) => (
                      <TableRow key={company.name}>
                        <TableCellName>
                          <CompanyName>{company.name}</CompanyName>
                        </TableCellName>
                        <TableCellBar
                          style={getTableCellStyle({
                            animatedValue: animatedValue,
                            offsetTop:
                              (contentRect.offset && contentRect.offset.top) ||
                              0,
                            offset: index * 35 + 100,
                            percent: company.percent,
                          })}
                        >
                          <Bar
                            color={company.color}
                            style={getBarStyle({
                              animatedValue: animatedValue,
                              offsetTop:
                                (contentRect.offset &&
                                  contentRect.offset.top) ||
                                0,
                              offset: index * 35 + 100,
                              percent: company.percent,
                            })}
                          />
                          <PercentageText
                            style={getPercentageTextStyle({
                              animatedValue: animatedValue,
                              offsetTop:
                                (contentRect.offset &&
                                  contentRect.offset.top) ||
                                0,
                              offset: index * 35 + 100,
                              percent: company.percent,
                            })}
                          >{`${company.percent}%`}</PercentageText>
                        </TableCellBar>
                      </TableRow>
                    ))}
                  </BarsContainer>
                </Table>
              </Section>
            )}
          </Measure>
        </Mount>
      </Unmount>
    )}
  </Container>
);
