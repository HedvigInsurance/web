import * as React from 'react';
import Img from 'gatsby-image';
import styled from 'react-emotion';
import { colors } from '@hedviginsurance/brand';
import { fonts } from '@hedviginsurance/brand';

interface Props {
  heading: string;
  bottom_paragraph: string;
  perilForestMobileFile: {
    image: {
      sizes: {
        apsectRatio: number;
        sizes: string;
        src: string;
        srcSet: string;
      };
    };
  };
  perilForestDesktopFile: {
    image: {
      sizes: {
        apsectRatio: number;
        sizes: string;
        src: string;
        srcSet: string;
      };
    };
  };
}

const ImageMobile = styled(Img)({
  margin: '0 auto',
  width: '304px',
  '@media (min-width: 960px)': {
    display: 'none',
  },
});

const ImageDesktop = styled(Img)({
  margin: '0 auto',
  width: '754px',
  display: 'none',
  '@media (min-width: 960px)': {
    display: 'block',
  },
});

const Fig = styled('figure')({
  marginBottom: '50px',
  marginTop: '50px',
});

const Header = styled('h2')({
  color: colors.WHITE,
  fontFamily: fonts.SORAY,
  textAlign: 'center',
  fontSize: '40px',
  lineHeight: '54px',
  '@media (min-width: 640px)': {
    fontSize: '60px',
    lineHeight: '66px',
  },
});

const Paragraph = styled('p')({
  color: colors.WHITE,
  textAlign: 'center',
  fontSize: '18px',
  lineHeight: '28px',
  '@media (min-width: 640px)': {
    lineHeight: '30px',
  },
});

const Container = styled('div')({
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '1240px',
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingTop: '125px',
  paddingBottom: '75px',
});

const PerilForest: React.SFC<Props> = (props) => (
  <div className="u-backgroundPrimaryDarkestPurple">
    <Container>
      <Header>{props.heading}</Header>

      <Fig // eslint-disable-line
      //onClick={this.registerPerilForestClick}
      >
        {props.perilForestMobileFile && (
          <ImageMobile sizes={props.perilForestMobileFile.image.sizes} alt="" />
        )}
        {props.perilForestDesktopFile && (
          <ImageDesktop
            sizes={props.perilForestDesktopFile.image.sizes}
            alt=""
          />
        )}
      </Fig>

      <Paragraph>{props.bottom_paragraph}</Paragraph>
    </Container>
  </div>
);

export { PerilForest };
