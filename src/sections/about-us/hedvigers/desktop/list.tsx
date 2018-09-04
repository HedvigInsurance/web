import * as React from 'react';
import styled from 'react-emotion';
import { colors } from '@hedviginsurance/brand';

import { TeamtailorUser } from '..';

interface ListProps {
  users: Array<TeamtailorUser>;
  onSelect: (user: TeamtailorUser) => void;
  selectedImage: string;
}

const Container = styled('div')({
  padding: 30,
  width: '50%',
});

const Title = styled('h3')({
  fontSize: 40,
  fontFamily: 'So Ray',
  marginTop: 20,
  marginBottom: 20,
});

const ListContainer = styled('ul')({
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: 20,
  justifyContent: 'center',
});

interface ListItemProps {
  active: boolean;
}

const ListItem = styled('li')(
  {
    flexGrow: 1,
    width: '50%',
    height: 100,
    cursor: 'pointer',
    transition: 'color 500ms',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
  },
  ({ active }: ListItemProps) => ({
    color: active ? colors.PURPLE : colors.BLACK,
  }),
);

const ListName = styled('span')({
  fontWeight: 800,
});

const ListTitle = styled('span')({
  marginTop: 5,
  fontSize: 15,
});

export const List: React.SFC<ListProps> = ({
  users,
  selectedImage,
  onSelect,
}) => (
    <Container>
      <Title>Hedvigers</Title>
      <ListContainer>
        {users.map((user) => (
          <ListItem
            active={user.picture.large === selectedImage}
            onClick={() => onSelect(user)}
          >
            <ListName>{user.name}</ListName>
            <ListTitle>{user.title}</ListTitle>
          </ListItem>
        ))}
      </ListContainer>
    </Container>
  );
