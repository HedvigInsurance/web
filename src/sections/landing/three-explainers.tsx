import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

interface Props {}

class ThreeExplainers extends React.Component {
  render() {
    return (
      <div className="u-backgroundSecondaryGrey">
        <div className="Container u-spacePV2">
          <h2 className="u-textCenter u-fontSize5 u-md-fontSize2 u-lg-fontSize2 u-fontFamilyHeader">
            {threeExplainers.heading}
          </h2>
          <VisibilitySensor
            partialVisibility
            onChange={this.threeExplainersVisbilityChanged}
          >
            <div className="u-flex u-flexCol u-lg-flexRow u-textCenter">
              <div className="u-lg-size1of3">
                <InsuranceInMinutes
                  ref={(anim) => {
                    this.insuranceInMinutesAnim = anim;
                  }}
                  sideLength={THREE_EXPLAINER_WIDTH_HEIGHT}
                />
                <h4 className="u-fontSize8 u-md-fontSize7 u-lg-fontSize7 u-spaceMB12 u-lg-spaceMH10">
                  {threeExplainers.three_explainers.insurance_in_minutes.title}
                </h4>
                <p className="u-lg-spaceMH8 u-fontSize9 u-md-fontSize85 u-lg-fontSize85">
                  {
                    threeExplainers.three_explainers.insurance_in_minutes
                      .paragraph
                  }
                </p>
              </div>
              <div className="u-lg-size1of3">
                <ClaimOnPhone
                  ref={(anim) => {
                    this.claimOnPhoneAnimation = anim;
                  }}
                  sideLength={THREE_EXPLAINER_WIDTH_HEIGHT}
                />
                <h4 className="u-fontSize8 u-md-fontSize7 u-lg-fontSize7 u-spaceMB12">
                  {threeExplainers.three_explainers.claim_on_phone.title}
                </h4>
                <p className="u-lg-spaceMH8 u-fontSize9 u-md-fontSize85 u-lg-fontSize85">
                  {threeExplainers.three_explainers.claim_on_phone.paragraph}
                </p>
              </div>
              <div className="u-lg-size1of3">
                <PaidRightAway
                  ref={(anim) => {
                    this.paidRightAwayAnimation = anim;
                  }}
                  sideLength={THREE_EXPLAINER_WIDTH_HEIGHT}
                />
                <h4 className="u-fontSize8 u-md-fontSize7 u-lg-fontSize7 u-spaceMB12">
                  {threeExplainers.three_explainers.paid_right_away.title}
                </h4>
                <p className="u-lg-spaceMH8 u-fontSize9 u-md-fontSize85 u-lg-fontSize85">
                  {threeExplainers.three_explainers.paid_right_away.paragraph}
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
