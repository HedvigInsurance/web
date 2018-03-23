
export default (state = {visible: false}, action) => {
  switch (action.type) {
      case "LANDING/CTA_VISIBILITY_CHANGED":
        return {
            ...state,
            visible: action.payload.status
        }

      default:
          return state;
  }
}
