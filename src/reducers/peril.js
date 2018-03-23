import { PERIL_SELECTED } from "../actions/peril"

const reducer = (
  state = {
    selectedPerilIndex: null,
    selectedCategory: null
  },
  action
) => {
  switch (action.type) {
    case PERIL_SELECTED:
      return Object.assign({}, state, {
        selectedCategory: action.payload.category,
        selectedPerilIndex: action.payload.category
          ? action.payload.category.perils.indexOf(action.payload.peril)
          : null
      })
    default:
      return state
  }
}

export default reducer
