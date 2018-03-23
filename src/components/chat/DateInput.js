import React from "react"
import moment from "moment"
import "moment/locale/sv"

import styled from "styled-components"
import "react-dates/initialize"
import { SingleDatePicker } from "react-dates"
import { OPEN_UP } from "react-dates/constants"
import "react-dates/lib/css/_datepicker.css"
import { SendIconButton } from "../Button"

const WidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > * {
    margin-top: 10px;

    &:first-child {
      margin-top: 0;
    }
  }
`

const DatePickerContainer = styled.div`
  font-family: "Circular Std Book" !important;

  .SingleDatePickerInput {
    border: 1px solid ${props => props.theme.colors.darkGray};
    border-radius: 24px;

    .DateInput {
      background-color: transparent;

      input {
        background-color: transparent;
        box-sizing: border-box !important;
        border: 24px;
        text-align: center;
        font-size: 16px;
        line-height: 24px;
        padding: 7px 20px;
      }
    }
  }
`

class DateInput extends React.Component {
  constructor() {
    super()
    this.state = {
      focused: false
    }
  }

  dateChange(date) {
    this.props.onChange(this.props.message, date.toISOString())
  }

  render() {
    let { message, send } = this.props
    return (
      <WidgetContainer>
        <DatePickerContainer>
          <SingleDatePicker
            date={
              message._inputValue === undefined
                ? moment(message.body.date)
                : moment(message._inputValue)
            } // momentPropTypes.momentObj or null
            onDateChange={this.dateChange.bind(this)} // PropTypes.func.isRequired
            focused={this.state.focused} // PropTypes.bool
            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
            numberOfMonths={1}
            isOutsideRange={() => false}
            openDirection={OPEN_UP}
            style={{ boxSizing: "border-box !important" }}
            readOnly={true}
            hideKeyboardShortcutsPanel={true}
          />
        </DatePickerContainer>
        <SendIconButton onClick={() => send(message)} />
      </WidgetContainer>
    )
  }
}

export default DateInput
