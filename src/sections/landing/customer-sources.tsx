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
  '@media (max-width: 600px)': {
    height: '20px',
  },
});

const BarContainer = styled('div')({
  overflow: 'hidden',
  height: 12,
  borderRadius: 10,
  width: '100%',
  position: 'relative',
  '-webkit-mask-image': '-webkit-radial-gradient(white, black)',
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
  left: 50,
  top: -6,
  willChange: 'transform',
  '@media (max-width: 600px)': {
    fontSize: 16,
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
}));

const COMPANIES = [
  {
    name: 'Länsförsäkringar',
    percent: 29,
    color: colors.BLACK_PURPLE,
  },
  {
    name: 'If',
    percent: 25,
    color: colors.PURPLE,
  },
  {
    name: 'TryggHansa',
    percent: 18,
    color: colors.PINK,
  },
  {
    name: 'Folksam',
    percent: 11,
    color: colors.GREEN,
  },
  {
    name: 'Övrigt',
    percent: 17,
    color: colors.DARK_GRAY,
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

const getBarWidth = ({ percent }: { percent: number }) =>
  `calc(${(100 / MAX_WEIGHT) * percent}% - 50px)`;

const getInputRange = ({
  offsetTop,
  offset,
}: {
  offsetTop: number;
  offset: number;
}) => {
  const sectionPosition = getSectionPosition({ offsetTop });

  return [sectionPosition + offset, sectionPosition + offset * 2];
};

const getTableCellStyle = ({
  animatedValue,
  offsetTop = 0,
  offset,
}: GetStyle) => {
  const opacity = animatedValue.interpolate({
    inputRange: getInputRange({ offsetTop, offset }),
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
  const transform = animatedValue.interpolate({
    inputRange: getInputRange({ offsetTop, offset }),
    outputRange: ['translateX(-100%)', `translateX(0%)`],
    extrapolate: 'clamp',
  });

  return {
    width: getBarWidth({ percent }),
    transform,
  };
};

const getPercentageTextStyle = ({
  animatedValue,
  offsetTop = 0,
  offset,
  percent,
}: GetStyle) => {
  const transform = animatedValue.interpolate({
    inputRange: getInputRange({ offsetTop, offset }),
    outputRange: [`translateX(-100%)`, `translateX(0%)`],
    extrapolate: 'clamp',
  });

  return {
    transform,
    width: getBarWidth({ percent }),
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
                          <BarContainer>
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
                          </BarContainer>
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
