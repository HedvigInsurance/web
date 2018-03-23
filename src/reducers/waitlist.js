export default (state = { status: "LOADING" }, action) => {
  switch (action.type) {
    case "WAITLIST/RETRIEVED_WAITLIST_STATUS":
      return {
        ...state,
        ...action.payload
      }
    case "WAITLIST/TOGGLE_COPY_STATUS":
      return {
        ...state,
        copyClicked: true,
      }
    default:
      return state
  }
}
