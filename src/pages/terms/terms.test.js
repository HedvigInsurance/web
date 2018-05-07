import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Terms from './index';

describe('<Terms />', () => {
  it('Should render correctly', () => {
    const component = shallow(<Terms />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
