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

const Container = styled('div')({
  display: 'flex',
});

const CompanyNamesContainer = styled('div')({});

const BarsContainer = styled('div')({
  width: '100%',
});

const Bar = styled('div')((props: BarProps) => ({
  backgroundColor: props.color,
  height: 10,
  display: 'inline-block',
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
      <Container
        innerRef={(ref) => {
          this.ref = ref;
        }}
        style={{ height: 500 }}
      >
        <CompanyNamesContainer>
          <div>Länsförsäkringar</div>
          <div>If</div>
          <div>TryggHansa</div>
          <div>Folksam</div>
        </CompanyNamesContainer>
        <BarsContainer>
          <div>
            <Bar
              color={colors.BLACK_PURPLE}
              style={{ width: `${percent * 100}%` }}
            />
            <div>29%</div>
          </div>
          <div>
            <Bar color={colors.PURPLE} style={{ width: `${percent * 100}%` }} />
            <div>25%</div>
          </div>
          <div>
            <Bar color={colors.PINK} style={{ width: `${percent * 100}%` }} />
            <div>18%</div>
          </div>
          <div>
            <Bar color={colors.GREEN} style={{ width: `${percent * 100}%` }} />
            <div>11%</div>
          </div>
        </BarsContainer>
      </Container>
    );
  }
}

export { SwitcherSources };
