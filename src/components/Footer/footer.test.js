import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from './index';

describe('<Footer />', () => {
  it('Should render correctly', () => {
    const component = shallow(<Footer />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
