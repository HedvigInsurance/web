import * as React from 'react';
import MediaQuery from 'react-responsive';

import { Desktop } from './desktop';
import { Mobile } from './mobile';

export interface Picture {
  large: string;
}

export interface TeamtailorUser {
  name: string;
  title: string;
  picture: Picture;
}

interface HedvigersProps {
  teamtailorUsers: Array<TeamtailorUser>;
}

export const Hedvigers: React.SFC<HedvigersProps> = ({ teamtailorUsers }) => {
  if (teamtailorUsers.length === 0) {
    return null;
  }

  return (
    <>
      <MediaQuery query="(max-width: 900px)">
        <Mobile teamtailorUsers={teamtailorUsers} />
      </MediaQuery>
      <MediaQuery query="(min-width: 900px)">
        <Desktop teamtailorUsers={teamtailorUsers} />
      </MediaQuery>
    </>
  );
};
