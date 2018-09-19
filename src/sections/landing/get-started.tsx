import * as React from 'react';
import styled from 'react-emotion';
import { colors } from '@hedviginsurance/brand';
import { fonts } from '@hedviginsurance/brand';
import AppLink from 'src/components/AppLink';
import MediaQuery from 'react-responsive';

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
  fontFamily: fonts.SORAY,
  '@media (max-width: 600px)': {
    textAlign: 'center',
  },
});

const Paragraph = styled('p')({
  paddingTop: 10,
  '@media (max-width: 600px)': {
    textAlign: 'center',
    paddingBottom: 30,
  },
});

const GetStartedBtn = styled('div')({
  paddingTop: 50,
});

const GetStartedBtnMobile = styled('div')({
  paddingTop: 30,
});

const LinkTag = styled(AppLink)({
  padding: '15px 75px',
  '@media (max-width: 600px)': {
    width: '100%',
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
          <MediaQuery query="(max-width: 600px)">
            <GetStartedBtnMobile>
              <LinkTag
                tags="home-hero"
                className="Button u-fontSize10 u-colorWhite u-backgroundPrimaryGreen u-md-spaceMR12 u-lg-spaceMR12 u-fontWeightBold"
              >
                Kom igång
              </LinkTag>
            </GetStartedBtnMobile>
          </MediaQuery>

          <ImageContainer>
            <ImgTag src={'/assets/social/get-started-image.png'} />
          </ImageContainer>

          <HeadlineContainer>
            <Headline className="u-md-fontSize4 u-lg-fontSize4 u-fontSize6">
              2 minuter. 8 frågor. <br />
              Din perfekta försäkring.
            </Headline>
            <Paragraph>Ingen Bindningstid. Månadsvis betalning.</Paragraph>
            <MediaQuery query="(min-width: 600px)">
              <GetStartedBtn>
                <LinkTag
                  tags="home-hero"
                  className="Button u-fontSize10 u-colorWhite u-backgroundPrimaryGreen u-md-spaceMR12 u-lg-spaceMR12 u-fontWeightBold"
                >
                  Kom igång
                </LinkTag>
              </GetStartedBtn>
            </MediaQuery>
          </HeadlineContainer>
        </Container>
      </Section>
    );
  }
}

export { GetStarted };
