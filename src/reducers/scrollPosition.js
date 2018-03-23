import { SCROLL_Y_POSITION } from "../actions/scroll"

const reducer = (
  state = {
    scrollY: 0
  },
  action
) => {
  switch (action.type) {
    case SCROLL_Y_POSITION:
      return Object.assign({}, state, { scrollY: action.payload })
    default:
      return state
  }
}

export default reducer
