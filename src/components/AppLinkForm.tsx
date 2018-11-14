import { Spacing } from 'src/components/Spacing';
import React from 'react';
import { utmParamsToBranchLinkOptions } from 'src/services/utm-to-branch';
import { trackEvent } from 'src/utils/track-event';
import styled from 'react-emotion';
import { Button } from 'src/components/Button';
import { colors } from '@hedviginsurance/brand';
import Cookies from 'js-cookie';
import { DownloadSpinner } from 'src/components/DownloadSpinner';

const CustomButton = styled(Button)(({ disabled }: { disabled: boolean }) => ({
  backgroundColor: disabled ? colors.LIGHT_GRAY : colors.GREEN,
}));
const Input = styled('input')(({ error }: { error: boolean }) => ({
  minWidth: 280,
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: error ? colors.PINK : colors.LIGHT_GRAY,
  borderRadius: 30,
  boxShadow: 'none',
  padding: '0.79em 1.2em',
  outline: 'none',
  ':focus': { borderColor: colors.PURPLE },
}));

const Form = styled('form')({
  display: 'flex',
  '@media (max-width: 1024px)': {
    flexDirection: 'column',
  },
});

const ErrorText = styled('p')({
  color: colors.PINK,
});

interface AppLinkFormProps {
  phoneNumberPlaceholder: string;
  ctaText: string;
  errorText: string;
  successText: string;
}

interface State {
  phoneNumber: string;
  hasErrors: boolean;
  isSuccessful: boolean;
  isSending: boolean;
}

export class AppLinkForm extends React.PureComponent<AppLinkFormProps, State> {
  state: State = {
    phoneNumber: '',
    hasErrors: false,
    isSuccessful: false,
    isSending: false,
  };

  handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ phoneNumber: event.target.value });
  };

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    let { phoneNumber } = this.state;
    phoneNumber = phoneNumber.trim();
    if (!phoneNumber) return;
    // Default to Sweden if no country code
    if (!phoneNumber.match(/^\+/)) {
      phoneNumber = `+46${phoneNumber}`;
    }

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
    (window as any).branch.sendSMS(
      phoneNumber,
      {
        ...linkOptions,
        data: {
          $custom_sms_text: 'Ladda ner Hedvig-appen: {{ link }}',
        },
      },
      { make_new_link: false },
      (err: Error) => {
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
    return (
      <>
        {this.state.isSuccessful ? (
          <div>{this.props.successText}</div>
        ) : (
          <Form onSubmit={this.handleSubmit}>
            <Input
              error={this.state.hasErrors}
              type="tel"
              placeholder={this.props.phoneNumberPlaceholder}
              value={this.state.phoneNumber}
              onChange={this.handleChange}
            />
            <Spacing height={12} width={15} />
            <CustomButton
              type="submit"
              disabled={!this.state.phoneNumber || this.state.isSending}
            >
              {this.props.ctaText}
            </CustomButton>
          </Form>
        )}
        {this.state.isSending && <DownloadSpinner />}
        {this.state.hasErrors && (
          <>
            <Spacing height={30} />
            <ErrorText>{this.props.errorText}</ErrorText>
          </>
        )}
      </>
    );
  }
}
