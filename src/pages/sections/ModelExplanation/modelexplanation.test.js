import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ModelExplanation from './index';

describe('<ModelExplanation />', () => {
  it('Should render correctly', () => {
    const component = shallow(<ModelExplanation />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
