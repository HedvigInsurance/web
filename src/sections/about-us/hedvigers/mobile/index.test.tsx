import * as React from 'react';
import { mount } from 'enzyme';
import 'jest';

import { Mobile } from './';

interface Global {
  innerWidth: number;
  innterHeight: number;
}

declare var global: Global;

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

  const wrapper = mount(<Mobile teamtailorUsers={teamtailorUsers} />);
  expect(wrapper).toMatchSnapshot();
});
