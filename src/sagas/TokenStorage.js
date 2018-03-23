import { takeEvery, call } from "redux-saga/effects"
import * as TokenStorage from "../services/TokenStorage"
import { types } from "hedvig-redux"

const tokenStorageHandler = function*(action) {
  console.log("Going to save token...")
  yield call(TokenStorage.saveToken, action.payload)
}

const tokenStorageSaga = function*() {
  yield takeEvery(types.RECEIVED_TOKEN, tokenStorageHandler)
}

export { tokenStorageSaga }
