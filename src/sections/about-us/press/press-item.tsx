import * as React from 'react';
import styled from 'react-emotion';
import { fonts } from '@hedviginsurance/brand';

import { PressItem as PressItemType } from '.';

const Link = styled('a')({
  textDecoration: 'none',
});

const PressItemContainer = styled('div')({
  borderRadius: 5,
  boxShadow: '-1px 0 10px rgba(0,0,0,0.14)',
  padding: 20,
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'white',
});

const Logo = styled('img')({
  width: '75px',
  height: '75px',
  objectFit: 'contain',
});

const Content = styled('div')({
  paddingLeft: 20,
  display: 'flex',
  flexDirection: 'column',
});

const Title = styled('span')({
  fontSize: 20,
  lineHeight: '21px',
  fontFamily: 'SoRay',
});

const Text = styled('span')({
  fontSize: 14,
  lineHeight: '16px',
  marginTop: 5,
});

export const PressItem: React.SFC<PressItemType> = ({
  logo,
  link,
  title,
  text,
}) => (
  <Link href={link}>
    <PressItemContainer>
      <Logo src={logo} />
      <Content>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Content>
    </PressItemContainer>
  </Link>
);
