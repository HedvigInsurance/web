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
  '@media (max-width: 600px)': {
    flexDirection: 'column-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 50,
  },
});

const ImageContainer = styled('div')({
  marginRight: 20,
  float: 'left',
  maxWidth: '50%',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingTop: 50,
  '@media (max-width: 600px)': {
    paddingTop: 0,
    marginRight: 0,
  },
  '@media (max-width: 960px) and (min-width: 601px)': {
    paddingTop: '100px',
  },
});

const HeadlineContainer = styled('div')({
  marginLeft: 100,
  float: 'right',
  maxWidth: '50%',
  paddingTop: 100,
  '@media (max-width: 600px)': {
    maxWidth: 'none',
    paddingTop: 0,
    marginLeft: 0,
  },
});

const Headline = styled('h2')({
  minWidth: '100%',
  // paddingTop: 200,
  '@media (max-width: 600px)': {
    textAlign: 'center',
  },
});

const Paragrah = styled('p')({
  paddingTop: 15,
  '@media (max-width: 600px)': {
    textAlign: 'center',
  },
});

const GetStartedBtn = styled('div')({
  visibility: 'visible',
  paddingTop: 30,
  float: 'left',
  paddingBottom: 50,
  '@media (max-width: 600px)': {
    visibility: 'hidden',
    paddingTop: 20,
    paddingBottom: 0,
    height: 0,
  },
});

const GetStartedBtnMobile = styled('div')({
  display: 'none',
  '@media (max-width: 600px)': {
    paddingTop: 30,
    float: 'left',
    paddingBottom: 50,
    display: 'flex',
  },
});

const LinkTag = styled('a')({
  width: 234,
  height: 56,
});

const ImgTag = styled('img')({
  maxWidth: '80%',
  '@media (max-width: 600px)': {
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
            <GetStartedBtn className="Grid Grid--alignCenter u-lg-flexJustifyStart u-spaceMT8 u-lg-spaceMB2 u-textCenter">
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
