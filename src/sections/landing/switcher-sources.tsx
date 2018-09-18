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
const TableCellBar = styled('div')({
  display: 'table-cell',
  width: '100%',
});

const TitleSection = styled('div')({
  textAlign: 'center',
  display: 'inline',
});

const Title = styled('h2')({
  paddingBottom: 30,
});

const SubTitle = styled('div')({
  fontSize: 20,
  lineHeight: '23px',
  paddingBottom: 60,
});

const PercentageText = styled('div')({
  fontSize: 18,
  color: colors.DARK_GRAY,
  textAlign: 'right',
  display: 'inline-block',
  '@media (max-width: 600px)': {
    fontSize: 16,
  },
});

const Container = styled('div')({
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

const Bar = styled('div')((props: BarProps) => ({
  backgroundColor: props.color,
  height: 12,
  display: 'inline-block',
  borderRadius: 10,
}));

const COMPANIES = [
  {
    name: 'Länsförsäkringar',
    percent: 29,
    color: colors.BLACK_PURPLE,
    offset: 100,
  },
  {
    name: 'If',
    percent: 25,
    color: colors.PURPLE,
    offset: 200,
  },
  {
    name: 'TryggHansa',
    percent: 18,
    color: colors.PINK,
    offset: 250,
  },
  {
    name: 'Folksam',
    percent: 11,
    color: colors.GREEN,
    offset: 250,
  },
  {
    name: 'Övrigt',
    percent: 17,
    color: colors.DARK_GRAY,
    offset: 275,
  },
];

const calcBarWidth = (scrollPercent: number, weight: number) =>
  `calc(${scrollPercent * ((100 / 29) * weight)}% - 60px)`;
const calculateViewPercentage = (positions: ViewPositions, offset: number) => {
  const numerator = positions.sectionPosition + offset - positions.scrollHeight;
  const denumerator = positions.scrollHeight / 4;
  const delta = (numerator / denumerator) * -1;
  return Math.min(1, Math.max(0, delta));
};
class SwitcherSources extends React.Component<{}, Point> {
  state = { x: 0, y: 0 };
  scroll: Point = { x: 0, y: 0 };
  tableRef: HTMLDivElement | null = null;
  rowRefs: {
    [key: string]: {
      cellRef: HTMLDivElement | null;
      barRef: HTMLDivElement | null;
      percent: number;
      offset: number;
    };
  } = {};

  handleScroll: EventListener = () => {
    this.scroll = { x: window.scrollX, y: window.scrollY };

    Object.keys(this.rowRefs).forEach((key) => {
      const rowRef = this.rowRefs[key];
      if (rowRef.barRef === null || rowRef.cellRef === null) {
        return;
      }

      const percent = calculateViewPercentage(
        {
          scrollHeight: window.innerHeight,
          scrollPosition: this.scroll.y,
          sectionPosition:
            (this.tableRef && this.tableRef.getBoundingClientRect().top) || 0,
        },
        rowRef.offset,
      );
      rowRef.barRef.style.width = calcBarWidth(percent, rowRef.percent);
      rowRef.barRef.style.marginRight = `${percent * 16}px`;
      rowRef.cellRef.style.opacity = '' + percent;
    });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <Container className={'Container'}>
        <TitleSection>
          <Title className="u-md-fontSize2 u-lg-fontSize2">
            Redan försäkrad? Vi sköter bytet
          </Title>
          <SubTitle>Våra användare kommer ifrån</SubTitle>
        </TitleSection>

        <Table
          innerRef={(ref) => {
            this.tableRef = ref;
          }}
        >
          <BackgroundImage src={'/assets/backgrounds/mesh@2x.png'} />
          <BarsContainer>
            {COMPANIES.map((company) => (
              <TableRow key={company.name}>
                <TableCellName>
                  <CompanyName>{company.name}</CompanyName>
                </TableCellName>
                <TableCellBar
                  innerRef={(cellRef) => {
                    this.rowRefs[company.name] = {
                      ...(this.rowRefs[company.name] || {}),
                      cellRef,
                      percent: company.percent,
                      offset: company.offset,
                    };
                  }}
                >
                  <Bar
                    color={company.color}
                    innerRef={(barRef) => {
                      this.rowRefs[company.name] = {
                        ...(this.rowRefs[company.name] || {}),
                        barRef,
                      };
                    }}
                  />
                  <PercentageText>{`${company.percent}%`}</PercentageText>
                </TableCellBar>
              </TableRow>
            ))}
          </BarsContainer>
        </Table>
      </Container>
    );
  }
}

export { SwitcherSources };
