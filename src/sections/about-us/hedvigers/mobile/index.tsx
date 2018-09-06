import * as React from 'react';
import SwipeableViews from '@hedviginsurance/react-swipeable-views';
import styled from 'react-emotion';
import MediaQuery from 'react-responsive';

import { TeamtailorUser } from '..';

interface MobileProps {
  teamtailorUsers: Array<TeamtailorUser>;
}

const Box = styled('div')({
  padding: '20px 0',
});

const Card = styled('div')({
  margin: 20,
  boxShadow: '0px 0 10px rgba(0,0,0,0.14)',
  borderRadius: 5,
  overflow: 'hidden',
  flex: 1,
});

const ImageContainer = styled('div')({
  position: 'relative',
  overflow: 'hidden',
  height: 240,
  width: '100%',
});

const Image = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const UserInfo = styled('div')({
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  padding: 20,
});

const Name = styled('span')({
  fontSize: 18,
  fontFamily: 'SoRay',
});

const Title = styled('span')({
  fontSize: 16,
});

export const Mobile: React.SFC<MobileProps> = ({ teamtailorUsers }) => {
  const cards = teamtailorUsers.map((user) => (
    <Card key={user.name}>
      <ImageContainer>
        <Image src={user.picture.large} />
      </ImageContainer>
      <UserInfo>
        <Name>{user.name}</Name>
        <Title>{user.title}</Title>
      </UserInfo>
    </Card>
  ));

  return (
    <Box>
      <MediaQuery query="(max-width: 700px)">
        <SwipeableViews
          resistance
          enableMouseEvents
          style={{ padding: '0 15%' }}
          slideStyle={{ display: 'flex' }}
        >
          {cards}
        </SwipeableViews>
      </MediaQuery>
      <MediaQuery query="(min-width: 700px)">
        <SwipeableViews
          resistance
          slideCount={cards.length / 2}
          enableMouseEvents
          style={{ padding: '0 5%' }}
          slideStyle={{ width: '50%', display: 'flex' }}
        >
          {cards}
        </SwipeableViews>
      </MediaQuery>
    </Box>
  );
};
