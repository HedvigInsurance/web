import { fonts } from '@hedviginsurance/brand'
import SwipeableViews from '@hedviginsurance/react-swipeable-views'
import * as React from 'react'
import styled from 'react-emotion'
import MediaQuery from 'react-responsive'

import { TeamtailorUser } from '..'

interface MobileProps {
  teamtailorUsers: TeamtailorUser[]
  title: string
}

const Box = styled('div')({
  padding: '20px 0',
})

const Card = styled('div')({
  margin: 20,
  boxShadow: '0px 0 10px rgba(0,0,0,0.14)',
  borderRadius: 5,
  overflow: 'hidden',
  flex: 1,
})

const ImageContainer = styled('div')({
  position: 'relative',
  overflow: 'hidden',
  height: 240,
  width: '100%',
})

const Image = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

const UserInfo = styled('div')({
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  padding: 20,
  userSelect: 'none',
})

const CardName = styled('span')({
  fontSize: 18,
  fontFamily: fonts.SORAY,
})

const CardTitle = styled('span')({
  fontSize: 16,
})

const Title = styled('h3')({
  fontSize: 45,
  lineHeight: '50px',
  fontFamily: fonts.SORAY,
  padding: '20px 60px',
  textAlign: 'center',
  '@media (min-width: 700px)': {
    textAlign: 'left',
  },
})

export const Mobile: React.SFC<MobileProps> = ({ title, teamtailorUsers }) => {
  const cards = teamtailorUsers.map((user) => (
    <Card key={user.name}>
      <ImageContainer>
        <Image src={user.picture.large} />
      </ImageContainer>
      <UserInfo>
        <CardName>{user.name}</CardName>
        <CardTitle>{user.title}</CardTitle>
      </UserInfo>
    </Card>
  ))

  return (
    <Box>
      <Title>{title}</Title>
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
  )
}
