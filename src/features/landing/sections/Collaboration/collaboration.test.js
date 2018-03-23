import React from "react"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"
import Collaboration from "./index"

describe('<Collaboration />',  () => {
  it('Should render correctly', () => {
    const component = shallow(<Collaboration />)

    expect(toJson(component)).toMatchSnapshot()
  })
})
