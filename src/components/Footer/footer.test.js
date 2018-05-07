import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from './index';

describe('<Footer />', () => {
  it('Should render correctly with app store downloads', () => {
    const component = shallow(<Footer />, {
      context: {
        location: {
          pathname: '/',
        },
      },
    });

    expect(toJson(component)).toMatchSnapshot();
    expect(component.find('#cta-footer-download-apple-store')).toHaveLength(1);
  });

  it('Should hide app store badges when on /download page', () => {
    const component = shallow(<Footer />, {
      context: {
        location: {
          pathname: '/download',
        },
      },
    });

    expect(toJson(component)).toMatchSnapshot();
    expect(component.find('#cta-footer-download-apple-store')).toHaveLength(0);
  });
});
