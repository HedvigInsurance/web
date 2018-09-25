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

const container = styled('div')({});

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

{
  /*style={{width: this.getWidth()}}
getWidth = () =>
  `calc(${(100 * 1 / 3)}%)`;
*/
}
const Col = styled('div')({
  '@media (max-width: 960px)': {
    width: '100%',
  },
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

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <BackgroundWrapper>
        <div className="Container u-spacePV2">
          <Header>{this.props.heading}</Header>
          <VisibilitySensor
            partialVisibility
            onChange={this.threeExplainersVisbilityChanged}
          >
            <Row>
              <div className="u-lg-size1of3">
                <InsuranceInMinutes
                  ref={(anim: any) => {
                    this.insuranceInMinutesAnim = anim;
                  }}
                  sideLength={THREE_EXPLAINER_WIDTH_HEIGHT}
                />
                <ColHeader>
                  {this.props.three_explainers.insurance_in_minutes.title}
                </ColHeader>
                <ColParagraph className=" u-lg-fontSize85">
                  {this.props.three_explainers.insurance_in_minutes.paragraph}
                </ColParagraph>
              </div>

              <div className="u-lg-size1of3">
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
              </div>

              <div className="u-lg-size1of3">
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
              </div>
            </Row>
          </VisibilitySensor>
        </div>
      </BackgroundWrapper>
    );
  }
}

export { ThreeExplainers };
