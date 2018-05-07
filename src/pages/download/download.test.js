import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Download from './index';

describe('<Download />', () => {
  it('Should render correctly', () => {
    const component = shallow(<Download />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
