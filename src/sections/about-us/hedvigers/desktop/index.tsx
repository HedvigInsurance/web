import * as React from 'react';
import styled from 'react-emotion';
import { Container, ActionMap } from 'constate';

import { List } from './list';
import { SelectedImage } from './selected-image';
import { TeamtailorUser } from '..';

const Box = styled('div')({
  display: 'flex',
  margin: 20,
  backgroundColor: 'white',
  borderRadius: 5,
  boxShadow: '-1px 0 10px rgba(0,0,0,0.14)',
  overflow: 'hidden',
});

interface DesktopProps {
  teamtailorUsers: Array<TeamtailorUser>;
}

interface State {
  selectedImage: string;
  users: Array<TeamtailorUser>;
}

interface Actions {
  setSelectedImage: (selectedImage: string) => void;
}

const actions: ActionMap<State, Actions> = {
  setSelectedImage: (selectedImage) => ({ selectedImage }),
};

export const Desktop: React.SFC<DesktopProps> = ({ teamtailorUsers }) => (
  <Container
    actions={actions}
    initialState={
      {
        selectedImage: teamtailorUsers[0].picture.large,
        users: teamtailorUsers.filter((user) => user.picture),
      } as State
    }
  >
    {({ selectedImage, users, setSelectedImage }) => (
      <Box>
        <List
          users={users}
          onSelect={(user) => setSelectedImage(user.picture.large)}
          selectedImage={selectedImage}
        />
        <SelectedImage
          images={users.map((user) => user.picture.large)}
          selectedImage={selectedImage}
        />
      </Box>
    )}
  </Container>
);
