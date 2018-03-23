import React from "react"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"

import Legal from "./index"

describe('<Legal />', () => {
  it('Should render correctly', () => {
    const component = shallow(<Legal />)

    expect(toJson(component)).toMatchSnapshot()
  })
})
