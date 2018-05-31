import React from 'react';
import { Helmet } from 'react-helmet';
import Cookies from 'js-cookie';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import { utmParamsToBranchLinkOptions } from 'src/services/utm-to-branch';
import { ReactComponent as AppStoreIcon } from 'assets/appstores/app-store-badge-mini.svg';
import { ReactComponent as PlayStoreIcon } from 'assets/appstores/google-play-badge-mini.svg';

class Download extends React.Component {
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
      },
    );
  };

  render() {
    const isDisabled = !this.state.phoneNumber || this.state.isSending;
    return (
      <main className="Site">
        <Helmet>
          <title>Ladda ner appen | Hedvig</title>
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
                Skaffa Hedvig-appen
              </h1>
            </div>
            <div className="u-spaceMB5">
              <div className="u-textCenter">
                <div className="u-spaceMB5">
                  {this.state.isSuccessful ? (
                    <div>
                      Vi har skickat dig ett sms med en länk för att ladda ner
                      Hedvig-appen
                    </div>
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
                        placeholder="Skriv in ditt mobilnummer"
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
                        Få en länk till appen
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
                      Ojdå! Det gick inte att skicka sms till det angivna
                      numret.<br />Dubbelkolla numret och prova igen.
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

export default Download;
