import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Cookies from 'js-cookie';
import { StickyContainer } from 'react-sticky';
import Img from 'gatsby-image';
import './Page.css';
import { fonts } from '@hedviginsurance/brand';

import Header, { headerPropTypes } from 'src/components/Header';
import Footer, { footerPropTypes } from 'src/components/Footer';
import { utmParamsToBranchLinkOptions } from 'src/services/utm-to-branch';
import { trackEvent } from 'src/utils/track-event';
import styled from 'react-emotion';

const pagePropTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  phoneNumberPlaceholder: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
  successText: PropTypes.string.isRequired,
  errorText: PropTypes.string.isRequired,
};

const Container = styled('div')({
  maxWidth: 1240,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 10,
  paddingRight: 10,
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 140,
  marginBottom: 140,
  '@media (max-width: 786px)': {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 0,
    marginBottom: 50,
  },
});

const Column = styled('div', { shouldForwardProp: (name) => name !== 'width' })(
  ({ width }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    '@media (min-width: 786px)': {
      width,
    },
  }),
);

const DashboardPhone = styled(Img)({
  height: '100%',
});

const Heading = styled('h1')({
  textAlign: 'center',
  fontFamily: fonts.SORAY,
  fontSize: 36,
  '@media (min-width: 786px)': {
    fontSize: 50,
  },
});

// const CustomButton = styled(Button)(({ disabled }) => ({}));

class DownloadTemplate extends React.Component {
  static propTypes = {
    ...pagePropTypes,
    header: PropTypes.shape(headerPropTypes).isRequired,
  };

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
        trackEvent('Send app link sms');
      },
    );
  };

  render() {
    const {
      title,
      heading,
      phoneNumberPlaceholder,
      ctaText,
      successText,
      errorText,
      header,
      footer,
      langKey,
      dashboardPhoneFile,
    } = this.props;
    const { phoneNumber, isSending, isSuccessful, hasErrors } = this.state;
    const isDisabled = !phoneNumber || isSending;
    return (
      <main className="Site">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <StickyContainer>
          <Header data={header} langKey={langKey} />
          <article className="Site-content u-flexGrow1">
            <Container>
              <Column width="60%">
                <div className="u-textCenter">
                  <Heading>{heading}</Heading>
                </div>
                <div className="u-spaceMB5">
                  <div className="u-textCenter">
                    <div>
                      {isSuccessful ? (
                        <div>{successText}</div>
                      ) : (
                        <form onSubmit={this.handleSubmit}>
                          <input
                            style={{
                              minWidth: '280px',
                            }}
                            className={[
                              'TextInput u-spaceMB12 u-spaceMR11',
                              hasErrors && 'has-errors',
                            ].join(' ')}
                            type="tel"
                            placeholder={phoneNumberPlaceholder}
                            value={phoneNumber}
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
                      {isSending && (
                        <div className="Spinner">
                          <div className="Spinner__bounce" />
                          <div className="Spinner__bounce" />
                          <div className="Spinner__bounce" />
                          <div className="Spinner__bounce" />
                        </div>
                      )}
                      {hasErrors && (
                        <div className="u-spaceMT8 u-colorPrimaryPink">
                          {errorText}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Column>
              <Column width="40%">
                {dashboardPhoneFile && (
                  <DashboardPhone sizes={dashboardPhoneFile.image.sizes} />
                )}
              </Column>
            </Container>
          </article>
        </StickyContainer>
        <Footer data={footer} langKey={langKey} />
      </main>
    );
  }
}

const Download = ({ data, pathContext }) => (
  <DownloadTemplate
    title={data.markdownRemark.frontmatter.title}
    heading={data.markdownRemark.frontmatter.heading}
    phoneNumberPlaceholder={
      data.markdownRemark.frontmatter.phone_number_placeholder
    }
    ctaText={data.markdownRemark.frontmatter.cta_text}
    successText={data.markdownRemark.frontmatter.success_text}
    errorText={data.markdownRemark.frontmatter.error_text}
    header={data.header}
    footer={data.footer}
    langKey={pathContext.langKey}
    dashboardPhoneFile={data.dashboardPhoneFile}
  />
);

Download.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.objectOf(PropTypes.any),
    }),
    header: PropTypes.shape(headerPropTypes),
    footer: PropTypes.shape(footerPropTypes),
  }).isRequired,
  pathContext: PropTypes.shape({ langKey: PropTypes.string }).isRequired,
};

export { DownloadTemplate };

export default Download;

export const downloadPageQuery = graphql`
  query DownloadPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        phone_number_placeholder
        cta_text
        success_text
        error_text
      }
    }

    dashboardPhoneFile: file(
      relativePath: { eq: "download/dashboard-phone.png" }
    ) {
      image: childImageSharp {
        sizes(maxWidth: 620) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }

    header: dataYaml(id: { regex: "/header/" }) {
      ...Header_data
    }

    footer: dataYaml(id: { regex: "/footer/" }) {
      ...Footer_data
    }
  }
`;
