import * as React from 'react';
import styled from 'react-emotion';

interface PressItemProps {
  image: string;
  title: string;
  text: string;
}

const PressItemContainer = styled('div')({
  borderRadius: 5,
  height: 100,
  boxShadow: '-1px 0 10px rgba(0,0,0,0.14)',
});

export const PressItem: React.SFC<PressItemProps> = () => (
  <PressItemContainer />
);
