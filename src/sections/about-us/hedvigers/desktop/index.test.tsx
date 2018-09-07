import * as React from 'react';
import { mount } from 'enzyme';
import { it, expect } from 'jest';

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

  const wrapper = mount(<Desktop teamtailorUsers={teamtailorUsers} />);
  expect(wrapper).toMatchSnapshot();
});
