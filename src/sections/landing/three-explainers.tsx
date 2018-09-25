import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import ClaimOnPhone from 'src/components/Animations/ClaimOnPhone';
import InsuranceInMinutes from 'src/components/Animations/InsuranceInMinutes';
import PaidRightAway from 'src/components/Animations/PaidRightAway';

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
      <div className="u-backgroundSecondaryGrey">
        <div className="Container u-spacePV2">
          <h2 className="u-textCenter u-fontSize5 u-md-fontSize2 u-lg-fontSize2 u-fontFamilyHeader">
            {this.props.heading}
          </h2>
          <VisibilitySensor
            partialVisibility
            onChange={this.threeExplainersVisbilityChanged}
          >
            <div className="u-flex u-flexCol u-lg-flexRow u-textCenter">
              <div className="u-lg-size1of3">
                <InsuranceInMinutes
                  ref={(anim: any) => {
                    this.insuranceInMinutesAnim = anim;
                  }}
                  sideLength={THREE_EXPLAINER_WIDTH_HEIGHT}
                />
                <h4 className="u-fontSize8 u-md-fontSize7 u-lg-fontSize7 u-spaceMB12 u-lg-spaceMH10">
                  {this.props.three_explainers.insurance_in_minutes.title}
                </h4>
                <p className="u-lg-spaceMH8 u-fontSize9 u-md-fontSize85 u-lg-fontSize85">
                  {this.props.three_explainers.insurance_in_minutes.paragraph}
                </p>
              </div>
              <div className="u-lg-size1of3">
                <ClaimOnPhone
                  ref={(anim: any) => {
                    this.claimOnPhoneAnimation = anim;
                  }}
                  sideLength={THREE_EXPLAINER_WIDTH_HEIGHT}
                />
                <h4 className="u-fontSize8 u-md-fontSize7 u-lg-fontSize7 u-spaceMB12">
                  {this.props.three_explainers.claim_on_phone.title}
                </h4>
                <p className="u-lg-spaceMH8 u-fontSize9 u-md-fontSize85 u-lg-fontSize85">
                  {this.props.three_explainers.claim_on_phone.paragraph}
                </p>
              </div>
              <div className="u-lg-size1of3">
                <PaidRightAway
                  ref={(anim: any) => {
                    this.paidRightAwayAnimation = anim;
                  }}
                  sideLength={THREE_EXPLAINER_WIDTH_HEIGHT}
                />
                <h4 className="u-fontSize8 u-md-fontSize7 u-lg-fontSize7 u-spaceMB12">
                  {this.props.three_explainers.paid_right_away.title}
                </h4>
                <p className="u-lg-spaceMH8 u-fontSize9 u-md-fontSize85 u-lg-fontSize85">
                  {this.props.three_explainers.paid_right_away.paragraph}
                </p>
              </div>
            </div>
          </VisibilitySensor>
        </div>
      </div>
    );
  }
}

export { ThreeExplainers };
