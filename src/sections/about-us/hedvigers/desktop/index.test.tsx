import * as React from 'react';
import { mount } from 'enzyme';
import 'jest';

import { Desktop } from './';

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

  const wrapper = mount(
    <Desktop title="mock title" teamtailorUsers={teamtailorUsers} />,
  );
  expect(wrapper).toMatchSnapshot();
});
