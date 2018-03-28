import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jsdom from 'jsdom';

Enzyme.configure({ adapter: new Adapter() });

const { JSDOM } = jsdom;
const { document } = new JSDOM('<!doctype html><html><body></body></html>').window;
global.document = document;
global.window = document.defaultView;
