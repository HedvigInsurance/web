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

const TitleSection = styled('div')({
  height: '232px',
  textAlign: 'center',
  display: 'inline'
});

const Container = styled('div')({
  display: 'flex',
  alignItems: 'baseline',
  marginLeft: '15%',
  marginRight: '15%',
  '@media (max-width: 600px)': {
    marginLeft: '10%',
    marginRight: '10%',
  },
});

const CompanyNamesContainer = styled('div')({
  marginRight: '10px',
});

const BarsContainer = styled('div')({
  width: '100%',
  '@media (max-width: 600px)': {
    width: '70%',
  },
});

const Bar = styled('div')((props: BarProps) => ({
  backgroundColor: props.color,
  height: 10,
  marginRight: '10px',
  display: 'inline-block',
  borderRadius: 10,
}));

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
      <div>
      <TitleSection>
          <h1 style={{height: '200px'}}>Redan försäkrad? Vi sköter bytet</h1>
          <p style={{height: '50px'}}>Våra användare kommer ifrån</p>
      </TitleSection>

      <Container
        innerRef={(ref) => {
          this.ref = ref;
        }}
        style={{ height: 250 }}
      >

        <CompanyNamesContainer>
          <div>Länsförsäkringar</div>
          <div>If</div>
          <div>TryggHansa</div>
          <div>Folksam</div>
          <div>Övriga</div>
        </CompanyNamesContainer>
        <BarsContainer>
          <div>
            <Bar
              color={colors.BLACK_PURPLE} style={{ width: `${percent * 29*2.5}%` }}/>
            <div style={{textAlign: 'right', display: 'inline-block' }}>29%</div>
          </div>
          <div>
            <Bar color={colors.PURPLE} style={{ width: `${percent * 25*2.5}%` }} />
            <div style={{textAlign: 'right', display: 'inline-block' }}>25%</div>
          </div>
          <div>
            <Bar color={colors.PINK} style={{ width: `${percent * 18*2.5}%` }} />
            <div style={{textAlign: 'right', display: 'inline-block' }}>18%</div>
          </div>
          <div>
            <Bar color={colors.GREEN} style={{ width: `${percent * 11*2.5}%` }} />
            <div style={{textAlign: 'right', display: 'inline-block' }}>11%</div>
          </div>
          <div>
            <Bar color={'#9B9BAA'} style={{ width: `${percent * 17*2.5}%` }} />
            <div style={{textAlign: 'right', display: 'inline-block' }}>17%</div>
          </div>
        </BarsContainer>
      </Container>
      </div>
    );
  }
}

export { SwitcherSources };
