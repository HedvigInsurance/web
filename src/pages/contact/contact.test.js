import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Contact from './index';

describe('<Contact />', () => {
  it('Should render correctly', () => {
    const component = shallow(<Contact />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
