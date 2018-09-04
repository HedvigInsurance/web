import * as React from 'react';
import renderer from 'react-test-renderer';

import { Mobile } from './';

interface Global {
  innerWidth: number;
  innterHeight: number;
}

declare var global: Global;

const createNodeMock = () => ({
  addEventListener: () => {},
});

it('renders correctly', () => {
  const teamtailorUsers = [
    {
      name: 'mock',
      title: 'mock',
      picture: {
        large: 'https://mockimage.com',
      },
    },
  ];

  global.innerWidth = 600;

  const tree = renderer
    .create(<Mobile teamtailorUsers={teamtailorUsers} />, { createNodeMock })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
