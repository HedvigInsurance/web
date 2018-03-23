import { types } from "hedvig-redux"

const TOKEN_KEY = "@hedvig:token"

export function loadToken() {
  try {
    const value = window.localStorage.getItem(TOKEN_KEY)
    console.log("Loaded token from LocalStorage:", value)
    return value
  } catch (error) {
    console.warn("Error loading token", error)
  }
}

export function saveToken(token) {
  try {
    window.localStorage.setItem(TOKEN_KEY, token)
    console.log("Saved token to LocalStorage")
  } catch (error) {
    console.warn("Error saving token", error)
  }
}

export function getOrLoadToken(dispatch) {
  let token = loadToken()
  if (token) {
    dispatch({
      type: types.VALIDATE_TOKEN,
      payload: token
    })
  } else {
    dispatch({
      type: types.AUTHENTICATE,
      payload: {}
    })
  }
}
