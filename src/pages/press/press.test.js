import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Press from './index';

describe('<Press />', () => {
  it('Should render correctly', () => {
    const component = shallow(<Press />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
