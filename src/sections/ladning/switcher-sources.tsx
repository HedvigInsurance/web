import * as React from 'react';
import styled from 'react-emotion';
import { colors } from '@hedviginsurance/brand';

interface Point {
  x: number;
  y: number;
}

interface ViewPositions {
  scrollHeight: number;
  scrollPosition: number;
  sectionPosition: number;
}

interface BarProps {
  color: string;
}

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
  zIndex: '-1',
  '@media (max-width: 600px)':{
    left: '10%',
    height: '75%',
    width: 'auto',
  },

});

const TableRow = styled('div')({
  display: 'table-row',
  '@media (max-width: 600px)':{
    display: 'flex',
    flexDirection: 'column-reverse',
  },
});

const TableCell = styled('div')({
  display: 'table-cell',
  paddingRight: '10px',
  paddingBottom: 30,
});
const TableCellBar = styled('div')({
  display: 'table-cell',
  width: '100%',
});

const TitleSection = styled('div')({
  textAlign: 'center',
  display: 'inline',
});

const Title = styled('div')({
  fontSize: 60,
  lineHeight: '66px',
  paddingBottom: 30
});

const SubTitle = styled('div')({
  fontSize: '20px',
  lineHeight: '23px',
  paddingBottom: 60
});

const PercentageText = styled('div')({
  fontSize: 18,
  color: colors.DARK_GRAY,
  textAlign: 'right',
  display: 'inline-block',
  '@media (max-width: 600px)':{
    fontSize: 16
  },
});

const Container = styled('div')({
  '@media (max-width: 600px)':{
    overflow: 'hidden'
  },
});

const CompanyName = styled('div')({
  fontSize: 18,
  fontWeight: 'bold',
  lineHeight: 1,
  '@media (max-width: 600px)': {
    fontSize: 16,
  }
});

const BarsContainer = styled('div')({
  width: '100%',

});

const Bar = styled('div')((props: BarProps) => ({
  backgroundColor: props.color,
  height: 10,
  marginRight: '10px',
  display: 'inline-block',
  borderRadius: 10,
}));

const calcBarWidth = (scrollPercent: number, weight: number) => `calc(${scrollPercent * ((100/29)*weight)}% - 60px)`;

const calculateViewPercentage = (positions: ViewPositions) => {
  const OFFSET = 200;
  const numerator = positions.sectionPosition + OFFSET - positions.scrollHeight;
  const denumerator = positions.scrollHeight / 4;
  const delta = (numerator / denumerator) * -1;
  return Math.min(1, Math.max(0, delta));
};
class SwitcherSources extends React.Component<{}, Point> {
  state = { x: 0, y: 0 };
  scroll: Point = { x: 0, y: 0 };
  ref: HTMLDivElement | null = null;

  handleScroll: EventListener = () => {
    this.scroll = { x: window.scrollX, y: window.scrollY };
    this.forceUpdate();
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const percent = calculateViewPercentage({
      scrollHeight: window.innerHeight,
      scrollPosition: window.scrollY,
      sectionPosition: (this.ref && this.ref.getBoundingClientRect().top) || 0,
    });
    return (
      <Container className={'Container'}>
        <TitleSection>
          <Title>Redan försäkrad? Vi sköter bytet</Title>
          <SubTitle>Våra användare kommer ifrån</SubTitle>
        </TitleSection>

        <Table
          innerRef={(ref) => {
            this.ref = ref;
          }}
        >
          <BackgroundImage src={'/assets/backgrounds/mesh@2x.png'}/>
          <BarsContainer>
            <TableRow>
              <TableCell>
                <CompanyName>Länsförsäkringar</CompanyName>
              </TableCell>
              <TableCellBar>
                <Bar
                  color={colors.BLACK_PURPLE}
                  style={{ width: calcBarWidth(percent, 29)}}
                />
                <PercentageText>
                  29%
                </PercentageText>
              </TableCellBar>
            </TableRow>
            <TableRow>
              <TableCell>
                <CompanyName>If</CompanyName>
              </TableCell>
              <TableCellBar>
                <Bar
                  color={colors.PURPLE}
                  style={{ width:calcBarWidth(percent, 25)}}
                />
                <PercentageText >
                  25%
                </PercentageText>
              </TableCellBar>
            </TableRow>
            <TableRow>
              <TableCell>
                <CompanyName>TryggHansa</CompanyName>
              </TableCell>
              <TableCellBar>
                <Bar
                  color={colors.PINK}
                  style={{ width: calcBarWidth(percent, 18)}}
                />
                <PercentageText>
                  18%
                </PercentageText>
              </TableCellBar>
            </TableRow>
            <TableRow>

            <TableCell>
              <CompanyName>Folksam</CompanyName>
            </TableCell>
            <TableCellBar>
              <Bar
                color={colors.GREEN}
                style={{ width: calcBarWidth(percent, 11) }}
              />
              <PercentageText>
                11%
              </PercentageText>
            </TableCellBar>
            </TableRow>
            <TableRow>
              <TableCell>
                <CompanyName>Övriga</CompanyName>
              </TableCell>
              <TableCellBar>
                <Bar
                  color={'#9B9BAA'}
                  style={{ width: calcBarWidth(percent, 17)}}
                />
                <PercentageText>
                  17%
                </PercentageText>
              </TableCellBar>
            </TableRow>
          </BarsContainer>
        </Table>
      </Container>
    );
  }
}

export { SwitcherSources };
