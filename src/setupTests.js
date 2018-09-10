import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jsdom from 'jsdom';
import Node from 'jsdom/lib/jsdom/living/node-document-position';

Enzyme.configure({ adapter: new Adapter() });

const whitelist = ['HTMLElement', 'Performance'];
const blacklist = ['sessionStorage', 'localStorage'];

const createDOM = () => {
  const dom = new jsdom.JSDOM('', { pretendToBeVisual: true });
  global.window = dom.window;
  global.Node = Node;
  global.document = dom.window.document;

  Object.keys(dom.window)
    .filter((key) => !blacklist.includes(key))
    .concat(whitelist)
    .forEach((key) => {
      if (typeof global[key] === 'undefined') {
        global[key] = dom.window[key];
      }
    });
};

createDOM();

jest.mock('react-responsive', () => {
  // eslint-disable-next-line global-require
  const React = require('react');
  const MediaQuery = require.requireActual('react-responsive').default;

  // eslint-disable-next-line react/prop-types
  const MockMediaQuery = ({ values, ...rest }) => {
    const defaultWidth = global.window.innerWidth;
    const defaultHeight = global.window.innerHeight;
    return React.createElement(MediaQuery, {
      ...rest,
      values: { ...values, width: defaultWidth, height: defaultHeight },
    });
  };

  return MockMediaQuery;
});
