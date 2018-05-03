import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import GivingBack from './index';

describe('<GivingBack />', () => {
  it('Should render correctly', () => {
    const component = shallow(<GivingBack />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
