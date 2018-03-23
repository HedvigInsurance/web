import { types } from "hedvig-redux"
import { takeEvery, put } from "redux-saga/effects"
import { delay } from "redux-saga"
import { push } from "react-router-redux"

const handleLogout = function*(action) {
  // Delete session from backend, then create a new one
  yield put({
    type: types.API,
    payload: {
      method: "POST",
      url: "/logout",
      body: null,
      SUCCESS: "LOGOUT_REQUESTED"
    }
  })

  // Delete existing token from frontend
  yield put({ type: types.DELETE_TOKEN, payload: {} })

  // Switch to the chat
  yield put(push("/chat"))

  // Make sure we're fully logged out
  yield delay(200)
  window.location.reload()
}

const logoutSaga = function*() {
  yield takeEvery(types.LOGOUT, handleLogout)
}

export { logoutSaga }
