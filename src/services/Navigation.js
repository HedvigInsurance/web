import { push } from "react-router-redux"

export function navigateTo(dispatch, path) {
  dispatch(push(path))
}
