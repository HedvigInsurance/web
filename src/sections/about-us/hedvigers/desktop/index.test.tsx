import * as React from 'react';
import renderer from 'react-test-renderer';

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

    const tree = renderer
        .create(<Desktop teamtailorUsers={teamtailorUsers} />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});
