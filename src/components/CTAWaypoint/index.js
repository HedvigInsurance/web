import React from 'react';
import VisibiliySensor from 'react-visibility-sensor';
import { Container } from 'constate';

const actions = {
  setCTAWaypointReached: (newValue) => () => ({ CTAWaypointReached: newValue }),
};

export const CTAWaypoint = ({ children }) => (
  <Container actions={actions} context="CTAWaypoint">
    {({ setCTAWaypointReached }) => (
      <VisibiliySensor
        scrollCheck
        onChange={(isVisible) => setCTAWaypointReached(!isVisible)}
      >
        {children}
      </VisibiliySensor>
    )}
  </Container>
);
