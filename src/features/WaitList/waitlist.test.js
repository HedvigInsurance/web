import React from "react"
import { mount, shallow } from "enzyme"
import ReactRouterEnzymeContext from "react-router-enzyme-context"
import toJson from "enzyme-to-json"

import { WaitListComponent as WaitList } from "./index"

const NOOP = () => {}

const defaultProps = {
  match: {
    params: {
      id: "test-uuid"
    }
  },
  fetchWaitlistPosition: NOOP,
  toggleCopyStatus: NOOP,
}


describe('<WaitList />', () => {
  it('Should fetch waitlist position when mounting', () => {
    const options = new ReactRouterEnzymeContext()
    const spy = jest.fn()
    mount(
      <WaitList
        {...defaultProps}
        fetchWaitlistPosition={spy}
      />,
      options.get()
    )

    expect(spy).toHaveBeenCalledTimes(1)
  })

  it('Should render correctly in status WAITLIST', () => {
    const component = shallow(
      <WaitList
        {...defaultProps}
        status="WAITLIST"
        position={1}
      />
    )

    expect(toJson(component)).toMatchSnapshot()
  })

  it('Should render correctly in status ACCESS', () => {
    const component = shallow(
      <WaitList
        {...defaultProps}
        status="ACCESS"
        code="APPLE123"
      />
    )

    expect(toJson(component)).toMatchSnapshot()
  })

  it('Should render correctly in status NOT_FOUND', () => {
    const component = shallow(
      <WaitList
        {...defaultProps}
        status="NOT_FOUND"
      />
    )

    expect(toJson(component)).toMatchSnapshot()
  })
})
