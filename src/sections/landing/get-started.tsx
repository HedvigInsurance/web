import { colors, fonts } from '@hedviginsurance/brand'
import Img from 'gatsby-image'
import * as React from 'react'
import styled from 'react-emotion'
import MediaQuery from 'react-responsive'
import AppLink from 'src/components/AppLink'

interface Props {
  heading1: string
  heading2: string
  paragraph: string
  buttontext: string
  imageAltText: string
  image?: any // TODO type this better, too late tonight though
}

const Section = styled('div')({
  backgroundColor: colors.OFF_WHITE,
})

const Container = styled('div')({
  paddingBottom: 100,
  paddingTop: 100,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@media (max-width: 600px)': {
    flexDirection: 'column-reverse',
    paddingTop: 50,
    paddingBottom: 50,
  },
})

const ImageContainer = styled('div')({
  marginRight: 20,
  maxWidth: '50%',
  position: 'relative',
  '@media (max-width: 600px)': {
    marginRight: 0,
    maxWidth: '300px',
    width: '80%',
  },
})

const HeadlineContainer = styled('div')({
  position: 'relative',
  top: -50,
  maxWidth: '50%',
  '@media (max-width: 600px)': {
    maxWidth: 'none',
  },
  '@media (max-width: 959px)': {
    top: 0,
  },
})

const Headline = styled('h2')({
  minWidth: '100%',
  fontFamily: fonts.SORAY,
  fontWeight: 600,
  '@media (max-width: 600px)': {
    textAlign: 'center',
  },
})

const Paragraph = styled('p')({
  paddingTop: 10,
  '@media (max-width: 600px)': {
    textAlign: 'center',
    paddingBottom: 30,
  },
})

const GetStartedBtn = styled('div')({
  paddingTop: 50,
})

const GetStartedBtnMobile = styled('div')({
  paddingTop: 30,
})

const LinkTag = styled(AppLink)({
  padding: '15px 75px',
  '@media (max-width: 600px)': {
    width: '100%',
  },
})

const Image = styled(Img)({
  width: 480,
  '@media (max-width: 959px)': {
    maxWidth: '100%',
  },
})

const GetStarted: React.SFC<Props> = (props) => (
  <Section>
    <Container className="Container">
      <MediaQuery query="(max-width: 600px)">
        <GetStartedBtnMobile>
          <LinkTag
            tags={['get-started']}
            className="Button u-fontSize10 u-colorWhite u-backgroundPrimaryGreen u-md-spaceMR12 u-lg-spaceMR12 u-fontWeightBold"
          >
            {props.buttontext}
          </LinkTag>
        </GetStartedBtnMobile>
      </MediaQuery>

      <ImageContainer>
        {props.image && (
          <Image sizes={props.image.image.sizes} alt={props.imageAltText} />
        )}
      </ImageContainer>

      <HeadlineContainer>
        <Headline className="u-md-fontSize4 u-lg-fontSize2">
          {props.heading1} <br />
          {props.heading2}
        </Headline>
        <Paragraph>{props.paragraph}</Paragraph>
        <MediaQuery query="(min-width: 601px)">
          <GetStartedBtn>
            <LinkTag
              tags={['get-started']}
              className="Button u-fontSize10 u-colorWhite u-backgroundPrimaryGreen u-md-spaceMR12 u-lg-spaceMR12 u-fontWeightBold"
            >
              {props.buttontext}
            </LinkTag>
          </GetStartedBtn>
        </MediaQuery>
      </HeadlineContainer>
    </Container>
  </Section>
)

export { GetStarted }
