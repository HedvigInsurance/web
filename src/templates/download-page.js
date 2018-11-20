import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StickyContainer } from 'react-sticky';
import './Page.css';
import { fonts } from '@hedviginsurance/brand';
import styled from 'react-emotion';

import Header, { headerPropTypes } from 'src/components/Header';
import Footer, { footerPropTypes } from 'src/components/Footer';
import { Spacing } from 'src/components/Spacing';
import { RotatingPhoneVideo } from 'src/components/RotatingPhoneVideo';
import { AppLinkForm } from '../components/AppLinkForm';

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
  paddingTop: 130,
  paddingBottom: 150,
  '@media (max-width: 1024px)': {
    alignItems: 'center',
    flexDirection: 'column-reverse',
  },
});

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
);

const Heading = styled('h1')({
  textAlign: 'center',
  fontFamily: fonts.SORAY,
  fontSize: 36,
  '@media (min-width: 1024px)': {
    fontSize: 50,
  },
});

const Article = styled('article')({
  backgroundColor: '#F9FBFC',
});

const DownloadTemplate = (props) => {
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
  } = props;
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
              <AppLinkForm
                phoneNumberPlaceholder={phoneNumberPlaceholder}
                ctaText={ctaText}
                errorText={errorText}
                successText={successText}
              />
            </Column>
          </Container>
        </Article>
      </StickyContainer>
      <Footer data={footer} langKey={langKey} />
    </main>
  );
};

DownloadTemplate.propTypes = {
  ...pagePropTypes,
  header: PropTypes.shape(headerPropTypes).isRequired,
};

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

    header: dataYaml(id: { regex: "/header/" }) {
      ...Header_data
    }

    footer: dataYaml(id: { regex: "/footer/" }) {
      ...Footer_data
    }
  }
`;
