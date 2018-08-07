import React from 'react';
import Waypoint from 'react-waypoint';
import { Container } from 'constate';

const actions = {
  setCTAWaypointReached: (newValue) => () => ({ CTAWaypointReached: newValue }),
};

export const CTAWaypoint = ({ children }) => (
  <Container actions={actions} context="CTAWaypoint">
    {({ setCTAWaypointReached }) => (
      <Waypoint
        onEnter={() => setCTAWaypointReached(false)}
        onLeave={() => setCTAWaypointReached(true)}
      >
        {children}
      </Waypoint>
    )}
  </Container>
);
