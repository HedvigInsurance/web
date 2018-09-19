import * as React from 'react';
import styled from 'react-emotion';
import { colors } from '@hedviginsurance/brand';

const Section = styled('div')({
  backgroundColor: colors.OFF_WHITE,
});

const Container = styled('div')({
  paddingBottom: 100,
  paddingTop: 100,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  '@media (max-width: 600px)': {
    flexDirection: 'column-reverse',
    paddingTop: 50,
    paddingBottom: 50,
  },
  '@media (min-width: 601px) and (max-width: 959px)': {
    paddingTop: 100,
  },
});

const ImageContainer = styled('div')({
  marginRight: 20,
  maxWidth: '50%',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  '@media (max-width: 600px)': {
    marginRight: 0,
    maxWidth: '300px',
    width: '80%',
  },
});

const HeadlineContainer = styled('div')({
  position: 'relative',
  top: -50,
  marginLeft: 100,
  maxWidth: '50%',
  '@media (max-width: 600px)': {
    maxWidth: 'none',
  },
  '@media (max-width: 959px)': {
    marginLeft: 0,
    top: 0,
  },
});

const Headline = styled('h2')({
  minWidth: '100%',
  '@media (max-width: 600px)': {
    textAlign: 'center',
  },
});

const Paragrah = styled('p')({
  paddingTop: 10,
  '@media (max-width: 600px)': {
    textAlign: 'center',
    paddingBottom: 30,
  },
});

const GetStartedBtn = styled('div')({
  display: 'block',
  paddingTop: 50,
  '@media (max-width: 600px)': {
    display: 'none',
  },
});

const GetStartedBtnMobile = styled('div')({
  display: 'none',
  '@media (max-width: 600px)': {
    paddingTop: 30,
    display: 'flex',
  },
});

const LinkTag = styled('a')({
  padding: '15px 75px',
  '@media (max-width: 600px)': {
    linewidth: '100%',
  },
});

const ImgTag = styled('img')({
  maxWidth: '80%',
  '@media (max-width: 959px)': {
    maxWidth: '100%',
  },
});

class GetStarted extends React.Component {
  render() {
    return (
      <Section>
        <Container className="Container">
          <GetStartedBtnMobile>
            <LinkTag
              tags="home-hero"
              className="Button u-fontSize10 u-colorWhite u-backgroundPrimaryGreen u-md-spaceMR12 u-lg-spaceMR12 u-fontWeightBold"
              feature="organic"
              href="https://hedvig.test-app.link/fLAzSHSKkQ"
            >
              Kom igång
            </LinkTag>
          </GetStartedBtnMobile>

          <ImageContainer>
            <ImgTag src={'/assets/social/get-started-image.png'} />
          </ImageContainer>

          <HeadlineContainer>
            <Headline className="u-md-fontSize4 u-lg-fontSize4 u-fontSize6">
              2 minuter. 8 frågor. <br />
              Din perfekta försäkring.
            </Headline>
            <Paragrah>Ingen Bindningstid. Månadsvis betalning.</Paragrah>
            <GetStartedBtn>
              <LinkTag
                tags="home-hero"
                className="Button u-fontSize10 u-colorWhite u-backgroundPrimaryGreen u-md-spaceMR12 u-lg-spaceMR12 u-fontWeightBold"
                feature="organic"
                href="https://hedvig.test-app.link/fLAzSHSKkQ"
              >
                Kom igång
              </LinkTag>
            </GetStartedBtn>
          </HeadlineContainer>
        </Container>
      </Section>
    );
  }
}

export { GetStarted };
