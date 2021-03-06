import * as React from 'react';
import styled, { keyframes } from 'react-emotion';
import { TransitionGroup, Transition } from 'react-transition-group';
import {
  TransitionStatus,
  ENTERED,
  ENTERING,
} from 'react-transition-group/Transition';
import { fonts } from '@hedviginsurance/brand';

import { TeamtailorUser } from 'src/sections/about-us/hedvigers';

interface SelectedUserProps {
  users: TeamtailorUser[];
  selectedUser: TeamtailorUser;
}

const Container = styled('div')({
  width: '50%',
  overflow: 'hidden',
  position: 'relative',
});

interface ImageContainerProps {
  status: TransitionStatus;
}

const enter = keyframes({
  from: {
    transform: 'translateX(100%) translateZ(0)',
  },
  to: {
    transform: 'translateX(0) translateZ(0)',
  },
});

const exit = keyframes({
  from: {
    transform: 'translateX(0) translateZ(0)',
  },
  to: {
    transform: 'translateX(-100%) translateZ(0)',
  },
});

const getTransform = (status: TransitionStatus) => {
  switch (status) {
    case ENTERED:
      return {
        animation: `${enter} 0ms ease forwards`,
      };
    case ENTERING:
      return {
        animation: `${enter} 800ms ease forwards`,
      };
    default:
      return {
        animation: `${exit} 800ms ease forwards`,
      };
  }
};

const ImageContainer = styled('div')(
  {
    position: 'absolute',
    width: '100%',
    height: '100%',
    willChange: 'transform',
    animationTimingFunction: 'cubic-bezier(.17,.67,.83,.67)',
  },
  ({ status }: ImageContainerProps) => ({
    ...getTransform(status),
  }),
);

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const enterDetails = keyframes({
  from: {
    transform: 'translateX(10%)',
    opacity: 0,
  },
  to: {
    transform: 'translateX(0)',
    opacity: 1,
  },
});

const exitDetails = keyframes({
  from: {
    transform: 'translateX(0)',
    opacity: 1,
  },
  to: {
    transform: 'translateX(-10%)',
    opacity: 0,
  },
});

const getDetailsAnimation = (status: TransitionStatus) => {
  switch (status) {
    case ENTERED:
      return {
        animation: `${enterDetails} 0ms ease forwards`,
      };
    case 'entering':
      return {
        animation: `${enterDetails} 1500ms ease forwards`,
      };
    default:
      return {
        animation: `${exitDetails} 800ms ease forwards`,
      };
  }
};

interface DetailsProps {
  status: TransitionStatus;
}

const Details = styled('div')(
  {
    position: 'absolute',
    padding: '5%',
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  ({ status }: DetailsProps) => ({
    ...getDetailsAnimation(status),
  }),
);

const Name = styled('span')({
  fontFamily: fonts.SORAY,
  fontSize: 35,
  lineHeight: '40px',
  color: 'white',
});

const Title = styled('span')({
  fontSize: 20,
  color: 'white',
});

export const SelectedUser: React.SFC<SelectedUserProps> = ({
  users,
  selectedUser,
}) => (
  <Container>
    <TransitionGroup>
      {users.map(
        (user) =>
          user === selectedUser ? (
            <Transition key={user.name} timeout={{ exit: 850, enter: 1500 }}>
              {(status) => (
                <ImageContainer status={status}>
                  <Image src={user.picture.large} />
                  <Details status={status}>
                    <Name>{user.name}</Name>
                    <Title>{user.title}</Title>
                  </Details>
                </ImageContainer>
              )}
            </Transition>
          ) : null,
      )}
    </TransitionGroup>
  </Container>
);
