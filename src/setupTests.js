import Enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import jsdom from "jsdom"

Enzyme.configure({ adapter: new Adapter() })
global.document = jsdom.jsdom("<html><body></body></html>")
