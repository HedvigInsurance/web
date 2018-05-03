import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import FAQ from './index';

describe('<FAQ />', () => {
  it('Should render correctly', () => {
    const component = shallow(<FAQ />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
