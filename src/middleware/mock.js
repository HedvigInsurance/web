const MOCK_INSURANCE_PAYLOAD = require("./mockInsurance.json")
const MOCK_USER_PAYLOAD = require("./mockProfile.json")

const mockMiddleware = ({ dispatch }) => next => action => {
  if (action.type === "LOADED_INSURANCE" && !action.payload._mock) {
    dispatch({ type: "LOADED_INSURANCE", payload: MOCK_INSURANCE_PAYLOAD })
  } else if (action.type === "LOADED_USER" && !action.payload._mock) {
    dispatch({ type: "LOADED_USER", payload: MOCK_USER_PAYLOAD })
  } else {
    return next(action)
  }
}

export default mockMiddleware
