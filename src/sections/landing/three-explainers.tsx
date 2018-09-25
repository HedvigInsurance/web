import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import ClaimOnPhone from 'src/components/Animations/ClaimOnPhone';
import InsuranceInMinutes from 'src/components/Animations/InsuranceInMinutes';
import PaidRightAway from 'src/components/Animations/PaidRightAway';
import styled from 'react-emotion';
import { colors, fonts } from '@hedviginsurance/brand';

interface Props {
  heading: string;
  three_explainers: {
    insurance_in_minutes: {
      title: string;
      paragraph: string;
    };
    claim_on_phone: {
      title: string;
      paragraph: string;
    };
    paid_right_away: {
      title: string;
      paragraph: string;
    };
  };
}

const THREE_EXPLAINER_WIDTH_HEIGHT: number = 210;

const BackgroundWrapper = styled('div')({
  backgroundColor: colors.OFF_WHITE,
});

const Container = styled('div')({
  paddingBottom: '125px',
  paddingTop: '125px',
});

const Header = styled('h2')({
  textAlign: 'center',
  fontSize: '36px',
  lineHeight: '50px',
  fontFamily: fonts.SORAY,
  '@media (min-width: 640px)': {
    fontSize: '60px',
    lineHeight: '66px',
  },
});

const Row = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  '@media (min-width: 960px)': {
    flexDirection: 'row',
  },
});

const Col = styled('div')({
  '@media (min-width: 960px)': {
    flexBasis: 'auto',
  },
});

const ColHeader = styled('h4')({
  fontSize: '20px',
  lineHeight: '29px',
  marginBottom: '10px',
  '@media (min-width: 640px)': {
    fontSize: '22px',
    lineHeight: '30px',
    marginLeft: '20px',
    marginRight: '20px',
  },
});

const ColParagraph = styled('div')({
  fontSize: '18px',
  lineHeight: '28px',
  '@media (min-width: 960px)': {
    marginLeft: '30px',
    marginRight: '30px',
  },
  '@media (min-width: 640px)': {
    fontSize: '18px',
    lineHeight: '30px',
  },
});

class ThreeExplainers extends React.Component<Props> {
  insuranceInMinutesAnim: any | null = null;
  claimOnPhoneAnimation: any | null = null;
  paidRightAwayAnimation: any | null = null;

  threeExplainersVisbilityChanged = (isVisible: boolean) => {
    if (!this.insuranceInMinutesAnim) {
      return;
    }
    if (isVisible) {
      this.insuranceInMinutesAnim.play();
      this.claimOnPhoneAnimation.play();
      this.paidRightAwayAnimation.play();
    } else {
      this.insuranceInMinutesAnim.stop();
      this.paidRightAwayAnimation.stop();
    }
  };

  /* Not used atm */
  getWidth = () => `calc(${(100 * 1) / 3}%)`;

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <BackgroundWrapper>
        <Container className="Container">
          <Header>{this.props.heading}</Header>
          <VisibilitySensor
            partialVisibility
            onChange={this.threeExplainersVisbilityChanged}
          >
            <Row>
              <Col>
                {/* style={{width: this.getWidth()}} - Does not make any difference */}
                <InsuranceInMinutes
                  ref={(anim: any) => {
                    this.insuranceInMinutesAnim = anim;
                  }}
                  sideLength={THREE_EXPLAINER_WIDTH_HEIGHT}
                />
                <ColHeader>
                  {this.props.three_explainers.insurance_in_minutes.title}
                </ColHeader>
                <ColParagraph>
                  {this.props.three_explainers.insurance_in_minutes.paragraph}
                </ColParagraph>
              </Col>

              <Col>
                {/* style={{width: this.getWidth()}} - Does not make any difference */}
                <ClaimOnPhone
                  ref={(anim: any) => {
                    this.claimOnPhoneAnimation = anim;
                  }}
                  sideLength={THREE_EXPLAINER_WIDTH_HEIGHT}
                />
                <ColHeader>
                  {this.props.three_explainers.claim_on_phone.title}
                </ColHeader>
                <ColParagraph>
                  {this.props.three_explainers.claim_on_phone.paragraph}
                </ColParagraph>
              </Col>

              <Col>
                {/* style={{width: this.getWidth()}} - Does not make any difference */}
                <PaidRightAway
                  ref={(anim: any) => {
                    this.paidRightAwayAnimation = anim;
                  }}
                  sideLength={THREE_EXPLAINER_WIDTH_HEIGHT}
                />
                <ColHeader>
                  {this.props.three_explainers.paid_right_away.title}
                </ColHeader>
                <ColParagraph>
                  {this.props.three_explainers.paid_right_away.paragraph}
                </ColParagraph>
              </Col>
            </Row>
          </VisibilitySensor>
        </Container>
      </BackgroundWrapper>
    );
  }
}

export { ThreeExplainers };
