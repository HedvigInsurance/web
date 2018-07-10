import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Cookies from 'js-cookie';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import { utmParamsToBranchLinkOptions } from 'src/services/utm-to-branch';
import { ReactComponent as AppStoreIcon } from 'assets/appstores/app-store-badge-mini.svg';
import { ReactComponent as PlayStoreIcon } from 'assets/appstores/google-play-badge-mini.svg';

const propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  paragraph1: PropTypes.string.isRequired,
  paragraph2: PropTypes.string.isRequired,
  phoneNumberPlaceholder: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
  successText: PropTypes.string.isRequired,
  errorText: PropTypes.string.isRequired,
};

class DownloadTemplate extends React.Component {
  static propTypes = propTypes;
  state = {
    phoneNumber: '',
    hasErrors: false,
    isSuccessful: false,
    isSending: false,
  };

  handleChange = (event) => {
    this.setState({ phoneNumber: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let { phoneNumber } = this.state;
    phoneNumber = phoneNumber.trim();
    // Default to Sweden if no country code
    if (!phoneNumber.match(/^\+/)) {
      phoneNumber = `+46${phoneNumber}`;
    }
    if (!phoneNumber) return;

    this.setState({ isSending: true, hasErrors: false });

    const utmParams = Cookies.getJSON('utm-params') || {};
    const defaultBranchLinkOptions = {
      channel: 'hedvig',
      feature: 'send-sms',
    };
    // utmParams take precendent over default branch params
    const linkOptions = utmParamsToBranchLinkOptions(
      utmParams,
      defaultBranchLinkOptions,
    );

    window.branch.sendSMS(
      phoneNumber,
      {
        ...linkOptions,
        data: {
          $custom_sms_text: 'Ladda ner Hedvig-appen: {{ link }}',
        },
      },
      { make_new_link: false },
      (err) => {
        this.setState({ isSending: false });
        if (err) {
          this.setState({ hasErrors: true });
          console.log('Branch.sendSMS error', err);
          return;
        }
        this.setState({ isSuccessful: true, phoneNumber: '' });
        window.analytics.track('Send app link sms');
      },
    );
  };

  render() {
    const {
      title,
      heading,
      paragraph1,
      paragraph2,
      phoneNumberPlaceholder,
      ctaText,
      successText,
      errorText,
    } = this.props;
    const isDisabled = !this.state.phoneNumber || this.state.isSending;
    return (
      <main className="Site">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Header />
        <article className="Site-content u-flexGrow1">
          <div
            className="Container u-flex u-flexJustifyCenter u-flexCol u-flexAlignItemsCenter"
            style={{
              height: '100%',
            }}
          >
            <div className="u-textCenter">
              <h1 className="u-spaceMT2 u-spaceMB8 u-md-spaceMB7 u-lg-spaceMB7 u-fontFamilyHeader u-fontSize5 u-md-fontSize4 u-lg-fontSize3">
                {heading}
              </h1>
            </div>
            <div className="u-textCenter u-spaceMB8 u-lg-spacePH3">
              <p className="u-fontWeightBold u-spaceMT8">{paragraph1}</p>
              <p className="u-fontWeightBold u-spaceMT8">{paragraph2}</p>
            </div>
            <div className="u-spaceMB5">
              <div className="u-textCenter">
                <div className="u-spaceMB5">
                  {this.state.isSuccessful ? (
                    <div>{successText}</div>
                  ) : (
                    <form onSubmit={this.handleSubmit}>
                      <input
                        style={{
                          minWidth: '280px',
                        }}
                        className={[
                          'TextInput u-spaceMB12 u-spaceMR11',
                          this.state.hasErrors && 'has-errors',
                        ].join(' ')}
                        type="tel"
                        placeholder={phoneNumberPlaceholder}
                        value={this.state.phoneNumber}
                        onChange={this.handleChange}
                      />
                      <button
                        type="submit"
                        disabled={isDisabled}
                        style={{
                          backgroundColor: isDisabled
                            ? 'rgb(175, 175, 175)'
                            : 'inherit',
                        }}
                        className={[
                          !isDisabled && 'u-backgroundPrimaryBlue',
                          'Button u-colorWhite u-spaceMB12',
                        ].join(' ')}
                      >
                        {ctaText}
                      </button>
                    </form>
                  )}
                  {this.state.isSending && (
                    <div className="Spinner">
                      <div className="Spinner__bounce" />
                      <div className="Spinner__bounce" />
                      <div className="Spinner__bounce" />
                      <div className="Spinner__bounce" />
                    </div>
                  )}
                  {this.state.hasErrors && (
                    <div className="u-spaceMT8 u-colorPrimaryPink">
                      {errorText}
                    </div>
                  )}
                </div>
                <a
                  href="https://itunes.apple.com/se/app/hedvig/id1303668531?mt=8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-spaceMH12 u-spacePH11 u-spacePV11"
                >
                  <AppStoreIcon />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.hedvig.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-spaceMH12 u-spacePH11 u-spacePV11"
                >
                  <PlayStoreIcon />
                </a>
              </div>
            </div>
          </div>
        </article>
        <Footer />
      </main>
    );
  }
}

const Download = ({ data }) => (
  <DownloadTemplate
    title={data.markdownRemark.frontmatter.title}
    heading={data.markdownRemark.frontmatter.heading}
    paragraph1={data.markdownRemark.frontmatter.paragraph1}
    paragraph2={data.markdownRemark.frontmatter.paragraph2}
    phoneNumberPlaceholder={
      data.markdownRemark.frontmatter.phone_number_placeholder
    }
    ctaText={data.markdownRemark.frontmatter.cta_text}
    successText={data.markdownRemark.frontmatter.success_text}
    errorText={data.markdownRemark.frontmatter.errorText}
  />
);

Download.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape(propTypes),
    }),
  }).isRequired,
};

export { DownloadTemplate };

export default Download;

export const downloadPageQuery = graphql`
  query DownloadPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        paragraph1
        paragraph2
        phone_number_placeholder
        cta_text
        success_text
        error_text
      }
    }
  }
`;
