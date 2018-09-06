import * as React from 'react';
import styled from 'react-emotion';
import { colors } from '@hedviginsurance/brand';

import { TeamtailorUser } from '..';

interface ListProps {
  users: Array<TeamtailorUser>;
  onSelect: (user: TeamtailorUser) => void;
  selectedUser: TeamtailorUser;
}

const Container = styled('div')({
  padding: 30,
  width: '50%',
});

const Title = styled('h3')({
  fontSize: 40,
  fontFamily: 'SoRay',
  marginTop: 20,
  marginBottom: 30,
});

const ListContainer = styled('ul')({
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: 10,
  justifyContent: 'space-between',
});

interface ListItemProps {
  active: boolean;
}

const ListItem = styled('li')(
  {
    flexGrow: 0,
    width: '48%',
    maxWidth: '48%',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
    boxShadow: '-1px 0 10px rgba(0,0,0,0.09)',
    border: '1px solid rgba(0,0,0,0.10)',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    textAlign: 'center',
    willChange: 'color, transform, background',
    ':active': {
      transform: 'scale(0.95)',
    },
    '@media(min-width: 1150px)': {
      width: '32.33%',
      maxWidth: '32.33%',
    },
  },
  ({ active }: ListItemProps) => ({
    color: active ? colors.WHITE : colors.BLACK,
    backgroundColor: active ? colors.PURPLE : colors.WHITE,
    transition: active
      ? 'color 500ms, transform 350ms 150ms, background 350ms'
      : 'color 500ms, transform 150ms, background 350ms',
  }),
);

const ListName = styled('span')({
  fontWeight: 800,
  fontSize: 16,
  lineHeight: '19px',
});

const ListTitle = styled('span')({
  marginTop: 5,
  fontSize: 12,
  maxWidth: '90%',
  lineHeight: '17px',
});

export const List: React.SFC<ListProps> = ({
  users,
  selectedUser,
  onSelect,
}) => (
  <Container>
    <Title>Hedvigers</Title>
    <ListContainer>
      {users.map((user) => (
        <ListItem
          key={user.name}
          active={user === selectedUser}
          onClick={() => onSelect(user)}
        >
          <ListName>{user.name}</ListName>
          <ListTitle>{user.title}</ListTitle>
        </ListItem>
      ))}
    </ListContainer>
  </Container>
);
