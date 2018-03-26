import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import AboutUs from './index';

describe('<AboutUs />', () => {
  it('Should render correctly', () => {
    const component = shallow(<AboutUs />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
