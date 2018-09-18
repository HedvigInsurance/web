import { mount } from 'enzyme'
import * as React from 'react'

import { Mobile } from './'

interface Global {
  innerWidth: number
  innterHeight: number
}

declare var global: Global

it('renders correctly', () => {
  const teamtailorUsers = [
    {
      name: 'mock',
      title: 'mock',
      picture: {
        large: 'https://mockimage.com',
      },
    },
  ]

  global.innerWidth = 600

  const wrapper = mount(
    <Mobile title="mock title" teamtailorUsers={teamtailorUsers} />,
  )
  expect(wrapper).toMatchSnapshot()
})
