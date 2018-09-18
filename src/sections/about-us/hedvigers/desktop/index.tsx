import { ActionMap, Container } from 'constate'
import * as React from 'react'
import styled from 'react-emotion'

import { TeamtailorUser } from '..'
import { List } from './list'
import { SelectedUser } from './selected-user'

const Background = styled('div')({
  backgroundColor: '#F9FAFC',
})

const CenterAlign = styled('div')({
  maxWidth: '80%',
  margin: '0 auto',
  padding: '70px 0',
})

const Box = styled('div')({
  display: 'flex',
  backgroundColor: 'white',
  borderRadius: 5,
  boxShadow: '-1px 0 10px rgba(0,0,0,0.14)',
  overflow: 'hidden',
})

interface DesktopProps {
  teamtailorUsers: TeamtailorUser[]
  title: string
}

interface State {
  selectedUser: TeamtailorUser
  users: TeamtailorUser[]
}

interface Actions {
  setSelectedUser: (selectedUser: TeamtailorUser) => void
}

const actions: ActionMap<State, Actions> = {
  setSelectedUser: (selectedUser) => ({
    selectedUser,
  }),
}

export const Desktop: React.SFC<DesktopProps> = ({
  title,
  teamtailorUsers,
}) => (
  <Background>
    <Container
      actions={actions}
      initialState={{
        selectedUser: teamtailorUsers[0],
        users: teamtailorUsers.filter((user) => user.picture),
      }}
    >
      {({ selectedUser, users, setSelectedUser }) => (
        <CenterAlign>
          <Box>
            <List
              title={title}
              users={users}
              onSelect={setSelectedUser}
              selectedUser={selectedUser}
            />
            <SelectedUser users={users} selectedUser={selectedUser} />
          </Box>
        </CenterAlign>
      )}
    </Container>
  </Background>
)
