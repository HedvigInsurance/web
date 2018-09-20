import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import Cookies from 'js-cookie'
import { StickyContainer } from 'react-sticky'
import './Page.css'
import { fonts, colors } from '@hedviginsurance/brand'
import styled from 'react-emotion'

import Header, { headerPropTypes } from 'src/components/Header'
import Footer, { footerPropTypes } from 'src/components/Footer'
import { utmParamsToBranchLinkOptions } from 'src/services/utm-to-branch'
import { trackEvent } from 'src/utils/track-event'
import { Spacing } from 'src/components/Spacing'
import { DownloadSpinner } from 'src/components/DownloadSpinner'
import { RotatingPhoneVideo } from 'src/components/RotatingPhoneVideo'
import { Button } from 'src/components/Button'

const pagePropTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  phoneNumberPlaceholder: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
  successText: PropTypes.string.isRequired,
  errorText: PropTypes.string.isRequired,
}

const Container = styled('div')({
  maxWidth: 1240,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 10,
  paddingRight: 10,
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: 130,
  paddingBottom: 150,
  '@media (max-width: 1024px)': {
    alignItems: 'center',
    flexDirection: 'column-reverse',
  },
})

const Column = styled('div', { shouldForwardProp: (name) => name !== 'width' })(
  ({ width }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    '@media (min-width: 1024px)': {
      width,
    },
  }),
)

const Heading = styled('h1')({
  textAlign: 'center',
  fontFamily: fonts.SORAY,
  fontSize: 36,
  '@media (min-width: 1024px)': {
    fontSize: 50,
  },
})

const CustomButton = styled(Button)(({ disabled }) => ({
  backgroundColor: disabled ? colors.LIGHT_GRAY : colors.GREEN,
}))
const Input = styled('input')(({ error }) => ({
  minWidth: 280,
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: error ? colors.PINK : colors.LIGHT_GRAY,
  borderRadius: 30,
  boxShadow: 'none',
  padding: '0.79em 1.2em',
  outline: 'none',
  ':focus': { borderColor: colors.PURPLE },
}))

const Form = styled('form')({
  display: 'flex',
  '@media (max-width: 1024px)': {
    flexDirection: 'column',
  },
})

const ErrorText = styled('p')({
  color: colors.PINK,
})
const Article = styled('article')({
  backgroundColor: '#F9FBFC',
})

class DownloadTemplate extends React.Component {
  static propTypes = {
    ...pagePropTypes,
    header: PropTypes.shape(headerPropTypes).isRequired,
  }

  state = {
    phoneNumber: '',
    hasErrors: false,
    isSuccessful: false,
    isSending: false,
  }

  handleChange = (event) => {
    this.setState({ phoneNumber: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let { phoneNumber } = this.state
    phoneNumber = phoneNumber.trim()
    // Default to Sweden if no country code
    if (!phoneNumber.match(/^\+/)) {
      phoneNumber = `+46${phoneNumber}`
    }
    if (!phoneNumber) return

    this.setState({ isSending: true, hasErrors: false })

    const utmParams = Cookies.getJSON('utm-params') || {}
    const defaultBranchLinkOptions = {
      channel: 'hedvig',
      feature: 'send-sms',
    }
    // utmParams take precendent over default branch params
    const linkOptions = utmParamsToBranchLinkOptions(
      utmParams,
      defaultBranchLinkOptions,
    )

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
        this.setState({ isSending: false })
        if (err) {
          this.setState({ hasErrors: true })
          console.log('Branch.sendSMS error', err)
          return
        }
        this.setState({ isSuccessful: true, phoneNumber: '' })
        trackEvent('Send app link sms')
      },
    )
  }

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
    } = this.props
    const { phoneNumber, isSending, isSuccessful, hasErrors } = this.state
    const isDisabled = !phoneNumber || isSending
    return (
      <main className="Site">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <StickyContainer>
          <Header data={header} langKey={langKey} />
          <Article className="Site-content u-flexGrow1">
            <Container>
              <Column width="50%">
                <RotatingPhoneVideo />
              </Column>
              <Column width="50%">
                <div className="u-textCenter">
                  <Heading>{heading}</Heading>
                </div>
                <Spacing height={62.5} />
                {isSuccessful ? (
                  <div>{successText}</div>
                ) : (
                  <Form onSubmit={this.handleSubmit}>
                    <Input
                      error={hasErrors}
                      type="tel"
                      placeholder={phoneNumberPlaceholder}
                      value={phoneNumber}
                      onChange={this.handleChange}
                    />
                    <Spacing height={12} width={15} />
                    <CustomButton type="submit" disabled={isDisabled}>
                      {ctaText}
                    </CustomButton>
                  </Form>
                )}
                {isSending && <DownloadSpinner />}
                {hasErrors && (
                  <React.Fragment>
                    <Spacing height={30} />
                    <ErrorText>{errorText}</ErrorText>
                  </React.Fragment>
                )}
              </Column>
            </Container>
          </Article>
        </StickyContainer>
        <Footer data={footer} langKey={langKey} />
      </main>
    )
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
  />
)

Download.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.objectOf(PropTypes.any),
    }),
    header: PropTypes.shape(headerPropTypes),
    footer: PropTypes.shape(footerPropTypes),
  }).isRequired,
  pathContext: PropTypes.shape({ langKey: PropTypes.string }).isRequired,
}

export { DownloadTemplate }

export default Download

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

    header: dataYaml(id: { regex: "/header/" }) {
      ...Header_data
    }

    footer: dataYaml(id: { regex: "/footer/" }) {
      ...Footer_data
    }
  }
`
