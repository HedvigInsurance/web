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
  title: string;
}

export const Hedvigers: React.SFC<HedvigersProps> = ({
  title,
  teamtailorUsers,
}) => (
  <>
    <MediaQuery query="(max-width: 900px)">
      <Mobile title={title} teamtailorUsers={teamtailorUsers} />
    </MediaQuery>
    <MediaQuery query="(min-width: 900px)">
      <Desktop title={title} teamtailorUsers={teamtailorUsers} />
    </MediaQuery>
  </>
);
